(function () {
  const projectId = 'fho-family-health-manager';
  let notes = [], pageId = 'dashboard', visible = false, collapsed = false;
  const ui = document.createElement('div');
  ui.dataset.uiNoteUi = '';
  ui.innerHTML = `<div class="note-toolbar" data-ui-note-ui><button class="note-collapse" type="button" aria-label="收起批注工具">−</button><div class="note-tools"><button class="note-add" type="button" disabled title="在线预览为只读模式">添加批注</button><button class="note-toggle" type="button">显示批注</button><button class="note-summary-button" type="button">批注汇总</button><span class="note-count">当前界面 0 条</span></div></div><div class="note-layer" data-ui-note-ui></div><aside class="note-drawer" data-ui-note-ui aria-hidden="true"></aside><div class="note-summary" data-ui-note-ui aria-hidden="true"></div>`;
  document.body.appendChild(ui);
  const toolbar = ui.querySelector('.note-toolbar'), layer = ui.querySelector('.note-layer'), drawer = ui.querySelector('.note-drawer'), summary = ui.querySelector('.note-summary'), toggle = ui.querySelector('.note-toggle'), count = ui.querySelector('.note-count');
  const escapeHtml = value => String(value || '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const formatText = value => escapeHtml(value).replace(/\n/g, '<br>');
  const currentNotes = () => notes.filter(note => note.projectId === projectId && note.pageId === pageId && note.status !== 'deleted');
  function render() {
    const pageNotes = currentNotes();
    count.textContent = `当前界面 ${pageNotes.length} 条`;
    toggle.textContent = visible ? '隐藏批注' : '显示批注';
    layer.classList.toggle('visible', visible);
    layer.innerHTML = pageNotes.map(note => `<button class="note-point" type="button" data-note-id="${escapeHtml(note.noteId)}" style="left:${note.x * 100}%;top:${note.y * (note.targetSnapshot?.annotationSurfaceHeight || 1200)}px" aria-label="批注 ${note.noteNumber}：${escapeHtml(note.title)}">${note.noteNumber}</button>`).join('');
  }
  function closePanel(panel) { if (!panel) return; panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true'); }
  function openNote(noteId) {
    const note = notes.find(item => item.noteId === noteId); if (!note) return;
    drawer.innerHTML = `<div class="note-panel-head"><div><small>批注 ${note.noteNumber}</small><h2>${escapeHtml(note.title)}</h2></div><button class="note-close" type="button" aria-label="关闭">×</button></div><div class="note-readonly">在线预览 · 只读备注</div><section><h3>逻辑补充</h3><div class="note-copy">${formatText(note.content)}</div></section><section><h3>交互逻辑补充</h3><div class="note-copy">${formatText(note.targetSnapshot?.interactionContent)}</div></section><dl><dt>所属界面</dt><dd>${note.pageId === 'dashboard' ? '工作台' : '获客管理'}</dd><dt>关联区域</dt><dd>${escapeHtml(note.targetSnapshot?.section)}</dd></dl>`;
    drawer.classList.add('open'); drawer.setAttribute('aria-hidden', 'false');
  }
  function openSummary() {
    const groups = ['dashboard', 'acquisition'].map(id => ({id, items: notes.filter(note => note.pageId === id && note.status !== 'deleted')}));
    summary.innerHTML = `<div class="note-panel-head"><div><small>项目全部备注</small><h2>批注汇总</h2></div><button class="note-close" type="button" aria-label="关闭">×</button></div>${groups.map(group => `<section class="note-summary-group"><h3>${group.id === 'dashboard' ? '工作台' : '获客管理'}${group.id === pageId ? '<em>当前界面</em>' : ''}</h3>${group.items.map(note => `<button type="button" data-note-id="${escapeHtml(note.noteId)}"><b>${note.noteNumber}</b><span><strong>${escapeHtml(note.title)}</strong><small>${escapeHtml(note.content.split('\n')[0])}</small></span></button>`).join('')}</section>`).join('')}`;
    summary.classList.add('open'); summary.setAttribute('aria-hidden', 'false');
  }
  function setPage(nextPage) { pageId = nextPage; visible = false; closePanel(drawer); closePanel(summary); render(); }
  toggle.addEventListener('click', () => { visible = !visible; render(); });
  ui.querySelector('.note-summary-button').addEventListener('click', openSummary);
  ui.querySelector('.note-collapse').addEventListener('click', event => { collapsed = !collapsed; toolbar.classList.toggle('collapsed', collapsed); event.currentTarget.textContent = collapsed ? '批注' : '−'; });
  ui.addEventListener('click', event => { const item = event.target.closest('[data-note-id]'); if (item) { openNote(item.dataset.noteId); closePanel(summary); } if (event.target.closest('.note-close')) closePanel(event.target.closest('.note-drawer, .note-summary')); });
  document.querySelectorAll('[data-view]').forEach(item => item.addEventListener('click', () => setPage(item.dataset.view)));
  fetch('./annotations.json?v=20261113').then(response => response.ok ? response.json() : Promise.reject()).then(data => { notes = Array.isArray(data) ? data : []; render(); }).catch(() => { count.textContent = '批注加载失败'; });
})();

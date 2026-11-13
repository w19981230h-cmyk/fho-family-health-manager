const leads=[
 {name:'陈女士',source:'FHO二维码',owner:'陈老师',service:'综合健康检测',status:'待联系'},
 {name:'王先生',source:'老客户推荐',owner:'张老师',service:'长期健康管理',status:'跟进中'},
 {name:'刘女士',source:'线下活动',owner:'李老师',service:'健康评估',status:'已成交'},
 {name:'赵先生',source:'合作渠道',owner:'陈老师',service:'健康检测',status:'跟进中'},
 {name:'黄女士',source:'FHO二维码',owner:'张老师',service:'长期健康管理',status:'待联系'},
 {name:'孙先生',source:'老客户推荐',owner:'李老师',service:'健康评估',status:'已关闭'}
];
const shell=document.querySelector('#appShell');
const toast=document.querySelector('#toast');
const backdrop=document.querySelector('#modalBackdrop');
const modalContent=document.querySelector('#modalContent');
const rows=document.querySelector('#leadRows');
const search=document.querySelector('#searchInput');
const resultCount=document.querySelector('#resultCount');
const empty=document.querySelector('#emptyState');
let activeStatus='全部',toastTimer;

function showToast(message){clearTimeout(toastTimer);toast.textContent=message;toast.classList.add('show');toastTimer=setTimeout(()=>toast.classList.remove('show'),1800)}
function switchView(view){
 document.querySelectorAll('.page-view').forEach(v=>v.classList.toggle('active',v.id===`${view}View`));
 document.querySelectorAll('[data-view]').forEach(n=>n.classList.toggle('active',n.dataset.view===view));
 document.title=view==='acquisition'?'获客管理 · 家庭健康管理师':'家庭健康管理师 · 工作台';
 window.scrollTo({top:0,behavior:'smooth'});
}
function renderLeads(){
 const keyword=search.value.trim().toLowerCase();
 const filtered=leads.filter(item=>(activeStatus==='全部'||item.status===activeStatus)&&(!keyword||`${item.name}${item.service}`.toLowerCase().includes(keyword)));
 rows.innerHTML=filtered.map(item=>`<tr><td>${item.name}</td><td>${item.source}</td><td>${item.owner}</td><td>${item.service}</td><td><span class="status">${item.status}</span></td><td><button class="follow-btn" data-toast="已打开${item.name}的跟进记录">跟进</button></td></tr>`).join('');
 resultCount.textContent=`共 ${filtered.length} 条演示线索`;empty.hidden=filtered.length>0;
}
function openModal(content){modalContent.innerHTML=content;backdrop.hidden=false}
function closeModal(){backdrop.hidden=true}

document.querySelectorAll('[data-view]').forEach(item=>item.addEventListener('click',()=>switchView(item.dataset.view)));
document.querySelector('#customerNav').addEventListener('click',()=>document.querySelector('.nav-group').classList.toggle('open'));
document.querySelector('#collapseButton').addEventListener('click',()=>shell.classList.toggle('collapsed'));
document.querySelectorAll('[data-status]').forEach(tab=>tab.addEventListener('click',()=>{activeStatus=tab.dataset.status;document.querySelectorAll('[data-status]').forEach(t=>t.classList.toggle('active',t===tab));renderLeads()}));
search.addEventListener('input',renderLeads);
document.querySelector('#channelSelect').addEventListener('change',event=>document.querySelectorAll('[data-channel]').forEach(card=>card.hidden=event.target.value!=='全部可见渠道'&&card.dataset.channel!==event.target.value));
document.addEventListener('click',event=>{
 const toastButton=event.target.closest('[data-toast]');if(toastButton)showToast(toastButton.dataset.toast);
 if(event.target.closest('[data-action="qr"]'))openModal('<h2>我的获客码</h2><p class="modal-copy">客户扫码后即可进入专属咨询入口，线索将自动归属到你的名下。</p><div class="fake-qr"></div><p class="modal-copy" style="text-align:center">视觉演示二维码</p>');
});
document.querySelector('#manualLead').addEventListener('click',()=>openModal('<h2>手动登记线索</h2><p class="modal-copy">补充客户的基本信息和服务意向。</p><form class="modal-form" id="leadForm"><input name="name" required placeholder="客户姓名"><input name="service" required placeholder="意向服务"><select name="source"><option>手动登记</option><option>老客户推荐</option><option>线下活动</option><option>合作渠道</option></select><button class="primary-btn" type="submit">登记线索</button></form>'));
document.querySelector('#modalClose').addEventListener('click',closeModal);backdrop.addEventListener('click',event=>{if(event.target===backdrop)closeModal()});document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal()});
document.addEventListener('submit',event=>{if(event.target.id!=='leadForm')return;event.preventDefault();const data=new FormData(event.target);leads.unshift({name:data.get('name'),source:data.get('source'),owner:'张老师',service:data.get('service'),status:'待联系'});activeStatus='全部';document.querySelectorAll('[data-status]').forEach(t=>t.classList.toggle('active',t.dataset.status==='全部'));search.value='';renderLeads();closeModal();showToast('线索已登记')});
renderLeads();

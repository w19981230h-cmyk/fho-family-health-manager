const leads = [
  { name: '张慧敏', gender: '女', age: 46, source: '微信分享', opportunity: '血压偏高，希望建立长期慢病管理计划', status: '待跟进' },
  { name: '李建国', gender: '男', age: 58, source: '服务包推广', opportunity: '糖尿病前期，需要饮食与血糖管理', status: '待生效' },
  { name: '王丽华', gender: '女', age: 52, source: '机构推广', opportunity: '体检发现甲状腺结节，需要复查提醒', status: '已纳管' },
  { name: '陈志强', gender: '男', age: 63, source: '老客户转介绍', opportunity: '冠心病术后，关注用药与康复随访', status: '待跟进' },
  { name: '刘芳', gender: '女', age: 39, source: '线下健康讲座', opportunity: '长期失眠，希望获得睡眠改善方案', status: '待跟进' },
  { name: '赵明远', gender: '男', age: 45, source: 'FHO机构二维码', opportunity: '脂肪肝伴超重，需要体重管理', status: '已纳管' },
  { name: '周秀兰', gender: '女', age: 67, source: '社区义诊', opportunity: '骨质疏松风险，需要运动与营养指导', status: '待生效' },
  { name: '孙浩然', gender: '男', age: 34, source: '健康检测服务包', opportunity: '尿酸偏高，希望预防痛风发作', status: '待跟进' },
  { name: '黄美玲', gender: '女', age: 55, source: '企业健康活动', opportunity: '更年期综合管理与情绪支持需求', status: '已纳管' },
  { name: '吴国平', gender: '男', age: 61, source: '医生推荐', opportunity: '慢阻肺稳定期，需要呼吸康复随访', status: '已纳管' },
  { name: '郑晓梅', gender: '女', age: 42, source: '朋友圈海报', opportunity: '乳腺结节随访及年度健康管理', status: '待生效' },
  { name: '何俊杰', gender: '男', age: 29, source: '小程序咨询', opportunity: '久坐伴颈肩疼痛，需要运动干预', status: '待跟进' },
];

const customers = [
  { name: '张女士', phone: '138****8920', age: 56, relationship: '本人', stage: '潜在客户', source: '微信分享', fho: '二级FHO-A1', service: '综合健康检测咨询', serviceStatus: '未购买', activity: '11-16 提交服务咨询', next: '待首次联系', nextDate: '11-19 10:00' },
  { name: '李先生', phone: '136****6688', age: 62, relationship: '配偶', stage: '待生效', source: '服务包推广', fho: '二级FHO-A2', service: '慢性肾脏病健康管理', serviceStatus: '待生效', activity: '11-15 已购买服务包', next: '提醒激活', nextDate: '11-19 14:30' },
  { name: '王女士', phone: '138****6920', age: 49, relationship: '母女', stage: '在管客户', source: '客户推荐', fho: '二级FHO-A1', service: '高血压健康管理（3个月）', serviceStatus: '服务中', activity: '11-14 完成健康评估', next: '健康随访', nextDate: '11-20 09:30' },
  { name: '陈先生', phone: '138****8920', age: 58, relationship: '父子', stage: '在管客户', source: '机构推广', fho: '二级FHO-A2', service: '2型糖尿病健康管理（6个月）', serviceStatus: '服务中', activity: '11-13 完成月度随访', next: '方案评估', nextDate: '11-20 15:00' },
  { name: '刘先生', phone: '137****6655', age: 60, relationship: '兄弟', stage: '在管客户', source: 'FHO二维码', fho: '二级FHO-A1', service: '综合健康管理（3个月）', serviceStatus: '服务中', activity: '11-10 更新服务记录', next: '上传随访记录', nextDate: '11-21 12:00' },
  { name: '赵女士', phone: '139****7788', age: 52, relationship: '本人', stage: '潜在客户', source: '线下活动', fho: '二级FHO-A2', service: '健康体重管理咨询', serviceStatus: '未购买', activity: '11-14 现场咨询登记', next: '咨询跟进', nextDate: '11-21 16:00' },
  { name: '孙先生', phone: '135****6609', age: 48, relationship: '配偶', stage: '历史客户', source: '服务包推广', fho: '二级FHO-A1', service: '慢性肾脏病健康管理（3个月）', serviceStatus: '已结束', activity: '10-30 服务包到期', next: '了解续费意向', nextDate: '11-22 10:30' },
  { name: '周女士', phone: '137****9988', age: 67, relationship: '母亲', stage: '历史客户', source: '客户推荐', fho: '二级FHO-A1', service: '高血压健康管理（6个月）', serviceStatus: '已结束', activity: '09-28 管理服务结束', next: '定期回访', nextDate: '11-22 15:30' },
  { name: '吴先生', phone: '139****3056', age: 45, relationship: '本人', stage: '潜在客户', source: '机构推广', fho: '二级FHO-A2', service: '睡眠健康管理咨询', serviceStatus: '未购买', activity: '11-12 完成需求沟通', next: '待首次联系', nextDate: '11-23 09:00' },
  { name: '郑女士', phone: '136****5217', age: 54, relationship: '姐妹', stage: '在管客户', source: '微信分享', fho: '二级FHO-A1', service: '女性健康管理（6个月）', serviceStatus: '服务中', activity: '11-11 查看健康报告', next: '健康随访', nextDate: '11-23 14:00' },
];

const customerDisplayMeta = {
  张女士: { visitNo: '9947708', idCard: '3301**********1528', followTag: '待跟进', relationCount: 3, teamName: '家庭健康管理一组', markStatus: '已标记' },
  李先生: { visitNo: '9947712', idCard: '', followTag: '跟进中', relationCount: 2, teamName: '慢病管理团队', markStatus: '已标记' },
  王女士: { visitNo: '9947726', idCard: '3302**********2046', followTag: '高意向', relationCount: 4, teamName: '家庭健康管理一组', markStatus: '已标记' },
  陈先生: { visitNo: '9947731', idCard: '4401**********3812', followTag: '重点关注', relationCount: 2, teamName: '糖尿病管理团队', markStatus: '已标记' },
  刘先生: { visitNo: '9947745', idCard: '', followTag: '暂无意向', relationCount: 1, teamName: '', markStatus: '待标记' },
  赵女士: { visitNo: '9947759', idCard: '3205**********4629', phone: '', followTag: '高意向', relationCount: 5, teamName: '', markStatus: '待标记' },
  孙先生: { visitNo: '9947764', idCard: '3303**********1174', followTag: '待跟进', relationCount: 2, teamName: '慢病管理团队', markStatus: '已标记' },
  周女士: { visitNo: '9947778', idCard: '', phone: '', followTag: '暂无意向', relationCount: 3, teamName: '', markStatus: '待标记' },
  吴先生: { visitNo: '9947783', idCard: '5101**********6033', followTag: '跟进中', relationCount: 0, teamName: '睡眠健康管理组', markStatus: '待标记' },
  郑女士: { visitNo: '9947797', idCard: '', followTag: '重点关注', relationCount: 4, teamName: '女性健康管理组', markStatus: '已标记' },
};
customers.forEach((customer) => Object.assign(customer, customerDisplayMeta[customer.name]));

const dashboardCustomerProfiles = {
  陈女士: { name: '陈女士', phone: '138****1208', age: 45, stage: '重点客户', source: '客户推荐', fho: '二级FHO-A1', service: '家庭年度健康管理', serviceStatus: '咨询中' },
  王先生: { name: '王先生', phone: '136****7536', age: 57, stage: '重点客户', source: '机构推广', fho: '二级FHO-A2', service: '慢病管理与定期随访', serviceStatus: '跟进中' },
  刘女士: { name: '刘女士', phone: '139****2681', age: 42, stage: '重点客户', source: '健康检测', fho: '二级FHO-A1', service: '体检异常健康咨询', serviceStatus: '待评估' },
  赵先生: { name: '赵先生', phone: '137****9052', age: 51, stage: '重点客户', source: '企业健康活动', fho: '二级FHO-A2', service: '企业高管长期健康管理', serviceStatus: '跟进中' },
};

const dashboardLearningContent = {
  待学习: [
    { title: '综合健康检测服务包', tag: '新品课程', tagClass: 'new', level: '必修', meta: '约 12 分钟', detail: '11月11日更新', scene: '客户初次检测', summary: '掌握服务包内容、适用人群与标准交付流程', action: '开始学习' },
    { title: '健康检测服务介绍规范', tag: '服务培训', tagClass: 'training', level: '必修', meta: '约 8 分钟', detail: '11月10日更新', scene: '服务方案沟通', summary: '统一客户介绍口径，清晰传达检测价值与服务边界', action: '开始学习' },
    { title: '专项健康管理权益说明', tag: '权益精讲', tagClass: 'special', level: '进阶', meta: '约 9 分钟', detail: '11月11日更新', scene: '权益答疑', summary: '快速理解专项权益、使用条件及客户常见问题', action: '开始学习' },
    { title: '家庭健康档案质量检查', tag: '实操课程', tagClass: 'new', level: '必修', meta: '约 15 分钟', detail: '11月12日更新', scene: '建档归档', summary: '通过案例识别档案缺项，提升建档完整率与准确度', action: '开始学习' },
    { title: '高血压客户随访要点', tag: '慢病专题', tagClass: 'training', level: '进阶', meta: '约 18 分钟', detail: '11月13日更新', scene: '慢病随访', summary: '掌握血压记录、用药提醒与生活方式指导要点', action: '开始学习' },
  ],
  进行中: [
    { title: '慢病风险评估实操', tag: '进行中', tagClass: 'progressing', level: '进阶', meta: '已学习 64%', detail: '今天 09:20', scene: '风险评估', summary: '结合健康数据完成慢病风险分层与服务建议', action: '继续学习', progress: 64 },
    { title: '家庭健康档案建立', tag: '进行中', tagClass: 'progressing', level: '必修', meta: '已学习 38%', detail: '昨天 16:40', scene: '快速建档', summary: '从基础资料到健康史，完成一份标准家庭健康档案', action: '继续学习', progress: 38 },
    { title: '客户服务沟通标准', tag: '进行中', tagClass: 'progressing', level: '必修', meta: '已学习 82%', detail: '11月16日', scene: '客户沟通', summary: '覆盖首次联系、需求确认和服务异议处理场景', action: '继续学习', progress: 82 },
    { title: '体检报告重点指标解读', tag: '进行中', tagClass: 'progressing', level: '进阶', meta: '已学习 45%', detail: '11月15日', scene: '报告解读', summary: '识别常见异常指标并形成通俗易懂的客户说明', action: '继续学习', progress: 45 },
    { title: '健康管理方案制定', tag: '进行中', tagClass: 'progressing', level: '高级', meta: '已学习 26%', detail: '11月14日', scene: '方案制定', summary: '依据风险等级配置目标、任务与阶段评估节点', action: '继续学习', progress: 26 },
  ],
  已学习: [
    { title: 'FHO服务流程入门', tag: '已完成', tagClass: 'completed', level: '基础', meta: '学习用时 18 分钟', detail: '11月8日完成', scene: '服务全流程', summary: '了解从获客、建档到服务交付的完整工作流程', action: '再次查看', progress: 100 },
    { title: '家庭成员健康画像', tag: '已完成', tagClass: 'completed', level: '进阶', meta: '学习用时 15 分钟', detail: '11月6日完成', scene: '健康画像', summary: '从家庭结构与健康风险维度形成成员健康画像', action: '再次查看', progress: 100 },
    { title: '健康数据与隐私规范', tag: '已完成', tagClass: 'completed', level: '必修', meta: '学习用时 10 分钟', detail: '11月3日完成', scene: '数据安全', summary: '掌握健康数据采集、授权、使用和保密要求', action: '再次查看', progress: 100 },
    { title: '客户分层与标签应用', tag: '已完成', tagClass: 'completed', level: '基础', meta: '学习用时 13 分钟', detail: '10月29日完成', scene: '客户运营', summary: '使用客户标签识别优先级，安排差异化跟进动作', action: '再次查看', progress: 100 },
    { title: '服务异常处理规范', tag: '已完成', tagClass: 'completed', level: '进阶', meta: '学习用时 16 分钟', detail: '10月25日完成', scene: '异常处理', summary: '规范处理客户投诉、服务中断与健康风险升级', action: '再次查看', progress: 100 },
  ],
  新上架: [
    { title: '家庭年度健康计划制定', tag: '今日上架', tagClass: 'fresh', level: '进阶', meta: '约 16 分钟', detail: '今日更新', scene: '年度规划', summary: '围绕家庭风险、服务目标和年度节点制定健康计划', action: '加入学习' },
    { title: '营养与运动联合干预', tag: '新上架', tagClass: 'fresh', level: '进阶', meta: '约 14 分钟', detail: '11月18日更新', scene: '生活方式干预', summary: '把饮食和运动建议转化为可执行的日常任务', action: '加入学习' },
    { title: '家庭睡眠健康管理', tag: '新上架', tagClass: 'fresh', level: '专题', meta: '约 11 分钟', detail: '11月18日更新', scene: '睡眠管理', summary: '识别睡眠问题类型并提供分层改善建议', action: '加入学习' },
    { title: '老年客户跌倒风险预防', tag: '新上架', tagClass: 'fresh', level: '专题', meta: '约 13 分钟', detail: '11月17日更新', scene: '老年照护', summary: '从居家环境、运动能力和用药因素评估跌倒风险', action: '加入学习' },
    { title: '女性全周期健康沟通', tag: '新上架', tagClass: 'fresh', level: '专题', meta: '约 17 分钟', detail: '11月17日更新', scene: '女性健康', summary: '覆盖不同年龄阶段的健康需求识别与沟通重点', action: '加入学习' },
  ],
};

const dashboardLearningCounts = { 待学习: 8, 进行中: 5, 已学习: 18, 新上架: 6 };

const managedCustomerGroups = {
  pending: [
    { name: '李铭锐', gender: '男', age: 30, source: '服务包', applyDate: '2026/09/10', visitNo: '--', phone: '134****0827', aiAdvice: '建议优先评估空腹血糖与近期体重变化' },
    { name: '欧舒朗', gender: '女', age: 28, source: '医生推荐', applyDate: '2026/09/10', visitNo: 'JZ2026091028', phone: '134****0827', aiAdvice: '建议确认管理目标后制定首周饮食记录任务' },
    { name: '陆宇航', gender: '男', age: 25, source: '线下活动', applyDate: '2026/09/10', visitNo: '--', phone: '166****8849', aiAdvice: '资料完整，可安排首次健康评估' },
  ],
  active: [
    { name: '陈梦强', gender: '女', age: 35, joinedAt: '2026/08/18', days: 94, visitNo: '--', phone: '182****2136', owner: '暂无', plan: '勿动 28天血糖管理领跑营', task: '开营·问卷建档', taskDate: '2026/08/18', overdue: true, warning: true },
    { name: '测试一号', gender: '女', age: 29, joinedAt: '2026/08/20', days: 92, visitNo: '--', phone: '139****5678', owner: '暂无', plan: '暂无', task: '--', taskDate: '--', overdue: false, warning: false },
    { name: '王星星', gender: '女', age: 29, joinedAt: '2026/09/09', days: 72, visitNo: '--', phone: '182****2136', owner: '暂无', plan: '勿动 28天血糖管理领跑营', task: '开营·问卷建档', taskDate: '2026/09/09', overdue: true, warning: true },
    { name: '杨明星', gender: '男', age: 29, joinedAt: '2026/09/10', days: 71, visitNo: 'JZ2026091031', phone: '138****6612', owner: '张雷强', plan: '28天体重血糖管理领跑营', task: '第7天·饮食回顾', taskDate: '2026/09/17', overdue: true, warning: true },
    { name: '赵敏', gender: '女', age: 41, joinedAt: '2026/10/08', days: 43, visitNo: 'JZ2026100816', phone: '136****2098', owner: '张雷强', plan: '28天体重血糖管理领跑营', task: '阶段健康评估', taskDate: '2026/11/21', overdue: false, warning: false },
    { name: '周文斌', gender: '男', age: 47, joinedAt: '2026/10/15', days: 36, visitNo: '--', phone: '137****5206', owner: '李医生', plan: '体重与代谢管理方案', task: '运动处方随访', taskDate: '2026/11/22', overdue: false, warning: true },
    { name: '许静', gender: '女', age: 33, joinedAt: '2026/10/28', days: 23, visitNo: 'JZ2026102822', phone: '135****1870', owner: '张雷强', plan: '28天体重血糖管理领跑营', task: '第21天·习惯复盘', taskDate: '2026/11/18', overdue: true, warning: false },
    { name: '钱浩', gender: '男', age: 39, joinedAt: '2026/11/03', days: 17, visitNo: '--', phone: '188****9031', owner: '李医生', plan: '血糖稳态管理方案', task: '血糖数据回访', taskDate: '2026/11/20', overdue: false, warning: true },
    { name: '林岚', gender: '女', age: 31, joinedAt: '2026/11/10', days: 10, visitNo: 'JZ2026111013', phone: '159****7618', owner: '张雷强', plan: '28天体重血糖管理领跑营', task: '第14天·中期评估', taskDate: '2026/11/24', overdue: false, warning: false },
  ],
  exited: [
    { name: '陈梦强', gender: '女', age: 35, visitNo: '--', phone: '182****2136', period: '2026/08/18 - 2026/08/18', days: 1, reason: '达标出组', note: '患者病情归转，已完成本阶段管理' },
  ],
};

const shell = document.querySelector('#appShell');
const toast = document.querySelector('#toast');
const backdrop = document.querySelector('#modalBackdrop');
const modalContent = document.querySelector('#modalContent');
const appModal = document.querySelector('#appModal');
const accountDrawerBackdrop = document.querySelector('#accountDrawerBackdrop');
const accountDrawerBody = document.querySelector('#accountDrawerBody');
const accountRecords = [...document.querySelectorAll('.account-records-table tbody tr')].map((row) => {
  const cells = [...row.cells].map((cell) => cell.innerText.trim());
  return { type: cells[0], title: row.cells[1].querySelector('strong').textContent.trim(), note: row.cells[1].querySelector('small').textContent.trim(), quantity: cells[2], amount: cells[3], paid: cells[4], time: cells[5], status: cells[6] };
});
let lastAccountDrawerFocus = null;
const escapeAccountText = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const accountRecordStatusClass = (status) => ({
  '已支付': 'is-success',
  '已入账': 'is-success',
  '待支付': 'is-pending',
  '审核中': 'is-reviewing',
  '已取消': 'is-cancelled'
}[status] || 'is-default');
function openAccountDrawer(content, title) {
  lastAccountDrawerFocus = document.activeElement;
  document.querySelector('#accountDrawerTitle').textContent = title;
  accountDrawerBody.innerHTML = content;
  accountDrawerBackdrop.hidden = false;
  document.body.classList.add('account-drawer-open');
  document.querySelector('#accountDrawerClose').focus();
}
function closeAccountDrawer() {
  if (accountDrawerBackdrop.hidden) return;
  accountDrawerBackdrop.hidden = true;
  document.body.classList.remove('account-drawer-open');
  lastAccountDrawerFocus?.focus();
}
function showAccountRecordDetail(record) {
  if (!record) return;
  const fields = [['业务类型', record.type], ['购买数量 / 会员周期', record.quantity], ['记录内容', record.title], ['订单信息', record.note], ['订单金额', record.amount], ['实付金额', record.paid], ['交易时间', record.time], ['当前状态', record.status], ...(record.payment ? [['支付方式', record.payment]] : [])];
  openAccountDrawer(`<section class="account-detail-form" aria-label="记录详情"><h3>基本信息</h3><dl>${fields.map(([label, value]) => `<div class="account-detail-field"><dt>${escapeAccountText(label)}</dt><dd>${escapeAccountText(value)}</dd></div>`).join('')}</dl></section><p class="account-drawer-note">演示记录，仅用于页面展示。</p><button type="button" class="account-drawer-return" id="returnAccountRecords">返回账户记录</button>`, '记录详情');
  accountDrawerBody.querySelector('#returnAccountRecords').addEventListener('click', showAllAccountRecords);
}
function showAllAccountRecords() {
  openAccountDrawer(`<form class="account-record-search" id="accountRecordSearch"><div class="account-search-field"><label for="accountRecordKeyword">关键词</label><input id="accountRecordKeyword" type="search" placeholder="记录内容、订单号或时间" /></div><div class="account-search-field"><label for="accountRecordStatus">当前状态</label><select id="accountRecordStatus"><option value="">全部状态</option>${[...new Set(accountRecords.map((record) => record.status))].map((status) => `<option>${escapeAccountText(status)}</option>`).join('')}</select></div><div class="account-search-actions"><button type="button" id="accountRecordReset">重置</button><button type="submit">查询</button></div></form><p class="account-record-count" id="accountRecordCount"></p><div class="account-drawer-list" id="accountDrawerList"></div><p class="account-drawer-note">演示记录，仅用于页面展示。</p>`, '全部账户记录');
  const keyword = accountDrawerBody.querySelector('#accountRecordKeyword');
  const status = accountDrawerBody.querySelector('#accountRecordStatus');
  const render = () => {
    const query = keyword.value.trim().toLowerCase();
    const matches = accountRecords.map((record, index) => ({ record, index })).filter(({ record }) => (!status.value || record.status === status.value) && (!query || Object.values(record).some((value) => value.toLowerCase().includes(query))));
    accountDrawerBody.querySelector('#accountRecordCount').textContent = `找到 ${matches.length} 条记录`;
    accountDrawerBody.querySelector('#accountDrawerList').innerHTML = matches.length ? matches.map(({ record, index }) => `<button type="button" data-drawer-record="${index}"><span><b>${escapeAccountText(record.title)}</b><small>${escapeAccountText(record.note)}</small><small>${escapeAccountText(record.time)}</small></span><em class="${accountRecordStatusClass(record.status)}">${escapeAccountText(record.status)}</em><strong>${escapeAccountText(record.paid)}</strong></button>`).join('') : '<p class="account-drawer-empty">没有匹配的记录，请调整搜索内容或状态。</p>';
  };
  accountDrawerBody.querySelector('#accountRecordSearch').addEventListener('submit', (event) => { event.preventDefault(); render(); });
  accountDrawerBody.querySelector('#accountRecordReset').addEventListener('click', () => { keyword.value = ''; status.value = ''; render(); });
  accountDrawerBody.querySelector('#accountDrawerList').addEventListener('click', (event) => {
    const button = event.target.closest('[data-drawer-record]');
    if (button) showAccountRecordDetail(accountRecords[Number(button.dataset.drawerRecord)]);
  });
  render();
}
document.querySelector('#viewAllAccountRecords').addEventListener('click', showAllAccountRecords);
document.querySelector('.account-records-table tbody').addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (button) showAccountRecordDetail(accountRecords[[...button.closest('tbody').rows].indexOf(button.closest('tr'))]);
});
document.querySelector('#accountDrawerClose').addEventListener('click', closeAccountDrawer);
accountDrawerBackdrop.addEventListener('click', (event) => { if (event.target === accountDrawerBackdrop) closeAccountDrawer(); });
const quickRecordButton = document.querySelector('#quickRecordButton');
const quickRecordBackdrop = document.querySelector('#quickRecordBackdrop');
const quickRecordDrawer = quickRecordBackdrop.querySelector('.quick-record-drawer');
const quickRecordForm = document.querySelector('#quickRecordForm');
const quickMoreToggle = document.querySelector('#quickMoreToggle');
const quickMoreFields = document.querySelector('#quickMoreFields');
let lastQuickRecordFocus = null;
let quickRecordCloseTimer;

function openQuickRecordDrawer() {
  window.clearTimeout(quickRecordCloseTimer);
  lastQuickRecordFocus = document.activeElement;
  quickRecordBackdrop.hidden = false;
  document.body.classList.add('quick-record-open');
  window.requestAnimationFrame(() => {
    quickRecordBackdrop.classList.add('open');
    window.setTimeout(() => quickRecordForm.elements.name.focus(), 180);
  });
}

function closeQuickRecordDrawer() {
  if (quickRecordBackdrop.hidden) return;
  quickRecordBackdrop.classList.remove('open');
  document.body.classList.remove('quick-record-open');
  quickRecordCloseTimer = window.setTimeout(() => {
    quickRecordBackdrop.hidden = true;
    lastQuickRecordFocus?.focus();
  }, 240);
}

function resetQuickRecordHealth() {
  quickRecordForm.querySelectorAll('.quick-health-entries').forEach((list) => { list.innerHTML = ''; });
  quickRecordForm.querySelectorAll('[data-health-empty]').forEach((emptyState) => { emptyState.hidden = false; });
}

quickRecordButton.addEventListener('click', openQuickRecordDrawer);
document.querySelector('#addCustomerFromList')?.addEventListener('click', openQuickRecordDrawer);
document.querySelector('#quickRecordClose').addEventListener('click', closeQuickRecordDrawer);
document.querySelector('#quickRecordCancel').addEventListener('click', closeQuickRecordDrawer);
quickRecordBackdrop.addEventListener('click', (event) => { if (event.target === quickRecordBackdrop) closeQuickRecordDrawer(); });
quickMoreToggle.addEventListener('click', () => {
  const isExpanded = quickMoreToggle.getAttribute('aria-expanded') === 'true';
  quickMoreToggle.setAttribute('aria-expanded', String(!isExpanded));
  quickMoreFields.hidden = isExpanded;
});
quickRecordForm.addEventListener('click', (event) => {
  const addButton = event.target.closest('[data-health-add]');
  const removeButton = event.target.closest('[data-health-remove]');
  if (addButton) {
    const type = addButton.dataset.healthAdd;
    const label = addButton.dataset.healthLabel;
    const list = quickRecordForm.querySelector(`[data-health-list="${type}"]`);
    const entry = document.createElement('div');
    entry.className = 'quick-health-entry';
    entry.innerHTML = `<input name="health_${type}[]" aria-label="${label}" placeholder="请输入${label}" /><button type="button" data-health-remove aria-label="删除${label}">×</button>`;
    list.appendChild(entry);
    quickRecordForm.querySelector(`[data-health-empty="${type}"]`).hidden = true;
    entry.querySelector('input').focus();
  }
  if (removeButton) {
    const list = removeButton.closest('.quick-health-entries');
    removeButton.closest('.quick-health-entry').remove();
    if (!list.children.length) quickRecordForm.querySelector(`[data-health-empty="${list.dataset.healthList}"]`).hidden = false;
  }
});
quickRecordForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const patientName = new FormData(quickRecordForm).get('name').trim();
  closeQuickRecordDrawer();
  quickRecordForm.reset();
  quickMoreToggle.setAttribute('aria-expanded', 'false');
  quickMoreFields.hidden = true;
  resetQuickRecordHealth();
  showToast(`${patientName}的患者档案已创建`);
});
const rows = document.querySelector('#leadRows');
const resultCount = document.querySelector('#resultCount');
const empty = document.querySelector('#emptyState');
const promotionTemplate = document.querySelector('#promotionTemplate');
const myAcquisition = document.querySelector('#myAcquisition');
const aiAssistantLauncher = document.querySelector('#aiAssistantLauncher');
const aiAssistantPanel = document.querySelector('#aiAssistantPanel');
const aiAssistantClose = document.querySelector('#aiAssistantClose');
const aiAssistantForm = document.querySelector('#aiAssistantForm');
const aiAssistantInput = document.querySelector('#aiAssistantInput');
const aiChatStream = document.querySelector('#aiChatStream');
const aiSuggestions = document.querySelector('#aiSuggestions');
const aiSessionButton = document.querySelector('#aiSessionButton');
const aiSessionPanel = document.querySelector('#aiSessionPanel');
const aiNewChat = document.querySelector('#aiNewChat');
const aiPointsUsage = document.querySelector('#aiPointsUsage');
const aiPointsUsedLabel = document.querySelector('#aiPointsUsed');
let activeStatus = '全部';
let activeCustomerStage = '全部';
let activeManagedTab = 'pending';
let customerFilters = {};
let smartDraftRules = [];
let smartDraftSummary = '';
let promotionType = '机构';
let patientReturnView = 'customers';
let activePatientCustomer = null;
let toastTimer;
let activeMarkCustomer = null;
let selectedMarkTypes = new Set();
let lastMarkDrawerFocus = null;
const aiPointsTotal = 20000;
const smartFieldLabels = { stage: '客户阶段', source: '客户来源', fho: '归属FHO', serviceStatus: '服务状态', next: '下一步事项', gender: '性别', age: '年龄', service: '关注服务 / 当前服务' };
const smartOperatorLabels = { equals: '等于', contains: '包含任一', gte: '大于等于', lte: '小于等于' };
const smartFilterTemplates = {
  hypertension: { summary: '查找当前服务包含“高血压”，且服务状态为“服务中”的客户', rules: [{ field: 'service', operator: 'contains', value: '高血压' }, { field: 'serviceStatus', operator: 'equals', value: '服务中' }] },
  diabetes: { summary: '查找当前服务包含“糖尿病”，且服务状态为“服务中”的客户', rules: [{ field: 'service', operator: 'contains', value: '糖尿病' }, { field: 'serviceStatus', operator: 'equals', value: '服务中' }] },
  activation: { summary: '查找客户阶段为“待生效”，且下一步需要“提醒激活”的客户', rules: [{ field: 'stage', operator: 'equals', value: '待生效' }, { field: 'next', operator: 'equals', value: '提醒激活' }] },
  followup: { summary: '查找下一步事项为“健康随访”的客户', rules: [{ field: 'next', operator: 'equals', value: '健康随访' }] },
  potential: { summary: '查找潜在客户中尚未购买服务的客户', rules: [{ field: 'stage', operator: 'equals', value: '潜在客户' }, { field: 'serviceStatus', operator: 'equals', value: '未购买' }] },
  renewal: { summary: '查找历史客户中需要了解续费意向的客户', rules: [{ field: 'stage', operator: 'equals', value: '历史客户' }, { field: 'next', operator: 'equals', value: '了解续费意向' }] },
};
let aiPointsUsed = Number(sessionStorage.getItem('aiPointsUsed') || 0);
aiPointsUsedLabel.textContent = aiPointsUsed.toLocaleString('zh-CN');
aiPointsUsage.setAttribute('aria-label', `积分使用量 ${aiPointsUsed}，总量 ${aiPointsTotal}`);

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('show');
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

const customerMarkBackdrop = document.querySelector('#customerMarkBackdrop');
const customerMarkForm = document.querySelector('#customerMarkForm');

function updateMarkTypeSelection() {
  document.querySelectorAll('[data-mark-type]').forEach((button) => button.classList.toggle('selected', selectedMarkTypes.has(button.dataset.markType)));
  document.querySelector('#markTypeCount').textContent = `已选 ${selectedMarkTypes.size}/3`;
}

function openCustomerMarkDrawer(customer) {
  if (!customer) return;
  activeMarkCustomer = customer;
  lastMarkDrawerFocus = document.activeElement;
  selectedMarkTypes = new Set(customer.markTypes || []);
  document.querySelector('#markCustomerAvatar').textContent = customer.name.slice(0, 1);
  document.querySelector('#markCustomerName').textContent = customer.name;
  document.querySelector('#markCustomerMeta').textContent = `性别：${customer.name.includes('女士') ? '女' : '男'} · 年龄：${customer.age}岁 · 手机号码：${customer.phone || '--'}`;
  document.querySelector('#markServiceName').value = customer.markDetails?.serviceName || customer.service || '';
  document.querySelector('#markServiceAmount').value = customer.markDetails?.serviceAmount || '';
  document.querySelector('#markBenefitName').value = customer.markDetails?.benefitName || '';
  document.querySelector('#markBenefitTerm').value = customer.markDetails?.benefitTerm || '3个月';
  updateMarkTypeSelection();
  customerMarkBackdrop.hidden = false;
  document.body.classList.add('customer-mark-open');
  window.requestAnimationFrame(() => customerMarkBackdrop.classList.add('open'));
  window.setTimeout(() => document.querySelector('[data-mark-type]')?.focus(), 160);
}

function closeCustomerMarkDrawer() {
  if (customerMarkBackdrop.hidden) return;
  customerMarkBackdrop.classList.remove('open');
  document.body.classList.remove('customer-mark-open');
  window.setTimeout(() => {
    customerMarkBackdrop.hidden = true;
    lastMarkDrawerFocus?.focus();
  }, 220);
}

document.querySelector('#markTypeGrid').addEventListener('click', (event) => {
  const button = event.target.closest('[data-mark-type]');
  if (!button) return;
  const type = button.dataset.markType;
  if (selectedMarkTypes.has(type)) selectedMarkTypes.delete(type);
  else if (selectedMarkTypes.size < 3) selectedMarkTypes.add(type);
  else { showToast('标记类型最多选择 3 项'); return; }
  updateMarkTypeSelection();
});
document.querySelector('#customerMarkClose').addEventListener('click', closeCustomerMarkDrawer);
document.querySelector('#customerMarkCancel').addEventListener('click', closeCustomerMarkDrawer);
customerMarkBackdrop.addEventListener('click', (event) => { if (event.target === customerMarkBackdrop) closeCustomerMarkDrawer(); });
customerMarkForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!activeMarkCustomer) return;
  if (!selectedMarkTypes.size) { showToast('请至少选择 1 个标记类型'); return; }
  if (!customerMarkForm.reportValidity()) return;
  activeMarkCustomer.markTypes = [...selectedMarkTypes];
  activeMarkCustomer.markDetails = {
    serviceName: document.querySelector('#markServiceName').value.trim(),
    serviceAmount: document.querySelector('#markServiceAmount').value,
    benefitName: document.querySelector('#markBenefitName').value.trim(),
    benefitTerm: document.querySelector('#markBenefitTerm').value,
  };
  activeMarkCustomer.markStatus = '已标记';
  const customerName = activeMarkCustomer.name;
  renderCustomers();
  closeCustomerMarkDrawer();
  showToast(`${customerName}已完成标记`);
});

function setAssistantOpen(isOpen) {
  aiAssistantPanel.classList.toggle('open', isOpen);
  aiAssistantPanel.setAttribute('aria-hidden', String(!isOpen));
  aiAssistantLauncher.setAttribute('aria-expanded', String(isOpen));
  aiAssistantLauncher.classList.toggle('panel-open', isOpen);
  if (isOpen) window.setTimeout(() => aiAssistantInput.focus(), 240);
  if (!isOpen) setSessionPanelOpen(false);
}

function setSessionPanelOpen(isOpen) {
  aiSessionPanel.hidden = !isOpen;
  aiSessionPanel.classList.toggle('open', isOpen);
  aiSessionButton.classList.toggle('active', isOpen);
  aiSessionButton.setAttribute('aria-expanded', String(isOpen));
  if (!isOpen && aiAssistantPanel.classList.contains('open')) aiAssistantInput.focus();
}

function askAssistant(question, replyHtml = '') {
  const prompt = question.trim();
  if (!prompt) return;
  if (aiPointsUsed + 5 > aiPointsTotal) {
    showToast('积分不足，请补充积分后继续会话');
    return;
  }
  aiPointsUsed += 5;
  sessionStorage.setItem('aiPointsUsed', String(aiPointsUsed));
  aiPointsUsedLabel.textContent = aiPointsUsed.toLocaleString('zh-CN');
  aiPointsUsage.setAttribute('aria-label', `积分使用量 ${aiPointsUsed}，总量 ${aiPointsTotal}`);
  aiPointsUsage.classList.remove('spent');
  requestAnimationFrame(() => aiPointsUsage.classList.add('spent'));
  const safePrompt = prompt.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
  aiSuggestions.hidden = true;
  const reply = replyHtml || '<p>已收到您的问题。这里将结合客户档案、服务待办与健康资料，为您整理相关信息。</p>';
  aiChatStream.insertAdjacentHTML('beforeend', `<div class="ai-user-message">${safePrompt}</div><div class="ai-reply-message"><span class="ai-mini-avatar"></span><div><b>AI主理人</b>${reply}</div></div>`);
  aiAssistantInput.value = '';
  const body = document.querySelector('#aiPanelBody');
  body.scrollTo({ top: body.scrollHeight, behavior: 'smooth' });
}

let currentView = 'dashboard';
function switchView(view) {
  currentView = view;
  document.querySelectorAll('.page-view').forEach((item) => item.classList.toggle('active', item.id === `${view}View`));
  shell.classList.toggle('points-light-theme', view === 'pointsDetails');
  document.querySelector('.content').classList.toggle('customer-content', view === 'customers' || view === 'managedCustomers' || view === 'patient');
  document.querySelector('.content').classList.toggle('membership-content', ['membershipPlans', 'myMembership', 'pointsMall', 'pointsDetails', 'purchase', 'pointsPurchase', 'expertPurchase'].includes(view));
  document.querySelectorAll('[data-view]').forEach((item) => item.classList.toggle('active', item.dataset.view === view || (['patient', 'expertPurchase'].includes(view) && item.dataset.view === 'customers') || (view === 'purchase' && item.dataset.view === 'membershipPlans') || (view === 'pointsPurchase' && item.dataset.view === 'pointsMall')));
  document.querySelector('#patientSwitcher').hidden = view !== 'patient';
  document.querySelectorAll('.nav-parent').forEach((item) => item.classList.remove('active'));
  document.querySelectorAll('.nav-group').forEach((group) => {
    group.classList.add('open');
    group.querySelector('.nav-parent')?.setAttribute('aria-expanded', 'true');
  });
  document.title = view === 'myMembership' ? '我的会员 · 家庭健康管理师' : view === 'membershipPlans' ? '会员套餐 · 家庭健康管理师' : view === 'purchase' ? `${selectedPurchaseMode === 'renew' ? '续费会员' : '购买会员套餐'} · 家庭健康管理师` : view === 'pointsPurchase' ? '购买积分套餐 · 家庭健康管理师' : view === 'expertPurchase' ? '购买分析方案 · 家庭健康管理师' : view === 'pointsMall' ? '积分商城 · 家庭健康管理师' : view === 'pointsDetails' ? '积分明细 · 家庭健康管理师' : view === 'patient' ? '患者档案 · 家庭健康管理师' : view === 'acquisition' ? '获客管理 · 家庭健康管理师' : view === 'managedCustomers' ? '在管客户 · 家庭健康管理师' : view === 'customers' ? '全部客户 · 家庭健康管理师' : '家庭健康管理师 · 工作台';
  document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
  if (view === 'pointsDetails') requestAnimationFrame(() => {
    pointsTrendChartInstance?.resize();
    pointsDistributionChartInstance?.resize();
  });
}

const serviceRecommendations = [
  { id: 'annual', name: '年度健康管理服务包', price: '¥9,980 / 年', note: '覆盖体检解读、健康评估、年度计划与持续随访', reason: '客户明确希望获得长期管理计划，年度服务能把一次体检咨询延伸为持续健康管理。', evidence: '体检存在异常指标；当前尚未购买服务；客户主动提出制定后续计划。' },
  { id: 'cardio', name: '心血管专项管理包', price: '¥1,680 / 3个月', note: '聚焦血压、血脂、用药与生活方式管理', reason: '当前血压和血脂是最明确的健康风险，专项服务能优先解决客户最需要管理的问题。', evidence: '高血压病史 5 年；血脂偏高；正在使用氨氯地平；父亲有高血压。' },
  { id: 'report', name: '体检报告深度解读', price: '¥399 / 次', note: '专家解读异常指标并提供后续检查建议', reason: '客户担心重复检查，先完成报告解读可降低决策顾虑，再逐步建立长期服务信任。', evidence: '客户希望先解释现有报告；对重复检查存在顾虑；当前处于首次服务转化阶段。' },
];

const managedServiceSnapshots = {
  李先生: { progress: 60, completed: '6 / 10', period: '2026-09-01 ～ 2026-12-01', nextService: '班级激活 · 11月19日 14:30', advice: '当前服务接近计划推进，建议持续跟踪核心指标与目标，并按期完成下一次服务。' },
  王女士: { progress: 68, completed: '8 / 12', period: '2026-09-01 ～ 2026-11-30', nextService: '血压随访 · 11月20日 09:30', advice: '近两周收缩压仍有波动，建议本次随访重点核对用药依从性，并补充晚间血压记录。' },
  陈先生: { progress: 52, completed: '7 / 14', period: '2026-08-15 ～ 2027-02-14', nextService: '方案评估 · 11月20日 15:00', advice: '近期血糖记录完整度不足，建议先补齐餐后数据，再评估饮食与用药方案。' },
  刘先生: { progress: 74, completed: '9 / 12', period: '2026-09-10 ～ 2026-12-09', nextService: '上传随访记录 · 11月21日 12:00', advice: '整体履约稳定，建议下一阶段加强睡眠与运动数据的连续记录。' },
  郑女士: { progress: 61, completed: '11 / 18', period: '2026-08-01 ～ 2027-01-31', nextService: '健康随访 · 11月23日 14:00', advice: '当前处于中期管理阶段，建议结合近期报告复核重点指标并调整下阶段计划。' },
};

let overviewActivitiesExpanded = false;
let currentOverviewActivities = [];
let currentOverviewHasService = false;

const overviewActivityMeta = {
  '服务跟进': ['i-arrow-right', 'service'], 'AI总结': ['i-activity', 'ai'], '服务记录': ['i-report-doc', 'service'], '随访': ['i-chat', 'follow'],
  '健康数据': ['i-report-chart', 'health'], '计划调整': ['i-growth', 'plan'], '档案更新': ['i-report-doc', 'archive'], '健康评估': ['i-heart', 'health'],
  '服务履约': ['i-check-circle', 'service'], '客户咨询': ['i-chat', 'consult'], '档案建立': ['i-report-doc', 'archive'], '资料上传': ['i-report-doc', 'upload'],
  '系统解析': ['i-report-chart', 'system'], '客户行为': ['i-user', 'ai'], '客户触达': ['i-chat', 'consult'], '沟通偏好': ['i-chat', 'health'],
  '需求识别': ['i-alert', 'upload'], '服务推荐': ['i-growth', 'plan'], '客户授权': ['i-check-circle', 'service'], '客户来源': ['i-user', 'consult']
};

function buildOverviewActivities(customer, hasServicePackage) {
  const latestActivity = String(customer.activity || '').replace(/^\d{2}-\d{2}\s*/, '') || (hasServicePackage ? '完成最近一次健康随访' : '提交服务咨询');
  if (hasServicePackage) return [
    ['11-20 09:30', customer.next || '完成健康随访', '服务跟进'], ['11-18 18:05', 'AI 生成阶段健康管理建议', 'AI总结'], ['11-16 16:20', latestActivity, '服务记录'],
    ['11-14 17:40', '完成本周血压与用药情况回访', '随访'], ['11-12 09:45', '补充晚间血压测量记录', '健康数据'], ['11-10 14:10', '主理人复核阶段管理目标', '计划调整'],
    ['11-08 10:20', '更新阶段健康管理记录', '档案更新'], ['11-05 15:30', '完成生活方式执行情况评估', '健康评估'], ['11-02 11:15', '提交一周家庭血压记录', '健康数据'],
    ['10-28 09:30', '完成服务计划节点', '服务履约'], ['10-25 16:40', '主理人电话回访用药情况', '随访'], ['10-20 08:55', '生成首次阶段健康周报', '健康报告'],
    ['10-15 09:30', '确认健康管理服务计划', '服务确认'], ['10-12 14:20', '完成入组健康风险评估', '健康评估'], ['10-08 10:00', '建立健康管理档案', '档案建立'],
  ];
  return [
    ['11-16 16:20', latestActivity, '客户咨询'], ['11-15 18:10', 'AI 完成客户需求初步归纳', 'AI总结'], ['11-14 11:30', '主理人补充客户健康关注重点', '档案更新'],
    ['11-12 09:45', '完成基础资料登记', '档案建立'], ['11-11 17:20', '客户上传最近一次体检报告', '资料上传'], ['11-10 15:40', '系统完成体检报告结构化解析', '系统解析'],
    ['11-09 10:15', '客户查看健康服务介绍', '客户行为'], ['11-08 14:10', '首次建立客户联系', '客户触达'], ['11-07 18:30', '记录客户偏好微信沟通', '沟通偏好'],
    ['11-06 09:20', '识别高血压与血脂管理需求', '需求识别'], ['11-05 16:45', '推荐体检报告深度解读服务', '服务推荐'], ['11-04 13:10', '客户咨询重复检查相关问题', '客户咨询'],
    ['11-03 10:30', '完成客户来源信息登记', '档案更新'], ['11-02 15:00', '客户授权建立健康档案', '客户授权'], ['11-01 09:40', '客户通过微信分享进入咨询', '客户来源'],
  ];
}

function renderOverviewActivities() {
  const activityList = document.querySelector('#overviewActivityList');
  const toggle = document.querySelector('#toggleOverviewActivities');
  if (!activityList || !toggle) return;
  const visibleItems = overviewActivitiesExpanded ? currentOverviewActivities : currentOverviewActivities.slice(0, 10);
  activityList.innerHTML = visibleItems.map(([time, text, tag]) => { const meta = overviewActivityMeta[tag] || ['i-activity', 'default']; return `<li class="activity-${meta[1]}"><time>${time}</time><i class="activity-row-icon"><svg><use href="#${meta[0]}"/></svg></i><span>${escapeAccountText(text)}</span><em>${escapeAccountText(tag)}</em></li>`; }).join('');
  const remaining = Math.max(0, currentOverviewActivities.length - 10);
  toggle.hidden = remaining === 0;
  toggle.setAttribute('aria-expanded', String(overviewActivitiesExpanded));
  toggle.innerHTML = `${overviewActivitiesExpanded ? '收起动态' : `展开更多（${remaining}）`} <svg><use href="#i-chevron"/></svg>`;
}

function renderOverviewDashboard(customer, hasServicePackage) {
  const dashboard = document.querySelector('#overviewDashboard');
  const watchSection = document.querySelector('#overviewWatchSection');
  const managementSection = document.querySelector('#overviewManagementSection');
  const activityList = document.querySelector('#overviewActivityList');
  if (!dashboard || !watchSection || !managementSection || !activityList) return;
  watchSection.hidden = !hasServicePackage;
  managementSection.hidden = !hasServicePackage;
  currentOverviewHasService = hasServicePackage;
  dashboard.classList.toggle('activity-only', !hasServicePackage);
  currentOverviewActivities = buildOverviewActivities(customer, hasServicePackage);
  renderOverviewActivities();
  if (!hasServicePackage) {
    return;
  }
  const snapshot = managedServiceSnapshots[customer.name] || { progress: 60, period: '2026-09-01 ～ 2026-12-01' };
  const focus = customer.service.includes('高血压') ? '血压趋势、用药依从性与生活方式' : customer.service.includes('糖尿病') ? '血糖记录、饮食结构与用药执行' : customer.service.includes('肾') ? '核心指标动态与管理计划执行' : '核心指标趋势与管理计划执行';
  const planName = customer.service.replace(/（.*?）/g, '') + '计划';
  document.querySelector('#overviewPlanName').textContent = planName;
  document.querySelector('#overviewHealthFocus').textContent = focus;
  document.querySelector('#overviewLastFollow').textContent = customer.activity || '已完成最近一次健康随访';
  document.querySelector('#overviewServiceName').textContent = customer.service;
  document.querySelector('#overviewServiceStatus').textContent = customer.serviceStatus;
  document.querySelector('#overviewServicePeriod').textContent = `服务周期：${snapshot.period}`;
  document.querySelector('#overviewServiceProgress').style.width = `${snapshot.progress}%`;
  document.querySelector('#overviewServiceProgressText').textContent = `履约 ${snapshot.progress}%`;
}

function renderPatientServiceConversion(customer) {
  const ownerName = document.querySelector('#serviceOwnerName');
  const ownerTeam = document.querySelector('#serviceOwnerTeam');
  const sectionTitle = document.querySelector('#serviceSectionTitle');
  const status = document.querySelector('#serviceConversionStatus');
  const state = document.querySelector('#serviceConversionState');
  const recordButton = document.querySelector('#recordServiceRecommendation');
  const recommendationHeading = document.querySelector('.service-recommendation-heading');
  const summaryText = document.querySelector('#aiOverviewSummaryText');
  const directionNeed = document.querySelector('#aiDirectionNeed');
  const directionFocus = document.querySelector('#aiDirectionFocus');
  const directionFocusLabel = document.querySelector('#aiDirectionFocusLabel');
  const directionConcern = document.querySelector('#aiDirectionConcern');
  const directionContact = document.querySelector('#aiDirectionContact');
  const overviewPanel = document.querySelector('#patientPanelOverview');
  if (!ownerName || !ownerTeam || !status || !state || !recordButton || !recommendationHeading) return;
  ownerName.textContent = customer.fho || '暂未分配';
  ownerTeam.textContent = customer.teamName || '待分配服务团队';
  const hasCurrentService = ['服务中', '待生效'].includes(customer.serviceStatus);
  overviewPanel?.classList.toggle('has-managed-service', hasCurrentService);
  renderOverviewDashboard(customer, hasCurrentService);
  if (sectionTitle) sectionTitle.textContent = hasCurrentService ? '服务管理' : '服务转化';
  if (summaryText) summaryText.textContent = hasCurrentService
    ? `${customer.name}当前已有${customer.service}，现阶段应围绕服务履约、健康重点与下一次跟进持续管理，并通过偏好的沟通方式及时反馈阶段结果。`
    : `${customer.name}希望先理解体检异常，再制定可执行的长期健康管理计划；当前应优先回应重复检查顾虑，并通过微信在下班后完成服务说明与首次转化沟通。`;
  if (directionNeed) directionNeed.textContent = hasCurrentService ? '希望核心指标稳定达标，并获得持续、清晰的阶段反馈。' : '希望了解体检结果，并制定后续健康管理计划。';
  if (directionFocusLabel) directionFocusLabel.textContent = hasCurrentService ? '当前慢病管理重点' : '当前健康管理重点';
  if (directionFocus) directionFocus.textContent = hasCurrentService ? '跟踪核心指标、用药依从性与生活方式干预效果。' : '关注体检中的异常指标，建议结合专家评估制定管理方案。';
  if (directionConcern) directionConcern.textContent = hasCurrentService ? '担心指标反复及长期用药影响，希望异常情况及时响应。' : '担心重复检查，希望先解释现有报告。';
  if (directionContact) directionContact.textContent = hasCurrentService ? '微信接收阶段周报，重要随访提前一天提醒。' : '微信优先，工作日 18:00 后联系。';
  status.innerHTML = hasCurrentService ? `<i>${escapeAccountText(customer.serviceStatus)}</i><i>当前服务</i>` : '未购买 · 推荐服务';
  recordButton.hidden = hasCurrentService;
  recommendationHeading.hidden = hasCurrentService;
  if (hasCurrentService) {
    const snapshot = managedServiceSnapshots[customer.name] || { progress: 60, completed: '6 / 10', period: '2026-09-01 ～ 2026-12-01', nextService: `${customer.next || '健康随访'} · ${customer.nextDate || '待安排'}`, advice: '当前服务按计划推进，建议持续跟踪核心指标并按期完成下一次服务。' };
    state.innerHTML = `<section class="managed-service-overview">
      <div class="managed-service-main">
        <div class="managed-service-title"><i><svg><use href="#i-check-circle"/></svg></i><div><small>当前在管服务</small><strong>${escapeAccountText(customer.service)}</strong></div><em>${escapeAccountText(customer.serviceStatus)}</em></div>
        <div class="managed-service-progress"><span><b>履约进度</b><strong>${snapshot.progress}%</strong></span><i style="--service-progress:${snapshot.progress}%"></i><small>已完成 ${escapeAccountText(snapshot.completed)} 个计划节点</small></div>
      </div>
      <div class="managed-service-facts">
        <article><span>服务周期</span><strong>${escapeAccountText(snapshot.period)}</strong></article>
        <article><span>服务归属</span><strong>${escapeAccountText(customer.fho || '--')} · ${escapeAccountText(customer.teamName || '待分配团队')}</strong></article>
        <article><span>下次服务</span><strong>${escapeAccountText(snapshot.nextService)}</strong></article>
      </div>
      <div class="managed-service-advice"><span><svg><use href="#i-activity"/></svg>AI 阶段建议</span><p>${escapeAccountText(snapshot.advice)}</p><button type="button" data-toast="正在打开${escapeAccountText(customer.name)}的服务履约详情">查看服务详情</button></div>
    </section>`;
    return;
  }
  state.innerHTML = `<div class="service-recommendation-list" role="radiogroup" aria-label="推荐服务包">${serviceRecommendations.map((item, index) => `<article class="service-package-option${index === 0 ? ' selected' : ''}" role="radio" aria-checked="${index === 0}" tabindex="0" data-service-package="${item.id}"><span><svg><use href="#${item.id === 'cardio' ? 'i-heart' : item.id === 'report' ? 'i-report-doc' : 'i-report-layers'}"/></svg></span><div><strong>${item.name}</strong><small>${item.note}</small><p><b>推荐理由：</b>${item.reason}</p><p><b>推荐依据：</b>${item.evidence}</p></div><em>${item.price}</em><button class="service-package-buy" type="button"><svg><use href="#i-cart"/></svg>立即购买</button><i class="service-package-check">✓</i></article>`).join('')}</div>`;
}

function openPatientArchive(customer, returnView = 'customers') {
  activePatientCustomer = customer;
  overviewActivitiesExpanded = false;
  selectedFamilyMemberId = '';
  patientReturnView = returnView;
  const isFemale = customer.gender ? customer.gender === '女' : customer.name.includes('女士');
  const birthdayYear = 2026 - customer.age;
  const occupation = customer.age >= 60 ? '退休职工' : isFemale ? '企业职员' : '专业技术人员';
  const valueMap = {
    patientRailName: customer.name,
    patientRailGender: isFemale ? '女' : '男',
    patientRailAge: `${customer.age}岁`,
    patientRailPhone: customer.phone || '--',
    patientName: customer.name,
    patientGender: `${isFemale ? '♀ 女' : '♂ 男'} · ${customer.age}岁`,
    patientStage: customer.stage || '管理中',
    patientServiceStatus: customer.serviceStatus || '服务中',
    patientBirthday: `${birthdayYear}年5月`,
    patientPhone: customer.phone || '手机号待完善',
    patientOccupation: occupation,
  };
  Object.entries(valueMap).forEach(([id, value]) => { document.querySelector(`#${id}`).textContent = value; });
  const avatarSource = isFemale ? './patient-avatar-female.png' : './patient-avatar.png';
  document.querySelector('#patientAvatar img').src = avatarSource;
  document.querySelector('.patient-portrait-image').src = avatarSource;
  document.querySelector('#patientAvatar').classList.toggle('male', !isFemale);
  document.querySelector('#patientGender').classList.toggle('male', !isFemale);
  renderPatientServiceConversion(customer);
  updatePatientSwitcher(customer);
  initializeFamilyRelationship(customer);
  setPatientSection('basic');
  document.querySelector('#metricTemplateSelect').value = 'comprehensive';
  renderMetricDashboard('comprehensive');
  switchView('patient');
}

function updatePatientSwitcher(customer) {
  const index = customers.findIndex((item) => item === customer || item.name === customer?.name);
  const previousButton = document.querySelector('#previousPatient');
  const nextButton = document.querySelector('#nextPatient');
  const position = document.querySelector('#patientSwitcherPosition');
  const validIndex = index >= 0 ? index : 0;
  position.textContent = `${validIndex + 1} / ${customers.length}`;
  previousButton.disabled = index <= 0;
  nextButton.disabled = index < 0 || index >= customers.length - 1;
  const previous = index > 0 ? customers[index - 1] : null;
  const next = index >= 0 && index < customers.length - 1 ? customers[index + 1] : null;
  previousButton.setAttribute('aria-label', previous ? `上一位患者：${previous.name}` : '已经是第一位患者');
  previousButton.title = previous ? `上一位：${previous.name}` : '已经是第一位患者';
  nextButton.setAttribute('aria-label', next ? `下一位患者：${next.name}` : '已经是最后一位患者');
  nextButton.title = next ? `下一位：${next.name}` : '已经是最后一位患者';
}

function switchPatientByOffset(offset) {
  const currentIndex = customers.findIndex((item) => item === activePatientCustomer || item.name === activePatientCustomer?.name);
  const nextIndex = currentIndex + offset;
  if (nextIndex < 0 || nextIndex >= customers.length) return;
  const currentSection = document.querySelector('[data-patient-panel]:not([hidden])')?.dataset.patientPanel || 'basic';
  const currentTab = document.querySelector('[data-patient-detail-tab][aria-selected="true"]')?.dataset.patientDetailTab || 'overview';
  const workspace = document.querySelector('.workspace');
  const scrollTop = workspace.scrollTop;
  const nextCustomer = customers[nextIndex];
  openPatientArchive(nextCustomer, patientReturnView);
  if (currentSection !== 'basic') setPatientSection(currentSection);
  else setPatientDetailTab(currentTab);
  requestAnimationFrame(() => requestAnimationFrame(() => workspace.scrollTo({ top: scrollTop, behavior: 'auto' })));
  showToast(`已切换至${nextCustomer.name}（${nextIndex + 1}/${customers.length}）`);
}

document.querySelector('#previousPatient').addEventListener('click', () => switchPatientByOffset(-1));
document.querySelector('#nextPatient').addEventListener('click', () => switchPatientByOffset(1));

function setPatientDetailTab(tabName, focusTab = false) {
  document.querySelectorAll('[data-patient-detail-tab]').forEach((button) => {
    const selected = button.dataset.patientDetailTab === tabName;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', String(selected));
    button.tabIndex = selected ? 0 : -1;
    if (selected && focusTab) button.focus({ preventScroll: true });
  });
  document.querySelectorAll('[data-patient-detail-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.patientDetailPanel !== tabName;
  });
  if (tabName === 'relations') {
    initializeFamilyRelationship(activePatientCustomer || customers[0]);
    requestAnimationFrame(renderFamilyGraphConnectors);
  }
}

const familyRelationshipsByCustomer = new Map();
const familyGenerationMap = { '祖父母': -2, '父母': -1, '本人': 0, '配偶': 0, '兄弟姐妹': 0, '子女': 1, '其他亲属': 1, '孙辈': 2 };
let activeFamilyMembers = [];
let selectedFamilyMemberId = '';
let editingFamilyMemberId = '';
let familyGraphZoom = 1;
let familyDrawerLastFocus = null;
const familyNodePositions = new Map();
const familyRelationNotes = new Map();
let familyNodeDrag = null;
let suppressFamilyNodeClick = false;
let editingFamilyRelationMemberId = '';

function familyGenderForCustomer(customer) {
  if (customer.gender) return customer.gender;
  return customer.name.includes('女士') || customer.name.includes('慧') || customer.name.includes('芳') ? '女' : '男';
}

function createCurrentFamilyMember(customer) {
  const gender = familyGenderForCustomer(customer);
  return {
    id: `current-${customer.name}`,
    isCurrent: true,
    relation: '本人',
    name: customer.name,
    gender,
    birthDate: `${2026 - Number(customer.age || 0)}-05-01`,
    phone: customer.phone || '',
    health: customer.service || '暂无健康情况记录',
    notes: '',
    customerStatus: customer.stage || '已建档',
    serviceStatus: customer.serviceStatus || '未开通',
    owner: customer.fho || '暂未分配',
    avatar: gender === '女' ? './patient-avatar-female.png' : './patient-avatar.png',
  };
}

function initializeFamilyRelationship(customer) {
  if (!customer) return;
  if (!familyRelationshipsByCustomer.has(customer.name)) familyRelationshipsByCustomer.set(customer.name, [createCurrentFamilyMember(customer)]);
  activeFamilyMembers = familyRelationshipsByCustomer.get(customer.name);
  if (!activeFamilyMembers.some((member) => member.id === selectedFamilyMemberId)) selectedFamilyMemberId = activeFamilyMembers[0].id;
  renderFamilyRelationship();
}

function familyMemberAge(birthDate) {
  if (!birthDate) return '未填写';
  const birthday = new Date(`${birthDate}T00:00:00`);
  if (Number.isNaN(birthday.getTime())) return '未填写';
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  if (today.getMonth() < birthday.getMonth() || (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())) age -= 1;
  return `${Math.max(0, age)}岁`;
}

function familyMemberAgeNumber(member) {
  const label = familyMemberAge(member.birthDate);
  if (label !== '未填写') return Number.parseInt(label, 10);
  if (member.relation === '祖父母') return 72;
  if (member.relation === '父母') return 58;
  if (member.relation === '孙辈') return 8;
  if (member.relation === '子女') return 16;
  return activePatientCustomer?.age || 42;
}

function familyAvatarClass(member) {
  const age = familyMemberAgeNumber(member);
  const ageBand = age <= 17 ? 'child' : age <= 39 ? 'young' : age <= 64 ? 'middle' : 'senior';
  const gender = member.gender === '男' ? 'male' : 'female';
  return `age-${ageBand} gender-${gender}`;
}

function familyAvatarMarkup(member, className = 'family-node-avatar') {
  return `<span class="${className} family-person-avatar ${familyAvatarClass(member)}" role="img" aria-label="${escapeAccountText(member.gender || '')}${familyMemberAge(member.birthDate) === '未填写' ? '' : `，${familyMemberAge(member.birthDate)}`}人物头像"></span>`;
}

function familyNodeMarkup(member, position) {
  const selected = member.id === selectedFamilyMemberId;
  return `<button class="family-node${selected ? ' selected' : ''}${member.isCurrent ? ' current' : ''}" style="left:${position.x}px!important;top:${position.y}px!important" type="button" data-family-member-id="${escapeAccountText(member.id)}" aria-pressed="${selected}" aria-label="选择${escapeAccountText(member.name)}，${escapeAccountText(member.relation)}"><span class="family-node-avatar-wrap">${familyAvatarMarkup(member)}<small>${escapeAccountText(member.relation)}</small></span><span class="family-node-copy"><strong>${escapeAccountText(member.name)}</strong><em class="${member.customerStatus === '已建档' || member.isCurrent ? 'filed' : ''}">${escapeAccountText(member.customerStatus)}</em></span></button>`;
}

function renderFamilyGraphConnectors() {
  const tree = document.querySelector('#familyTree');
  const svg = document.querySelector('#familyGraphConnectors');
  const noteLayer = document.querySelector('#familyRelationNoteLayer');
  if (!tree || !svg || !noteLayer || !tree.familyLayout) return;
  const { width, height, items, nodeWidth, nodeHeight } = tree.familyLayout;
  const current = items.find((item) => item.member.isCurrent);
  if (!current) return;
  const centerX = current.x + nodeWidth / 2;
  const centerY = current.y + nodeHeight / 2;
  const noteButtons = [];
  const paths = items.filter((item) => !item.member.isCurrent).map((item) => {
    const targetX = item.x + nodeWidth / 2;
    const targetY = item.y + nodeHeight / 2;
    let d = '';
    let noteX = (centerX + targetX) / 2;
    let noteY = (centerY + targetY) / 2;
    if (Math.abs(item.y - current.y) < 4) {
      const fromX = item.x > current.x ? current.x + nodeWidth : current.x;
      const toX = item.x > current.x ? item.x : item.x + nodeWidth;
      d = `M ${fromX} ${centerY} H ${toX}`;
      noteX = (fromX + toX) / 2;
      noteY = centerY;
    } else if (item.y < current.y) {
      const fromY = current.y;
      const toY = item.y + nodeHeight;
      const midY = (fromY + toY) / 2;
      d = `M ${centerX} ${fromY} V ${midY} H ${targetX} V ${toY}`;
      noteY = midY;
    } else {
      const fromY = current.y + nodeHeight;
      const toY = item.y;
      const midY = (fromY + toY) / 2;
      d = `M ${centerX} ${fromY} V ${midY} H ${targetX} V ${toY}`;
      noteY = midY;
    }
    const relationKey = [current.member.id, item.member.id].sort().join('::');
    const relationNote = familyRelationNotes.get(relationKey) || '';
    const buttonLabel = relationNote || '＋ 添加备注';
    noteButtons.push(`<button class="family-relation-note${relationNote ? ' has-note' : ''}" style="left:${noteX}px;top:${noteY}px" type="button" data-relation-note-member-id="${escapeAccountText(item.member.id)}" title="${escapeAccountText(relationNote || `添加${item.member.name}与${current.member.name}的关系备注`)}">${escapeAccountText(buttonLabel)}</button>`);
    return `<path d="${d}"/><circle cx="${targetX}" cy="${item.y < current.y ? item.y + nodeHeight : item.y > current.y ? item.y : targetY}" r="3"/>`;
  }).join('');
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.style.width = `${width}px`;
  svg.style.height = `${height}px`;
  svg.style.transform = `scale(${familyGraphZoom})`;
  svg.innerHTML = paths;
  noteLayer.style.width = `${width}px`;
  noteLayer.style.height = `${height}px`;
  noteLayer.style.transform = `scale(${familyGraphZoom})`;
  noteLayer.innerHTML = noteButtons.join('');
}

function familyRelationKeyFor(memberId) {
  const currentMember = activeFamilyMembers.find((member) => member.isCurrent);
  return currentMember ? [currentMember.id, memberId].sort().join('::') : '';
}

function openFamilyRelationNote(memberId) {
  const member = activeFamilyMembers.find((item) => item.id === memberId);
  const currentMember = activeFamilyMembers.find((item) => item.isCurrent);
  if (!member || !currentMember) return;
  editingFamilyRelationMemberId = memberId;
  const relationNote = familyRelationNotes.get(familyRelationKeyFor(memberId)) || '';
  document.querySelector('#familyRelationNoteTitle').textContent = relationNote ? '修改关系备注' : '添加关系备注';
  document.querySelector('#familyRelationNoteDescription').textContent = `${member.name} 与 ${currentMember.name}`;
  document.querySelector('#familyRelationNoteInput').value = relationNote;
  document.querySelector('#familyRelationNoteBackdrop').hidden = false;
  requestAnimationFrame(() => document.querySelector('#familyRelationNoteInput').focus());
}

function closeFamilyRelationNote() {
  document.querySelector('#familyRelationNoteBackdrop').hidden = true;
  editingFamilyRelationMemberId = '';
}

document.querySelector('#familyRelationNoteLayer').addEventListener('click', (event) => {
  const button = event.target.closest('[data-relation-note-member-id]');
  if (button) openFamilyRelationNote(button.dataset.relationNoteMemberId);
});
document.querySelector('#familyRelationNoteClose').addEventListener('click', closeFamilyRelationNote);
document.querySelector('#familyRelationNoteCancel').addEventListener('click', closeFamilyRelationNote);
document.querySelector('#familyRelationNoteBackdrop').addEventListener('click', (event) => { if (event.target.id === 'familyRelationNoteBackdrop') closeFamilyRelationNote(); });
document.querySelector('#familyRelationNoteForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const note = document.querySelector('#familyRelationNoteInput').value.trim();
  const relationKey = familyRelationKeyFor(editingFamilyRelationMemberId);
  if (!relationKey) return;
  if (note) familyRelationNotes.set(relationKey, note);
  else familyRelationNotes.delete(relationKey);
  renderFamilyGraphConnectors();
  closeFamilyRelationNote();
  showToast(note ? '关系备注已保存' : '关系备注已清空');
});

function renderFamilyMemberDetail() {
  const member = activeFamilyMembers.find((item) => item.id === selectedFamilyMemberId) || activeFamilyMembers[0];
  if (!member) return;
  document.querySelector('#familyMemberName').innerHTML = `${familyAvatarMarkup(member, 'family-detail-avatar')}<strong>${escapeAccountText(member.name)}</strong><em class="${member.customerStatus === '已建档' || member.isCurrent ? 'filed' : ''}">${escapeAccountText(member.customerStatus)}</em>`;
  const fields = [
    ['姓名', member.name],
    ['性别', member.gender || '未填写'],
    ['年龄', familyMemberAge(member.birthDate)],
    ['关系', member.relation],
    ['客户状态', member.customerStatus],
    ['服务状态', member.serviceStatus],
    ['归属主理人', member.owner],
  ];
  document.querySelector('#familyMemberFields').innerHTML = fields.map(([label, value]) => `<div><dt>${label}</dt><dd>${escapeAccountText(value || '未填写')}</dd></div>`).join('');
  document.querySelector('#editFamilyMember').lastChild.textContent = member.isCurrent ? '修改信息' : '修改成员';
}

function renderFamilyRelationship() {
  const tree = document.querySelector('#familyTree');
  if (!tree || !activeFamilyMembers.length) return;
  const generations = [...new Set(activeFamilyMembers.map((member) => familyGenerationMap[member.relation] ?? 1))].sort((a, b) => a - b);
  const nodeWidth = 188;
  const nodeHeight = 84;
  const rowGap = 132;
  const maxRowMembers = Math.max(...generations.map((generation) => activeFamilyMembers.filter((member) => (familyGenerationMap[member.relation] ?? 1) === generation).length));
  const width = Math.max(800, maxRowMembers * 224 + 120);
  const items = [];
  generations.forEach((generation, rowIndex) => {
    const members = activeFamilyMembers.filter((member) => (familyGenerationMap[member.relation] ?? 1) === generation);
    const y = generations.length === 1 ? 144 : 30 + rowIndex * rowGap;
    if (generation === 0) {
      const current = members.find((member) => member.isCurrent);
      const peers = members.filter((member) => !member.isCurrent);
      if (current) items.push({ member: current, x: width / 2 - nodeWidth / 2, y });
      peers.forEach((member, index) => {
        const direction = index % 2 === 0 ? 1 : -1;
        const distance = (Math.floor(index / 2) + 1) * 224;
        items.push({ member, x: width / 2 - nodeWidth / 2 + direction * distance, y });
      });
    } else {
      const totalWidth = (members.length - 1) * 224;
      members.forEach((member, index) => items.push({ member, x: width / 2 - totalWidth / 2 - nodeWidth / 2 + index * 224, y }));
    }
  });
  const height = Math.max(372, 30 + (generations.length - 1) * rowGap + nodeHeight + 48);
  items.forEach((item) => {
    const savedPosition = familyNodePositions.get(item.member.id);
    if (!savedPosition) return;
    item.x = Math.max(0, Math.min(width - nodeWidth, savedPosition.x));
    item.y = Math.max(0, Math.min(height - nodeHeight, savedPosition.y));
  });
  tree.familyLayout = { width, height, items, nodeWidth, nodeHeight };
  tree.style.width = `${width}px`;
  tree.style.height = `${height}px`;
  tree.innerHTML = items.map((item) => familyNodeMarkup(item.member, item)).join('');
  tree.style.transform = `scale(${familyGraphZoom})`;
  document.querySelector('#familyMemberCount').textContent = activeFamilyMembers.length;
  document.querySelector('#familyFiledCount').textContent = activeFamilyMembers.filter((member) => member.isCurrent || member.customerStatus === '已建档').length;
  document.querySelector('#familyServingCount').textContent = activeFamilyMembers.filter((member) => member.serviceStatus === '服务中').length;
  document.querySelector('#familyFollowCount').textContent = activeFamilyMembers.filter((member) => member.customerStatus === '待跟进').length;
  renderFamilyMemberDetail();
  renderFamilyGraphConnectors();
}

function openFamilyMemberDrawer(member = null) {
  const backdrop = document.querySelector('#familyMemberBackdrop');
  const form = document.querySelector('#familyMemberForm');
  familyDrawerLastFocus = document.activeElement;
  editingFamilyMemberId = member?.id || '';
  form.reset();
  document.querySelector('#familyMemberDrawerTitle').textContent = member ? (member.isCurrent ? '修改当前客户' : '编辑家庭成员') : '新增家庭成员';
  document.querySelector('#familyMemberDrawerDescription').textContent = member ? '修改后，成员卡片与右侧基本信息将同步更新。' : '补充成员信息后，将自动加入家庭族谱。';
  document.querySelector('#familyMemberSubmit').textContent = member ? '保存修改' : '确认添加';
  const relationField = form.elements.relation;
  relationField.disabled = Boolean(member?.isCurrent);
  if (member) {
    relationField.value = member.relation;
    form.elements.name.value = member.name || '';
    form.elements.gender.value = member.gender || '';
    form.elements.birthDate.value = member.birthDate || '';
    form.elements.phone.value = member.phone || '';
    form.elements.health.value = member.health || '';
    form.elements.notes.value = member.notes || '';
  }
  backdrop.hidden = false;
  document.body.classList.add('family-member-drawer-open');
  requestAnimationFrame(() => (member?.isCurrent ? form.elements.name : relationField).focus());
}

function closeFamilyMemberDrawer() {
  const backdrop = document.querySelector('#familyMemberBackdrop');
  if (backdrop.hidden) return;
  backdrop.hidden = true;
  document.body.classList.remove('family-member-drawer-open');
  editingFamilyMemberId = '';
  familyDrawerLastFocus?.focus?.();
}

document.querySelector('#familyTree').addEventListener('click', (event) => {
  const node = event.target.closest('[data-family-member-id]');
  if (!node) return;
  if (suppressFamilyNodeClick) { suppressFamilyNodeClick = false; return; }
  selectedFamilyMemberId = node.dataset.familyMemberId;
  renderFamilyRelationship();
});

document.querySelector('#familyTree').addEventListener('pointerdown', (event) => {
  if (event.button !== 0) return;
  const node = event.target.closest('[data-family-member-id]');
  const tree = event.currentTarget;
  const item = tree.familyLayout?.items.find((entry) => entry.member.id === node?.dataset.familyMemberId);
  if (!node || !item) return;
  selectedFamilyMemberId = item.member.id;
  tree.querySelectorAll('.family-node').forEach((entry) => {
    const selected = entry === node;
    entry.classList.toggle('selected', selected);
    entry.setAttribute('aria-pressed', String(selected));
  });
  renderFamilyMemberDetail();
  familyNodeDrag = { node, item, pointerId: event.pointerId, startX: event.clientX, startY: event.clientY, originX: item.x, originY: item.y, moved: false };
  node.classList.add('dragging');
  node.setPointerCapture(event.pointerId);
  event.preventDefault();
});

document.querySelector('#familyTree').addEventListener('pointermove', (event) => {
  if (!familyNodeDrag || familyNodeDrag.pointerId !== event.pointerId) return;
  const tree = event.currentTarget;
  const { nodeWidth, nodeHeight, width, height } = tree.familyLayout;
  const deltaX = (event.clientX - familyNodeDrag.startX) / familyGraphZoom;
  const deltaY = (event.clientY - familyNodeDrag.startY) / familyGraphZoom;
  const x = Math.max(0, Math.min(width - nodeWidth, familyNodeDrag.originX + deltaX));
  const y = Math.max(0, Math.min(height - nodeHeight, familyNodeDrag.originY + deltaY));
  familyNodeDrag.moved ||= Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3;
  familyNodeDrag.item.x = x;
  familyNodeDrag.item.y = y;
  familyNodeDrag.node.style.setProperty('left', `${x}px`, 'important');
  familyNodeDrag.node.style.setProperty('top', `${y}px`, 'important');
  renderFamilyGraphConnectors();
});

function finishFamilyNodeDrag(event) {
  if (!familyNodeDrag || familyNodeDrag.pointerId !== event.pointerId) return;
  familyNodePositions.set(familyNodeDrag.item.member.id, { x: familyNodeDrag.item.x, y: familyNodeDrag.item.y });
  suppressFamilyNodeClick = familyNodeDrag.moved;
  if (suppressFamilyNodeClick) setTimeout(() => { suppressFamilyNodeClick = false; }, 0);
  familyNodeDrag.node.classList.remove('dragging');
  if (familyNodeDrag.node.hasPointerCapture(event.pointerId)) familyNodeDrag.node.releasePointerCapture(event.pointerId);
  familyNodeDrag = null;
}

document.querySelector('#familyTree').addEventListener('pointerup', finishFamilyNodeDrag);
document.querySelector('#familyTree').addEventListener('pointercancel', finishFamilyNodeDrag);
document.querySelector('#addFamilyMember').addEventListener('click', () => openFamilyMemberDrawer());
document.querySelector('#editFamilyMember').addEventListener('click', () => {
  const member = activeFamilyMembers.find((item) => item.id === selectedFamilyMemberId);
  if (member) openFamilyMemberDrawer(member);
});
document.querySelector('#familyMemberClose').addEventListener('click', closeFamilyMemberDrawer);
document.querySelector('#familyMemberCancel').addEventListener('click', closeFamilyMemberDrawer);
document.querySelector('#familyMemberBackdrop').addEventListener('click', (event) => { if (event.target.id === 'familyMemberBackdrop') closeFamilyMemberDrawer(); });
document.querySelector('#familyMemberForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.checkValidity()) { form.reportValidity(); return; }
  const existing = activeFamilyMembers.find((member) => member.id === editingFamilyMemberId);
  const member = existing || {
    id: `family-${Date.now()}`,
    isCurrent: false,
    customerStatus: '关联成员',
    serviceStatus: '未开通',
    owner: activePatientCustomer?.fho || '暂未分配',
  };
  if (!member.isCurrent) member.relation = form.elements.relation.value;
  member.name = form.elements.name.value.trim();
  member.gender = form.elements.gender.value;
  member.birthDate = form.elements.birthDate.value;
  member.phone = form.elements.phone.value.trim();
  member.health = form.elements.health.value.trim();
  member.notes = form.elements.notes.value.trim();
  if (!existing) activeFamilyMembers.push(member);
  selectedFamilyMemberId = member.id;
  renderFamilyRelationship();
  closeFamilyMemberDrawer();
  showToast(existing ? `${member.name}的信息已更新` : `${member.name}已加入家庭族谱`);
});

function setFamilyGraphZoom(nextZoom) {
  familyGraphZoom = Math.min(1.25, Math.max(.75, nextZoom));
  renderFamilyRelationship();
}
document.querySelector('#zoomOutFamilyGraph').addEventListener('click', () => setFamilyGraphZoom(familyGraphZoom - .1));
document.querySelector('#zoomInFamilyGraph').addEventListener('click', () => setFamilyGraphZoom(familyGraphZoom + .1));
document.querySelector('#fitFamilyGraph').addEventListener('click', () => setFamilyGraphZoom(activeFamilyMembers.length > 6 ? .85 : 1));
document.querySelector('#resetFamilyGraph').addEventListener('click', () => {
  activeFamilyMembers.forEach((member) => familyNodePositions.delete(member.id));
  setFamilyGraphZoom(1);
});
window.addEventListener('resize', () => requestAnimationFrame(renderFamilyGraphConnectors));

const metricDashboardTemplates = {
  comprehensive: {
    title: '综合健康指标看板', subtitle: '通过结果卡与趋势曲线查看关键健康指标', period: '本周',
    cards: [
      { tone: 'danger', label: '平均血压', value: '148/92', unit: 'mmHg', note: '较目标值偏高', trend: '↑ 8.6%' },
      { tone: 'good', label: '静息心率', value: '72', unit: 'bpm', note: '处于正常范围', trend: '稳定' },
      { tone: 'warning', label: '平均睡眠', value: '6.4', unit: '小时', note: '距离目标少 0.6 小时', trend: '↓ 5.2%' },
      { tone: 'blue', label: '当前体重', value: '63.2', unit: 'kg', note: '近 30 天保持稳定', trend: '-0.3kg' },
    ],
    chart: { title: '血压趋势', subtitle: '最近 7 次晨起测量', primaryLabel: '收缩压', secondaryLabel: '舒张压', primary: '8,56 105,72 202,43 299,65 396,52 493,78 592,62', secondary: '8,133 105,125 202,115 299,128 396,121 493,139 592,130' },
    targets: [{ label: '血压达标率', value: 42, note: '目标 ≥ 80%' }, { label: '睡眠达标率', value: 71, note: '目标 ≥ 85%' }, { label: '运动完成率', value: 100, note: '本周目标已完成' }],
    insight: { ringTitle: '数据完整度', ringValue: 86, ringLabel: '完整度', ringNoteTitle: '记录较完整', ringNote: '本周已完成 6 天健康数据记录', barTitle: '健康状态分布', bars: [{ label: '正常范围', value: 62 }, { label: '需关注', value: 25 }, { label: '异常范围', value: 13 }], heatmapTitle: '七日记录完成度', heatmapSummary: '6/7 天', heatmap: [3, 3, 2, 3, 1, 3, 0], heatmapNote: '周日尚未完成数据记录', recordTitle: '最近健康记录', recordSubtitle: '最近 4 条多维健康数据', records: [['11-16 07:30', '晨起血压', '150/94 mmHg', '偏高', 'danger', '智能血压计'], ['11-15 22:10', '睡眠时长', '6.4 小时', '未达标', 'warning', '手动记录'], ['11-15 18:40', '运动时长', '42 分钟', '达标', 'normal', '运动设备'], ['11-15 07:25', '晨起体重', '63.2 kg', '稳定', 'normal', '智能体脂秤']] },
    alertTitle: '综合指标提醒', alert: '连续 3 次晨起收缩压高于 145 mmHg，建议安排复测并同步家庭健康管理师。', action: '创建随访任务', toast: '已创建综合指标随访任务',
  },
  hypertension: {
    title: '高血压患者指标看板', subtitle: '跟踪血压、心率、测量频次与用药依从情况', period: '近 7 天',
    cards: [
      { tone: 'danger', label: '今日血压', value: '150/94', unit: 'mmHg', note: '高于管理目标', trend: '偏高' },
      { tone: 'warning', label: '7日平均血压', value: '148/92', unit: 'mmHg', note: '收缩压仍需控制', trend: '↑ 6.4%' },
      { tone: 'good', label: '静息心率', value: '72', unit: 'bpm', note: '处于正常范围', trend: '稳定' },
      { tone: 'blue', label: '服药依从率', value: '86', unit: '%', note: '漏服 1 次', trend: '6/7天' },
    ],
    chart: { title: '血压控制趋势', subtitle: '晨起收缩压与舒张压变化', primaryLabel: '收缩压', secondaryLabel: '舒张压', primary: '8,48 105,68 202,38 299,61 396,46 493,72 592,54', secondary: '8,126 105,120 202,108 299,122 396,116 493,132 592,124' },
    targets: [{ label: '血压达标率', value: 42, note: '目标 ≥ 80%' }, { label: '测量完成率', value: 86, note: '本周完成 6/7 次' }, { label: '用药完成率', value: 86, note: '本周漏服 1 次' }],
    insight: { ringTitle: '血压测量完成率', ringValue: 86, ringLabel: '完成率', ringNoteTitle: '本周测量 6 次', ringNote: '较上周增加 1 次，建议继续每日晨起测量', barTitle: '血压区间分布', bars: [{ label: '低于 140/90', value: 42 }, { label: '140–159/90–99', value: 43 }, { label: '≥ 160/100', value: 15 }], heatmapTitle: '每日测量频次', heatmapSummary: '共 9 次', heatmap: [2, 3, 1, 3, 2, 3, 0], heatmapNote: '周三、周五完成早晚双次测量', recordTitle: '最近血压记录', recordSubtitle: '含测量时段与设备来源', records: [['11-16 07:30', '晨起血压', '150/94 mmHg', '偏高', 'danger', '智能血压计'], ['11-15 20:42', '晚间血压', '146/90 mmHg', '偏高', 'warning', '智能血压计'], ['11-15 07:18', '晨起血压', '142/88 mmHg', '需关注', 'warning', '智能血压计'], ['11-14 20:36', '晚间血压', '136/84 mmHg', '达标', 'normal', '智能血压计']] },
    alertTitle: '血压异常提醒', alert: '最近 3 次晨起收缩压均高于 145 mmHg，建议复测并评估当前管理方案。', action: '创建血压随访', toast: '已创建血压随访任务',
  },
  diabetes: {
    title: '糖尿病患者指标看板', subtitle: '跟踪血糖、糖化血红蛋白、体重与饮食执行情况', period: '近 7 天',
    cards: [
      { tone: 'warning', label: '空腹血糖', value: '7.4', unit: 'mmol/L', note: '高于目标上限', trend: '↑ 0.6' },
      { tone: 'danger', label: '餐后2小时血糖', value: '10.2', unit: 'mmol/L', note: '连续 2 次偏高', trend: '需关注' },
      { tone: 'warning', label: '糖化血红蛋白', value: '7.1', unit: '%', note: '距离目标 0.1%', trend: '轻度偏高' },
      { tone: 'blue', label: '当前体重', value: '63.2', unit: 'kg', note: '本月下降 0.3kg', trend: '-0.3kg' },
    ],
    chart: { title: '血糖变化趋势', subtitle: '最近 7 天血糖记录', primaryLabel: '餐后2小时', secondaryLabel: '空腹血糖', primary: '8,58 105,44 202,70 299,52 396,76 493,48 592,64', secondary: '8,126 105,118 202,132 299,120 396,136 493,124 592,128' },
    targets: [{ label: '空腹血糖达标率', value: 57, note: '目标 ≥ 80%' }, { label: '餐后血糖达标率', value: 43, note: '目标 ≥ 75%' }, { label: '饮食记录完成率', value: 71, note: '本周完成 5/7 天' }],
    insight: { ringTitle: '饮食记录完成率', ringValue: 71, ringLabel: '完成率', ringNoteTitle: '本周记录 5 天', ringNote: '晚餐碳水摄入偏高，与餐后血糖波动相关', barTitle: '血糖区间分布', bars: [{ label: '目标范围', value: 43 }, { label: '高于目标', value: 43 }, { label: '低于目标', value: 14 }], heatmapTitle: '每日血糖记录', heatmapSummary: '共 12 次', heatmap: [3, 2, 3, 1, 3, 2, 2], heatmapNote: '空腹记录 7 次，餐后记录 5 次', recordTitle: '最近血糖记录', recordSubtitle: '覆盖空腹、餐后及睡前时段', records: [['11-16 09:35', '早餐后2小时', '10.2 mmol/L', '偏高', 'danger', '血糖仪'], ['11-16 06:58', '空腹血糖', '7.4 mmol/L', '偏高', 'warning', '血糖仪'], ['11-15 21:42', '睡前血糖', '8.1 mmol/L', '需关注', 'warning', '手动录入'], ['11-15 09:26', '早餐后2小时', '8.8 mmol/L', '达标', 'normal', '血糖仪']] },
    alertTitle: '血糖异常提醒', alert: '最近 2 次餐后 2 小时血糖超过 10 mmol/L，建议复核饮食记录并安排随访。', action: '创建血糖随访', toast: '已创建血糖随访任务',
  },
  weight: {
    title: '体重管理指标看板', subtitle: '跟踪体重、BMI、腰围与体脂率的阶段变化', period: '近 30 天',
    cards: [
      { tone: 'blue', label: '当前体重', value: '63.2', unit: 'kg', note: '本月下降 0.3kg', trend: '-0.3kg' },
      { tone: 'warning', label: 'BMI', value: '24.7', unit: 'kg/m²', note: '接近超重范围', trend: '需控制' },
      { tone: 'good', label: '腰围', value: '82', unit: 'cm', note: '较上月下降 1cm', trend: '-1cm' },
      { tone: 'warning', label: '体脂率', value: '28.6', unit: '%', note: '距离目标 2.6%', trend: '↓ 0.4%' },
    ],
    chart: { title: '体重与体脂趋势', subtitle: '最近 7 次测量记录', primaryLabel: '体重', secondaryLabel: '体脂率', primary: '8,62 105,68 202,74 299,82 396,88 493,94 592,100', secondary: '8,126 105,124 202,129 299,132 396,134 493,138 592,140' },
    targets: [{ label: '阶段减重目标', value: 68, note: '已完成 2.1/3.0kg' }, { label: '饮食记录完成率', value: 82, note: '近 30 天完成 23 天' }, { label: '运动完成率', value: 100, note: '本周目标已完成' }],
    insight: { ringTitle: '阶段减重目标', ringValue: 68, ringLabel: '已完成', ringNoteTitle: '已减重 2.1kg', ringNote: '距离本阶段目标还差 0.9kg，进度符合预期', barTitle: '身体成分目标', bars: [{ label: '体重目标', value: 68 }, { label: '腰围目标', value: 76 }, { label: '体脂目标', value: 61 }], heatmapTitle: '七日运动强度', heatmapSummary: '4 天达标', heatmap: [3, 1, 3, 0, 2, 3, 1], heatmapNote: '累计中等强度运动 186 分钟', recordTitle: '最近身体测量', recordSubtitle: '来自智能体脂秤与手动记录', records: [['11-16 07:25', '晨起体重', '63.2 kg', '稳定', 'normal', '智能体脂秤'], ['11-16 07:25', '体脂率', '28.6%', '需关注', 'warning', '智能体脂秤'], ['11-12 07:18', '腰围', '82 cm', '改善', 'normal', '手动记录'], ['11-09 07:30', 'BMI', '24.7 kg/m²', '临界', 'warning', '自动计算']] },
    alertTitle: '体重管理提示', alert: '体重变化总体平稳，但 BMI 仍接近超重范围，建议继续保持饮食记录与规律运动。', action: '调整管理目标', toast: '已打开体重管理目标设置',
  },
};

function renderMetricDashboard(templateKey) {
  const template = metricDashboardTemplates[templateKey] || metricDashboardTemplates.comprehensive;
  document.querySelector('#metricDashboardTitle').textContent = template.title;
  document.querySelector('#metricDashboardSubtitle').textContent = template.subtitle;
  document.querySelectorAll('[data-metric-card]').forEach((card, index) => {
    const metric = template.cards[index];
    card.className = metric.tone;
    card.querySelector('small').textContent = metric.label;
    card.querySelector('strong').innerHTML = `${metric.value} <em>${metric.unit}</em>`;
    card.querySelector('p').textContent = metric.note;
    card.querySelector(':scope > b').textContent = metric.trend;
  });
  document.querySelector('#metricChartTitle').textContent = template.chart.title;
  document.querySelector('#metricChartSubtitle').textContent = template.chart.subtitle;
  const legendLabels = document.querySelectorAll('#metricChartLegend b');
  legendLabels[0].textContent = template.chart.primaryLabel;
  legendLabels[1].textContent = template.chart.secondaryLabel;
  document.querySelector('[data-metric-line="primary"]').setAttribute('points', template.chart.primary);
  document.querySelector('[data-metric-line="secondary"]').setAttribute('points', template.chart.secondary);
  const pointMarkup = template.chart.primary.split(' ').map((point) => {
    const [cx, cy] = point.split(',');
    return `<circle cx="${cx}" cy="${cy}" r="4"/>`;
  }).join('');
  document.querySelector('#metricChartPoints').innerHTML = pointMarkup;
}

function setPatientSection(section) {
  document.querySelectorAll('[data-patient-section]').forEach((button) => {
    const selected = button.dataset.patientSection === section || (section === 'experts' && button.dataset.patientSection === 'reports');
    button.classList.toggle('active', selected);
    button.setAttribute('aria-current', selected ? 'page' : 'false');
  });
  document.querySelectorAll('[data-patient-panel]').forEach((panel) => {
    panel.hidden = panel.dataset.patientPanel !== section;
  });
  if (section === 'basic') setPatientDetailTab('overview');
  if (section === 'services') setServicePanel('reminders');
  if (section === 'reports') document.querySelector('#reportNameFilter')?.focus({ preventScroll: true });
  if (section === 'experts') document.querySelector('#expertSearch')?.focus({ preventScroll: true });
  const expertContext = section === 'experts';
  document.querySelector('.patient-page-header').classList.toggle('expert-context', expertContext);
  document.querySelector('#expertBreadcrumb').hidden = !expertContext;
  document.querySelector('#patientBack').setAttribute('aria-label', section === 'experts' ? '返回报告文档' : '返回全部客户');
}

function setServicePanel(panel) {
  document.querySelectorAll('[data-service-view]').forEach((button) => {
    const selected = button.dataset.serviceView === panel;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-selected', String(selected));
  });
  document.querySelectorAll('[data-service-panel]').forEach((item) => { item.hidden = item.dataset.servicePanel !== panel; });
}

function setServiceOverlay(id, open) {
  const overlay = document.querySelector(`#${id}`);
  if (!overlay) return;
  overlay.hidden = !open;
  document.body.classList.toggle('modal-open', open || [...document.querySelectorAll('.service-drawer-backdrop,.service-modal-backdrop')].some((item) => !item.hidden));
  if (open) overlay.querySelector('input,button')?.focus({ preventScroll: true });
}

function filterPatientReminders() {
  const month = document.querySelector('#reminderTimeFilter')?.value || '';
  const type = document.querySelector('#reminderTypeFilter')?.value || '';
  const status = document.querySelector('#reminderStatusFilter')?.value || '';
  document.querySelectorAll('.reminder-month').forEach((group) => {
    let visible = 0;
    group.querySelectorAll('.reminder-row').forEach((row) => {
      const show = (!month || group.dataset.month === month) && (!type || row.dataset.reminderType === type) && (!status || row.dataset.reminderStatus === status);
      row.hidden = !show;
      if (show) visible += 1;
    });
    group.hidden = visible === 0;
  });
}

function decorateReminderRow(row) {
  if (!row || row.querySelector('.reminder-check')) return;
  const completed = row.dataset.reminderStatus === 'completed';
  const check = document.createElement('button');
  check.type = 'button';
  check.className = `reminder-check${completed ? ' completed' : ''}`;
  check.setAttribute('aria-label', completed ? '该提醒已完成' : '勾选完成该提醒');
  check.setAttribute('aria-pressed', String(completed));
  check.title = completed ? '已完成' : '点击标记为完成';
  check.innerHTML = '<svg aria-hidden="true"><use href="#i-check-circle"/></svg>';
  row.prepend(check);
}

function completePatientReminder(row) {
  if (!row || row.dataset.reminderStatus === 'completed') return;
  row.dataset.reminderStatus = 'completed';
  row.classList.add('just-completed');
  const check = row.querySelector('.reminder-check');
  check.classList.add('completed');
  check.setAttribute('aria-label', '该提醒已完成');
  check.setAttribute('aria-pressed', 'true');
  check.title = '已完成';
  const state = row.querySelector('.reminder-state');
  state.className = 'reminder-state done';
  state.innerHTML = '<svg aria-hidden="true"><use href="#i-check-circle"/></svg>已完成';
  row.querySelector('.reminder-more')?.remove();
  const now = new Date();
  const pad = (value) => String(value).padStart(2, '0');
  const completedAt = document.createElement('small');
  completedAt.textContent = `完成时间：${now.getFullYear()}/${pad(now.getMonth() + 1)}/${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`;
  row.append(completedAt);
  document.querySelector('#reminderPending').textContent = String(Math.max(0, Number(document.querySelector('#reminderPending').textContent) - 1));
  document.querySelector('#reminderCompleted').textContent = String(Number(document.querySelector('#reminderCompleted').textContent) + 1);
  filterPatientReminders();
  window.setTimeout(() => row.classList.remove('just-completed'), 500);
  showToast('提醒已标记为完成');
}

function preparePatientReminderTimeline() {
  document.querySelectorAll('.reminder-row').forEach(decorateReminderRow);
  document.querySelectorAll('.reminder-month').forEach((month) => {
    const heading = month.querySelector('h3');
    heading.innerHTML = `<button class="reminder-month-toggle" type="button" aria-expanded="true"><svg aria-hidden="true"><use href="#i-chevron"/></svg><span>${month.dataset.month}</span></button>`;
  });
  document.querySelectorAll('.reminder-state.done').forEach((state) => { state.innerHTML = '<svg aria-hidden="true"><use href="#i-check-circle"/></svg>已完成'; });
  document.querySelectorAll('.reminder-state.pending').forEach((state) => { state.innerHTML = '<svg aria-hidden="true"><use href="#i-clock"/></svg>待提醒'; });
  document.querySelectorAll('.reminder-more').forEach((button) => { button.innerHTML = '<svg aria-hidden="true"><use href="#i-menu"/></svg>'; button.setAttribute('aria-label', '更多提醒操作'); });
}

function renderDashboardLearning(status) {
  const courses = dashboardLearningContent[status];
  const list = document.querySelector('#dashboardCourseList');
  document.querySelectorAll('[data-learning-status]').forEach((button) => {
    const selected = button.dataset.learningStatus === status;
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-selected', String(selected));
    button.querySelector('strong').textContent = dashboardLearningCounts[button.dataset.learningStatus];
  });
  document.querySelector('#learningSummary').textContent = `展示 ${courses.length} 项${status}内容`;
  list.innerHTML = courses.map((course, index) => `
    <article>
      <span class="course-index">${String(index + 1).padStart(2, '0')}</span>
      <div class="course-copy">
        <div class="course-heading"><em class="course-tag ${course.tagClass}">${course.tag}</em><h3>${course.title}</h3></div>
        <p class="course-description">${course.summary}</p>
      </div>
      <div class="course-action-cell">
        ${course.progress ? `<div class="course-progress-side"><div class="course-progress-copy"><span><small>${course.progress === 100 ? '已完成' : '学习进度'}</small><b>${course.progress}%</b></span><i><b style="width:${course.progress}%"></b></i></div></div>` : `<small class="course-level-side">${course.level}课程</small>`}
        <button ${course.action === '加入学习' ? `data-join-learning="${course.title}"` : `data-toast="${course.action}${course.title}"`}>${course.action}<span aria-hidden="true">→</span></button>
      </div>
    </article>
  `).join('');
  list.classList.remove('content-enter');
  requestAnimationFrame(() => list.classList.add('content-enter'));
}

function addCourseToPending(title) {
  const newCourses = dashboardLearningContent.新上架;
  const courseIndex = newCourses.findIndex((course) => course.title === title);
  if (courseIndex < 0) return;
  const [course] = newCourses.splice(courseIndex, 1);
  dashboardLearningContent.待学习.unshift({
    ...course,
    tag: '待学习',
    tagClass: 'new',
    detail: '刚刚加入',
    action: '开始学习',
  });
  dashboardLearningCounts.待学习 += 1;
  dashboardLearningCounts.新上架 = Math.max(0, dashboardLearningCounts.新上架 - 1);
  document.querySelectorAll('[data-learning-status]').forEach((button) => {
    button.querySelector('strong').textContent = dashboardLearningCounts[button.dataset.learningStatus];
  });
  renderDashboardLearning('待学习');
  showToast(`“${title}”已加入待学习`);
}

function renderManagedCustomers() {
  const keyword = document.querySelector('#managedKeyword').value.trim().toLowerCase();
  const source = document.querySelector('#managedSourceFilter').value;
  const warningOnly = document.querySelector('#managedWarningFilter').checked;
  const overdueOnly = document.querySelector('#managedOverdueFilter').checked;
  const exitReason = document.querySelector('#managedExitReasonFilter').value;
  const filtered = managedCustomerGroups[activeManagedTab].filter((item) => {
    const matchesKeyword = !keyword || `${item.name}${item.phone}${item.visitNo || ''}`.toLowerCase().includes(keyword);
    if (activeManagedTab === 'pending') return matchesKeyword && (!source || item.source === source);
    if (activeManagedTab === 'active') return matchesKeyword && (!warningOnly || item.warning) && (!overdueOnly || item.overdue);
    return matchesKeyword && (!exitReason || item.reason === exitReason);
  });
  const personCell = (item) => `<button class="managed-person managed-person-link" type="button" data-managed-patient="${item.name}" aria-label="查看${item.name}的患者档案"><span class="managed-avatar ${item.gender === '女' ? 'female' : ''}">${item.name.slice(0, 1)}</span><span><strong>${item.name}</strong><small>${item.gender} · ${item.age}岁</small></span>${item.overdue ? '<em class="managed-overdue">任务已逾期</em>' : ''}</button>`;
  const detailsCell = (item) => `<dl class="managed-cell-list"><div><dt>就诊号</dt><dd>${item.visitNo}</dd></div><div><dt>手机号</dt><dd>${item.phone}</dd></div></dl>`;
  const heads = {
    pending: '<tr><th class="check-cell"><input type="checkbox" id="selectAllManaged" aria-label="选择当前页全部客户" /></th><th>客户信息</th><th>申请信息</th><th>联系方式</th><th>AI评估建议</th><th>操作</th></tr>',
    active: '<tr><th class="check-cell"><input type="checkbox" id="selectAllManaged" aria-label="选择当前页全部客户" /></th><th>客户信息</th><th>入组信息</th><th>联系方式</th><th>健康负责人</th><th>当前管理方案</th><th>当前任务节点</th><th>操作</th></tr>',
    exited: '<tr><th class="check-cell"><input type="checkbox" id="selectAllManaged" aria-label="选择当前页全部客户" /></th><th>客户信息</th><th>联系方式</th><th>历史管理记录</th><th>出组原因</th><th>操作</th></tr>',
  };
  document.querySelector('#managedTableHead').innerHTML = heads[activeManagedTab];
  if (activeManagedTab === 'pending') {
    document.querySelector('#managedRows').innerHTML = filtered.map((item) => `<tr><td class="check-cell"><input class="managed-check" type="checkbox" aria-label="选择${item.name}" /></td><td>${personCell(item)}</td><td><dl class="managed-cell-list"><div><dt>患者来源</dt><dd>${item.source}</dd></div><div><dt>申请日期</dt><dd>${item.applyDate}</dd></div></dl></td><td>${detailsCell(item)}</td><td><div class="managed-ai-advice"><svg><use href="#i-heart"/></svg><span>${item.aiAdvice}</span></div></td><td><div class="managed-actions"><button class="secondary" type="button" data-toast="已拒绝${item.name}的入组申请（演示）">拒绝入组</button><button class="primary" type="button" data-toast="已接收${item.name}入组（演示）">接收入组</button></div></td></tr>`).join('');
  } else if (activeManagedTab === 'active') {
    document.querySelector('#managedRows').innerHTML = filtered.map((item) => `<tr><td class="check-cell"><input class="managed-check" type="checkbox" aria-label="选择${item.name}" /></td><td>${personCell(item)}</td><td><dl class="managed-cell-list"><div><dt>入组时间</dt><dd>${item.joinedAt}</dd></div><div><dt>在组时长</dt><dd>${item.days}天</dd></div></dl></td><td>${detailsCell(item)}</td><td><strong>${item.owner}</strong>${item.warning ? '<small class="managed-warning-note">有预警待处理</small>' : ''}</td><td><strong class="managed-plan-name">${item.plan}</strong></td><td><dl class="managed-cell-list"><div><dt>任务节点</dt><dd>${item.task}</dd></div><div><dt>计划日期</dt><dd class="${item.overdue ? 'text-danger' : ''}">${item.taskDate}</dd></div></dl></td><td><div class="managed-actions"><button class="secondary" type="button" data-toast="已标记${item.name}">标记</button><button class="secondary" type="button" data-toast="正在查看${item.name}的任务">查看任务</button><button class="primary" type="button" data-toast="正在调整${item.name}的方案">调整方案</button><button class="icon" type="button" data-toast="已打开${item.name}的更多操作" aria-label="更多操作">•••</button></div></td></tr>`).join('');
  } else {
    document.querySelector('#managedRows').innerHTML = filtered.map((item) => `<tr><td class="check-cell"><input class="managed-check" type="checkbox" aria-label="选择${item.name}" /></td><td>${personCell(item)}</td><td>${detailsCell(item)}</td><td><div class="managed-history"><strong>${item.period}（${item.days}天）</strong><span>${item.note}</span></div></td><td><span class="managed-exit-reason">${item.reason}</span></td><td><div class="managed-actions"><button class="secondary" type="button" data-toast="正在查看${item.name}的历史管理详情">查看详情</button></div></td></tr>`).join('');
  }
  document.querySelector('#managedEmpty').hidden = filtered.length > 0;
  document.querySelector('#managedTotal').textContent = `共 ${filtered.length} 条`;
  document.querySelectorAll('[data-managed-patient]').forEach((button) => button.addEventListener('click', () => {
    const customer = Object.values(managedCustomerGroups).flat().find((item) => item.name === button.dataset.managedPatient);
    if (customer) openPatientArchive(customer, 'managedCustomers');
  }));
  document.querySelector('#selectAllManaged')?.addEventListener('change', (event) => {
    document.querySelectorAll('.managed-check').forEach((checkbox) => { checkbox.checked = event.target.checked; });
  });
}

function customerClass(value) {
  return value.replace(/[（）个月型]/g, '');
}

function syncCustomerStageUI() {
  document.querySelectorAll('[data-customer-stage]').forEach((button) => button.classList.toggle('active', button.dataset.customerStage === activeCustomerStage));
}

function parseSmartCustomerFilter(text) {
  const result = { smart: text, smartTags: [] };
  const mappings = [
    { key: 'stage', values: ['潜在客户', '待生效', '在管客户', '历史客户'], aliases: { 潜在: '潜在客户', 在管: '在管客户', 历史: '历史客户' } },
    { key: 'source', values: ['微信分享', '服务包推广', '客户推荐', '机构推广', 'FHO二维码', '线下活动'], aliases: { 微信: '微信分享', 服务包: '服务包推广', 推荐: '客户推荐', 机构: '机构推广', 二维码: 'FHO二维码', 线下: '线下活动' } },
    { key: 'fho', values: ['二级FHO-A1', '二级FHO-A2'], aliases: { A1: '二级FHO-A1', A2: '二级FHO-A2' } },
    { key: 'serviceStatus', values: ['未购买', '待生效', '服务中', '已结束'], aliases: {} },
    { key: 'next', values: ['待首次联系', '提醒激活', '健康随访', '方案评估', '待上传随访记录', '定期回访'], aliases: { 首次联系: '待首次联系', 激活: '提醒激活', 随访记录: '待上传随访记录', 健康随访: '健康随访', 方案评估: '方案评估', 回访: '定期回访' } },
  ];
  mappings.forEach(({ key, values, aliases }) => {
    const direct = values.find((value) => text.includes(value));
    const alias = Object.keys(aliases).find((value) => text.toUpperCase().includes(value.toUpperCase()));
    const matched = direct || (alias ? aliases[alias] : '');
    if (matched && !(key === 'serviceStatus' && matched === '待生效' && text.includes('待生效客户'))) {
      result[key] = matched;
      result.smartTags.push(matched);
    }
  });
  if (/女性|女士|女客户/.test(text)) { result.gender = '女'; result.smartTags.push('女性'); }
  if (/男性|先生|男客户/.test(text)) { result.gender = '男'; result.smartTags.push('男性'); }
  const serviceKeyword = ['高血压', '糖尿病', '慢性肾脏病', '体重管理', '睡眠', '女性健康', '综合健康'].find((keyword) => text.includes(keyword));
  if (serviceKeyword) { result.serviceContains = serviceKeyword; result.smartTags.push(`服务包含${serviceKeyword}`); }
  const ageAbove = text.match(/(\d{2})\s*岁?(?:以上|及以上|起)/);
  const ageBelow = text.match(/(\d{2})\s*岁?(?:以下|及以下)/);
  if (ageAbove) { result.ageMin = Number(ageAbove[1]); result.smartTags.push(`${ageAbove[1]}岁以上`); }
  if (ageBelow) { result.ageMax = Number(ageBelow[1]); result.smartTags.push(`${ageBelow[1]}岁以下`); }
  result.smartTags = [...new Set(result.smartTags)];
  result.smartKeys = ['stage', 'source', 'fho', 'serviceStatus', 'next', 'gender', 'serviceContains', 'ageMin', 'ageMax'].filter((key) => result[key] !== undefined);
  return result;
}

function escapeSmartValue(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
}

function parsedSmartRules(parsed) {
  const rules = [];
  ['stage', 'source', 'fho', 'serviceStatus', 'next', 'gender'].forEach((field) => {
    if (parsed[field]) rules.push({ field, operator: 'equals', value: parsed[field] });
  });
  if (parsed.serviceContains) rules.push({ field: 'service', operator: 'contains', value: parsed.serviceContains });
  if (parsed.ageMin) rules.push({ field: 'age', operator: 'gte', value: String(parsed.ageMin) });
  if (parsed.ageMax) rules.push({ field: 'age', operator: 'lte', value: String(parsed.ageMax) });
  return rules;
}

function smartRuleSummary(rules) {
  if (!rules.length) return '';
  return `查找${rules.map((rule) => `${smartFieldLabels[rule.field]}${smartOperatorLabels[rule.operator]}“${rule.value}”`).join('，且')}`;
}

function renderSmartRules() {
  const list = document.querySelector('#smartRulesList');
  const empty = document.querySelector('#smartRulesEmpty');
  empty.hidden = smartDraftRules.length > 0;
  list.innerHTML = smartDraftRules.map((rule, index) => `
    <div class="smart-rule-row" data-rule-index="${index}">
      <span class="smart-rule-number">${index + 1}</span>
      <select data-rule-part="field" aria-label="条件字段">
        ${Object.entries(smartFieldLabels).map(([value, label]) => `<option value="${value}"${rule.field === value ? ' selected' : ''}>${label}</option>`).join('')}
      </select>
      <span class="smart-rule-caption">规则</span>
      <select data-rule-part="operator" aria-label="判断规则">
        ${Object.entries(smartOperatorLabels).map(([value, label]) => `<option value="${value}"${rule.operator === value ? ' selected' : ''}>${label}</option>`).join('')}
      </select>
      <span class="smart-rule-caption">值</span>
      <input data-rule-part="value" value="${escapeSmartValue(rule.value)}" aria-label="条件值" />
      <button type="button" data-remove-smart-rule="${index}" aria-label="删除条件">×</button>
    </div>
    ${index < smartDraftRules.length - 1 ? '<div class="smart-rule-join"><span>且</span></div>' : ''}
  `).join('');
  smartDraftSummary = smartDraftRules.length ? (smartDraftSummary || smartRuleSummary(smartDraftRules)) : '';
  document.querySelector('#smartGeneratedSummary').hidden = smartDraftRules.length === 0;
  document.querySelector('#smartGeneratedText').textContent = smartDraftSummary || smartRuleSummary(smartDraftRules);
  document.querySelector('#applySmartRules').disabled = smartDraftRules.length === 0;
}

function openSmartFilterDrawer() {
  smartDraftRules = (customerFilters.smartRules || []).map((rule) => ({ ...rule }));
  smartDraftSummary = customerFilters.smartSummary || '';
  document.querySelector('#customerSmartFilter').value = customerFilters.smartPrompt || '';
  document.querySelector('#generateSmartRules').disabled = !customerFilters.smartPrompt;
  document.querySelector('#optimizeSmartFilter').disabled = !customerFilters.smartPrompt;
  document.querySelectorAll('[data-smart-template]').forEach((button) => button.classList.remove('active'));
  renderSmartRules();
  document.querySelector('#smartFilterBackdrop').hidden = false;
  document.querySelector('.smart-filter-drawer').scrollTop = 0;
}

function closeSmartFilterDrawer() {
  document.querySelector('#smartFilterBackdrop').hidden = true;
}

function generateSmartRules() {
  const prompt = document.querySelector('#customerSmartFilter').value.trim();
  if (!prompt) { showToast('请先描述想要查找的客户'); return; }
  const parsed = parseSmartCustomerFilter(prompt);
  smartDraftRules = parsedSmartRules(parsed);
  if (!smartDraftRules.length) {
    showToast('暂未识别出明确条件，可尝试模板或手动添加');
    return;
  }
  smartDraftSummary = `查找${parsed.smartTags.join('、')}的客户`;
  document.querySelectorAll('[data-smart-template]').forEach((button) => button.classList.remove('active'));
  renderSmartRules();
  showToast(`已生成 ${smartDraftRules.length} 条规则，请核对`);
}

function matchesSmartRules(item, rules = []) {
  const values = {
    stage: item.stage,
    source: item.source,
    fho: item.fho,
    serviceStatus: item.serviceStatus,
    next: item.next,
    gender: item.name.includes('女士') ? '女' : '男',
    age: item.age,
    service: item.service,
  };
  return rules.every((rule) => {
    const actual = values[rule.field];
    if (rule.operator === 'contains') return String(actual).includes(rule.value);
    if (rule.operator === 'gte') return Number(actual) >= Number(rule.value);
    if (rule.operator === 'lte') return Number(actual) <= Number(rule.value);
    return String(actual) === String(rule.value);
  });
}

function renderCustomers() {
  const keyword = (customerFilters.keyword || '').toLowerCase();
  const filtered = customers.filter((item) => {
    const stageMatches = activeCustomerStage === '全部' || item.stage === activeCustomerStage;
    return stageMatches && (!keyword || `${item.name}${item.phone}`.toLowerCase().includes(keyword))
      && (!customerFilters.source || item.source === customerFilters.source)
      && (!customerFilters.fho || item.fho === customerFilters.fho)
      && (!customerFilters.serviceStatus || item.serviceStatus === customerFilters.serviceStatus)
      && (!customerFilters.next || item.next === customerFilters.next)
      && (!customerFilters.gender || (customerFilters.gender === '女' ? item.name.includes('女士') : item.name.includes('先生')))
      && (!customerFilters.ageMin || item.age >= customerFilters.ageMin)
      && (!customerFilters.ageMax || item.age <= customerFilters.ageMax)
      && matchesSmartRules(item, customerFilters.smartRules);
  });
  const body = document.querySelector('#customerRows');
  body.innerHTML = filtered.map((item, index) => {
    const needsProfileCompletion = !item.idCard || !item.phone;
    return `
    <tr class="customer-row" data-customer-name="${item.name}" tabindex="0" aria-label="打开${item.name}的患者档案">
      <td class="check-cell"><input class="customer-check" type="checkbox" data-customer-index="${index}" data-customer-name="${item.name}" aria-label="选择${item.name}" /></td>
      <td><div class="customer-identity"><span class="customer-avatar ${item.name.includes('女士') ? 'female' : ''}">${item.name.slice(0, 1)}</span><span><span class="customer-name-line"><strong>${item.name}</strong>${needsProfileCompletion ? '<em class="profile-incomplete" title="身份证号或手机号待完善">待完善</em>' : ''}<em class="customer-follow-tag follow-${item.followTag}">${item.followTag}</em></span><small><span>${item.phone || '--'}</span><i>${item.name.includes('女士') ? '女' : '男'} · ${item.age}岁</i></small></span></div></td>
      <td>${item.fho}</td>
      <td><span class="relationship-tag"><svg aria-hidden="true"><use href="#i-user"/></svg>关联 ${item.relationCount} 人</span></td>
      <td><div class="next-plan"><span><strong>${item.next}</strong><small>${item.nextDate}</small></span></div></td>
      <td><span class="team-name ${item.teamName ? '' : 'empty'}">${item.teamName || '--'}</span></td>
      <td><span class="mark-status mark-${item.markStatus}">${item.markStatus}</span></td>
      <td><div class="row-actions customer-row-actions"><button class="customer-mark-trigger" type="button" data-mark-customer="${item.name}">标记</button><button class="customer-more-trigger" type="button" data-customer-more="${item.name}" aria-expanded="false">更多⌄</button><div class="customer-more-menu" hidden><button type="button" data-open-patient="${item.name}">查看档案</button><button type="button" data-toast="${item.name}的商机归属：${item.source} · ${item.fho}">查看商机归属</button><button type="button" data-toast="正在补充${item.name}的客户信息">补充客户信息</button><button type="button" data-toast="${item.name}已关联 ${item.relationCount} 人，主要关系：${item.relationship}">查看社会关系</button><button type="button" data-toast="${item.name}当前服务进度：${item.serviceStatus}">查看服务进度</button></div></div></td>
    </tr>`;
  }).join('');
  document.querySelector('#customerEmpty').hidden = filtered.length > 0;
  document.querySelector('#customerTotal').textContent = activeCustomerStage === '全部' && !Object.values(customerFilters).some(Boolean) ? '共 552 条' : `当前显示 ${filtered.length} 条`;
  if (!document.querySelector('#smartAppliedSummary').hidden) document.querySelector('#smartHitCount').textContent = `命中 ${filtered.length} 位客户`;
  updateCustomerSelection();
  return filtered.length;
}

function updateCustomerSelection() {
  const checks = [...document.querySelectorAll('.customer-check')];
  const checked = checks.filter((item) => item.checked).length;
  document.querySelector('#selectedCustomerCount').textContent = checked;
  document.querySelector('#customerBatchActions').hidden = checked === 0;
  ['selectAllCustomers', 'footerSelectAll'].forEach((id) => {
    const control = document.querySelector(`#${id}`);
    control.checked = checks.length > 0 && checked === checks.length;
    control.indeterminate = checked > 0 && checked < checks.length;
  });
}

function selectedCustomers() {
  const names = new Set([...document.querySelectorAll('.customer-check:checked')].map((checkbox) => checkbox.dataset.customerName));
  return customers.filter((customer) => names.has(customer.name));
}

function exportSelectedCustomers() {
  const selected = selectedCustomers();
  if (!selected.length) { showToast('请先选择需要导出的客户'); return; }
  const headings = ['姓名', '性别', '年龄', '联系方式', '归属FHO', '社会关系', '下一步事项', '下一步时间', '所在团队', '标记状态'];
  const rows = selected.map((item) => [item.name, item.name.includes('女士') ? '女' : '男', `${item.age}岁`, item.phone || '--', item.fho, `关联 ${item.relationCount} 人`, item.next, item.nextDate, item.teamName || '--', item.markStatus]);
  const table = `<table><thead><tr>${headings.map((value) => `<th>${value}</th>`).join('')}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((value) => `<td>${escapeAccountText(value)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  const workbook = `<!doctype html><html><head><meta charset="UTF-8"><style>body,table{font:16px SimHei,黑体,sans-serif}table{border-collapse:collapse}th,td{border:1px solid #cbd5e1;padding:8px 12px;text-align:left}th{background:#eaf2fb;font-weight:700}td{font-size:16px;font-weight:600}small,time,.note{font-size:12px}strong,b{font-weight:700}</style></head><body>${table}</body></html>`;
  const url = URL.createObjectURL(new Blob(['\ufeff', workbook], { type: 'application/vnd.ms-excel;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `全部客户_${new Date().toISOString().slice(0, 10)}.xls`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast(`已导出 ${selected.length} 位客户的 Excel 表格`);
}

function renderLeads() {
  const filtered = leads.filter((item) => activeStatus === '全部' || item.status === activeStatus);
  rows.innerHTML = filtered.map((item) => `
    <article class="lead-item">
      <div class="lead-content">
        <h3>${item.name}<span class="patient-facts"><i>${item.gender}</i><i>${item.age}岁</i></span></h3>
        <p class="lead-detail"><span><b>来源</b>${item.source}</span><span><b>商机</b>${item.opportunity}</span></p>
      </div>
      <span class="lead-status status-${item.status}">${item.status}</span>
    </article>
  `).join('');
  resultCount.textContent = `共 ${filtered.length} 条${activeStatus === '全部' ? '演示' : ''}线索`;
  empty.hidden = filtered.length > 0;
}

function openModal(content, wide = false) {
  modalContent.innerHTML = content;
  appModal.classList.toggle('promotion-modal', wide);
  backdrop.hidden = false;
}
function closeModal() {
  backdrop.hidden = true;
  appModal.classList.remove('promotion-modal');
}

function bindPromotionForm() {
  modalContent.querySelectorAll('[data-promotion-type]').forEach((button) => button.addEventListener('click', () => {
    promotionType = button.dataset.promotionType;
    modalContent.querySelectorAll('[data-promotion-type]').forEach((item) => item.classList.toggle('active', item === button));
    modalContent.querySelector('#promotionName').value = promotionType === '机构' ? '家庭健康管理服务推广' : '综合健康检测服务包推广';
    modalContent.querySelector('#promotionContent').value = promotionType === '机构' ? 'FHO机构介绍' : '综合健康检测服务包';
  }));

  modalContent.querySelector('#promotionForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = modalContent.querySelector('#promotionName').value.trim();
    openModal(`<h2>${name}</h2><p class="modal-copy">${promotionType}推广入口已生成。分享二维码后，新线索将自动记录推广来源与归属。</p><div class="fake-qr" aria-label="推广二维码视觉演示"></div><button class="primary-btn modal-action" data-copy-link>复制推广链接</button>`);
  });
}

const purchasePlans = {
  starter: { name: '启航会员', annual: 998 },
  growth: { name: '成长会员', annual: 9980 },
  flagship: { name: '领航会员', annual: 39800 },
};
const purchaseMoney = (amount) => `¥${amount.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
let selectedPurchasePlan = 'growth';
let selectedPurchaseMode = 'purchase';
let purchaseReturnView = 'membershipPlans';
const purchaseForm = document.querySelector('#purchaseForm');
function updatePurchaseSummary() {
  const plan = purchasePlans[selectedPurchasePlan];
  document.querySelector('#purchaseOrderPlan').textContent = plan.name;
  document.querySelector('#purchaseOrderPeriod').textContent = '年付 · 1 年';
  document.querySelector('#purchaseOrderPayment').textContent = purchaseForm.elements.purchasePayment.value;
  document.querySelector('#purchaseOrderPrice').textContent = purchaseMoney(plan.annual);
  document.querySelector('#purchaseOrderTotal').textContent = purchaseMoney(plan.annual);
}
function openPurchase(planKey, returnView = currentView, mode = 'purchase') {
  selectedPurchasePlan = purchasePlans[planKey] ? planKey : 'growth';
  selectedPurchaseMode = mode === 'renew' ? 'renew' : 'purchase';
  purchaseReturnView = returnView === 'purchase' ? 'membershipPlans' : returnView;
  const plan = purchasePlans[selectedPurchasePlan];
  const sourceCard = document.querySelector(`.${selectedPurchasePlan}-plan`);
  purchaseForm.reset();
  purchaseForm.querySelector('.purchase-submit').disabled = false;
  document.querySelector('#purchaseLayout').dataset.plan = selectedPurchasePlan;
  document.querySelector('#purchasePlanIcon').innerHTML = sourceCard.querySelector('.plan-icon').innerHTML;
  document.querySelector('#purchasePlanName').textContent = plan.name;
  document.querySelector('.purchase-plan-header small').textContent = selectedPurchaseMode === 'renew' ? '当前会员套餐' : '已选会员套餐';
  document.querySelector('#purchaseTitle').textContent = selectedPurchaseMode === 'renew' ? `续费${plan.name}` : '购买会员套餐';
  document.querySelector('#purchaseBreadcrumbSource').textContent = purchaseReturnView === 'myMembership' ? '我的会员' : '会员套餐';
  document.querySelector('.purchase-breadcrumb strong').textContent = selectedPurchaseMode === 'renew' ? '续费会员' : '购买会员套餐';
  document.querySelector('.purchase-hero p').textContent = selectedPurchaseMode === 'renew' ? `续费当前${plan.name}，继续享受全年会员权益` : '选择适合的会员套餐，开启更高效的健康管理服务';
  purchaseForm.querySelector('.purchase-submit').textContent = selectedPurchaseMode === 'renew' ? '立即续费' : '立即下单';
  document.querySelector('#purchasePlanDescription').textContent = sourceCard.querySelector('.plan-heading p').textContent;
  document.querySelector('#purchaseCapacity').innerHTML = sourceCard.querySelector('.plan-capacity').innerHTML;
  document.querySelector('#purchaseBenefits').innerHTML = sourceCard.querySelector('.benefit-list').innerHTML;
  document.querySelector('#purchaseYearPrice').textContent = purchaseMoney(plan.annual);
  updatePurchaseSummary();
  switchView('purchase');
}
function addPurchaseRecord(record) {
  accountRecords.unshift(record);
  document.querySelector('.account-records-table tbody').insertAdjacentHTML('afterbegin', `<tr><td><span class="record-type member-order">会员</span></td><td><strong>${escapeAccountText(record.title)}</strong><small>${escapeAccountText(record.note)}</small></td><td>${escapeAccountText(record.quantity)}</td><td>${escapeAccountText(record.amount)}</td><td><b class="paid-amount">${escapeAccountText(record.paid)}</b></td><td>${escapeAccountText(record.time)}</td><td><span class="record-status pending">待支付</span></td><td><button type="button">查看详情</button></td></tr>`);
}
let purchaseOrders = [];
try {
  purchaseOrders = JSON.parse(sessionStorage.getItem('membershipPurchaseOrders') || '[]');
  if (!Array.isArray(purchaseOrders)) purchaseOrders = [];
} catch { purchaseOrders = []; }
purchaseOrders.forEach(addPurchaseRecord);
document.querySelectorAll('[data-purchase-plan]').forEach((button) => button.addEventListener('click', () => openPurchase(button.dataset.purchasePlan, button.dataset.purchaseReturn || currentView, button.dataset.purchaseMode)));
document.querySelector('#purchaseBack').addEventListener('click', () => switchView(purchaseReturnView));
purchaseForm.addEventListener('change', updatePurchaseSummary);
purchaseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const plan = purchasePlans[selectedPurchasePlan];
  const amount = plan.annual;
  const payment = purchaseForm.elements.purchasePayment.value;
  const now = new Date();
  const pad = (value) => String(value).padStart(2, '0');
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
  const record = { type: '会员', title: `${selectedPurchaseMode === 'renew' ? '续费' : '购买'}${plan.name}`, note: `订单号：HY${stamp}`, quantity: '1 年', amount: purchaseMoney(amount), paid: '¥0.00', time: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`, status: '待支付', payment };
  purchaseOrders.push(record);
  sessionStorage.setItem('membershipPurchaseOrders', JSON.stringify(purchaseOrders));
  addPurchaseRecord(record);
  purchaseForm.querySelector('.purchase-submit').disabled = true;
  openModal(`<div class="purchase-confirmation"><span class="purchase-confirmation-icon">✓</span><h2>${selectedPurchaseMode === 'renew' ? '续费订单' : '订单'}已创建</h2><p>已为您生成待支付订单。演示页面不会发起实际扣款。</p><dl><div><dt>会员套餐</dt><dd>${escapeAccountText(plan.name)} · 年付</dd></div><div><dt>订单编号</dt><dd>HY${stamp}</dd></div><div><dt>应付金额</dt><dd>${purchaseMoney(amount)}</dd></div><div><dt>支付方式</dt><dd>${escapeAccountText(payment)}</dd></div><div><dt>当前状态</dt><dd>待支付</dd></div></dl><div class="purchase-confirmation-actions"><button type="button" id="purchaseViewRecords">查看账户记录</button><button type="button" id="purchaseReturnPlans">${selectedPurchaseMode === 'renew' ? '返回我的会员' : '返回会员套餐'}</button></div></div>`);
  modalContent.querySelector('#purchaseViewRecords').addEventListener('click', () => { closeModal(); switchView('myMembership'); showAllAccountRecords(); });
  modalContent.querySelector('#purchaseReturnPlans').addEventListener('click', () => { closeModal(); switchView(selectedPurchaseMode === 'renew' ? 'myMembership' : 'membershipPlans'); });
});

const pointsPurchasePackages = {
  basic: { name: '基础积分包', points: 1000, reports: 50, amount: 50, description: '灵活补充，满足日常 AI 健康服务使用' },
  standard: { name: '标准积分包', points: 5000, reports: 250, amount: 240, description: '稳定储备，适合高频 AI 健康服务使用' },
  advanced: { name: '高级积分包', points: 10000, reports: 500, amount: 450, description: '充足额度，支持持续开展客户健康运营' },
  premium: { name: '超值积分包', points: 50000, reports: 2500, amount: 2000, description: '大额储备，适合规模化 AI 健康服务使用' },
};
let selectedPointsPurchasePackage = 'basic';
let pointsPurchaseReturnView = 'pointsMall';
const pointsPurchaseForm = document.querySelector('#pointsPurchaseForm');
function updatePointsPurchaseSummary() {
  const packageInfo = pointsPurchasePackages[selectedPointsPurchasePackage];
  document.querySelector('#pointsPurchaseOrderPackage').textContent = packageInfo.name;
  document.querySelector('#pointsPurchaseOrderAmount').textContent = `${packageInfo.points.toLocaleString('zh-CN')} 积分`;
  document.querySelector('#pointsPurchaseOrderPayment').textContent = pointsPurchaseForm.elements.pointsPurchasePayment.value;
  document.querySelector('#pointsPurchaseOrderPrice').textContent = purchaseMoney(packageInfo.amount);
  document.querySelector('#pointsPurchaseOrderTotal').textContent = purchaseMoney(packageInfo.amount);
}
function openPointsPurchase(packageKey, returnView = currentView) {
  selectedPointsPurchasePackage = pointsPurchasePackages[packageKey] ? packageKey : 'basic';
  pointsPurchaseReturnView = returnView === 'pointsPurchase' ? 'pointsMall' : returnView;
  const packageInfo = pointsPurchasePackages[selectedPointsPurchasePackage];
  pointsPurchaseForm.reset();
  pointsPurchaseForm.querySelector('.purchase-submit').disabled = false;
  document.querySelector('#pointsPurchaseLayout').dataset.package = selectedPointsPurchasePackage;
  document.querySelector('#pointsPurchasePackageName').textContent = packageInfo.name;
  document.querySelector('#pointsPurchasePackageDescription').textContent = packageInfo.description;
  document.querySelector('#pointsPurchaseAmount').textContent = packageInfo.points.toLocaleString('zh-CN');
  document.querySelector('#pointsPurchaseReports').textContent = packageInfo.reports.toLocaleString('zh-CN');
  updatePointsPurchaseSummary();
  switchView('pointsPurchase');
}
function addPointsPurchaseRecord(record) {
  accountRecords.unshift(record);
  document.querySelector('.account-records-table tbody').insertAdjacentHTML('afterbegin', `<tr><td><span class="record-type points-order">积分</span></td><td><strong>${escapeAccountText(record.title)}</strong><small>${escapeAccountText(record.note)}</small></td><td>${escapeAccountText(record.quantity)}</td><td>${escapeAccountText(record.amount)}</td><td><b class="paid-amount">${escapeAccountText(record.paid)}</b></td><td>${escapeAccountText(record.time)}</td><td><span class="record-status pending">待支付</span></td><td><button type="button">查看详情</button></td></tr>`);
}
let pointsPurchaseOrders = [];
try {
  pointsPurchaseOrders = JSON.parse(sessionStorage.getItem('pointsPurchaseOrders') || '[]');
  if (!Array.isArray(pointsPurchaseOrders)) pointsPurchaseOrders = [];
} catch { pointsPurchaseOrders = []; }
pointsPurchaseOrders.forEach(addPointsPurchaseRecord);
document.querySelectorAll('[data-purchase-points]').forEach((button) => button.addEventListener('click', () => openPointsPurchase(button.dataset.purchasePoints, currentView)));
document.querySelector('#pointsPurchaseBack').addEventListener('click', () => switchView(pointsPurchaseReturnView));
pointsPurchaseForm.addEventListener('change', updatePointsPurchaseSummary);
pointsPurchaseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const packageInfo = pointsPurchasePackages[selectedPointsPurchasePackage];
  const payment = pointsPurchaseForm.elements.pointsPurchasePayment.value;
  const now = new Date();
  const pad = (value) => String(value).padStart(2, '0');
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
  const record = { type: '积分', title: `购买${packageInfo.name}`, note: `订单号：JF${stamp}`, quantity: `${packageInfo.points.toLocaleString('zh-CN')} 积分`, amount: purchaseMoney(packageInfo.amount), paid: '¥0.00', time: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`, status: '待支付', payment };
  pointsPurchaseOrders.push(record);
  sessionStorage.setItem('pointsPurchaseOrders', JSON.stringify(pointsPurchaseOrders));
  addPointsPurchaseRecord(record);
  pointsPurchaseForm.querySelector('.purchase-submit').disabled = true;
  openModal(`<div class="purchase-confirmation"><span class="purchase-confirmation-icon">✓</span><h2>积分订单已创建</h2><p>已为您生成待支付订单。演示页面不会发起实际扣款。</p><dl><div><dt>积分套餐</dt><dd>${escapeAccountText(packageInfo.name)}</dd></div><div><dt>购买积分</dt><dd>${packageInfo.points.toLocaleString('zh-CN')} 积分</dd></div><div><dt>订单编号</dt><dd>JF${stamp}</dd></div><div><dt>应付金额</dt><dd>${purchaseMoney(packageInfo.amount)}</dd></div><div><dt>支付方式</dt><dd>${escapeAccountText(payment)}</dd></div><div><dt>当前状态</dt><dd>待支付</dd></div></dl><div class="purchase-confirmation-actions"><button type="button" id="pointsPurchaseViewRecords">查看账户记录</button><button type="button" id="pointsPurchaseReturnMall">返回积分商城</button></div></div>`);
  modalContent.querySelector('#pointsPurchaseViewRecords').addEventListener('click', () => { closeModal(); switchView('myMembership'); showAllAccountRecords(); });
  modalContent.querySelector('#pointsPurchaseReturnMall').addEventListener('click', () => { closeModal(); switchView('pointsMall'); });
});

document.querySelectorAll('[data-view]').forEach((item) => item.addEventListener('click', () => switchView(item.dataset.view)));
document.querySelectorAll('[data-points-filter]').forEach((button) => button.addEventListener('click', () => {
  const type = button.dataset.pointsFilter;
  document.querySelectorAll('[data-points-filter]').forEach((item) => item.classList.toggle('active', item === button));
  document.querySelectorAll('[data-points-type]').forEach((row) => { row.hidden = type !== '全部' && row.dataset.pointsType !== type; });
}));
const pointsTrendData = {
  month: { label: '本月', periods: [['11/01', 18, 8], ['11/05', 34, 16], ['11/10', 28, 21], ['11/15', 56, 27], ['11/18', 76, 38]] },
  quarter: { label: '近3个月', periods: [['9月', 42, 22], ['10月', 63, 32], ['11月', 84, 45]] },
  halfYear: { label: '近6个月', periods: [['6月', 36, 18], ['7月', 42, 22], ['8月', 50, 23], ['9月', 44, 25], ['10月', 63, 32], ['11月', 84, 45]] },
};
let pointsTrendChartInstance;
let pointsDistributionChartInstance;
const pointsChartNumber = new Intl.NumberFormat('zh-CN');
const pointsChartPalette = { earned: '#2f7df4', spent: '#8b4ee8', cyan: '#43c7cf', slate: '#8aa0b8' };

function renderPointsTrend(range) {
  const data = pointsTrendData[range];
  const chartElement = document.querySelector('#pointsTrendChart');
  chartElement.setAttribute('aria-label', `${data.label}积分获取与消耗趋势柱状图`);
  if (!window.echarts) return;
  pointsTrendChartInstance ||= echarts.init(chartElement, null, { renderer: 'canvas' });
  pointsTrendChartInstance.setOption({
    animationDuration: 480,
    animationEasing: 'cubicOut',
    color: [pointsChartPalette.earned, pointsChartPalette.spent],
    grid: { top: 18, right: 8, bottom: 36, left: 60 },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow', shadowStyle: { color: 'rgba(47,125,244,.06)' } },
      backgroundColor: 'rgba(19,31,54,.94)',
      borderWidth: 0,
      padding: [10, 12],
      textStyle: { color: '#fff', fontSize: 12 },
      formatter(params) {
        return `<strong>${params[0].axisValue}</strong><br>${params.map((item) => `${item.marker}${item.seriesName}　${pointsChartNumber.format(item.value)} 积分`).join('<br>')}`;
      },
    },
    xAxis: {
      type: 'category',
      data: data.periods.map(([label]) => label),
      axisLine: { lineStyle: { color: '#dce4ef' } },
      axisTick: { show: false },
      axisLabel: { color: '#536682', fontSize: 12, margin: 14 },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 2000,
      interval: 400,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: '#536682', fontSize: 12, formatter: (value) => pointsChartNumber.format(value) },
      splitLine: { lineStyle: { color: '#e7edf5', width: 1 } },
    },
    series: [
      {
        name: '获取积分',
        type: 'bar',
        data: data.periods.map(([, earned]) => earned * 20),
        barMaxWidth: 28,
        barGap: '12%',
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#55a0ff' }, { offset: 1, color: '#1765ec' }]),
        },
        emphasis: { itemStyle: { shadowBlur: 12, shadowColor: 'rgba(47,125,244,.24)' } },
      },
      {
        name: '消耗积分',
        type: 'bar',
        data: data.periods.map(([, , spent]) => spent * 20),
        barMaxWidth: 28,
        itemStyle: {
          borderRadius: [4, 4, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#ae69f4' }, { offset: 1, color: '#7b39dc' }]),
        },
        emphasis: { itemStyle: { shadowBlur: 12, shadowColor: 'rgba(139,78,232,.22)' } },
      },
    ],
  }, true);
}

function renderPointsDistribution() {
  const chartElement = document.querySelector('#pointsDistributionChart');
  if (!window.echarts || !chartElement) return;
  pointsDistributionChartInstance ||= echarts.init(chartElement, null, { renderer: 'canvas' });
  pointsDistributionChartInstance.setOption({
    animationDuration: 520,
    animationEasing: 'cubicOut',
    color: [pointsChartPalette.earned, pointsChartPalette.spent, pointsChartPalette.cyan, pointsChartPalette.slate],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(19,31,54,.94)',
      borderWidth: 0,
      padding: [10, 12],
      textStyle: { color: '#fff', fontSize: 12 },
      formatter: ({ marker, name, value, percent }) => `${marker}${name}<br><strong>${pointsChartNumber.format(value)} 积分</strong>　${percent}%`,
    },
    graphic: [
      { type: 'text', left: 'center', top: '33%', silent: true, style: { text: '共消耗', fill: '#687892', font: '12px sans-serif', textAlign: 'center' } },
      { type: 'text', left: 'center', top: '44%', silent: true, style: { text: '420', fill: '#111a34', font: '700 27px sans-serif', textAlign: 'center' } },
      { type: 'text', left: 'center', top: '62%', silent: true, style: { text: '积分', fill: '#687892', font: '11px sans-serif', textAlign: 'center' } },
    ],
    series: [{
      name: '积分消耗分布',
      type: 'pie',
      radius: ['61%', '82%'],
      center: ['50%', '50%'],
      label: { show: false },
      labelLine: { show: false },
      itemStyle: { borderWidth: 0 },
      emphasis: { scale: true, scaleSize: 5 },
      data: [
        { value: 273, name: 'AI报告解析' },
        { value: 84, name: 'AI健康分析' },
        { value: 42, name: '智能内容生成' },
        { value: 21, name: '其他' },
      ],
    }],
  }, true);
}

document.querySelector('#pointsTrendRange').addEventListener('change', (event) => renderPointsTrend(event.target.value));
renderPointsTrend(document.querySelector('#pointsTrendRange').value);
renderPointsDistribution();
const pointsChartsResizeObserver = new ResizeObserver(() => {
  pointsTrendChartInstance?.resize();
  pointsDistributionChartInstance?.resize();
});
pointsChartsResizeObserver.observe(document.querySelector('#pointsTrendChart'));
pointsChartsResizeObserver.observe(document.querySelector('#pointsDistributionChart'));
let activePointsRecordTab = '明细';
function renderPointsRecords() {
  const category = document.querySelector('#pointsTypeFilter').value;
  const rows = [...document.querySelectorAll('#pointsDetailRows tr')];
  let visibleCount = 0;
  rows.forEach((row) => {
    const tabMatches = activePointsRecordTab === '明细' || row.dataset.pointsKind === '购买';
    const categoryMatches = category === '全部' || row.dataset.pointsCategory === category;
    row.hidden = !(tabMatches && categoryMatches);
    if (!row.hidden) visibleCount += 1;
  });
  document.querySelector('#pointsRecordEmpty').hidden = visibleCount > 0;
  document.querySelector('#pointsRecordCount').textContent = activePointsRecordTab === '明细' && category === '全部' ? '共 56 条记录' : `当前显示 ${visibleCount} 条记录`;
}
document.querySelectorAll('[data-points-record-tab]').forEach((button) => button.addEventListener('click', () => {
  activePointsRecordTab = button.dataset.pointsRecordTab;
  document.querySelectorAll('[data-points-record-tab]').forEach((item) => {
    const isActive = item === button;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-selected', String(isActive));
  });
  if (activePointsRecordTab === '购买') document.querySelector('#pointsTypeFilter').value = '全部';
  renderPointsRecords();
}));
document.querySelector('#pointsQueryForm').addEventListener('submit', (event) => {
  event.preventDefault();
  renderPointsRecords();
});
document.querySelector('#resetPointsQuery').addEventListener('click', () => {
  document.querySelector('#pointsTypeFilter').value = '全部';
  document.querySelector('#pointsDateStart').value = '2026-09-01';
  document.querySelector('#pointsDateEnd').value = '2026-11-18';
  renderPointsRecords();
});
document.querySelectorAll('.points-pagination button:not([aria-label])').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.points-pagination button:not([aria-label])').forEach((item) => item.classList.toggle('active', item === button));
  showToast(`已切换到第 ${button.textContent} 页`);
}));
document.querySelectorAll('[data-learning-status]').forEach((button) => button.addEventListener('click', () => renderDashboardLearning(button.dataset.learningStatus)));
document.querySelector('#dashboardCourseList').addEventListener('click', (event) => {
  const joinButton = event.target.closest('[data-join-learning]');
  if (joinButton) addCourseToPending(joinButton.dataset.joinLearning);
});
renderDashboardLearning('待学习');
document.querySelectorAll('[data-open-dashboard-patient]').forEach((button) => button.addEventListener('click', () => {
  const customer = dashboardCustomerProfiles[button.dataset.openDashboardPatient];
  if (customer) openPatientArchive(customer, 'dashboard');
}));
document.querySelectorAll('[data-managed-tab]').forEach((button) => button.addEventListener('click', () => {
  activeManagedTab = button.dataset.managedTab;
  document.querySelectorAll('[data-managed-tab]').forEach((item) => {
    const selected = item === button;
    item.classList.toggle('active', selected);
    item.setAttribute('aria-selected', String(selected));
  });
  document.querySelectorAll('[data-managed-filter-group]').forEach((group) => { group.hidden = group.dataset.managedFilterGroup !== activeManagedTab; });
  renderManagedCustomers();
}));
document.querySelector('#managedFilters').addEventListener('input', renderManagedCustomers);
document.querySelector('#managedFilters').addEventListener('change', renderManagedCustomers);
document.querySelectorAll('[data-customer-stage]').forEach((button) => button.addEventListener('click', () => {
  activeCustomerStage = button.dataset.customerStage;
  customerFilters = {};
  document.querySelector('#customerFilters').reset();
  document.querySelector('#smartAppliedSummary').hidden = true;
  syncCustomerStageUI();
  renderCustomers();
}));
document.querySelector('#openSmartFilter').addEventListener('click', openSmartFilterDrawer);
document.querySelector('#closeSmartFilter').addEventListener('click', closeSmartFilterDrawer);
document.querySelector('#cancelSmartFilter').addEventListener('click', closeSmartFilterDrawer);
document.querySelector('#smartFilterBackdrop').addEventListener('click', (event) => {
  if (event.target.id === 'smartFilterBackdrop') closeSmartFilterDrawer();
});
document.querySelector('#customerSmartFilter').addEventListener('input', (event) => {
  document.querySelector('#generateSmartRules').disabled = !event.target.value.trim();
  document.querySelector('#optimizeSmartFilter').disabled = !event.target.value.trim();
});
document.querySelector('#generateSmartRules').addEventListener('click', generateSmartRules);
document.querySelector('#optimizeSmartFilter').addEventListener('click', () => {
  const input = document.querySelector('#customerSmartFilter');
  if (!input.value.trim()) { showToast('请先输入筛选描述'); return; }
  input.value = `请筛选：${input.value.trim().replace(/[。；;]+$/, '')}。条件之间按“且”关系处理。`;
  showToast('描述已优化，可一键生成规则');
});
document.querySelectorAll('[data-smart-template]').forEach((button) => button.addEventListener('click', () => {
  const template = smartFilterTemplates[button.dataset.smartTemplate];
  smartDraftRules = template.rules.map((rule) => ({ ...rule }));
  smartDraftSummary = template.summary;
  document.querySelector('#customerSmartFilter').value = '';
  document.querySelector('#generateSmartRules').disabled = true;
  document.querySelector('#optimizeSmartFilter').disabled = true;
  document.querySelectorAll('[data-smart-template]').forEach((item) => item.classList.toggle('active', item === button));
  renderSmartRules();
}));
document.querySelector('#showMoreSmartTemplates').addEventListener('click', (event) => {
  document.querySelectorAll('[data-smart-template][hidden]').forEach((button) => { button.hidden = false; });
  event.currentTarget.hidden = true;
});
document.querySelector('#addSmartRule').addEventListener('click', () => {
  smartDraftRules.push({ field: 'stage', operator: 'equals', value: '在管客户' });
  smartDraftSummary = '';
  renderSmartRules();
});
document.querySelector('#smartRulesList').addEventListener('input', (event) => {
  const row = event.target.closest('[data-rule-index]');
  if (!row || !event.target.dataset.rulePart) return;
  smartDraftRules[Number(row.dataset.ruleIndex)][event.target.dataset.rulePart] = event.target.value;
  smartDraftSummary = '';
  document.querySelector('#smartGeneratedText').textContent = smartRuleSummary(smartDraftRules);
});
document.querySelector('#smartRulesList').addEventListener('change', (event) => {
  const row = event.target.closest('[data-rule-index]');
  if (!row || !event.target.dataset.rulePart) return;
  smartDraftRules[Number(row.dataset.ruleIndex)][event.target.dataset.rulePart] = event.target.value;
  smartDraftSummary = '';
  document.querySelector('#smartGeneratedText').textContent = smartRuleSummary(smartDraftRules);
});
document.querySelector('#smartRulesList').addEventListener('click', (event) => {
  const removeButton = event.target.closest('[data-remove-smart-rule]');
  if (!removeButton) return;
  smartDraftRules.splice(Number(removeButton.dataset.removeSmartRule), 1);
  smartDraftSummary = '';
  renderSmartRules();
});
document.querySelector('#saveSmartTemplate').addEventListener('click', () => {
  showToast(smartDraftRules.length ? '当前规则已保存为自建模板（演示）' : '请先配置筛选规则');
});
document.querySelector('#applySmartRules').addEventListener('click', () => {
  if (!smartDraftRules.length) return;
  const summary = smartDraftSummary || smartRuleSummary(smartDraftRules);
  customerFilters.smartRules = smartDraftRules.map((rule) => ({ ...rule }));
  customerFilters.smartSummary = summary;
  customerFilters.smartPrompt = document.querySelector('#customerSmartFilter').value.trim();
  document.querySelector('#smartAppliedText').textContent = summary;
  document.querySelector('#smartAppliedSummary').hidden = false;
  const count = renderCustomers();
  document.querySelector('#smartHitCount').textContent = `命中 ${count} 位客户`;
  closeSmartFilterDrawer();
  showToast('智能筛选已应用');
});
document.querySelector('#clearAppliedSmartFilter').addEventListener('click', () => {
  delete customerFilters.smartRules;
  delete customerFilters.smartSummary;
  delete customerFilters.smartPrompt;
  document.querySelector('#smartAppliedSummary').hidden = true;
  renderCustomers();
  showToast('已清除智能筛选');
});
document.querySelector('#customerFilters').addEventListener('submit', (event) => {
  event.preventDefault();
  activeCustomerStage = '全部';
  customerFilters = {
    ...customerFilters,
    keyword: document.querySelector('#customerKeyword').value.trim(),
  };
  syncCustomerStageUI();
  renderCustomers();
});
document.querySelector('#resetCustomerFilters').addEventListener('click', () => {
  document.querySelector('#customerFilters').reset();
  activeCustomerStage = '全部';
  customerFilters = {};
  document.querySelector('#smartAppliedSummary').hidden = true;
  syncCustomerStageUI();
  renderCustomers();
});
['selectAllCustomers', 'footerSelectAll'].forEach((id) => document.querySelector(`#${id}`).addEventListener('change', (event) => {
  document.querySelectorAll('.customer-check').forEach((checkbox) => { checkbox.checked = event.target.checked; });
  updateCustomerSelection();
}));
document.querySelector('#batchJoinTeam').addEventListener('click', () => {
  const selected = selectedCustomers();
  if (!selected.length) { showToast('请先选择需要入组的客户'); return; }
  showToast(`已选择 ${selected.length} 位客户，进入批量入组`);
});
document.querySelector('#exportCustomersExcel').addEventListener('click', exportSelectedCustomers);
document.querySelector('#customerRows').addEventListener('change', (event) => { if (event.target.matches('.customer-check')) updateCustomerSelection(); });
document.querySelector('#customerRows').addEventListener('click', (event) => {
  const markButton = event.target.closest('[data-mark-customer]');
  const moreButton = event.target.closest('[data-customer-more]');
  const menuAction = event.target.closest('.customer-more-menu button');
  if (markButton) {
    openCustomerMarkDrawer(customers.find((item) => item.name === markButton.dataset.markCustomer));
    return;
  }
  if (moreButton) {
    const menu = moreButton.nextElementSibling;
    const willOpen = menu.hidden;
    document.querySelectorAll('.customer-more-menu').forEach((item) => { item.hidden = true; item.closest('td')?.classList.remove('menu-open'); });
    document.querySelectorAll('[data-customer-more]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
    menu.hidden = !willOpen;
    moreButton.setAttribute('aria-expanded', String(willOpen));
    moreButton.closest('td').classList.toggle('menu-open', willOpen);
    return;
  }
  if (menuAction) {
    menuAction.closest('.customer-more-menu').hidden = true;
    menuAction.closest('td').classList.remove('menu-open');
    const patientButton = menuAction.closest('[data-open-patient]');
    if (patientButton) openPatientArchive(customers.find((item) => item.name === patientButton.dataset.openPatient));
    return;
  }
  const openButton = event.target.closest('[data-open-patient]');
  const row = event.target.closest('.customer-row');
  if (!row || (!openButton && event.target.closest('input, button, a, select'))) return;
  const customer = customers.find((item) => item.name === (openButton?.dataset.openPatient || row.dataset.customerName));
  if (customer) openPatientArchive(customer);
});
document.addEventListener('click', (event) => {
  if (event.target.closest('.customer-row-actions')) return;
  document.querySelectorAll('.customer-more-menu').forEach((menu) => { menu.hidden = true; menu.closest('td')?.classList.remove('menu-open'); });
  document.querySelectorAll('[data-customer-more]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
});
document.querySelector('#customerRows').addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.customer-row')) {
    event.preventDefault();
    const customer = customers.find((item) => item.name === event.target.dataset.customerName);
    if (customer) openPatientArchive(customer);
  }
});
document.querySelector('#patientBack').addEventListener('click', () => {
  if (!document.querySelector('[data-patient-panel="experts"]').hidden) {
    if (!document.querySelector('#expertOrdersPage').hidden) {
      closeExpertOrdersPage();
      return;
    }
    if (!document.querySelector('#expertDetailPage').hidden) {
      closeExpertDetailPage();
      return;
    }
    setPatientSection('reports');
    document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  switchView(patientReturnView);
});
document.querySelectorAll('[data-patient-section]').forEach((button) => button.addEventListener('click', () => setPatientSection(button.dataset.patientSection)));
preparePatientReminderTimeline();
document.querySelectorAll('[data-service-view]').forEach((button) => button.addEventListener('click', () => setServicePanel(button.dataset.serviceView)));
document.querySelector('#reminderTimeline')?.addEventListener('click', (event) => {
  const check = event.target.closest('.reminder-check');
  if (check) { completePatientReminder(check.closest('.reminder-row')); return; }
  const toggle = event.target.closest('.reminder-month-toggle');
  if (!toggle) return;
  const month = toggle.closest('.reminder-month');
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  month.classList.toggle('collapsed', expanded);
});
['reminderTimeFilter', 'reminderTypeFilter', 'reminderStatusFilter'].forEach((id) => document.querySelector(`#${id}`)?.addEventListener('change', filterPatientReminders));
document.querySelector('#reminderSortButton')?.addEventListener('click', (event) => {
  const button = event.currentTarget;
  const order = button.dataset.order === 'asc' ? 'desc' : 'asc';
  button.dataset.order = order;
  button.querySelector('span').textContent = order === 'asc' ? '按时间升序' : '按时间降序';
  const timeline = document.querySelector('#reminderTimeline');
  [...timeline.children].reverse().forEach((group) => timeline.append(group));
});
document.querySelector('#addReminderButton')?.addEventListener('click', () => setServiceOverlay('patientReminderBackdrop', true));
document.querySelectorAll('[data-close-reminder]').forEach((button) => button.addEventListener('click', () => setServiceOverlay('patientReminderBackdrop', false)));
document.querySelector('#repeatReminder')?.addEventListener('change', (event) => { document.querySelector('#repeatSettings').hidden = !event.target.checked; });
document.querySelector('#patientReminderForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const content = new FormData(event.currentTarget).get('content');
  const month = document.querySelector('.reminder-month[data-month="2026年11月"]');
  const row = document.createElement('div');
  row.className = 'reminder-row';
  row.dataset.reminderStatus = 'pending';
  row.dataset.reminderType = '专家建议';
  row.innerHTML = `<time><strong>11月21日</strong><span>09:00</span></time><div class="reminder-copy"><b>${escapeAccountText(content)}</b><p>按设定时间提醒并同步至任务中心。</p></div><em>专家建议</em><span class="reminder-state pending"><svg aria-hidden="true"><use href="#i-clock"/></svg>待提醒</span><button class="reminder-more" type="button" aria-label="更多提醒操作"><svg aria-hidden="true"><use href="#i-menu"/></svg></button>`;
  decorateReminderRow(row);
  month.append(row);
  document.querySelector('#reminderTotal').textContent = String(Number(document.querySelector('#reminderTotal').textContent) + 1);
  document.querySelector('#reminderPending').textContent = String(Number(document.querySelector('#reminderPending').textContent) + 1);
  setServiceOverlay('patientReminderBackdrop', false);
  event.currentTarget.reset();
  showToast('提醒已创建并同步至任务中心');
});
document.querySelector('#parseArchiveButton')?.addEventListener('click', () => setServiceOverlay('serviceParseBackdrop', true));
document.querySelectorAll('[data-close-parse]').forEach((button) => button.addEventListener('click', () => setServiceOverlay('serviceParseBackdrop', false)));
document.querySelectorAll('.parse-item-form').forEach((form) => form.addEventListener('submit', (event) => { event.preventDefault(); showToast('资料已保存并归档'); }));
document.querySelectorAll('.parse-tabs button').forEach((button) => button.addEventListener('click', () => { document.querySelectorAll('.parse-tabs button').forEach((item) => item.classList.toggle('active', item === button)); }));
document.querySelector('#uploadArchiveButton')?.addEventListener('click', () => setServiceOverlay('serviceUploadBackdrop', true));
document.querySelectorAll('[data-close-upload]').forEach((button) => button.addEventListener('click', () => setServiceOverlay('serviceUploadBackdrop', false)));
document.querySelector('#serviceUploadTile')?.addEventListener('click', () => document.querySelector('#serviceUploadInput').click());
document.querySelector('#serviceUploadInput')?.addEventListener('change', (event) => { document.querySelector('#serviceUploadFiles').innerHTML = [...event.target.files].map((file) => `<span>${escapeAccountText(file.name)}</span>`).join(''); });
document.querySelector('#serviceUploadConfirm')?.addEventListener('click', () => { setServiceOverlay('serviceUploadBackdrop', false); showToast('资料已加入解析队列'); });
document.querySelectorAll('#archiveItems button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('#archiveItems button').forEach((item) => item.classList.toggle('active', item === button));
  document.querySelector('#archiveDetailTitle').textContent = button.dataset.archiveTitle;
  document.querySelector('#archiveDetailName').textContent = button.dataset.archiveTitle;
  document.querySelector('#archiveDetailDate').textContent = button.dataset.archiveDate;
  document.querySelector('#archiveDetailNote').textContent = button.dataset.archiveNote;
  document.querySelector('#archiveFileName').textContent = `${button.dataset.archiveTitle}.pdf`;
}));
document.querySelector('#archiveSearch')?.addEventListener('input', (event) => { const query = event.target.value.trim(); document.querySelectorAll('#archiveItems button').forEach((button) => { button.hidden = Boolean(query) && !button.dataset.archiveTitle.includes(query); }); });
document.querySelectorAll('[data-patient-detail-tab]').forEach((button) => {
  button.addEventListener('click', () => setPatientDetailTab(button.dataset.patientDetailTab));
  button.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const tabs = [...document.querySelectorAll('[data-patient-detail-tab]')];
    const current = tabs.indexOf(button);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (current + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    setPatientDetailTab(tabs[next].dataset.patientDetailTab, true);
  });
});
document.querySelector('#toggleOverviewActivities').addEventListener('click', () => {
  overviewActivitiesExpanded = !overviewActivitiesExpanded;
  renderOverviewActivities();
});
document.querySelector('.service-conversion-card').addEventListener('click', (event) => {
  const option = event.target.closest('[data-service-package]');
  if (option) {
    document.querySelectorAll('[data-service-package]').forEach((button) => {
      const selected = button === option;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-checked', String(selected));
    });
    return;
  }
  const recordButton = event.target.closest('[data-record-service-intent]');
  if (!recordButton || !activePatientCustomer) return;
  const selected = document.querySelector('[data-service-package][aria-checked="true"]');
  const service = serviceRecommendations.find((item) => item.id === selected?.dataset.servicePackage);
  if (!service) { showToast('请先选择推荐服务包'); return; }
  activePatientCustomer.serviceIntent = service.name;
  const customerName = escapeAccountText(activePatientCustomer.name);
  const packageName = escapeAccountText(service.name);
  const packagePrice = escapeAccountText(service.price);
  const packageNote = escapeAccountText(service.note);
  const prompt = `请结合${activePatientCustomer.name}的客户需求、健康管理重点和顾虑，为“${service.name}”生成销售沟通话术。服务包信息：${service.note}，推荐理由：${service.reason}，推荐依据：${service.evidence}，价格${service.price}。`;
  const reply = `<div class="ai-sales-card"><span>服务推荐已记录</span><h4>${packageName}</h4><dl><div><dt>服务内容</dt><dd>${packageNote}</dd></div><div><dt>参考价格</dt><dd>${packagePrice}</dd></div><div><dt>推荐理由</dt><dd>${escapeAccountText(service.reason)}</dd></div><div><dt>推荐依据</dt><dd>${escapeAccountText(service.evidence)}</dd></div></dl><h5>推荐销售话术</h5><p>“${customerName}您好，结合您希望先看懂体检结果、减少重复检查的需求，我们建议从<strong>${packageName}</strong>开始。它可以帮助您把当前异常指标梳理清楚，并形成后续可执行的健康管理计划。费用为${packagePrice}，我可以先为您详细说明服务内容，再由您决定是否安排。”</p><small>建议沟通顺序：先回应顾虑 → 说明匹配价值 → 介绍服务内容 → 询问购买意向。</small></div>`;
  setAssistantOpen(true);
  askAssistant(prompt, reply);
  showToast(`已记录${service.name}服务推荐，并生成销售话术`);
});
document.querySelector('#metricTemplateSelect').addEventListener('change', (event) => renderMetricDashboard(event.target.value));
const patientMoreTrigger = document.querySelector('#patientMoreTrigger');
const patientMoreMenu = document.querySelector('#patientMoreMenu');
function setPatientMoreOpen(open) {
  patientMoreMenu.hidden = !open;
  patientMoreTrigger.setAttribute('aria-expanded', String(open));
}
patientMoreTrigger.addEventListener('click', (event) => {
  event.stopPropagation();
  setPatientMoreOpen(patientMoreMenu.hidden);
});
patientMoreMenu.addEventListener('click', () => setPatientMoreOpen(false));
document.addEventListener('click', (event) => {
  if (!event.target.closest('.patient-archive-actions')) setPatientMoreOpen(false);
});

const reportNameFilter = document.querySelector('#reportNameFilter');
const reportStatusFilter = document.querySelector('#reportStatusFilter');
const reportRows = [...document.querySelectorAll('#patientReportRows tr')];
const reportEmptyState = document.querySelector('#reportEmptyState');
const reportTemplateToggle = document.querySelector('#reportTemplateToggle');
const reportTemplateGrid = document.querySelector('#reportTemplateGrid');
let activeReportRenameRow = null;

function closeReportRename(row, restore = true) {
  if (!row) return;
  row.querySelector('.report-name-editor')?.remove();
  const name = row.querySelector('td:first-child strong');
  const trigger = row.querySelector('.report-inline-rename');
  if (name) name.hidden = false;
  if (trigger) trigger.hidden = false;
  row.classList.remove('is-renaming');
  if (restore && activeReportRenameRow === row) activeReportRenameRow = null;
}

function startReportRename(row) {
  if (!row || row === activeReportRenameRow) return;
  closeReportRename(activeReportRenameRow);
  const cell = row.querySelector('td:first-child');
  const name = cell.querySelector('strong');
  const trigger = cell.querySelector('.report-inline-rename');
  const editor = document.createElement('span');
  editor.className = 'report-name-editor';
  const input = document.createElement('input');
  input.type = 'text';
  input.maxLength = 40;
  input.value = row.dataset.reportName;
  input.setAttribute('aria-label', '修改报告名称');
  editor.append(input);
  name.hidden = true;
  trigger.hidden = true;
  cell.append(editor);
  row.classList.add('is-renaming');
  activeReportRenameRow = row;

  let settled = false;
  const finishRename = (commit = true) => {
    if (settled) return;
    settled = true;
    const nextName = input.value.trim();
    if (!commit) {
      closeReportRename(row);
      return;
    }
    if (!nextName) {
      closeReportRename(row);
      showToast('报告名称不能为空，已恢复原名称');
      return;
    }
    if (nextName === row.dataset.reportName) {
      closeReportRename(row);
      return;
    }
    row.dataset.reportName = nextName;
    name.textContent = nextName;
    trigger.setAttribute('aria-label', `修改${nextName}的名称`);
    closeReportRename(row);
    filterPatientReports();
    showToast('报告名称已自动更新');
  };
  input.addEventListener('blur', () => finishRename(true));
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      input.blur();
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      finishRename(false);
    }
  });
  input.focus();
  input.select();
}

reportRows.forEach((row) => {
  const cell = row.querySelector('td:first-child');
  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'report-inline-rename';
  trigger.setAttribute('aria-label', `修改${row.dataset.reportName}的名称`);
  trigger.title = '修改报告名称';
  trigger.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20h4l11-11-4-4L4 16v4Z"/><path d="m13.5 6.5 4 4"/></svg>';
  trigger.addEventListener('click', () => startReportRename(row));
  cell.append(trigger);
});

reportTemplateToggle.addEventListener('click', () => {
  const expanded = reportTemplateToggle.getAttribute('aria-expanded') === 'true';
  reportTemplateToggle.setAttribute('aria-expanded', String(!expanded));
  reportTemplateGrid.classList.toggle('expanded', !expanded);
  reportTemplateToggle.querySelector('b').textContent = expanded ? '展开' : '收起';
});
document.querySelectorAll('[data-report-template]').forEach((card) => card.addEventListener('click', () => {
  showToast(`已选择“${card.dataset.reportTemplate}”模板，正在准备报告内容`);
}));
function filterPatientReports() {
  const keyword = reportNameFilter.value.trim().toLocaleLowerCase('zh-CN');
  const status = reportStatusFilter.value;
  let visible = 0;
  reportRows.forEach((row) => {
    const matchesName = !keyword || row.dataset.reportName.toLocaleLowerCase('zh-CN').includes(keyword);
    const matchesStatus = !status || row.dataset.reportStatus === status;
    row.hidden = !(matchesName && matchesStatus);
    if (!row.hidden) visible += 1;
  });
  document.querySelector('#reportResultCount').textContent = visible;
  document.querySelector('#reportVisibleCount').textContent = visible;
  reportEmptyState.hidden = visible !== 0;
}
function resetPatientReports() {
  reportNameFilter.value = '';
  reportStatusFilter.value = '';
  filterPatientReports();
}
document.querySelector('#reportFilterForm').addEventListener('submit', (event) => {
  event.preventDefault();
  filterPatientReports();
});
document.querySelector('#reportResetButton').addEventListener('click', resetPatientReports);
document.querySelector('[data-report-reset-empty]').addEventListener('click', resetPatientReports);
const reportCustomButton = document.querySelector('#reportCustomButton');
const customReportBackdrop = document.querySelector('#customReportBackdrop');
const customReportDrawer = document.querySelector('#customReportDrawer');
const customReportForm = document.querySelector('#customReportForm');
const customReportName = document.querySelector('#customReportName');
const customReportInstruction = document.querySelector('#customReportInstruction');
const customReportDataOptions = document.querySelector('#customReportDataOptions');
let lastCustomReportFocus = null;
let activeExpertReportTemplate = '';
function updateCustomReportCounts() {
  document.querySelector('#customReportNameCount').textContent = customReportName.value.length;
  document.querySelector('#customReportInstructionCount').textContent = customReportInstruction.value.length;
}
function openCustomReportDrawer(templateName = '') {
  activeExpertReportTemplate = typeof templateName === 'string' ? templateName : '';
  const dateStamp = new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .format(new Date())
    .replaceAll('/', '');
  customReportName.value = activeExpertReportTemplate
    ? `${activeExpertReportTemplate}-${dateStamp}`
    : `健康管理报告-${dateStamp}`;
  customReportInstruction.value = '';
  customReportForm.elements.reportScope.value = '全部健康资料';
  customReportDataOptions.hidden = true;
  lastCustomReportFocus = document.activeElement;
  customReportBackdrop.hidden = false;
  document.body.classList.add('custom-report-open');
  updateCustomReportCounts();
  requestAnimationFrame(() => customReportName.focus());
}
function closeCustomReportDrawer() {
  if (customReportBackdrop.hidden) return;
  customReportBackdrop.hidden = true;
  document.body.classList.remove('custom-report-open');
  lastCustomReportFocus?.focus();
}
function openExpertLibrary() {
  setPatientSection('experts');
  showExpertLibraryView();
  document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('[data-report-expert]').forEach((button) => button.addEventListener('click', openExpertLibrary));
document.querySelector('[data-expert-library-back]').addEventListener('click', () => {
  setPatientSection('reports');
  document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
});
const expertAnalysisGrid = document.querySelector('#expertAnalysisGrid');
const expertCards = [...expertAnalysisGrid.querySelectorAll('.expert-analysis-card')];
const expertOrdersPage = document.querySelector('#expertOrdersPage');
const expertOrdersList = document.querySelector('#expertOrdersList');
const expertOrderSearch = document.querySelector('#expertOrderSearch');
const expertOrderStatus = document.querySelector('#expertOrderStatus');
const expertOrderDefaults = [
  { id: 'EX202611180001', name: '多次体检趋势分析', category: '健康趋势', amount: 299, paid: 299, payment: '微信支付', created: '2026-11-18 14:32', status: '已开通', valid: '2026-11-18 至 2027-11-17', quota: '100 次' },
  { id: 'EX202611150002', name: '代谢健康专项分析', category: '专项健康', amount: 399, paid: 0, payment: '支付宝', created: '2026-11-15 10:18', status: '待支付', valid: '支付后生效', quota: '100 次' },
  { id: 'EX202510200008', name: '心血管健康专项分析', category: '专项健康', amount: 399, paid: 399, payment: '支付宝', created: '2025-10-20 16:45', status: '已到期', valid: '2025-10-20 至 2026-10-19', quota: '已使用 100 次' }
];
let expertOrders = expertOrderDefaults;
try {
  const storedExpertOrders = JSON.parse(sessionStorage.getItem('expertAnalysisOrders') || 'null');
  if (Array.isArray(storedExpertOrders) && storedExpertOrders.length) expertOrders = storedExpertOrders;
} catch { expertOrders = expertOrderDefaults; }
function saveExpertOrders() {
  sessionStorage.setItem('expertAnalysisOrders', JSON.stringify(expertOrders));
}
function expertOrderStatusClass(status) {
  return status === '已开通' ? 'active' : status === '待支付' ? 'pending' : status === '已到期' ? 'expired' : 'closed';
}
function renderExpertOrders() {
  const keyword = expertOrderSearch.value.trim().toLocaleLowerCase('zh-CN');
  const status = expertOrderStatus.value;
  const visibleOrders = expertOrders.filter((order) => (!status || order.status === status) && (!keyword || `${order.id} ${order.name} ${order.category}`.toLocaleLowerCase('zh-CN').includes(keyword)));
  document.querySelector('#expertOrderTotal').textContent = expertOrders.length;
  document.querySelector('#expertOrderActive').textContent = expertOrders.filter((order) => order.status === '已开通').length;
  document.querySelector('#expertOrderPaid').textContent = `¥${expertOrders.reduce((sum, order) => sum + Number(order.paid || 0), 0).toLocaleString('zh-CN')}`;
  expertOrdersList.innerHTML = visibleOrders.map((order) => `<article class="expert-order-row" data-order-id="${escapeAccountText(order.id)}"><div class="expert-order-product"><span><svg aria-hidden="true"><use href="#i-report-layers"/></svg></span><div><strong>${escapeAccountText(order.name)}</strong><small>${escapeAccountText(order.category)} · 订单号 ${escapeAccountText(order.id)}</small></div></div><div><span>下单时间</span><b>${escapeAccountText(order.created)}</b></div><div><span>实付金额</span><b>${order.paid ? `¥${Number(order.paid).toFixed(2)}` : '¥0.00'}</b><small>${escapeAccountText(order.payment)}</small></div><div><span>订单状态</span><em class="${expertOrderStatusClass(order.status)}">${escapeAccountText(order.status)}</em></div><div class="expert-order-actions"><button type="button" data-expert-order-detail>查看订单</button>${order.status === '待支付' ? '<button class="primary" type="button" data-expert-order-pay>继续支付</button>' : ''}</div></article>`).join('');
  document.querySelector('#expertOrdersEmpty').hidden = visibleOrders.length > 0;
  expertOrdersList.hidden = visibleOrders.length === 0;
}
function openExpertOrdersPage() {
  document.querySelectorAll('[data-expert-view="library"]').forEach((item) => { item.hidden = true; });
  expertDetailPage.hidden = true;
  expertOrdersPage.hidden = false;
  document.querySelector('.patient-expert-workspace').classList.remove('detail-active');
  document.querySelector('.patient-expert-workspace').classList.add('orders-active');
  document.querySelector('#patientBack').setAttribute('aria-label', '返回专家分析库');
  renderExpertBreadcrumb('orders');
  renderExpertOrders();
  document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
}
function closeExpertOrdersPage() {
  showExpertLibraryView();
  document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('#expertRightsButton')?.focus({ preventScroll: true });
}
function addExpertOrder(info, payment) {
  const now = new Date();
  const pad = (value) => String(value).padStart(2, '0');
  const id = `EX${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}`;
  const end = new Date(now); end.setFullYear(end.getFullYear() + 1); end.setDate(end.getDate() - 1);
  expertOrders.unshift({ id, name: info.name, category: info.category, amount: Number(info.price), paid: Number(info.price), payment, created: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`, status: '已开通', valid: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} 至 ${end.getFullYear()}-${pad(end.getMonth() + 1)}-${pad(end.getDate())}`, quota: '100 次' });
  saveExpertOrders();
  renderExpertOrders();
}
expertCards.forEach((card) => {
  const detailButton = card.querySelector('[data-expert-sample]');
  if (detailButton) detailButton.textContent = '查看详情';
});
const expertSearch = document.querySelector('#expertSearch');
const expertStatusFilter = document.querySelector('#expertStatusFilter');
const expertSort = document.querySelector('#expertSort');
const expertEmptyState = document.querySelector('#expertEmptyState');
const expertDetailPage = document.querySelector('#expertDetailPage');
let activeExpertTab = '全部模板';
let activeExpertDetailCard = null;
function renderExpertLibrary() {
  const keyword = expertSearch.value.trim().toLocaleLowerCase('zh-CN');
  const status = expertStatusFilter.value;
  const visibleCards = expertCards.filter((card) => {
    const haystack = `${card.dataset.expertName} ${card.dataset.expertCategory} ${card.innerText}`.toLocaleLowerCase('zh-CN');
    return (activeExpertTab === '全部模板' || card.dataset.expertCategory === activeExpertTab) && (!status || card.dataset.expertStatus === status) && (!keyword || haystack.includes(keyword));
  });
  const sortedCards = [...visibleCards].sort((a, b) => {
    if (expertSort.value === 'priceAsc') return Number(a.dataset.expertPrice) - Number(b.dataset.expertPrice);
    if (expertSort.value === 'priceDesc') return Number(b.dataset.expertPrice) - Number(a.dataset.expertPrice);
    if (expertSort.value === 'name') return a.dataset.expertName.localeCompare(b.dataset.expertName, 'zh-CN');
    return expertCards.indexOf(a) - expertCards.indexOf(b);
  });
  expertCards.forEach((card) => { card.hidden = true; });
  sortedCards.forEach((card) => { card.hidden = false; expertAnalysisGrid.append(card); });
  document.querySelector('#expertResultCount').textContent = `${visibleCards.length} 项`;
  expertEmptyState.hidden = visibleCards.length !== 0;
}
document.querySelectorAll('[data-expert-tab]').forEach((button) => button.addEventListener('click', () => {
  activeExpertTab = button.dataset.expertTab;
  document.querySelectorAll('[data-expert-tab]').forEach((item) => item.classList.toggle('active', item === button));
  renderExpertLibrary();
}));
expertSearch.addEventListener('input', renderExpertLibrary);
expertStatusFilter.addEventListener('change', renderExpertLibrary);
expertSort.addEventListener('change', renderExpertLibrary);
document.querySelector('#expertResetFilters').addEventListener('click', () => {
  expertSearch.value = '';
  expertStatusFilter.value = '';
  expertSort.value = 'default';
  activeExpertTab = '全部模板';
  document.querySelectorAll('[data-expert-tab]').forEach((button) => button.classList.toggle('active', button.dataset.expertTab === activeExpertTab));
  renderExpertLibrary();
});
function expertCardInfo(card) {
  return { name: card.dataset.expertName, category: card.dataset.expertCategory, price: card.dataset.expertPrice, status: card.dataset.expertStatus, description: card.querySelector('.expert-card-desc').textContent.trim(), tags: [...card.querySelectorAll('.expert-card-tags span')].map((item) => item.textContent.trim()), features: [...card.querySelectorAll('li')].map((item) => item.textContent.trim()) };
}
function showExpertLibraryView() {
  document.querySelectorAll('[data-expert-view="library"]').forEach((item) => { item.hidden = false; });
  expertOrdersPage.hidden = true;
  expertDetailPage.hidden = true;
  expertDetailPage.innerHTML = '';
  activeExpertDetailCard = null;
  document.querySelector('.patient-expert-workspace').classList.remove('detail-active');
  document.querySelector('.patient-expert-workspace').classList.remove('orders-active');
  document.querySelector('#patientBack').setAttribute('aria-label', '返回报告文档');
  renderExpertBreadcrumb('library');
}
function renderExpertBreadcrumb(view, detailName = '') {
  const breadcrumb = document.querySelector('#expertBreadcrumb');
  const items = ['<button type="button" data-expert-crumb="reports">患者档案</button>', '<span>›</span>'];
  if (view === 'library') items.push('<strong>专家分析库</strong>');
  else {
    items.push('<button type="button" data-expert-crumb="library">专家分析库</button>', '<span>›</span>');
    items.push(`<strong>${escapeAccountText(view === 'orders' ? '购买订单' : detailName || '模板详情')}</strong>`);
  }
  breadcrumb.innerHTML = items.join('');
}
function closeExpertDetailPage() {
  showExpertLibraryView();
  document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('#expertSearch')?.focus({ preventScroll: true });
}
const expertTemplateDetails = {
  '多次体检趋势分析': {
    theme: 'blue', purpose: '对比多次体检数据，分析关键健康指标的变化趋势，帮助客户了解健康状况的变化与关注重点。',
    suitable: ['有 2 次及以上体检记录的客户', '希望了解健康指标变化趋势的客户', '关注指标是否改善或存在新增风险的客户'],
    solves: ['体检数据分散，难以看出变化趋势', '不清楚哪些指标持续异常或新增异常', '不确定后续需要重点关注哪些健康问题'],
    delivery: ['一份可直接交付客户的趋势分析报告', '关键指标变化图表与异常分析', '健康变化总结和复查、管理建议'],
    analysis: ['体检数据概览（次数、时间跨度）', '关键指标趋势（血糖、血脂、肝肾等）', '持续异常与新增异常识别', '指标改善或恶化分析', '重点关注与复查建议'],
    required: ['至少 2 份含日期的体检报告'], recommended: ['近 3 年体检报告，时间越连续越好'], optional: ['既往病史、用药情况及复查记录'],
    sampleTitle: '多次体检趋势分析报告', sampleMetrics: [['空腹血糖','7.2 mmol/L','近 3 年持续上升'],['总胆固醇','5.72 mmol/L','较上次升高 0.58'],['收缩压','142 mmHg','连续两次偏高'],['BMI','26.1','体重管理需关注']],
    outline: ['健康变化总结','指标趋势图','持续/新增异常','重点关注','管理建议（附示例图表）'],
    highlights: ['多次体检对比：直观呈现关键指标变化趋势','异常识别清晰：区分持续异常、新增异常与改善情况','图表化呈现：趋势图与对比表，结论清晰易懂','管理建议明确：给出复查、监测与生活方式建议'],
    service: ['年度体检趋势分析服务','年检后解读、健康复盘','趋势分析报告 + 管理建议']
  },
  '代谢健康专项分析': {
    theme: 'violet', purpose: '围绕血糖、血脂、尿酸和体重等核心指标，综合分析代谢健康状况，识别异常问题与相关风险，并提供个性化健康管理建议。',
    suitable: ['血糖、血脂、尿酸等指标异常的客户', '超重或肥胖（BMI≥24）的客户', '存在高血压、脂肪肝等代谢风险的客户'],
    solves: ['整合多项代谢指标，全面评估代谢健康', '识别异常指标及可能的关联因素', '分析代谢风险，明确重点管理方向', '提供饮食、运动、体重等个性化建议'],
    delivery: ['代谢健康综合评估', '血糖、血脂、尿酸、体重分析', '指标关联与风险提示', '个性化健康管理建议'],
    analysis: ['血糖分析（空腹血糖、HbA1c 等）', '血脂分析（TC、TG、HDL-C、LDL-C）', '尿酸分析（血尿酸）', '体重与肥胖分析（BMI、腰围）', '多指标关联与生活方式因素分析'],
    required: ['含血糖、血脂、尿酸指标的体检或检验报告'], recommended: ['身高、体重、腰围、血压记录'], optional: ['饮食、运动及饮酒记录'],
    sampleTitle: '代谢健康专项分析报告', sampleMetrics: [['空腹血糖','6.8 mmol/L','偏高'],['甘油三酯','2.3 mmol/L','偏高'],['血尿酸','428 μmol/L','偏高'],['BMI','27.6 kg/m²','超重']],
    outline: ['代谢健康概况','各指标分析','多指标关联分析','主要问题','生活方式建议（附数据图表）'],
    highlights: ['多指标综合分析：覆盖血糖、血脂、尿酸、体重','异常关联识别：发现多项指标异常的潜在关联','个性化建议：提供饮食、运动、体重管理等方案','可直接交付：生成标准化、可编辑的专业报告'],
    service: ['代谢健康评估服务','体重管理、控糖控脂、高尿酸管理','代谢健康分析报告 + 行动建议']
  },
  '综合健康风险分析': {
    theme: 'cyan', purpose: '基于体检数据、健康史和生活方式等多维信息，全面评估客户健康状况，识别主要健康问题和潜在风险，明确优先关注重点。',
    suitable: ['首次接受健康管理的客户', '希望全面了解自身健康状况的客户', '存在多项健康异常的客户', '需要制定后续管理方向的客户'],
    solves: ['快速梳理整体健康状况', '识别主要健康问题与潜在风险', '明确需要优先关注的健康事项', '提供针对性的健康管理建议'],
    delivery: ['结构化综合健康评估报告', '健康概况、主要问题与风险因素', '健康关注优先级与管理建议', '可直接用于客户沟通与服务交付'],
    analysis: ['健康概况（基本信息与整体评估）', '心血管、代谢、肝肾等系统指标分析', '健康史与家族史分析', '主要风险因素梳理', '优先关注事项与管理建议'],
    required: ['体检报告和客户基本信息'], recommended: ['既往病史、家族史及用药史'], optional: ['饮食、运动、睡眠等生活方式记录'],
    sampleTitle: '综合健康风险分析报告', sampleMetrics: [['心血管健康','重点关注','血压血脂异常'],['代谢健康','重点关注','血糖与体重'],['肝肾功能','保持关注','定期复查'],['生活方式','需要改善','运动睡眠不足']],
    outline: ['综合健康总结','主要健康问题','风险因素分析','重点关注事项','健康管理建议（附问题清单）'],
    highlights: ['多维度综合评估：体检、健康史、生活方式全面分析','重点问题识别：快速发现主要健康问题与风险因素','关注优先级：明确问题轻重缓急，指导管理重点','个性化建议：结合客户情况输出可执行的管理方案','标准化报告：结构清晰、专业易懂，可直接交付客户'],
    service: ['综合健康评估服务','新客户建档、健康管理起点','综合评估报告 + 管理方案建议']
  },
  '心血管健康专项分析': {
    theme: 'rose', purpose: '围绕血压、血脂等关键指标，结合个人健康信息与生活方式，分析心血管健康状况及相关风险因素，提供针对性的管理建议。',
    suitable: ['存在血压偏高或波动的客户', '血脂异常（总胆固醇、甘油三酯升高等）的客户', '具有心血管相关风险因素的客户（吸烟、超重、家族史等）'],
    solves: ['梳理血压、血脂等指标的当前状况', '识别影响心血管健康的主要风险因素', '分析相关指标的变化趋势与关联', '提供可执行的心血管健康管理建议'],
    delivery: ['心血管健康专项分析报告', '关键指标解读（血压、血脂等）', '指标变化趋势分析', '主要风险因素评估与重点管理建议'],
    analysis: ['血压分析（水平、波动与趋势）', '血脂分析（TC、TG、HDL-C、LDL-C）', '相关风险因素（年龄、体重、吸烟等）', '指标关联分析（血压、血脂、体重等）', '管理重点与监测建议'],
    required: ['血压记录与血脂相关数据'], recommended: ['BMI、腰围、血糖或尿酸'], optional: ['既往疾病、家族史、生活方式与用药情况'],
    sampleTitle: '心血管健康专项分析报告', sampleMetrics: [['血压','142/92 mmHg','较上次升高'],['总胆固醇','5.72 mmol/L','偏高'],['低密度脂蛋白','3.48 mmol/L','偏高'],['甘油三酯','1.46 mmol/L','正常']],
    outline: ['心血管健康概况','血压分析','血脂分析','风险因素评估','管理建议（附趋势图）'],
    highlights: ['聚焦血压、血脂等核心心血管指标','识别吸烟、肥胖、家族史等多种相关风险因素','支持指标变化趋势分析，了解健康动态','提供分阶段、可执行的管理建议','适用于初次评估与长期管理的多种服务场景'],
    service: ['心血管健康评估服务','高血压/高血脂管理、长期随访','心血管健康分析报告 + 随访建议']
  },
  '生活方式与营养分析': {
    theme: 'green', purpose: '基于饮食、运动、睡眠等日常行为数据，评估当前生活方式对健康的影响，提供个性化的营养与行为改善建议。',
    suitable: ['希望改善饮食结构和营养摄入的客户', '运动不足、久坐的客户', '存在睡眠不规律或睡眠质量不佳的客户', '需要进行体重管理和生活习惯调整的客户'],
    solves: ['全面评估当前生活方式是否健康', '识别饮食、运动、睡眠等方面的主要问题', '分析可能带来的健康影响（如体重、代谢等）', '提供可执行的营养与行为改善建议'],
    delivery: ['个性化生活方式与营养分析报告', '当前生活方式评估与主要问题', '饮食、运动、睡眠等专项分析', '重点改善建议与阶段性行动计划'],
    analysis: ['饮食分析（结构、营养摄入、问题）', '运动分析（频率、时长、强度）', '睡眠分析（时长、规律性、质量）', '生活习惯评估（吸烟、饮酒等）', '改善目标与行动建议'],
    required: ['生活方式问卷或近期饮食、运动、睡眠记录'], recommended: ['身高、体重、健康目标'], optional: ['血糖、血脂等相关健康指标'],
    sampleTitle: '生活方式与营养分析报告', sampleMetrics: [['平均睡眠','6.3 小时','低于建议时长'],['运动频率','2 次/周','活动量不足'],['蔬菜摄入','3 天达标','结构需优化'],['久坐时间','8.1 小时/日','需要干预']],
    outline: ['生活方式评估','饮食与营养分析','运动分析','睡眠分析','主要问题与改善计划（含行动建议）'],
    highlights: ['多维度评估：饮食、运动、睡眠、生活习惯全面分析','个性化建议：结合客户情况给出可执行的改善方案','可视化呈现：图表展示行为数据与变化趋势','易于服务交付：报告专业、易理解，可直接交付客户'],
    service: ['生活方式优化服务','体重管理、健康习惯养成','生活方式评估报告 + 改善计划']
  },
  '阶段性健康管理效果分析': {
    theme: 'amber', purpose: '总结一段时间内的健康管理服务，评估服务完成情况与健康指标变化，展示管理成果并给出后续建议。',
    suitable: ['已接受一段时间健康管理服务的客户', '需要进行月度或季度健康总结的客户', '服务即将结束或需要评估管理效果的客户'],
    solves: ['系统总结服务期间的健康管理工作', '直观展示关键健康指标的变化情况', '评估健康管理目标的完成进度', '明确仍需关注的问题与后续方向'],
    delivery: ['阶段健康管理总结报告', '服务完成情况与服务记录', '健康目标达成情况评估', '核心指标前后对比与变化分析', '阶段结论与下一步管理建议'],
    analysis: ['服务周期与目标回顾', '服务完成情况（已完成/未完成）', '关键指标前后对比（体重、血压等）', '生活方式变化评估', '阶段成果总结与下一阶段建议'],
    required: ['管理前后指标数据、服务记录与管理目标'], recommended: ['阶段内的体检或检验报告'], optional: ['行为记录（饮食、运动、睡眠）'],
    sampleTitle: '阶段性健康管理效果分析报告', sampleMetrics: [['服务完成率','80%','4/5 项已完成'],['体重','-2.5 kg','目标已达成'],['BMI','-0.9','接近目标'],['收缩压','-13 mmHg','改善明显']],
    outline: ['管理阶段总结','服务完成情况','指标前后对比与变化','目标达成情况','阶段成果与下一步建议'],
    highlights: ['完整呈现健康管理服务的履约情况','多维度评估健康目标的完成进度','直观展示关键指标的改善变化趋势','结合管理过程，给出下一阶段的个性化建议'],
    service: ['阶段性管理总结服务','月度/季度/年度健康复盘、服务交付与续约沟通','管理效果分析报告 + 后续计划']
  }
};
function expertBulletList(items) { return `<ul class="expert-detail-bullets">${items.map((item) => `<li>${escapeAccountText(item)}</li>`).join('')}</ul>`; }
function expertInfoPanel(icon, title, items) { return `<article class="expert-info-panel"><span>${icon}</span><h3>${escapeAccountText(title)}</h3>${expertBulletList(items)}</article>`; }
function expertMetricCards(items) { return `<div class="expert-metric-grid">${items.map(([label, value, note], index) => `<article><span>0${index + 1}</span><b>${escapeAccountText(label)}</b><strong>${escapeAccountText(value)}</strong><small>${escapeAccountText(note)}</small><div class="expert-sparkline"><i></i><i></i><i></i><i></i></div></article>`).join('')}</div>`; }
function expertTrendOverview(detail) {
  return `<div class="expert-overview-panels">${expertInfoPanel('♙','适合哪些客户？',detail.suitable)}${expertInfoPanel('◎','能解决什么问题？',detail.solves)}${expertInfoPanel('▤','最终交付什么报告？',detail.delivery)}</div>
    <section class="trend-preview-card">
      <header><span>▥</span><h3>关键指标趋势预览 <small>（示例数据）</small></h3></header>
      <nav aria-label="关键指标示例"><button class="active" type="button">血糖</button><button type="button">血脂</button><button type="button">血压</button><button type="button">尿酸</button><button type="button">体重 / BMI</button></nav>
      <div class="trend-preview-body"><div class="trend-chart-area"><h4>空腹血糖趋势（mmol/L）</h4><div class="trend-chart-wrap"><div class="trend-y-axis"><span>8.0</span><span>7.5</span><span>7.0</span><span>6.5</span><span>6.0</span><span>5.5</span><span>5.0</span></div><svg viewBox="0 0 620 250" preserveAspectRatio="none" role="img" aria-label="2022年至2025年空腹血糖上升趋势"><defs><linearGradient id="trendAreaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2d7cf2" stop-opacity=".22"/><stop offset="1" stop-color="#2d7cf2" stop-opacity=".03"/></linearGradient></defs><g class="trend-grid"><path d="M22 28H604M22 64H604M22 100H604M22 136H604M22 172H604M22 208H604"/></g><path class="trend-range" d="M22 146H604V205H22Z"/><path class="trend-area" d="M54 154L225 137L396 108L566 73V208H54Z"/><path class="trend-line" d="M54 154L225 137L396 108L566 73"/><g class="trend-points"><circle cx="54" cy="154" r="6"/><circle cx="225" cy="137" r="6"/><circle cx="396" cy="108" r="6"/><circle cx="566" cy="73" r="6"/></g><g class="trend-values"><text x="54" y="137">6.2</text><text x="225" y="120">6.4</text><text x="396" y="91">6.8</text><text x="566" y="56">7.2</text></g></svg><div class="trend-x-axis"><span>2022-03<small>第1次体检</small></span><span>2023-03<small>第2次体检</small></span><span>2024-03<small>第3次体检</small></span><span>2025-03<small>第4次体检</small></span></div></div><div class="trend-legend"><span><i></i>空腹血糖</span><span><i></i>参考范围（3.9–6.1 mmol/L）</span></div></div>
      <aside class="trend-insight"><h4>↗　趋势解读 <small>（示例）</small></h4><p><b>↗</b> 空腹血糖近 <strong>3 年</strong>呈持续上升趋势，最新一次为 <strong>7.2</strong> mmol/L，超过参考范围。</p><ul><li>建议复查血糖及糖化血红蛋白</li><li>关注饮食结构与体重管理</li><li>结合整体情况，评估代谢健康风险</li></ul></aside></div>
    </section>`;
}
function openExpertDetailPage(card) {
  const info = expertCardInfo(card);
  const detail = expertTemplateDetails[info.name] || expertTemplateDetails['多次体检趋势分析'];
  const icon = card.querySelector('.expert-card-heading>span')?.innerHTML || '';
  const purchased = info.status === '已购买';
  activeExpertDetailCard = card;
  document.querySelectorAll('[data-expert-view="library"]').forEach((item) => { item.hidden = true; });
  document.querySelector('.patient-expert-workspace').classList.add('detail-active');
  expertDetailPage.hidden = false;
  document.querySelector('#patientBack').setAttribute('aria-label', '返回专家分析库');
  expertDetailPage.dataset.theme = detail.theme;
  renderExpertBreadcrumb('detail', info.name);
  const overviewMarkup = info.name === '多次体检趋势分析' ? expertTrendOverview(detail) : `<div class="expert-overview-panels">${expertInfoPanel('♙','适合哪些客户？',detail.suitable)}${expertInfoPanel('◎','能解决什么问题？',detail.solves)}${expertInfoPanel('▤','最终交付什么报告？',detail.delivery)}</div><div class="expert-preview-block"><h3>关键指标预览 <small>示例数据</small></h3>${expertMetricCards(detail.sampleMetrics)}</div>`;
  expertDetailPage.innerHTML = `<div class="expert-template-shell">
    <header class="expert-template-hero"><button type="button" data-expert-detail-back>‹</button><div class="expert-template-icon">${icon}</div><div><h2>${escapeAccountText(info.name)} <em>${escapeAccountText(info.category)}</em></h2><p>${escapeAccountText(detail.purpose)}</p></div></header>
    <div class="expert-template-columns"><div class="expert-template-main">
      <nav class="expert-template-tabs" aria-label="模板详情导航"><button class="active" type="button" data-expert-panel="overview">模板概览</button><button type="button" data-expert-panel="analysis">分析内容</button><button type="button" data-expert-panel="requirements">资料要求</button><button type="button" data-expert-panel="sample">报告样例</button><button type="button" data-expert-panel="service">服务应用</button></nav>
      <section class="expert-template-panel active" data-expert-panel-content="overview">${overviewMarkup}</section>
      <section class="expert-template-panel" data-expert-panel-content="analysis"><header><span>ANALYSIS CONTENT</span><h3>${escapeAccountText(info.name)}包含哪些分析？</h3><p>围绕本模板的核心数据维度形成完整分析链路，从数据概览到问题识别，再到可执行建议。</p></header><div class="expert-analysis-dimensions">${detail.analysis.map((item,index)=>`<article><span>0${index+1}</span><b>${escapeAccountText(item)}</b><p>${index===0?'梳理资料范围与当前状态':index===detail.analysis.length-1?'形成清晰的下一步行动方案':'识别关键变化、异常与关联因素'}</p></article>`).join('')}</div></section>
      <section class="expert-template-panel" data-expert-panel-content="requirements"><header><span>DATA REQUIREMENTS</span><h3>生成报告需要哪些资料？</h3><p>资料越连续、越完整，分析结论越准确。提交前系统会自动检查缺失项。</p></header><div class="expert-requirement-list">${expertInfoPanel('必','必须资料',detail.required)}${expertInfoPanel('荐','推荐资料',detail.recommended)}${expertInfoPanel('选','可选资料',detail.optional)}</div><div class="expert-data-note"><b>资料安全说明</b><p>仅分析当前客户已授权且已进入健康档案的数据，分析结果自动归档到客户报告文档。</p></div></section>
      <section class="expert-template-panel" data-expert-panel-content="sample"><header><span>REPORT SAMPLE</span><h3>${escapeAccountText(detail.sampleTitle)}</h3><p>以下为报告大纲与可视化示例，实际内容会根据客户资料动态生成。</p></header><div class="expert-report-preview"><div class="report-paper"><header><span>专业健康分析报告</span><b>${escapeAccountText(detail.sampleTitle)}</b><small>示例客户 · 2026年11月</small></header><h4>01 核心结论</h4><p>${escapeAccountText(detail.purpose)}</p><h4>02 关键数据</h4>${expertMetricCards(detail.sampleMetrics.slice(0,3))}</div><aside><strong>报告目录</strong><ol>${detail.outline.map(item=>`<li>${escapeAccountText(item)}</li>`).join('')}</ol><button type="button" data-preview-pdf>预览完整报告（PDF）</button></aside></div></section>
      <section class="expert-template-panel" data-expert-panel-content="service"><header><span>SERVICE APPLICATION</span><h3>如何用于客户服务？</h3><p>模板可直接嵌入健康管理服务流程，用于评估、沟通、阶段交付与后续管理。</p></header><div class="expert-service-cards"><article><span>可包装为</span><b>${escapeAccountText(detail.service[0])}</b></article><article><span>服务场景</span><b>${escapeAccountText(detail.service[1])}</b></article><article><span>交付成果</span><b>${escapeAccountText(detail.service[2])}</b></article></div><div class="expert-service-flow"><article><b>1</b><strong>资料校验</strong><span>确认档案与数据完整</span></article><article><b>2</b><strong>专业分析</strong><span>识别问题、趋势与风险</span></article><article><b>3</b><strong>报告生成</strong><span>形成专业可交付报告</span></article><article><b>4</b><strong>服务跟进</strong><span>进入客户后续管理计划</span></article></div></section>
    </div><aside class="expert-template-aside"><section class="expert-report-cover"><h3>报告预览</h3><div><span>${escapeAccountText(detail.sampleTitle)}</span><i></i><i></i></div><button type="button" data-preview-pdf>◎　查看完整报告样例（PDF）</button></section><section><h3>模板亮点</h3>${expertBulletList(detail.highlights)}</section><section class="expert-purchase-card"><h3>购买权益</h3><dl><div><dt>价格</dt><dd>¥${escapeAccountText(info.price)} / 年</dd></div><div><dt>有效期</dt><dd>自开通起 12 个月</dd></div><div><dt>使用次数</dt><dd>100 次</dd></div><div><dt>适用成员</dt><dd>本机构所有主理人</dd></div></dl><button type="button" data-expert-detail-primary>${purchased ? '开始分析' : '立即开通'}</button></section></aside></div>
  </div>`;
  document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
}
function startExpertAnalysis(card) {
  const info = expertCardInfo(card);
  openCustomReportDrawer(info.name);
}
let selectedExpertPurchaseCard = null;
const expertPurchaseForm = document.querySelector('#expertPurchaseForm');
function updateExpertPurchaseSummary() {
  if (!selectedExpertPurchaseCard) return;
  const info = expertCardInfo(selectedExpertPurchaseCard);
  const amount = purchaseMoney(Number(info.price));
  document.querySelector('#expertPurchaseOrderName').textContent = info.name;
  document.querySelector('#expertPurchaseOrderPayment').textContent = expertPurchaseForm.elements.expertPurchasePayment.value;
  document.querySelector('#expertPurchaseOrderPrice').textContent = amount;
  document.querySelector('#expertPurchaseOrderTotal').textContent = amount;
}
function openExpertPurchase(card) {
  selectedExpertPurchaseCard = card;
  const info = expertCardInfo(card);
  const detail = expertTemplateDetails[info.name] || expertTemplateDetails['多次体检趋势分析'];
  document.querySelector('#expertPurchaseCategory').textContent = `${info.category} · 专业分析方案`;
  document.querySelector('#expertPurchaseName').textContent = info.name;
  document.querySelector('#expertPurchaseDescription').textContent = detail.purpose;
  document.querySelector('#expertPurchaseUnitPrice').textContent = `¥${(Number(info.price) / 100).toFixed(2)}`;
  document.querySelector('#expertPurchaseBenefitHint').textContent = detail.service[2];
  document.querySelector('#expertPurchaseBenefits').innerHTML = [
    ['◎', '专业分析内容', detail.analysis.slice(0, 2).join('；')],
    ['▤', '标准报告交付', detail.delivery.slice(0, 2).join('；')],
    ['♙', '机构权益共享', '开通后本机构所有主理人均可使用，共享 100 次分析额度。'],
    ['◷', '有效期与记录', '权益自开通起 12 个月有效，订单与使用记录可在“我的分析权益”中查看。'],
  ].map(([icon, title, copy]) => `<section><span aria-hidden="true">${icon}</span><div><h4>${escapeAccountText(title)}</h4><p>${escapeAccountText(copy)}</p></div></section>`).join('');
  expertPurchaseForm.reset();
  expertPurchaseForm.querySelector('.purchase-submit').disabled = false;
  updateExpertPurchaseSummary();
  switchView('expertPurchase');
}
function returnToExpertLibrary() {
  switchView('patient');
  openExpertLibrary();
}
function handleExpertActivation(card) {
  const info = expertCardInfo(card);
  if (info.status === '已购买') {
    startExpertAnalysis(card);
    return;
  }
  openExpertPurchase(card);
}
document.querySelector('#expertPurchaseBack').addEventListener('click', returnToExpertLibrary);
document.addEventListener('click', (event) => {
  const crumb = event.target.closest('[data-expert-crumb]');
  if (!crumb) return;
  if (crumb.dataset.expertCrumb === 'library') {
    if (currentView === 'expertPurchase') returnToExpertLibrary();
    else showExpertLibraryView();
    document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  if (crumb.dataset.expertCrumb === 'reports') {
    if (currentView === 'expertPurchase') switchView('patient');
    setPatientSection('reports');
    document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
  }
});
expertPurchaseForm.addEventListener('change', updateExpertPurchaseSummary);
expertPurchaseForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!selectedExpertPurchaseCard) return;
  const info = expertCardInfo(selectedExpertPurchaseCard);
  const payment = expertPurchaseForm.elements.expertPurchasePayment.value;
  const now = new Date();
  const pad = (value) => String(value).padStart(2, '0');
  const stamp = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  expertOrders.unshift({ id: `EX${stamp}`, name: info.name, category: info.category, amount: Number(info.price), paid: 0, payment, created: `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}`, status: '待支付', valid: '支付后生效', quota: '100 次' });
  saveExpertOrders();
  renderExpertOrders();
  expertPurchaseForm.querySelector('.purchase-submit').disabled = true;
  openModal(`<div class="purchase-confirmation"><span class="purchase-confirmation-icon">✓</span><h2>分析方案订单已创建</h2><p>已生成待支付订单。演示页面不会发起实际扣款。</p><dl><div><dt>分析方案</dt><dd>${escapeAccountText(info.name)}</dd></div><div><dt>订单编号</dt><dd>EX${stamp}</dd></div><div><dt>应付金额</dt><dd>${purchaseMoney(Number(info.price))}</dd></div><div><dt>支付方式</dt><dd>${escapeAccountText(payment)}</dd></div><div><dt>当前状态</dt><dd>待支付</dd></div></dl><div class="purchase-confirmation-actions"><button type="button" id="expertPurchaseViewOrders">查看订单记录</button><button type="button" id="expertPurchaseReturnLibrary">返回专家分析库</button></div></div>`);
  modalContent.querySelector('#expertPurchaseViewOrders').addEventListener('click', () => { closeModal(); returnToExpertLibrary(); openExpertOrdersPage(); });
  modalContent.querySelector('#expertPurchaseReturnLibrary').addEventListener('click', () => { closeModal(); returnToExpertLibrary(); });
});
expertAnalysisGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.expert-analysis-card');
  if (!card) return;
  if (event.target.closest('[data-expert-sample], [data-expert-detail]')) openExpertDetailPage(card);
  if (event.target.closest('[data-expert-activate]')) handleExpertActivation(card);
});
expertDetailPage.addEventListener('click', (event) => {
  if (event.target.closest('[data-expert-detail-back]')) closeExpertDetailPage();
  const panelButton = event.target.closest('[data-expert-panel]');
  if (panelButton) {
    const panel = panelButton.dataset.expertPanel;
    expertDetailPage.querySelectorAll('[data-expert-panel]').forEach((button) => button.classList.toggle('active', button === panelButton));
    expertDetailPage.querySelectorAll('[data-expert-panel-content]').forEach((section) => section.classList.toggle('active', section.dataset.expertPanelContent === panel));
    document.querySelector('.workspace').scrollTo({ top: 0, behavior: 'smooth' });
  }
  const navButton = event.target.closest('[data-detail-target]');
  if (navButton) {
    expertDetailPage.querySelectorAll('[data-detail-target]').forEach((button) => button.classList.toggle('active', button === navButton));
    expertDetailPage.querySelector(`#${navButton.dataset.detailTarget}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (event.target.closest('[data-preview-pdf]')) showToast('已打开完整报告样例预览（演示）');
  if (event.target.closest('[data-expert-detail-primary]') && activeExpertDetailCard) handleExpertActivation(activeExpertDetailCard);
});
document.querySelector('#expertRightsButton').addEventListener('click', openExpertOrdersPage);
document.querySelector('[data-expert-orders-back]').addEventListener('click', closeExpertOrdersPage);
document.querySelector('[data-expert-orders-buy]').addEventListener('click', closeExpertOrdersPage);
expertOrderSearch.addEventListener('input', renderExpertOrders);
expertOrderStatus.addEventListener('change', renderExpertOrders);
document.querySelector('[data-expert-orders-reset]').addEventListener('click', () => { expertOrderSearch.value = ''; expertOrderStatus.value = ''; renderExpertOrders(); expertOrderSearch.focus(); });
expertOrdersList.addEventListener('click', (event) => {
  const row = event.target.closest('[data-order-id]');
  if (!row) return;
  const order = expertOrders.find((item) => item.id === row.dataset.orderId);
  if (!order) return;
  if (event.target.closest('[data-expert-order-pay]')) {
    showToast(`已继续处理“${order.name}”订单（演示）`);
    return;
  }
  if (!event.target.closest('[data-expert-order-detail]')) return;
  openModal(`<section class="expert-modal expert-order-detail-modal"><span class="expert-modal-kicker">订单详情</span><h2>${escapeAccountText(order.name)}</h2><p>订单信息与购买权益明细</p><dl><div><dt>订单编号</dt><dd>${escapeAccountText(order.id)}</dd></div><div><dt>下单时间</dt><dd>${escapeAccountText(order.created)}</dd></div><div><dt>支付方式</dt><dd>${escapeAccountText(order.payment)}</dd></div><div><dt>订单金额</dt><dd>¥${Number(order.amount).toFixed(2)}</dd></div><div><dt>实付金额</dt><dd>¥${Number(order.paid).toFixed(2)}</dd></div><div><dt>订单状态</dt><dd><em class="expert-order-detail-status ${expertOrderStatusClass(order.status)}">${escapeAccountText(order.status)}</em></dd></div><div><dt>权益有效期</dt><dd>${escapeAccountText(order.valid)}</dd></div><div><dt>分析额度</dt><dd>${escapeAccountText(order.quota)}</dd></div></dl><button class="expert-modal-primary" type="button" data-expert-order-close>关闭订单详情</button></section>`);
  modalContent.querySelector('[data-expert-order-close]').addEventListener('click', closeModal);
});
renderExpertLibrary();
renderExpertOrders();
reportCustomButton.addEventListener('click', () => openCustomReportDrawer());
document.querySelector('#customReportClose').addEventListener('click', closeCustomReportDrawer);
document.querySelector('#customReportCancel').addEventListener('click', closeCustomReportDrawer);
customReportBackdrop.addEventListener('click', (event) => { if (event.target === customReportBackdrop) closeCustomReportDrawer(); });
customReportName.addEventListener('input', updateCustomReportCounts);
customReportInstruction.addEventListener('input', updateCustomReportCounts);
customReportForm.querySelectorAll('[name="reportScope"]').forEach((radio) => radio.addEventListener('change', () => {
  customReportDataOptions.hidden = customReportForm.elements.reportScope.value !== '指定健康资料';
}));
customReportForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!customReportName.value.trim()) {
    customReportName.focus();
    showToast('请先填写报告名称');
    return;
  }
  const taskName = activeExpertReportTemplate;
  closeCustomReportDrawer();
  showToast(taskName
    ? `“${taskName}”分析任务已创建`
    : `“${customReportName.value.trim()}”已进入生成队列`);
});
document.querySelectorAll('[data-report-more]').forEach((button) => button.addEventListener('click', (event) => {
  event.stopPropagation();
  const cell = button.closest('.report-row-action');
  const existing = cell.querySelector('.report-more-menu');
  document.querySelectorAll('.report-more-menu').forEach((menu) => { if (menu !== existing) menu.remove(); });
  if (existing) {
    existing.remove();
    button.setAttribute('aria-expanded', 'false');
    return;
  }
  const reportName = button.closest('tr').dataset.reportName;
  cell.insertAdjacentHTML('beforeend', `<div class="report-more-menu"><button type="button" data-report-rename>修改报告名称</button><button type="button" data-toast="正在预览${reportName}">预览报告</button><button type="button" data-toast="已准备下载${reportName}">下载文档</button><button type="button" data-toast="已打开${reportName}的发布设置">发布设置</button></div>`);
  cell.querySelector('[data-report-rename]').addEventListener('click', () => {
    cell.querySelector('.report-more-menu')?.remove();
    button.setAttribute('aria-expanded', 'false');
    startReportRename(button.closest('tr'));
  });
  button.setAttribute('aria-expanded', 'true');
}));
document.addEventListener('click', (event) => {
  if (event.target.closest('.report-more-menu')) return;
  document.querySelectorAll('.report-more-menu').forEach((menu) => menu.remove());
  document.querySelectorAll('[data-report-more]').forEach((button) => button.setAttribute('aria-expanded', 'false'));
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !customReportBackdrop.hidden) closeCustomReportDrawer();
  if (event.key !== 'Tab' || customReportBackdrop.hidden) return;
  const focusable = [...customReportDrawer.querySelectorAll('button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((item) => !item.closest('[hidden]'));
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
document.querySelectorAll('.nav-parent').forEach((button) => button.addEventListener('click', () => {
  button.closest('.nav-group').classList.add('open');
  button.setAttribute('aria-expanded', 'true');
}));
document.querySelectorAll('[data-menu-item]').forEach((item) => item.addEventListener('click', () => {
  document.querySelectorAll('.sub-nav button').forEach((button) => button.classList.toggle('active', button === item));
  showToast(`已进入${item.dataset.menuItem}`);
}));
document.querySelector('#collapseButton').addEventListener('click', () => shell.classList.toggle('collapsed'));
aiAssistantLauncher.addEventListener('click', () => setAssistantOpen(true));
aiAssistantClose.addEventListener('click', () => setAssistantOpen(false));
aiSessionButton.addEventListener('click', () => setSessionPanelOpen(aiSessionPanel.hidden));
aiNewChat.addEventListener('click', () => {
  const todayList = aiSessionPanel.querySelector('.ai-history-list');
  aiSessionPanel.querySelectorAll('.ai-history-item').forEach((item) => item.classList.remove('active'));
  todayList.insertAdjacentHTML('afterbegin', '<div class="ai-history-item active" role="button" tabindex="0"><span class="ai-history-icon"><svg><use href="#i-chat"/></svg></span><strong>新对话</strong><div class="ai-history-actions"><button type="button" data-session-edit aria-label="编辑会话名称"><svg><use href="#i-edit"/></svg></button><button type="button" data-session-delete aria-label="删除会话"><svg><use href="#i-trash"/></svg></button></div></div>');
  const count = aiSessionPanel.querySelector('.ai-history-group h3 span');
  count.textContent = String(Number(count.textContent) + 1);
  aiChatStream.innerHTML = '';
  aiSuggestions.hidden = false;
  aiAssistantInput.value = '';
  setSessionPanelOpen(false);
  showToast('已新建对话');
});
aiSessionPanel.addEventListener('click', (event) => {
  const item = event.target.closest('.ai-history-item');
  if (!item) return;
  const editButton = event.target.closest('[data-session-edit]');
  const deleteButton = event.target.closest('[data-session-delete]');
  if (editButton) {
    event.stopPropagation();
    const title = item.querySelector('strong');
    const originalTitle = title.textContent;
    title.contentEditable = 'true';
    title.classList.add('editing');
    title.focus();
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(title);
    selection.removeAllRanges();
    selection.addRange(range);
    const handleEditingKey = (keyEvent) => {
      if (keyEvent.key === 'Enter') { keyEvent.preventDefault(); title.blur(); }
      if (keyEvent.key === 'Escape') { keyEvent.preventDefault(); title.textContent = originalTitle; title.blur(); }
    };
    const finishEditing = () => {
      title.textContent = title.textContent.trim() || originalTitle;
      title.contentEditable = 'false';
      title.classList.remove('editing');
      title.removeEventListener('keydown', handleEditingKey);
      showToast('会话名称已更新');
    };
    title.addEventListener('blur', finishEditing, { once: true });
    title.addEventListener('keydown', handleEditingKey);
    return;
  }
  if (deleteButton) {
    event.stopPropagation();
    if (!deleteButton.classList.contains('confirming')) {
      deleteButton.classList.add('confirming');
      deleteButton.setAttribute('aria-label', '再次点击确认删除');
      deleteButton.innerHTML = '<span>确认</span>';
      window.setTimeout(() => {
        if (!deleteButton.isConnected || !deleteButton.classList.contains('confirming')) return;
        deleteButton.classList.remove('confirming');
        deleteButton.setAttribute('aria-label', '删除会话');
        deleteButton.innerHTML = '<svg><use href="#i-trash"/></svg>';
      }, 1800);
      return;
    }
    const group = item.closest('.ai-history-group');
    const count = group.querySelector('h3 span');
    item.remove();
    count.textContent = String(Math.max(0, Number(count.textContent) - 1));
    showToast('历史会话已删除');
    return;
  }
  aiSessionPanel.querySelectorAll('.ai-history-item').forEach((historyItem) => historyItem.classList.toggle('active', historyItem === item));
  setSessionPanelOpen(false);
  showToast(`已打开“${item.querySelector('strong').textContent}”`);
});
document.addEventListener('click', (event) => {
  if (!aiSessionPanel.hidden && !aiSessionPanel.contains(event.target) && !aiSessionButton.contains(event.target)) setSessionPanelOpen(false);
});
document.querySelectorAll('[data-ai-question]').forEach((button) => button.addEventListener('click', () => askAssistant(button.dataset.aiQuestion)));
aiAssistantForm.addEventListener('submit', (event) => {
  event.preventDefault();
  askAssistant(aiAssistantInput.value);
});
aiAssistantInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    aiAssistantForm.requestSubmit();
  }
});

myAcquisition.addEventListener('click', () => {
  promotionType = '机构';
  openModal(promotionTemplate.innerHTML, true);
  bindPromotionForm();
});

document.querySelectorAll('[data-status]').forEach((tab) => tab.addEventListener('click', () => {
  activeStatus = tab.dataset.status;
  document.querySelectorAll('[data-status]').forEach((item) => item.classList.toggle('active', item === tab));
  renderLeads();
}));

document.addEventListener('click', (event) => {
  const toastButton = event.target.closest('[data-toast]');
  if (toastButton && !toastButton.closest('.account-records-table')) showToast(toastButton.dataset.toast);
  if (event.target.closest('[data-copy-link]')) showToast('推广链接已复制（演示）');
});
document.querySelector('#modalClose').addEventListener('click', closeModal);
backdrop.addEventListener('click', (event) => { if (event.target === backdrop) closeModal(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab' && !quickRecordBackdrop.hidden) {
    const focusable = [...quickRecordDrawer.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter((item) => !item.closest('[hidden]'));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  if (event.key === 'Escape') {
    setServiceOverlay('patientReminderBackdrop', false);
    setServiceOverlay('serviceParseBackdrop', false);
    setServiceOverlay('serviceUploadBackdrop', false);
    closeModal();
    setPatientMoreOpen(false);
    closeAccountDrawer();
    closeQuickRecordDrawer();
    closeSmartFilterDrawer();
    closeFamilyMemberDrawer();
    setAssistantOpen(false);
  }
});

renderLeads();
renderCustomers();
renderManagedCustomers();
const initialView = new URLSearchParams(window.location.search).get('view');
if (initialView === 'purchase') {
  const purchaseParams = new URLSearchParams(window.location.search);
  openPurchase(purchaseParams.get('plan') || 'growth', purchaseParams.get('mode') === 'renew' ? 'myMembership' : 'membershipPlans', purchaseParams.get('mode'));
}
else if (initialView === 'pointsPurchase') openPointsPurchase(new URLSearchParams(window.location.search).get('package') || 'basic', 'pointsMall');
else if (initialView === 'patient') {
  openPatientArchive(customers[0]);
  if (new URLSearchParams(window.location.search).get('tab') === 'relations') setPatientDetailTab('relations');
  if (new URLSearchParams(window.location.search).get('section') === 'services') setPatientSection('services');
}
else if (['dashboard', 'customers', 'managedCustomers', 'acquisition', 'myMembership', 'membershipPlans', 'pointsMall', 'pointsDetails'].includes(initialView)) switchView(initialView);

import { createSSRApp, h as h$1 } from "vue";
import { renderToString } from "@vue/server-renderer";
import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { i18nVue } from "laravel-vue-i18n";
const Action$d = "কর্ম";
const Activities$d = "কার্যকলাপ";
const Address$d = "ঠিকানা";
const Archive$d = "আর্কাইভ";
const Assignee$d = "কার্যনির্বাহী";
const Assignees$d = "কার্যনির্বাহীগণ";
const Attachment$d = "সংযুক্তি";
const Attachments$d = "সংযুক্তিগুলো";
const Average$d = "গড়";
const Background$d = "পটভূমি";
const Cancel$d = "বাতিল করুন";
const Checklist$d = "চেকলিস্ট";
const Code$d = "কোড";
const Contacts$d = "যোগাযোগ";
const Create$d = "তৈরি করুন";
const Customers$d = "গ্রাহক";
const Dashboard$d = "ড্যাশবোর্ড";
const Delete$d = "মুছে ফেলুন";
const Description$d = "বর্ণনা";
const Details$d = "বিস্তারিত";
const Duration$d = "সময়কাল";
const Edit$d = "সম্পাদনা করুন";
const Email$d = "ইমেইল";
const Favorites$d = "প্রিয়";
const Filter$d = "ফিল্টার";
const ID$d = "আইডি";
const Label$d = "লেবেল";
const Labels$d = "লেবেলসমূহ";
const Language$d = "ভাষা";
const List$d = "তালিকা";
const Login$d = "লগইন";
const Logout$d = "লগআউট";
const Member$d = "সদস্য";
const Members$d = "সদস্যগণ";
const Memo$d = "মেমো";
const Menu$d = "মেনু";
const Move$d = "সরান";
const Name$d = "নাম";
const Open$d = "খুলুন";
const Overdue$d = "বিলম্বিত";
const Password$d = "পাসওয়ার্ড";
const Phone$d = "ফোন";
const Photo$d = "ছবি";
const Position$d = "অবস্থান";
const Project$d = "প্রকল্প";
const Projects$d = "প্রকল্পসমূহ";
const Register$d = "নিবন্ধন করুন";
const Registration$d = "নিবন্ধন";
const Remove$d = "সরিয়ে ফেলুন";
const Reset$d = "রিসেট করুন";
const Role$d = "ভূমিকা";
const START$d = "শুরু করুন";
const STOP$d = "বন্ধ করুন";
const Save$d = "সংরক্ষণ করুন";
const Slug$d = "স্লাগ";
const Starred$d = "তারকাচিহ্নিত";
const Started$d = "শুরু হয়েছে";
const Stopped$d = "বন্ধ হয়েছে";
const Submit$d = "জমা দিন";
const Task$d = "কাজ";
const Template$d = "টেমপ্লেট";
const Title$d = "শিরোনাম";
const Update$d = "আপডেট করুন";
const User$d = "ব্যবহারকারী";
const Users$d = "ব্যবহারকারীগণ";
const Website$d = "ওয়েবসাইট";
const Workspace$d = "কর্মক্ষেত্র";
const optional$d = "ঐচ্ছিক";
const bd = {
  Action: Action$d,
  Activities: Activities$d,
  "Add New": "নতুন যোগ করুন",
  "Add Time": "সময় যোগ করুন",
  "Add a new item": "একটি নতুন আইটেম যোগ করুন",
  "Add a new list": "একটি নতুন তালিকা যোগ করুন",
  "Add a task": "একটি কাজ যোগ করুন",
  "Add task": "কাজ যোগ করুন",
  "Add time manually": "ম্যানুয়ালি সময় যোগ করুন",
  Address: Address$d,
  "Allowed File Types": "অনুমোদিত ফাইলের ধরন",
  "App Name": "অ্যাপের নাম",
  Archive: Archive$d,
  "Archived Board Items": "আর্কাইভ করা বোর্ডের আইটেম",
  "Archived Tasks": "আর্কাইভ করা কাজ",
  Assignee: Assignee$d,
  Assignees: Assignees$d,
  Attachment: Attachment$d,
  Attachments: Attachments$d,
  Average: Average$d,
  Background: Background$d,
  Cancel: Cancel$d,
  "Change Background": "পটভূমি পরিবর্তন করুন",
  "Change Task Visibility": "কাজের দৃশ্যমানতা পরিবর্তন করুন",
  "Change Workspace": "কর্মক্ষেত্র পরিবর্তন করুন",
  "Check Update": "আপডেট পরীক্ষা করুন",
  Checklist: Checklist$d,
  "Clear All": "সব মুছে ফেলুন",
  "Click to rename project": "প্রকল্পের নাম পরিবর্তন করতে ক্লিক করুন",
  "Closed Tickets": "বন্ধ টিকিট",
  Code: Code$d,
  "Confirm Password": "পাসওয়ার্ড নিশ্চিত করুন",
  Contacts: Contacts$d,
  Create: Create$d,
  "Create New": "নতুন তৈরি করুন",
  "Create Project": "প্রকল্প তৈরি করুন",
  "Create Role": "ভূমিকা তৈরি করুন",
  "Create Workspace": "কর্মক্ষেত্র তৈরি করুন",
  "Create Workspace Type": "কর্মক্ষেত্রের ধরন তৈরি করুন",
  "Create a New Role": "একটি নতুন ভূমিকা তৈরি করুন",
  "Create a new Workspace type": "একটি নতুন কর্মক্ষেত্রের ধরন তৈরি করুন",
  "Create a new label": "একটি নতুন লেবেল তৈরি করুন",
  "Create workspace": "কর্মক্ষেত্র তৈরি করুন",
  "Created At": "তৈরির সময়",
  "Cron Job Instruction": "ক্রন জব নির্দেশাবলী",
  "Custom CSS": "কাস্টম সিএসএস",
  Customers: Customers$d,
  Dashboard: Dashboard$d,
  "Default Language": "ডিফল্ট ভাষা",
  Delete: Delete$d,
  "Delete Project": "প্রকল্প মুছে ফেলুন",
  "Delete User": "ব্যবহারকারী মুছে ফেলুন",
  Description: Description$d,
  Details: Details$d,
  "Due Date": "নির্দিষ্ট তারিখ",
  "Due in the next day": "পরবর্তী দিনের মধ্যে প্রদেয়",
  Duration: Duration$d,
  Edit: Edit$d,
  "Edit Labels": "লেবেল সম্পাদনা করুন",
  "Edit Profile": "প্রোফাইল সম্পাদনা করুন",
  Email: Email$d,
  "Email Address": "ইমেইল ঠিকানা",
  "Email Html": "ইমেইল এইচটিএমএল",
  "Email Notifications": "ইমেইল বিজ্ঞপ্তি",
  "Enable Registration": "নিবন্ধন সক্ষম করুন",
  "Enable pre made board list": "আগে থেকে তৈরি বোর্ড তালিকা সক্ষম করুন",
  "Enabling this the tasks will be visible only for the admin and assigned people": "এটি সক্ষম করলে কাজগুলো কেবল অ্যাডমিন এবং নির্ধারিত ব্যক্তিদের জন্য দৃশ্যমান হবে",
  "Enter a title for this task": "এই কাজের জন্য একটি শিরোনাম লিখুন",
  "Export tasks as CSV": "CSV হিসাবে কাজ রপ্তানি করুন",
  "Export tasks as Excel": "এক্সেল হিসাবে কাজ রপ্তানি করুন",
  Favorites: Favorites$d,
  Filter: Filter$d,
  "Filter by role": "ভূমিকা দ্বারা ফিল্টার করুন",
  "Find tasks or projects": "কাজ বা প্রকল্প খুঁজুন",
  "First Response Time": "প্রথম প্রতিক্রিয়ার সময়",
  "First name": "নামের প্রথম অংশ",
  "Forgot your password?": "আপনি কি আপনার পাসওয়ার্ড ভুলে গেছেন?",
  "From Address": "প্রেরকের ঠিকানা",
  "From Name": "প্রেরকের নাম",
  "Global Settings": "গ্লোবাল সেটিংস",
  "Google ReCaptcha Site Key": "গুগল রিক্যাপচা সাইট কী",
  ID: ID$d,
  "Invite Workspace": "কর্মক্ষেত্রে আমন্ত্রণ জানান",
  "Invite Workspace members": "কর্মক্ষেত্রের সদস্যদের আমন্ত্রণ জানান",
  Label: Label$d,
  Labels: Labels$d,
  Language: Language$d,
  "Language Name": "ভাষার নাম",
  "Last Response Time": "শেষ প্রতিক্রিয়ার সময়",
  "Last name": "নামের শেষাংশ",
  List: List$d,
  Login: Login$d,
  Logout: Logout$d,
  "Mail Encryption": "মেইল এনক্রিপশন",
  "Make Cover": "কভার তৈরি করুন",
  Member: Member$d,
  Members: Members$d,
  Memo: Memo$d,
  Menu: Menu$d,
  Move: Move$d,
  "Move Card": "কার্ড সরান",
  "Move Left": "বামে সরান",
  "Move Right": "ডানে সরান",
  "Move Task": "কাজ সরান",
  "My Tasks": "আমার কাজ",
  "My Workspaces": "আমার কর্মক্ষেত্র",
  Name: Name$d,
  "New Tickets": "নতুন টিকিট",
  "No dates": "কোনো তারিখ নেই",
  "No item found!": "কোনো আইটেম পাওয়া যায়নি!",
  "No labels found.": "কোনো লেবেল পাওয়া যায়নি।",
  "No list found!": "কোনো তালিকা পাওয়া যায়নি!",
  "No members": "কোনো সদস্য নেই",
  "No task found!": "কোনো কাজ পাওয়া যায়নি!",
  "No time log found.": "কোনো সময় লগ পাওয়া যায়নি।",
  "No workspace found": "কোনো কর্মক্ষেত্র পাওয়া যায়নি",
  Open: Open$d,
  "Open Tickets": "খোলা টিকিট",
  Overdue: Overdue$d,
  Password: Password$d,
  Phone: Phone$d,
  Photo: Photo$d,
  Position: Position$d,
  "Pre made list": "আগে থেকে তৈরি তালিকা",
  Project: Project$d,
  "Project Details": "প্রকল্পের বিবরণ",
  "Project name": "প্রকল্পের নাম",
  Projects: Projects$d,
  "Recently Viewed": "সম্প্রতি দেখা",
  Register: Register$d,
  Registration: Registration$d,
  Remove: Remove$d,
  "Remove Cover": "কভার সরান",
  Reset: Reset$d,
  "Reset Password": "পাসওয়ার্ড রিসেট করুন",
  "Revert Back": "পূর্বাবস্থায় ফিরুন",
  Role: Role$d,
  "SMTP Host": "এসএমটিপি হোস্ট",
  "SMTP Password": "এসএমটিপি পাসওয়ার্ড",
  "SMTP Port": "এসএমটিপি পোর্ট",
  "SMTP Username": "এসএমটিপি ব্যবহারকারীর নাম",
  START: START$d,
  STOP: STOP$d,
  Save: Save$d,
  "Search User": "ব্যবহারকারী খুঁজুন",
  "Search labels": "লেবেল খুঁজুন",
  "Search...": "অনুসন্ধান...",
  "Select a color": "একটি রঙ নির্বাচন করুন",
  "Select a destination": "একটি গন্তব্য নির্বাচন করুন",
  "Select a workspace": "একটি কর্মক্ষেত্র নির্বাচন করুন",
  "Send Password Reset Link": "পাসওয়ার্ড রিসেট লিঙ্ক পাঠান",
  "Send to board": "বোর্ডে পাঠান",
  "Show Registration link on the login page": "লগইন পৃষ্ঠায় নিবন্ধন লিঙ্ক দেখান",
  "Slack Notifications": "স্ল্যাক বিজ্ঞপ্তি",
  "Slack webhook URL": "স্ল্যাক ওয়েবহুক ইউআরএল",
  Slug: Slug$d,
  Starred: Starred$d,
  Started: Started$d,
  Stopped: Stopped$d,
  Submit: Submit$d,
  Task: Task$d,
  "Tasks assigned to me": "আমাকে নির্ধারিত কাজ",
  "Team Members": "দলের সদস্য",
  Template: Template$d,
  "This task is archived.": "এই কাজটি আর্কাইভ করা হয়েছে।",
  "Ticket by department": "বিভাগ অনুযায়ী টিকিট",
  "Ticket by type": "ধরন অনুযায়ী টিকিট",
  "Ticket history": "টিকিটের ইতিহাস",
  "Time Count": "সময় গণনা",
  Title: Title$d,
  "To tasks found!": "কাজ পাওয়া গেছে!",
  "Top ticket creator": "শীর্ষ টিকিট সৃষ্টিকারী",
  "Total duration": "মোট সময়কাল",
  "Unassigned Tickets": "অনির্ধারিত টিকিট",
  Update: Update$d,
  "Update User": "ব্যবহারকারী আপডেট করুন",
  User: User$d,
  Users: Users$d,
  "Visible tasks only for the assigned people.": "কেবলমাত্র নির্ধারিত ব্যক্তিদের জন্য কাজ দৃশ্যমান।",
  Website: Website$d,
  Workspace: Workspace$d,
  "Workspace Description": "কর্মক্ষেত্রের বর্ণনা",
  "Workspace Tasks": "কর্মক্ষেত্রের কাজ",
  "Workspace Type": "কর্মক্ষেত্রের ধরন",
  "Workspace name": "কর্মক্ষেত্রের নাম",
  "Write a comment...": "একটি মন্তব্য লিখুন...",
  "last month": "গত মাসে",
  optional: optional$d,
  "this month": "এই মাসে"
};
const __vite_glob_1_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$d,
  Activities: Activities$d,
  Address: Address$d,
  Archive: Archive$d,
  Assignee: Assignee$d,
  Assignees: Assignees$d,
  Attachment: Attachment$d,
  Attachments: Attachments$d,
  Average: Average$d,
  Background: Background$d,
  Cancel: Cancel$d,
  Checklist: Checklist$d,
  Code: Code$d,
  Contacts: Contacts$d,
  Create: Create$d,
  Customers: Customers$d,
  Dashboard: Dashboard$d,
  Delete: Delete$d,
  Description: Description$d,
  Details: Details$d,
  Duration: Duration$d,
  Edit: Edit$d,
  Email: Email$d,
  Favorites: Favorites$d,
  Filter: Filter$d,
  ID: ID$d,
  Label: Label$d,
  Labels: Labels$d,
  Language: Language$d,
  List: List$d,
  Login: Login$d,
  Logout: Logout$d,
  Member: Member$d,
  Members: Members$d,
  Memo: Memo$d,
  Menu: Menu$d,
  Move: Move$d,
  Name: Name$d,
  Open: Open$d,
  Overdue: Overdue$d,
  Password: Password$d,
  Phone: Phone$d,
  Photo: Photo$d,
  Position: Position$d,
  Project: Project$d,
  Projects: Projects$d,
  Register: Register$d,
  Registration: Registration$d,
  Remove: Remove$d,
  Reset: Reset$d,
  Role: Role$d,
  START: START$d,
  STOP: STOP$d,
  Save: Save$d,
  Slug: Slug$d,
  Starred: Starred$d,
  Started: Started$d,
  Stopped: Stopped$d,
  Submit: Submit$d,
  Task: Task$d,
  Template: Template$d,
  Title: Title$d,
  Update: Update$d,
  User: User$d,
  Users: Users$d,
  Website: Website$d,
  Workspace: Workspace$d,
  default: bd,
  optional: optional$d
}, Symbol.toStringTag, { value: "Module" }));
const Action$c = "操作";
const Activities$c = "活动";
const Address$c = "地址";
const Archive$c = "存档";
const Assignee$c = "负责人";
const Assignees$c = "负责人";
const Attachment$c = "附件";
const Attachments$c = "附件";
const Average$c = "平均";
const Background$c = "背景";
const Cancel$c = "取消";
const Checklist$c = "清单";
const Code$c = "代码";
const Contacts$c = "联系人";
const Create$c = "创建";
const Customers$c = "客户";
const Dashboard$c = "仪表板";
const Delete$c = "删除";
const Description$c = "描述";
const Details$c = "详情";
const Duration$c = "持续时间";
const Edit$c = "编辑";
const Email$c = "电子邮件";
const Favorites$c = "收藏夹";
const Filter$c = "筛选";
const ID$c = "ID";
const Label$c = "标签";
const Labels$c = "标签";
const Language$c = "语言";
const List$c = "列表";
const Login$c = "登录";
const Logout$c = "登出";
const Member$c = "成员";
const Members$c = "成员";
const Memo$c = "备忘录";
const Menu$c = "菜单";
const Move$c = "移动";
const Name$c = "名称";
const Open$c = "打开";
const Overdue$c = "已逾期";
const Password$c = "密码";
const Phone$c = "电话";
const Photo$c = "照片";
const Position$c = "位置";
const Project$c = "项目";
const Projects$c = "项目";
const Register$c = "注册";
const Registration$c = "注册";
const Remove$c = "移除";
const Reset$c = "重置";
const Role$c = "角色";
const START$c = "开始";
const STOP$c = "停止";
const Save$c = "保存";
const Slug$c = "别名";
const Starred$c = "已加星标";
const Started$c = "已开始";
const Stopped$c = "已停止";
const Submit$c = "提交";
const Task$c = "任务";
const Template$c = "模板";
const Title$c = "标题";
const Update$c = "更新";
const User$c = "用户";
const Users$c = "用户";
const Website$c = "网站";
const Workspace$c = "工作区";
const optional$c = "可选";
const cn = {
  Action: Action$c,
  Activities: Activities$c,
  "Add New": "新增",
  "Add Time": "添加时间",
  "Add a new item": "添加一个新项目",
  "Add a new list": "添加一个新列表",
  "Add a task": "添加一个任务",
  "Add task": "添加任务",
  "Add time manually": "手动添加时间",
  Address: Address$c,
  "Allowed File Types": "允许的文件类型",
  "App Name": "应用名称",
  Archive: Archive$c,
  "Archived Board Items": "已存档的看板项目",
  "Archived Tasks": "已存档的任务",
  Assignee: Assignee$c,
  Assignees: Assignees$c,
  Attachment: Attachment$c,
  Attachments: Attachments$c,
  Average: Average$c,
  Background: Background$c,
  Cancel: Cancel$c,
  "Change Background": "更换背景",
  "Change Task Visibility": "更改任务可见性",
  "Change Workspace": "切换工作区",
  "Check Update": "检查更新",
  Checklist: Checklist$c,
  "Clear All": "全部清除",
  "Click to rename project": "点击以重命名项目",
  "Closed Tickets": "已关闭的工单",
  Code: Code$c,
  "Confirm Password": "确认密码",
  Contacts: Contacts$c,
  Create: Create$c,
  "Create New": "创建新的",
  "Create Project": "创建项目",
  "Create Role": "创建角色",
  "Create Workspace": "创建工作区",
  "Create Workspace Type": "创建工作区类型",
  "Create a New Role": "创建一个新角色",
  "Create a new Workspace type": "创建一个新的工作区类型",
  "Create a new label": "创建一个新标签",
  "Create workspace": "创建工作区",
  "Created At": "创建于",
  "Cron Job Instruction": "定时任务指令",
  "Custom CSS": "自定义CSS",
  Customers: Customers$c,
  Dashboard: Dashboard$c,
  "Default Language": "默认语言",
  Delete: Delete$c,
  "Delete Project": "删除项目",
  "Delete User": "删除用户",
  Description: Description$c,
  Details: Details$c,
  "Due Date": "截止日期",
  "Due in the next day": "明天到期",
  Duration: Duration$c,
  Edit: Edit$c,
  "Edit Labels": "编辑标签",
  "Edit Profile": "编辑个人资料",
  Email: Email$c,
  "Email Address": "电子邮件地址",
  "Email Html": "电子邮件Html",
  "Email Notifications": "电子邮件通知",
  "Enable Registration": "启用注册",
  "Enable pre made board list": "启用预制看板列表",
  "Enabling this the tasks will be visible only for the admin and assigned people": "启用此项后，任务将仅对管理员和指定人员可见",
  "Enter a title for this task": "为此任务输入一个标题",
  "Export tasks as CSV": "将任务导出为CSV",
  "Export tasks as Excel": "将任务导出为Excel",
  Favorites: Favorites$c,
  Filter: Filter$c,
  "Filter by role": "按角色筛选",
  "Find tasks or projects": "查找任务或项目",
  "First Response Time": "首次响应时间",
  "First name": "名字",
  "Forgot your password?": "忘记密码？",
  "From Address": "发件人地址",
  "From Name": "发件人名称",
  "Global Settings": "全局设置",
  "Google ReCaptcha Site Key": "谷歌验证码站点密钥",
  ID: ID$c,
  "Invite Workspace": "邀请加入工作区",
  "Invite Workspace members": "邀请工作区成员",
  Label: Label$c,
  Labels: Labels$c,
  Language: Language$c,
  "Language Name": "语言名称",
  "Last Response Time": "最后响应时间",
  "Last name": "姓氏",
  List: List$c,
  Login: Login$c,
  Logout: Logout$c,
  "Mail Encryption": "邮件加密",
  "Make Cover": "设为封面",
  Member: Member$c,
  Members: Members$c,
  Memo: Memo$c,
  Menu: Menu$c,
  Move: Move$c,
  "Move Card": "移动卡片",
  "Move Left": "左移",
  "Move Right": "右移",
  "Move Task": "移动任务",
  "My Tasks": "我的任务",
  "My Workspaces": "我的工作区",
  Name: Name$c,
  "New Tickets": "新工单",
  "No dates": "无日期",
  "No item found!": "未找到项目！",
  "No labels found.": "未找到标签。",
  "No list found!": "未找到列表！",
  "No members": "无成员",
  "No task found!": "未找到任务！",
  "No time log found.": "未找到时间记录。",
  "No workspace found": "未找到工作区",
  Open: Open$c,
  "Open Tickets": "待处理的工单",
  Overdue: Overdue$c,
  Password: Password$c,
  Phone: Phone$c,
  Photo: Photo$c,
  Position: Position$c,
  "Pre made list": "预制列表",
  Project: Project$c,
  "Project Details": "项目详情",
  "Project name": "项目名称",
  Projects: Projects$c,
  "Recently Viewed": "最近查看",
  Register: Register$c,
  Registration: Registration$c,
  Remove: Remove$c,
  "Remove Cover": "移除封面",
  Reset: Reset$c,
  "Reset Password": "重置密码",
  "Revert Back": "恢复",
  Role: Role$c,
  "SMTP Host": "SMTP主机",
  "SMTP Password": "SMTP密码",
  "SMTP Port": "SMTP端口",
  "SMTP Username": "SMTP用户名",
  START: START$c,
  STOP: STOP$c,
  Save: Save$c,
  "Search User": "搜索用户",
  "Search labels": "搜索标签",
  "Search...": "搜索...",
  "Select a color": "选择一种颜色",
  "Select a destination": "选择一个目的地",
  "Select a workspace": "选择一个工作区",
  "Send Password Reset Link": "发送密码重置链接",
  "Send to board": "发送到看板",
  "Show Registration link on the login page": "在登录页面显示注册链接",
  "Slack Notifications": "Slack通知",
  "Slack webhook URL": "Slack Webhook URL",
  Slug: Slug$c,
  Starred: Starred$c,
  Started: Started$c,
  Stopped: Stopped$c,
  Submit: Submit$c,
  Task: Task$c,
  "Tasks assigned to me": "分配给我的任务",
  "Team Members": "团队成员",
  Template: Template$c,
  "This task is archived.": "此任务已存档。",
  "Ticket by department": "按部门分类的工单",
  "Ticket by type": "按类型分类的工单",
  "Ticket history": "工单历史",
  "Time Count": "计时",
  Title: Title$c,
  "To tasks found!": "找到任务！",
  "Top ticket creator": "顶级工单创建者",
  "Total duration": "总时长",
  "Unassigned Tickets": "未分配的工单",
  Update: Update$c,
  "Update User": "更新用户",
  User: User$c,
  Users: Users$c,
  "Visible tasks only for the assigned people.": "任务仅对指定人员可见。",
  Website: Website$c,
  Workspace: Workspace$c,
  "Workspace Description": "工作区描述",
  "Workspace Tasks": "工作区任务",
  "Workspace Type": "工作区类型",
  "Workspace name": "工作区名称",
  "Write a comment...": "写下评论...",
  "last month": "上个月",
  optional: optional$c,
  "this month": "这个月"
};
const __vite_glob_1_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$c,
  Activities: Activities$c,
  Address: Address$c,
  Archive: Archive$c,
  Assignee: Assignee$c,
  Assignees: Assignees$c,
  Attachment: Attachment$c,
  Attachments: Attachments$c,
  Average: Average$c,
  Background: Background$c,
  Cancel: Cancel$c,
  Checklist: Checklist$c,
  Code: Code$c,
  Contacts: Contacts$c,
  Create: Create$c,
  Customers: Customers$c,
  Dashboard: Dashboard$c,
  Delete: Delete$c,
  Description: Description$c,
  Details: Details$c,
  Duration: Duration$c,
  Edit: Edit$c,
  Email: Email$c,
  Favorites: Favorites$c,
  Filter: Filter$c,
  ID: ID$c,
  Label: Label$c,
  Labels: Labels$c,
  Language: Language$c,
  List: List$c,
  Login: Login$c,
  Logout: Logout$c,
  Member: Member$c,
  Members: Members$c,
  Memo: Memo$c,
  Menu: Menu$c,
  Move: Move$c,
  Name: Name$c,
  Open: Open$c,
  Overdue: Overdue$c,
  Password: Password$c,
  Phone: Phone$c,
  Photo: Photo$c,
  Position: Position$c,
  Project: Project$c,
  Projects: Projects$c,
  Register: Register$c,
  Registration: Registration$c,
  Remove: Remove$c,
  Reset: Reset$c,
  Role: Role$c,
  START: START$c,
  STOP: STOP$c,
  Save: Save$c,
  Slug: Slug$c,
  Starred: Starred$c,
  Started: Started$c,
  Stopped: Stopped$c,
  Submit: Submit$c,
  Task: Task$c,
  Template: Template$c,
  Title: Title$c,
  Update: Update$c,
  User: User$c,
  Users: Users$c,
  Website: Website$c,
  Workspace: Workspace$c,
  default: cn,
  optional: optional$c
}, Symbol.toStringTag, { value: "Module" }));
const Action$b = "Aktion";
const Activities$b = "Aktivitäten";
const Address$b = "Adresse";
const Archive$b = "Archiv";
const Assignee$b = "Beauftragter";
const Assignees$b = "Beauftragte";
const Attachment$b = "Anhang";
const Attachments$b = "Anhänge";
const Average$b = "Durchschnitt";
const Background$b = "Hintergrund";
const Cancel$b = "Abbrechen";
const Checklist$b = "Checkliste";
const Code$b = "Code";
const Contacts$b = "Kontakte";
const Create$b = "Erstellen";
const Customers$b = "Kunden";
const Dashboard$b = "Dashboard";
const Delete$b = "Löschen";
const Description$b = "Beschreibung";
const Details$b = "Details";
const Duration$b = "Dauer";
const Edit$b = "Bearbeiten";
const Email$b = "E-Mail";
const Favorites$b = "Favoriten";
const Filter$b = "Filter";
const ID$b = "ID";
const Label$b = "Label";
const Labels$b = "Labels";
const Language$b = "Sprache";
const List$b = "Liste";
const Login$b = "Anmelden";
const Logout$b = "Abmelden";
const Member$b = "Mitglied";
const Members$b = "Mitglieder";
const Memo$b = "Memo";
const Menu$b = "Menü";
const Move$b = "Verschieben";
const Name$b = "Name";
const Open$b = "Öffnen";
const Overdue$b = "Überfällig";
const Password$b = "Passwort";
const Phone$b = "Telefon";
const Photo$b = "Foto";
const Position$b = "Position";
const Project$b = "Projekt";
const Projects$b = "Projekte";
const Register$b = "Registrieren";
const Registration$b = "Registrierung";
const Remove$b = "Entfernen";
const Reset$b = "Zurücksetzen";
const Role$b = "Rolle";
const START$b = "START";
const STOP$b = "STOPP";
const Save$b = "Speichern";
const Slug$b = "Slug";
const Starred$b = "Markiert";
const Started$b = "Gestartet";
const Stopped$b = "Gestoppt";
const Submit$b = "Senden";
const Task$b = "Aufgabe";
const Template$b = "Vorlage";
const Title$b = "Titel";
const Update$b = "Aktualisieren";
const User$b = "Benutzer";
const Users$b = "Benutzer";
const Website$b = "Webseite";
const Workspace$b = "Arbeitsbereich";
const optional$b = "optional";
const de = {
  Action: Action$b,
  Activities: Activities$b,
  "Add New": "Neu hinzufügen",
  "Add Time": "Zeit hinzufügen",
  "Add a new item": "Ein neues Element hinzufügen",
  "Add a new list": "Eine neue Liste hinzufügen",
  "Add a task": "Eine Aufgabe hinzufügen",
  "Add task": "Aufgabe hinzufügen",
  "Add time manually": "Zeit manuell hinzufügen",
  Address: Address$b,
  "Allowed File Types": "Erlaubte Dateitypen",
  "App Name": "App-Name",
  Archive: Archive$b,
  "Archived Board Items": "Archivierte Board-Elemente",
  "Archived Tasks": "Archivierte Aufgaben",
  Assignee: Assignee$b,
  Assignees: Assignees$b,
  Attachment: Attachment$b,
  Attachments: Attachments$b,
  Average: Average$b,
  Background: Background$b,
  Cancel: Cancel$b,
  "Change Background": "Hintergrund ändern",
  "Change Task Visibility": "Sichtbarkeit der Aufgabe ändern",
  "Change Workspace": "Arbeitsbereich wechseln",
  "Check Update": "Update prüfen",
  Checklist: Checklist$b,
  "Clear All": "Alles löschen",
  "Click to rename project": "Klicken, um Projekt umzubenennen",
  "Closed Tickets": "Geschlossene Tickets",
  Code: Code$b,
  "Confirm Password": "Passwort bestätigen",
  Contacts: Contacts$b,
  Create: Create$b,
  "Create New": "Neu erstellen",
  "Create Project": "Projekt erstellen",
  "Create Role": "Rolle erstellen",
  "Create Workspace": "Arbeitsbereich erstellen",
  "Create Workspace Type": "Arbeitsbereichstyp erstellen",
  "Create a New Role": "Eine neue Rolle erstellen",
  "Create a new Workspace type": "Einen neuen Arbeitsbereichstyp erstellen",
  "Create a new label": "Ein neues Label erstellen",
  "Create workspace": "Arbeitsbereich erstellen",
  "Created At": "Erstellt am",
  "Cron Job Instruction": "Cron-Job-Anweisung",
  "Custom CSS": "Benutzerdefiniertes CSS",
  Customers: Customers$b,
  Dashboard: Dashboard$b,
  "Default Language": "Standardsprache",
  Delete: Delete$b,
  "Delete Project": "Projekt löschen",
  "Delete User": "Benutzer löschen",
  Description: Description$b,
  Details: Details$b,
  "Due Date": "Fälligkeitsdatum",
  "Due in the next day": "Fällig am nächsten Tag",
  Duration: Duration$b,
  Edit: Edit$b,
  "Edit Labels": "Labels bearbeiten",
  "Edit Profile": "Profil bearbeiten",
  Email: Email$b,
  "Email Address": "E-Mail-Adresse",
  "Email Html": "E-Mail-HTML",
  "Email Notifications": "E-Mail-Benachrichtigungen",
  "Enable Registration": "Registrierung aktivieren",
  "Enable pre made board list": "Vorgefertigte Board-Liste aktivieren",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Wenn dies aktiviert ist, sind die Aufgaben nur für den Administrator und zugewiesene Personen sichtbar",
  "Enter a title for this task": "Geben Sie einen Titel für diese Aufgabe ein",
  "Export tasks as CSV": "Aufgaben als CSV exportieren",
  "Export tasks as Excel": "Aufgaben als Excel exportieren",
  Favorites: Favorites$b,
  Filter: Filter$b,
  "Filter by role": "Nach Rolle filtern",
  "Find tasks or projects": "Aufgaben oder Projekte finden",
  "First Response Time": "Erste Reaktionszeit",
  "First name": "Vorname",
  "Forgot your password?": "Passwort vergessen?",
  "From Address": "Absenderadresse",
  "From Name": "Absendername",
  "Global Settings": "Globale Einstellungen",
  "Google ReCaptcha Site Key": "Google ReCaptcha Site Key",
  ID: ID$b,
  "Invite Workspace": "Arbeitsbereich einladen",
  "Invite Workspace members": "Arbeitsbereichsmitglieder einladen",
  Label: Label$b,
  Labels: Labels$b,
  Language: Language$b,
  "Language Name": "Sprachenname",
  "Last Response Time": "Letzte Reaktionszeit",
  "Last name": "Nachname",
  List: List$b,
  Login: Login$b,
  Logout: Logout$b,
  "Mail Encryption": "Mail-Verschlüsselung",
  "Make Cover": "Als Cover festlegen",
  Member: Member$b,
  Members: Members$b,
  Memo: Memo$b,
  Menu: Menu$b,
  Move: Move$b,
  "Move Card": "Karte verschieben",
  "Move Left": "Nach links verschieben",
  "Move Right": "Nach rechts verschieben",
  "Move Task": "Aufgabe verschieben",
  "My Tasks": "Meine Aufgaben",
  "My Workspaces": "Meine Arbeitsbereiche",
  Name: Name$b,
  "New Tickets": "Neue Tickets",
  "No dates": "Keine Daten",
  "No item found!": "Kein Element gefunden!",
  "No labels found.": "Keine Labels gefunden.",
  "No list found!": "Keine Liste gefunden!",
  "No members": "Keine Mitglieder",
  "No task found!": "Keine Aufgabe gefunden!",
  "No time log found.": "Kein Zeitprotokoll gefunden.",
  "No workspace found": "Kein Arbeitsbereich gefunden",
  Open: Open$b,
  "Open Tickets": "Offene Tickets",
  Overdue: Overdue$b,
  Password: Password$b,
  Phone: Phone$b,
  Photo: Photo$b,
  Position: Position$b,
  "Pre made list": "Vorgefertigte Liste",
  Project: Project$b,
  "Project Details": "Projektdetails",
  "Project name": "Projektname",
  Projects: Projects$b,
  "Recently Viewed": "Zuletzt angesehen",
  Register: Register$b,
  Registration: Registration$b,
  Remove: Remove$b,
  "Remove Cover": "Cover entfernen",
  Reset: Reset$b,
  "Reset Password": "Passwort zurücksetzen",
  "Revert Back": "Zurückkehren",
  Role: Role$b,
  "SMTP Host": "SMTP-Host",
  "SMTP Password": "SMTP-Passwort",
  "SMTP Port": "SMTP-Port",
  "SMTP Username": "SMTP-Benutzername",
  START: START$b,
  STOP: STOP$b,
  Save: Save$b,
  "Search User": "Benutzer suchen",
  "Search labels": "Labels suchen",
  "Search...": "Suchen...",
  "Select a color": "Eine Farbe auswählen",
  "Select a destination": "Ein Ziel auswählen",
  "Select a workspace": "Einen Arbeitsbereich auswählen",
  "Send Password Reset Link": "Link zum Zurücksetzen des Passworts senden",
  "Send to board": "An Board senden",
  "Show Registration link on the login page": "Registrierungslink auf der Anmeldeseite anzeigen",
  "Slack Notifications": "Slack-Benachrichtigungen",
  "Slack webhook URL": "Slack Webhook-URL",
  Slug: Slug$b,
  Starred: Starred$b,
  Started: Started$b,
  Stopped: Stopped$b,
  Submit: Submit$b,
  Task: Task$b,
  "Tasks assigned to me": "Mir zugewiesene Aufgaben",
  "Team Members": "Teammitglieder",
  Template: Template$b,
  "This task is archived.": "Diese Aufgabe ist archiviert.",
  "Ticket by department": "Ticket nach Abteilung",
  "Ticket by type": "Ticket nach Typ",
  "Ticket history": "Ticketverlauf",
  "Time Count": "Zeitzählung",
  Title: Title$b,
  "To tasks found!": "Aufgaben gefunden!",
  "Top ticket creator": "Top-Ticketersteller",
  "Total duration": "Gesamtdauer",
  "Unassigned Tickets": "Nicht zugewiesene Tickets",
  Update: Update$b,
  "Update User": "Benutzer aktualisieren",
  User: User$b,
  Users: Users$b,
  "Visible tasks only for the assigned people.": "Sichtbare Aufgaben nur für die zugewiesenen Personen.",
  Website: Website$b,
  Workspace: Workspace$b,
  "Workspace Description": "Arbeitsbereichsbeschreibung",
  "Workspace Tasks": "Arbeitsbereichsaufgaben",
  "Workspace Type": "Arbeitsbereichstyp",
  "Workspace name": "Arbeitsbereichsname",
  "Write a comment...": "Schreibe einen Kommentar...",
  "last month": "letzten Monat",
  optional: optional$b,
  "this month": "diesen Monat"
};
const __vite_glob_1_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$b,
  Activities: Activities$b,
  Address: Address$b,
  Archive: Archive$b,
  Assignee: Assignee$b,
  Assignees: Assignees$b,
  Attachment: Attachment$b,
  Attachments: Attachments$b,
  Average: Average$b,
  Background: Background$b,
  Cancel: Cancel$b,
  Checklist: Checklist$b,
  Code: Code$b,
  Contacts: Contacts$b,
  Create: Create$b,
  Customers: Customers$b,
  Dashboard: Dashboard$b,
  Delete: Delete$b,
  Description: Description$b,
  Details: Details$b,
  Duration: Duration$b,
  Edit: Edit$b,
  Email: Email$b,
  Favorites: Favorites$b,
  Filter: Filter$b,
  ID: ID$b,
  Label: Label$b,
  Labels: Labels$b,
  Language: Language$b,
  List: List$b,
  Login: Login$b,
  Logout: Logout$b,
  Member: Member$b,
  Members: Members$b,
  Memo: Memo$b,
  Menu: Menu$b,
  Move: Move$b,
  Name: Name$b,
  Open: Open$b,
  Overdue: Overdue$b,
  Password: Password$b,
  Phone: Phone$b,
  Photo: Photo$b,
  Position: Position$b,
  Project: Project$b,
  Projects: Projects$b,
  Register: Register$b,
  Registration: Registration$b,
  Remove: Remove$b,
  Reset: Reset$b,
  Role: Role$b,
  START: START$b,
  STOP: STOP$b,
  Save: Save$b,
  Slug: Slug$b,
  Starred: Starred$b,
  Started: Started$b,
  Stopped: Stopped$b,
  Submit: Submit$b,
  Task: Task$b,
  Template: Template$b,
  Title: Title$b,
  Update: Update$b,
  User: User$b,
  Users: Users$b,
  Website: Website$b,
  Workspace: Workspace$b,
  default: de,
  optional: optional$b
}, Symbol.toStringTag, { value: "Module" }));
const Action$a = "Action";
const Activities$a = "Activities";
const Address$a = "Address";
const Archive$a = "Archive";
const Assignee$a = "Assignee";
const Assignees$a = "Assignees";
const Attachment$a = "Attachment";
const Attachments$a = "Attachments";
const Average$a = "Average";
const Background$a = "Background";
const Cancel$a = "Cancel";
const Checklist$a = "Checklist";
const Code$a = "Code";
const Contacts$a = "Contacts";
const Create$a = "Create";
const Customers$a = "Customers";
const Dashboard$a = "Dashboard";
const Delete$a = "Delete";
const Description$a = "Description";
const Details$a = "Details";
const Duration$a = "Duration";
const Edit$a = "Edit";
const Email$a = "Email";
const Favorites$a = "Favorites";
const Filter$a = "Filter";
const ID$a = "ID";
const Label$a = "Label";
const Labels$a = "Labels";
const Language$a = "Language";
const List$a = "List";
const Login$a = "Login";
const Logout$a = "Logout";
const Member$a = "Member";
const Members$a = "Members";
const Memo$a = "Memo";
const Menu$a = "Menu";
const Move$a = "Move";
const Name$a = "Name";
const Open$a = "Open";
const Overdue$a = "Overdue";
const Password$a = "Password";
const Phone$a = "Phone";
const Photo$a = "Photo";
const Position$a = "Position";
const Project$a = "Project";
const Projects$a = "Projects";
const Register$a = "Register";
const Registration$a = "Registration";
const Remove$a = "Remove";
const Reset$a = "Reset";
const Role$a = "Role";
const START$a = "START";
const STOP$a = "STOP";
const Save$a = "Save";
const Slug$a = "Slug";
const Starred$a = "Starred";
const Started$a = "Started";
const Stopped$a = "Stopped";
const Submit$a = "Submit";
const Task$a = "Task";
const Template$a = "Template";
const Title$a = "Title";
const Update$a = "Update";
const User$a = "User";
const Users$a = "Users";
const Website$a = "Website";
const Workspace$a = "Workspace";
const optional$a = "optional";
const en = {
  Action: Action$a,
  Activities: Activities$a,
  "Add New": "Add New",
  "Add Time": "Add Time",
  "Add a new item": "Add a new item",
  "Add a new list": "Add a new list",
  "Add a task": "Add a task",
  "Add task": "Add task",
  "Add time manually": "Add time manually",
  Address: Address$a,
  "Allowed File Types": "Allowed File Types",
  "App Name": "App Name",
  Archive: Archive$a,
  "Archived Board Items": "Archived Board Items",
  "Archived Tasks": "Archived Tasks",
  Assignee: Assignee$a,
  Assignees: Assignees$a,
  Attachment: Attachment$a,
  Attachments: Attachments$a,
  Average: Average$a,
  Background: Background$a,
  Cancel: Cancel$a,
  "Change Background": "Change Background",
  "Change Task Visibility": "Change Task Visibility",
  "Change Workspace": "Change Workspace",
  "Check Update": "Check Update",
  Checklist: Checklist$a,
  "Clear All": "Clear All",
  "Click to rename project": "Click to rename project",
  "Closed Tickets": "Closed Tickets",
  Code: Code$a,
  "Confirm Password": "Confirm Password",
  Contacts: Contacts$a,
  Create: Create$a,
  "Create New": "Create New",
  "Create Project": "Create Project",
  "Create Role": "Create Role",
  "Create Workspace": "Create Workspace",
  "Create Workspace Type": "Create Workspace Type",
  "Create a New Role": "Create a New Role",
  "Create a new Workspace type": "Create a new Workspace type",
  "Create a new label": "Create a new label",
  "Create workspace": "Create workspace",
  "Created At": "Created At",
  "Cron Job Instruction": "Cron Job Instruction",
  "Custom CSS": "Custom CSS",
  Customers: Customers$a,
  Dashboard: Dashboard$a,
  "Default Language": "Default Language",
  Delete: Delete$a,
  "Delete Project": "Delete Project",
  "Delete User": "Delete User",
  Description: Description$a,
  Details: Details$a,
  "Due Date": "Due Date",
  "Due in the next day": "Due in the next day",
  Duration: Duration$a,
  Edit: Edit$a,
  "Edit Labels": "Edit Labels",
  "Edit Profile": "Edit Profile",
  Email: Email$a,
  "Email Address": "Email Address",
  "Email Html": "Email Html",
  "Email Notifications": "Email Notifications",
  "Enable Registration": "Enable Registration",
  "Enable pre made board list": "Enable pre made board list",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Enabling this the tasks will be visible only for the admin and assigned people",
  "Enter a title for this task": "Enter a title for this task",
  "Export tasks as CSV": "Export tasks as CSV",
  "Export tasks as Excel": "Export tasks as Excel",
  Favorites: Favorites$a,
  Filter: Filter$a,
  "Filter by role": "Filter by role",
  "Find tasks or projects": "Find tasks or projects",
  "First Response Time": "First Response Time",
  "First name": "First name",
  "Forgot your password?": "Forgot your password?",
  "From Address": "From Address",
  "From Name": "From Name",
  "Global Settings": "Global Settings",
  "Google ReCaptcha Site Key": "Google ReCaptcha Site Key",
  ID: ID$a,
  "Invite Workspace": "Invite Workspace",
  "Invite Workspace members": "Invite Workspace members",
  Label: Label$a,
  Labels: Labels$a,
  Language: Language$a,
  "Language Name": "Language Name",
  "Last Response Time": "Last Response Time",
  "Last name": "Last name",
  List: List$a,
  Login: Login$a,
  Logout: Logout$a,
  "Mail Encryption": "Mail Encryption",
  "Make Cover": "Make Cover",
  Member: Member$a,
  Members: Members$a,
  Memo: Memo$a,
  Menu: Menu$a,
  Move: Move$a,
  "Move Card": "Move Card",
  "Move Left": "Move Left",
  "Move Right": "Move Right",
  "Move Task": "Move Task",
  "My Tasks": "My Tasks",
  "My Workspaces": "My Workspaces",
  Name: Name$a,
  "New Tickets": "New Tickets",
  "No dates": "No dates",
  "No item found!": "No item found!",
  "No labels found.": "No labels found.",
  "No list found!": "No list found!",
  "No members": "No members",
  "No task found!": "No task found!",
  "No time log found.": "No time log found.",
  "No workspace found": "No workspace found",
  Open: Open$a,
  "Open Tickets": "Open Tickets",
  Overdue: Overdue$a,
  Password: Password$a,
  Phone: Phone$a,
  Photo: Photo$a,
  Position: Position$a,
  "Pre made list": "Pre made list",
  Project: Project$a,
  "Project Details": "Project Details",
  "Project name": "Project name",
  Projects: Projects$a,
  "Recently Viewed": "Recently Viewed",
  Register: Register$a,
  Registration: Registration$a,
  Remove: Remove$a,
  "Remove Cover": "Remove Cover",
  Reset: Reset$a,
  "Reset Password": "Reset Password",
  "Revert Back": "Revert Back",
  Role: Role$a,
  "SMTP Host": "SMTP Host",
  "SMTP Password": "SMTP Password",
  "SMTP Port": "SMTP Port",
  "SMTP Username": "SMTP Username",
  START: START$a,
  STOP: STOP$a,
  Save: Save$a,
  "Search User": "Search User",
  "Search labels": "Search labels",
  "Search...": "Search...",
  "Select a color": "Select a color",
  "Select a destination": "Select a destination",
  "Select a workspace": "Select a workspace",
  "Send Password Reset Link": "Send Password Reset Link",
  "Send to board": "Send to board",
  "Show Registration link on the login page": "Show Registration link on the login page",
  "Slack Notifications": "Slack Notifications",
  "Slack webhook URL": "Slack webhook URL",
  Slug: Slug$a,
  Starred: Starred$a,
  Started: Started$a,
  Stopped: Stopped$a,
  Submit: Submit$a,
  Task: Task$a,
  "Tasks assigned to me": "Tasks assigned to me",
  "Team Members": "Team Members",
  Template: Template$a,
  "This task is archived.": "This task is archived.",
  "Ticket by department": "Ticket by department",
  "Ticket by type": "Ticket by type",
  "Ticket history": "Ticket history",
  "Time Count": "Time Count",
  Title: Title$a,
  "To tasks found!": "To tasks found!",
  "Top ticket creator": "Top ticket creator",
  "Total duration": "Total duration",
  "Unassigned Tickets": "Unassigned Tickets",
  Update: Update$a,
  "Update User": "Update User",
  User: User$a,
  Users: Users$a,
  "Visible tasks only for the assigned people.": "Visible tasks only for the assigned people.",
  Website: Website$a,
  Workspace: Workspace$a,
  "Workspace Description": "Workspace Description",
  "Workspace Tasks": "Workspace Tasks",
  "Workspace Type": "Workspace Type",
  "Workspace name": "Workspace name",
  "Write a comment...": "Write a comment...",
  "last month": "last month",
  optional: optional$a,
  "this month": "this month"
};
const __vite_glob_1_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$a,
  Activities: Activities$a,
  Address: Address$a,
  Archive: Archive$a,
  Assignee: Assignee$a,
  Assignees: Assignees$a,
  Attachment: Attachment$a,
  Attachments: Attachments$a,
  Average: Average$a,
  Background: Background$a,
  Cancel: Cancel$a,
  Checklist: Checklist$a,
  Code: Code$a,
  Contacts: Contacts$a,
  Create: Create$a,
  Customers: Customers$a,
  Dashboard: Dashboard$a,
  Delete: Delete$a,
  Description: Description$a,
  Details: Details$a,
  Duration: Duration$a,
  Edit: Edit$a,
  Email: Email$a,
  Favorites: Favorites$a,
  Filter: Filter$a,
  ID: ID$a,
  Label: Label$a,
  Labels: Labels$a,
  Language: Language$a,
  List: List$a,
  Login: Login$a,
  Logout: Logout$a,
  Member: Member$a,
  Members: Members$a,
  Memo: Memo$a,
  Menu: Menu$a,
  Move: Move$a,
  Name: Name$a,
  Open: Open$a,
  Overdue: Overdue$a,
  Password: Password$a,
  Phone: Phone$a,
  Photo: Photo$a,
  Position: Position$a,
  Project: Project$a,
  Projects: Projects$a,
  Register: Register$a,
  Registration: Registration$a,
  Remove: Remove$a,
  Reset: Reset$a,
  Role: Role$a,
  START: START$a,
  STOP: STOP$a,
  Save: Save$a,
  Slug: Slug$a,
  Starred: Starred$a,
  Started: Started$a,
  Stopped: Stopped$a,
  Submit: Submit$a,
  Task: Task$a,
  Template: Template$a,
  Title: Title$a,
  Update: Update$a,
  User: User$a,
  Users: Users$a,
  Website: Website$a,
  Workspace: Workspace$a,
  default: en,
  optional: optional$a
}, Symbol.toStringTag, { value: "Module" }));
const Action$9 = "Acción";
const Activities$9 = "Actividades";
const Address$9 = "Dirección";
const Archive$9 = "Archivo";
const Assignee$9 = "Asignado";
const Assignees$9 = "Asignados";
const Attachment$9 = "Adjunto";
const Attachments$9 = "Adjuntos";
const Average$9 = "Promedio";
const Background$9 = "Fondo";
const Cancel$9 = "Cancelar";
const Checklist$9 = "Lista de verificación";
const Code$9 = "Código";
const Contacts$9 = "Contactos";
const Create$9 = "Crear";
const Customers$9 = "Clientes";
const Dashboard$9 = "Tablero";
const Delete$9 = "Eliminar";
const Description$9 = "Descripción";
const Details$9 = "Detalles";
const Duration$9 = "Duración";
const Edit$9 = "Editar";
const Email$9 = "Correo electrónico";
const Favorites$9 = "Favoritos";
const Filter$9 = "Filtro";
const ID$9 = "ID";
const Label$9 = "Etiqueta";
const Labels$9 = "Etiquetas";
const Language$9 = "Idioma";
const List$9 = "Lista";
const Login$9 = "Iniciar sesión";
const Logout$9 = "Cerrar sesión";
const Member$9 = "Miembro";
const Members$9 = "Miembros";
const Memo$9 = "Memorándum";
const Menu$9 = "Menú";
const Move$9 = "Mover";
const Name$9 = "Nombre";
const Open$9 = "Abrir";
const Overdue$9 = "Vencido";
const Password$9 = "Contraseña";
const Phone$9 = "Teléfono";
const Photo$9 = "Foto";
const Position$9 = "Posición";
const Project$9 = "Proyecto";
const Projects$9 = "Proyectos";
const Register$9 = "Registrarse";
const Registration$9 = "Registro";
const Remove$9 = "Eliminar";
const Reset$9 = "Restablecer";
const Role$9 = "Rol";
const START$9 = "INICIAR";
const STOP$9 = "DETENER";
const Save$9 = "Guardar";
const Slug$9 = "Slug";
const Starred$9 = "Destacado";
const Started$9 = "Iniciado";
const Stopped$9 = "Detenido";
const Submit$9 = "Enviar";
const Task$9 = "Tarea";
const Template$9 = "Plantilla";
const Title$9 = "Título";
const Update$9 = "Actualizar";
const User$9 = "Usuario";
const Users$9 = "Usuarios";
const Website$9 = "Sitio web";
const Workspace$9 = "Espacio de trabajo";
const optional$9 = "opcional";
const es = {
  Action: Action$9,
  Activities: Activities$9,
  "Add New": "Añadir Nuevo",
  "Add Time": "Añadir Tiempo",
  "Add a new item": "Añadir un nuevo elemento",
  "Add a new list": "Añadir una nueva lista",
  "Add a task": "Añadir una tarea",
  "Add task": "Añadir tarea",
  "Add time manually": "Añadir tiempo manualmente",
  Address: Address$9,
  "Allowed File Types": "Tipos de archivo permitidos",
  "App Name": "Nombre de la Aplicación",
  Archive: Archive$9,
  "Archived Board Items": "Elementos de tablero archivados",
  "Archived Tasks": "Tareas archivadas",
  Assignee: Assignee$9,
  Assignees: Assignees$9,
  Attachment: Attachment$9,
  Attachments: Attachments$9,
  Average: Average$9,
  Background: Background$9,
  Cancel: Cancel$9,
  "Change Background": "Cambiar fondo",
  "Change Task Visibility": "Cambiar visibilidad de la tarea",
  "Change Workspace": "Cambiar espacio de trabajo",
  "Check Update": "Comprobar actualización",
  Checklist: Checklist$9,
  "Clear All": "Limpiar todo",
  "Click to rename project": "Haga clic para renombrar el proyecto",
  "Closed Tickets": "Tickets cerrados",
  Code: Code$9,
  "Confirm Password": "Confirmar contraseña",
  Contacts: Contacts$9,
  Create: Create$9,
  "Create New": "Crear Nuevo",
  "Create Project": "Crear proyecto",
  "Create Role": "Crear rol",
  "Create Workspace": "Crear espacio de trabajo",
  "Create Workspace Type": "Crear tipo de espacio de trabajo",
  "Create a New Role": "Crear un nuevo rol",
  "Create a new Workspace type": "Crear un nuevo tipo de espacio de trabajo",
  "Create a new label": "Crear una nueva etiqueta",
  "Create workspace": "Crear espacio de trabajo",
  "Created At": "Creado el",
  "Cron Job Instruction": "Instrucción de Cron Job",
  "Custom CSS": "CSS personalizado",
  Customers: Customers$9,
  Dashboard: Dashboard$9,
  "Default Language": "Idioma predeterminado",
  Delete: Delete$9,
  "Delete Project": "Eliminar proyecto",
  "Delete User": "Eliminar usuario",
  Description: Description$9,
  Details: Details$9,
  "Due Date": "Fecha de vencimiento",
  "Due in the next day": "Vence al día siguiente",
  Duration: Duration$9,
  Edit: Edit$9,
  "Edit Labels": "Editar etiquetas",
  "Edit Profile": "Editar perfil",
  Email: Email$9,
  "Email Address": "Dirección de correo electrónico",
  "Email Html": "HTML de correo electrónico",
  "Email Notifications": "Notificaciones por correo electrónico",
  "Enable Registration": "Habilitar registro",
  "Enable pre made board list": "Habilitar lista de tablero predefinida",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Al habilitar esto, las tareas solo serán visibles para el administrador y las personas asignadas",
  "Enter a title for this task": "Ingrese un título para esta tarea",
  "Export tasks as CSV": "Exportar tareas como CSV",
  "Export tasks as Excel": "Exportar tareas como Excel",
  Favorites: Favorites$9,
  Filter: Filter$9,
  "Filter by role": "Filtrar por rol",
  "Find tasks or projects": "Encontrar tareas o proyectos",
  "First Response Time": "Primer tiempo de respuesta",
  "First name": "Nombre",
  "Forgot your password?": "¿Olvidaste tu contraseña?",
  "From Address": "Dirección de remitente",
  "From Name": "Nombre de remitente",
  "Global Settings": "Configuración global",
  "Google ReCaptcha Site Key": "Clave del sitio de Google ReCaptcha",
  ID: ID$9,
  "Invite Workspace": "Invitar al espacio de trabajo",
  "Invite Workspace members": "Invitar a miembros del espacio de trabajo",
  Label: Label$9,
  Labels: Labels$9,
  Language: Language$9,
  "Language Name": "Nombre del idioma",
  "Last Response Time": "Último tiempo de respuesta",
  "Last name": "Apellido",
  List: List$9,
  Login: Login$9,
  Logout: Logout$9,
  "Mail Encryption": "Cifrado de correo",
  "Make Cover": "Hacer portada",
  Member: Member$9,
  Members: Members$9,
  Memo: Memo$9,
  Menu: Menu$9,
  Move: Move$9,
  "Move Card": "Mover tarjeta",
  "Move Left": "Mover a la izquierda",
  "Move Right": "Mover a la derecha",
  "Move Task": "Mover tarea",
  "My Tasks": "Mis tareas",
  "My Workspaces": "Mis espacios de trabajo",
  Name: Name$9,
  "New Tickets": "Nuevos tickets",
  "No dates": "Sin fechas",
  "No item found!": "¡No se encontró ningún elemento!",
  "No labels found.": "No se encontraron etiquetas.",
  "No list found!": "¡No se encontró ninguna lista!",
  "No members": "Sin miembros",
  "No task found!": "¡No se encontró ninguna tarea!",
  "No time log found.": "No se encontró registro de tiempo.",
  "No workspace found": "No se encontró ningún espacio de trabajo",
  Open: Open$9,
  "Open Tickets": "Tickets abiertos",
  Overdue: Overdue$9,
  Password: Password$9,
  Phone: Phone$9,
  Photo: Photo$9,
  Position: Position$9,
  "Pre made list": "Lista predefinida",
  Project: Project$9,
  "Project Details": "Detalles del proyecto",
  "Project name": "Nombre del proyecto",
  Projects: Projects$9,
  "Recently Viewed": "Visto recientemente",
  Register: Register$9,
  Registration: Registration$9,
  Remove: Remove$9,
  "Remove Cover": "Quitar portada",
  Reset: Reset$9,
  "Reset Password": "Restablecer contraseña",
  "Revert Back": "Revertir",
  Role: Role$9,
  "SMTP Host": "Host SMTP",
  "SMTP Password": "Contraseña SMTP",
  "SMTP Port": "Puerto SMTP",
  "SMTP Username": "Usuario SMTP",
  START: START$9,
  STOP: STOP$9,
  Save: Save$9,
  "Search User": "Buscar usuario",
  "Search labels": "Buscar etiquetas",
  "Search...": "Buscar...",
  "Select a color": "Seleccione un color",
  "Select a destination": "Seleccione un destino",
  "Select a workspace": "Seleccione un espacio de trabajo",
  "Send Password Reset Link": "Enviar enlace para restablecer contraseña",
  "Send to board": "Enviar al tablero",
  "Show Registration link on the login page": "Mostrar enlace de registro en la página de inicio de sesión",
  "Slack Notifications": "Notificaciones de Slack",
  "Slack webhook URL": "URL de webhook de Slack",
  Slug: Slug$9,
  Starred: Starred$9,
  Started: Started$9,
  Stopped: Stopped$9,
  Submit: Submit$9,
  Task: Task$9,
  "Tasks assigned to me": "Tareas asignadas a mí",
  "Team Members": "Miembros del equipo",
  Template: Template$9,
  "This task is archived.": "Esta tarea está archivada.",
  "Ticket by department": "Ticket por departamento",
  "Ticket by type": "Ticket por tipo",
  "Ticket history": "Historial de tickets",
  "Time Count": "Conteo de tiempo",
  Title: Title$9,
  "To tasks found!": "¡Tareas encontradas!",
  "Top ticket creator": "Principal creador de tickets",
  "Total duration": "Duración total",
  "Unassigned Tickets": "Tickets no asignados",
  Update: Update$9,
  "Update User": "Actualizar usuario",
  User: User$9,
  Users: Users$9,
  "Visible tasks only for the assigned people.": "Tareas visibles solo para las personas asignadas.",
  Website: Website$9,
  Workspace: Workspace$9,
  "Workspace Description": "Descripción del espacio de trabajo",
  "Workspace Tasks": "Tareas del espacio de trabajo",
  "Workspace Type": "Tipo de espacio de trabajo",
  "Workspace name": "Nombre del espacio de trabajo",
  "Write a comment...": "Escribe un comentario...",
  "last month": "el mes pasado",
  optional: optional$9,
  "this month": "este mes"
};
const __vite_glob_1_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$9,
  Activities: Activities$9,
  Address: Address$9,
  Archive: Archive$9,
  Assignee: Assignee$9,
  Assignees: Assignees$9,
  Attachment: Attachment$9,
  Attachments: Attachments$9,
  Average: Average$9,
  Background: Background$9,
  Cancel: Cancel$9,
  Checklist: Checklist$9,
  Code: Code$9,
  Contacts: Contacts$9,
  Create: Create$9,
  Customers: Customers$9,
  Dashboard: Dashboard$9,
  Delete: Delete$9,
  Description: Description$9,
  Details: Details$9,
  Duration: Duration$9,
  Edit: Edit$9,
  Email: Email$9,
  Favorites: Favorites$9,
  Filter: Filter$9,
  ID: ID$9,
  Label: Label$9,
  Labels: Labels$9,
  Language: Language$9,
  List: List$9,
  Login: Login$9,
  Logout: Logout$9,
  Member: Member$9,
  Members: Members$9,
  Memo: Memo$9,
  Menu: Menu$9,
  Move: Move$9,
  Name: Name$9,
  Open: Open$9,
  Overdue: Overdue$9,
  Password: Password$9,
  Phone: Phone$9,
  Photo: Photo$9,
  Position: Position$9,
  Project: Project$9,
  Projects: Projects$9,
  Register: Register$9,
  Registration: Registration$9,
  Remove: Remove$9,
  Reset: Reset$9,
  Role: Role$9,
  START: START$9,
  STOP: STOP$9,
  Save: Save$9,
  Slug: Slug$9,
  Starred: Starred$9,
  Started: Started$9,
  Stopped: Stopped$9,
  Submit: Submit$9,
  Task: Task$9,
  Template: Template$9,
  Title: Title$9,
  Update: Update$9,
  User: User$9,
  Users: Users$9,
  Website: Website$9,
  Workspace: Workspace$9,
  default: es,
  optional: optional$9
}, Symbol.toStringTag, { value: "Module" }));
const Action$8 = "Action";
const Activities$8 = "Activities";
const Address$8 = "Address";
const Archive$8 = "Archive";
const Assignee$8 = "Assignee";
const Assignees$8 = "Assignees";
const Attachment$8 = "Attachment";
const Attachments$8 = "Attachments";
const Average$8 = "Average";
const Background$8 = "Background";
const Cancel$8 = "Cancel";
const Checklist$8 = "Checklist";
const Code$8 = "Code";
const Contacts$8 = "Contacts";
const Create$8 = "Create";
const Customers$8 = "Customers";
const Dashboard$8 = "Dashboard";
const Delete$8 = "Delete";
const Description$8 = "Description";
const Details$8 = "Details";
const Duration$8 = "Duration";
const Edit$8 = "Edit";
const Email$8 = "Email";
const Favorites$8 = "Favorites";
const Filter$8 = "Filter";
const ID$8 = "ID";
const Label$8 = "Label";
const Labels$8 = "Labels";
const Language$8 = "Language";
const List$8 = "List";
const Login$8 = "Login";
const Logout$8 = "Logout";
const Member$8 = "Member";
const Members$8 = "Members";
const Memo$8 = "Memo";
const Menu$8 = "Menu";
const Move$8 = "Move";
const Name$8 = "Name";
const Open$8 = "Open";
const Overdue$8 = "Overdue";
const Password$8 = "Password";
const Phone$8 = "Phone";
const Photo$8 = "Photo";
const Position$8 = "Position";
const Project$8 = "Project";
const Projects$8 = "Projects";
const Register$8 = "Register";
const Registration$8 = "Registration";
const Remove$8 = "Remove";
const Reset$8 = "Reset";
const Role$8 = "Role";
const START$8 = "START";
const STOP$8 = "STOP";
const Save$8 = "Save";
const Slug$8 = "Slug";
const Starred$8 = "Starred";
const Started$8 = "Started";
const Stopped$8 = "Stopped";
const Submit$8 = "Submit";
const Task$8 = "Task";
const Template$8 = "Template";
const Title$8 = "Title";
const Update$8 = "Update";
const User$8 = "User";
const Users$8 = "Users";
const Website$8 = "Website";
const Workspace$8 = "Workspace";
const optional$8 = "optional";
const extracted = {
  Action: Action$8,
  Activities: Activities$8,
  "Add New": "Add New",
  "Add Time": "Add Time",
  "Add a new item": "Add a new item",
  "Add a new list": "Add a new list",
  "Add a task": "Add a task",
  "Add task": "Add task",
  "Add time manually": "Add time manually",
  Address: Address$8,
  "Allowed File Types": "Allowed File Types",
  "App Name": "App Name",
  Archive: Archive$8,
  "Archived Board Items": "Archived Board Items",
  "Archived Tasks": "Archived Tasks",
  Assignee: Assignee$8,
  Assignees: Assignees$8,
  Attachment: Attachment$8,
  Attachments: Attachments$8,
  Average: Average$8,
  Background: Background$8,
  Cancel: Cancel$8,
  "Change Background": "Change Background",
  "Change Task Visibility": "Change Task Visibility",
  "Change Workspace": "Change Workspace",
  "Check Update": "Check Update",
  Checklist: Checklist$8,
  "Clear All": "Clear All",
  "Click to rename project": "Click to rename project",
  "Closed Tickets": "Closed Tickets",
  Code: Code$8,
  "Confirm Password": "Confirm Password",
  Contacts: Contacts$8,
  Create: Create$8,
  "Create New": "Create New",
  "Create Project": "Create Project",
  "Create Role": "Create Role",
  "Create Workspace": "Create Workspace",
  "Create Workspace Type": "Create Workspace Type",
  "Create a New Role": "Create a New Role",
  "Create a new Workspace type": "Create a new Workspace type",
  "Create a new label": "Create a new label",
  "Create workspace": "Create workspace",
  "Created At": "Created At",
  "Cron Job Instruction": "Cron Job Instruction",
  "Custom CSS": "Custom CSS",
  Customers: Customers$8,
  Dashboard: Dashboard$8,
  "Default Language": "Default Language",
  Delete: Delete$8,
  "Delete Project": "Delete Project",
  "Delete User": "Delete User",
  Description: Description$8,
  Details: Details$8,
  "Due Date": "Due Date",
  "Due in the next day": "Due in the next day",
  Duration: Duration$8,
  Edit: Edit$8,
  "Edit Labels": "Edit Labels",
  "Edit Profile": "Edit Profile",
  Email: Email$8,
  "Email Address": "Email Address",
  "Email Html": "Email Html",
  "Email Notifications": "Email Notifications",
  "Enable Registration": "Enable Registration",
  "Enable pre made board list": "Enable pre made board list",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Enabling this the tasks will be visible only for the admin and assigned people",
  "Enter a title for this task": "Enter a title for this task",
  "Export tasks as CSV": "Export tasks as CSV",
  "Export tasks as Excel": "Export tasks as Excel",
  Favorites: Favorites$8,
  Filter: Filter$8,
  "Filter by role": "Filter by role",
  "Find tasks or projects": "Find tasks or projects",
  "First Response Time": "First Response Time",
  "First name": "First name",
  "Forgot your password?": "Forgot your password?",
  "From Address": "From Address",
  "From Name": "From Name",
  "Global Settings": "Global Settings",
  "Google ReCaptcha Site Key": "Google ReCaptcha Site Key",
  ID: ID$8,
  "Invite Workspace": "Invite Workspace",
  "Invite Workspace members": "Invite Workspace members",
  Label: Label$8,
  Labels: Labels$8,
  Language: Language$8,
  "Language Name": "Language Name",
  "Last Response Time": "Last Response Time",
  "Last name": "Last name",
  List: List$8,
  Login: Login$8,
  Logout: Logout$8,
  "Mail Encryption": "Mail Encryption",
  "Make Cover": "Make Cover",
  Member: Member$8,
  Members: Members$8,
  Memo: Memo$8,
  Menu: Menu$8,
  Move: Move$8,
  "Move Card": "Move Card",
  "Move Left": "Move Left",
  "Move Right": "Move Right",
  "Move Task": "Move Task",
  "My Tasks": "My Tasks",
  "My Workspaces": "My Workspaces",
  Name: Name$8,
  "New Tickets": "New Tickets",
  "No dates": "No dates",
  "No item found!": "No item found!",
  "No labels found.": "No labels found.",
  "No list found!": "No list found!",
  "No members": "No members",
  "No task found!": "No task found!",
  "No time log found.": "No time log found.",
  "No workspace found": "No workspace found",
  Open: Open$8,
  "Open Tickets": "Open Tickets",
  Overdue: Overdue$8,
  Password: Password$8,
  Phone: Phone$8,
  Photo: Photo$8,
  Position: Position$8,
  "Pre made list": "Pre made list",
  Project: Project$8,
  "Project Details": "Project Details",
  "Project name": "Project name",
  Projects: Projects$8,
  "Recently Viewed": "Recently Viewed",
  Register: Register$8,
  Registration: Registration$8,
  Remove: Remove$8,
  "Remove Cover": "Remove Cover",
  Reset: Reset$8,
  "Reset Password": "Reset Password",
  "Revert Back": "Revert Back",
  Role: Role$8,
  "SMTP Host": "SMTP Host",
  "SMTP Password": "SMTP Password",
  "SMTP Port": "SMTP Port",
  "SMTP Username": "SMTP Username",
  START: START$8,
  STOP: STOP$8,
  Save: Save$8,
  "Search User": "Search User",
  "Search labels": "Search labels",
  "Search...": "Search...",
  "Select a color": "Select a color",
  "Select a destination": "Select a destination",
  "Select a workspace": "Select a workspace",
  "Send Password Reset Link": "Send Password Reset Link",
  "Send to board": "Send to board",
  "Show Registration link on the login page": "Show Registration link on the login page",
  "Slack Notifications": "Slack Notifications",
  "Slack webhook URL": "Slack webhook URL",
  Slug: Slug$8,
  Starred: Starred$8,
  Started: Started$8,
  Stopped: Stopped$8,
  Submit: Submit$8,
  Task: Task$8,
  "Tasks assigned to me": "Tasks assigned to me",
  "Team Members": "Team Members",
  Template: Template$8,
  "This task is archived.": "This task is archived.",
  "Ticket by department": "Ticket by department",
  "Ticket by type": "Ticket by type",
  "Ticket history": "Ticket history",
  "Time Count": "Time Count",
  Title: Title$8,
  "To tasks found!": "To tasks found!",
  "Top ticket creator": "Top ticket creator",
  "Total duration": "Total duration",
  "Unassigned Tickets": "Unassigned Tickets",
  Update: Update$8,
  "Update User": "Update User",
  User: User$8,
  Users: Users$8,
  "Visible tasks only for the assigned people.": "Visible tasks only for the assigned people.",
  Website: Website$8,
  Workspace: Workspace$8,
  "Workspace Description": "Workspace Description",
  "Workspace Tasks": "Workspace Tasks",
  "Workspace Type": "Workspace Type",
  "Workspace name": "Workspace name",
  "Write a comment...": "Write a comment...",
  "last month": "last month",
  optional: optional$8,
  "this month": "this month"
};
const __vite_glob_1_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$8,
  Activities: Activities$8,
  Address: Address$8,
  Archive: Archive$8,
  Assignee: Assignee$8,
  Assignees: Assignees$8,
  Attachment: Attachment$8,
  Attachments: Attachments$8,
  Average: Average$8,
  Background: Background$8,
  Cancel: Cancel$8,
  Checklist: Checklist$8,
  Code: Code$8,
  Contacts: Contacts$8,
  Create: Create$8,
  Customers: Customers$8,
  Dashboard: Dashboard$8,
  Delete: Delete$8,
  Description: Description$8,
  Details: Details$8,
  Duration: Duration$8,
  Edit: Edit$8,
  Email: Email$8,
  Favorites: Favorites$8,
  Filter: Filter$8,
  ID: ID$8,
  Label: Label$8,
  Labels: Labels$8,
  Language: Language$8,
  List: List$8,
  Login: Login$8,
  Logout: Logout$8,
  Member: Member$8,
  Members: Members$8,
  Memo: Memo$8,
  Menu: Menu$8,
  Move: Move$8,
  Name: Name$8,
  Open: Open$8,
  Overdue: Overdue$8,
  Password: Password$8,
  Phone: Phone$8,
  Photo: Photo$8,
  Position: Position$8,
  Project: Project$8,
  Projects: Projects$8,
  Register: Register$8,
  Registration: Registration$8,
  Remove: Remove$8,
  Reset: Reset$8,
  Role: Role$8,
  START: START$8,
  STOP: STOP$8,
  Save: Save$8,
  Slug: Slug$8,
  Starred: Starred$8,
  Started: Started$8,
  Stopped: Stopped$8,
  Submit: Submit$8,
  Task: Task$8,
  Template: Template$8,
  Title: Title$8,
  Update: Update$8,
  User: User$8,
  Users: Users$8,
  Website: Website$8,
  Workspace: Workspace$8,
  default: extracted,
  optional: optional$8
}, Symbol.toStringTag, { value: "Module" }));
const Action$7 = "Azione";
const Activities$7 = "Attività";
const Address$7 = "Indirizzo";
const Archive$7 = "Archivio";
const Assignee$7 = "Assegnatario";
const Assignees$7 = "Assegnatari";
const Attachment$7 = "Allegato";
const Attachments$7 = "Allegati";
const Average$7 = "Media";
const Background$7 = "Sfondo";
const Cancel$7 = "Annulla";
const Checklist$7 = "Lista di controllo";
const Code$7 = "Codice";
const Contacts$7 = "Contatti";
const Create$7 = "Crea";
const Customers$7 = "Clienti";
const Dashboard$7 = "Cruscotto";
const Delete$7 = "Elimina";
const Description$7 = "Descrizione";
const Details$7 = "Dettagli";
const Duration$7 = "Durata";
const Edit$7 = "Modifica";
const Email$7 = "Email";
const Favorites$7 = "Preferiti";
const Filter$7 = "Filtro";
const ID$7 = "ID";
const Label$7 = "Etichetta";
const Labels$7 = "Etichette";
const Language$7 = "Lingua";
const List$7 = "Lista";
const Login$7 = "Accesso";
const Logout$7 = "Disconnessione";
const Member$7 = "Membro";
const Members$7 = "Membri";
const Memo$7 = "Memo";
const Menu$7 = "Menu";
const Move$7 = "Sposta";
const Name$7 = "Nome";
const Open$7 = "Apri";
const Overdue$7 = "In ritardo";
const Password$7 = "Password";
const Phone$7 = "Telefono";
const Photo$7 = "Foto";
const Position$7 = "Posizione";
const Project$7 = "Progetto";
const Projects$7 = "Progetti";
const Register$7 = "Registrati";
const Registration$7 = "Registrazione";
const Remove$7 = "Rimuovi";
const Reset$7 = "Reimposta";
const Role$7 = "Ruolo";
const START$7 = "INIZIA";
const STOP$7 = "FERMA";
const Save$7 = "Salva";
const Slug$7 = "Slug";
const Starred$7 = "Speciali";
const Started$7 = "Avviato";
const Stopped$7 = "Fermato";
const Submit$7 = "Invia";
const Task$7 = "Attività";
const Template$7 = "Modello";
const Title$7 = "Titolo";
const Update$7 = "Aggiorna";
const User$7 = "Utente";
const Users$7 = "Utenti";
const Website$7 = "Sito web";
const Workspace$7 = "Area di lavoro";
const optional$7 = "opzionale";
const it = {
  Action: Action$7,
  Activities: Activities$7,
  "Add New": "Aggiungi Nuovo",
  "Add Time": "Aggiungi Tempo",
  "Add a new item": "Aggiungi un nuovo elemento",
  "Add a new list": "Aggiungi una nuova lista",
  "Add a task": "Aggiungi un'attività",
  "Add task": "Aggiungi attività",
  "Add time manually": "Aggiungi tempo manualmente",
  Address: Address$7,
  "Allowed File Types": "Tipi di file consentiti",
  "App Name": "Nome App",
  Archive: Archive$7,
  "Archived Board Items": "Elementi della bacheca archiviati",
  "Archived Tasks": "Attività archiviate",
  Assignee: Assignee$7,
  Assignees: Assignees$7,
  Attachment: Attachment$7,
  Attachments: Attachments$7,
  Average: Average$7,
  Background: Background$7,
  Cancel: Cancel$7,
  "Change Background": "Cambia Sfondo",
  "Change Task Visibility": "Cambia visibilità attività",
  "Change Workspace": "Cambia area di lavoro",
  "Check Update": "Verifica aggiornamenti",
  Checklist: Checklist$7,
  "Clear All": "Cancella tutto",
  "Click to rename project": "Clicca per rinominare il progetto",
  "Closed Tickets": "Ticket chiusi",
  Code: Code$7,
  "Confirm Password": "Conferma Password",
  Contacts: Contacts$7,
  Create: Create$7,
  "Create New": "Crea Nuovo",
  "Create Project": "Crea Progetto",
  "Create Role": "Crea Ruolo",
  "Create Workspace": "Crea Area di Lavoro",
  "Create Workspace Type": "Crea Tipo di Area di Lavoro",
  "Create a New Role": "Crea un nuovo ruolo",
  "Create a new Workspace type": "Crea un nuovo tipo di area di lavoro",
  "Create a new label": "Crea una nuova etichetta",
  "Create workspace": "Crea area di lavoro",
  "Created At": "Creato il",
  "Cron Job Instruction": "Istruzioni Cron Job",
  "Custom CSS": "CSS Personalizzato",
  Customers: Customers$7,
  Dashboard: Dashboard$7,
  "Default Language": "Lingua predefinita",
  Delete: Delete$7,
  "Delete Project": "Elimina Progetto",
  "Delete User": "Elimina Utente",
  Description: Description$7,
  Details: Details$7,
  "Due Date": "Data di scadenza",
  "Due in the next day": "In scadenza domani",
  Duration: Duration$7,
  Edit: Edit$7,
  "Edit Labels": "Modifica Etichette",
  "Edit Profile": "Modifica Profilo",
  Email: Email$7,
  "Email Address": "Indirizzo Email",
  "Email Html": "Email Html",
  "Email Notifications": "Notifiche Email",
  "Enable Registration": "Abilita Registrazione",
  "Enable pre made board list": "Abilita lista bacheca predefinita",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Abilitando questa opzione, le attività saranno visibili solo all'amministratore e alle persone assegnate",
  "Enter a title for this task": "Inserisci un titolo per questa attività",
  "Export tasks as CSV": "Esporta attività come CSV",
  "Export tasks as Excel": "Esporta attività come Excel",
  Favorites: Favorites$7,
  Filter: Filter$7,
  "Filter by role": "Filtra per ruolo",
  "Find tasks or projects": "Trova attività o progetti",
  "First Response Time": "Tempo di prima risposta",
  "First name": "Nome",
  "Forgot your password?": "Hai dimenticato la password?",
  "From Address": "Indirizzo Mittente",
  "From Name": "Nome Mittente",
  "Global Settings": "Impostazioni Globali",
  "Google ReCaptcha Site Key": "Chiave del sito Google ReCaptcha",
  ID: ID$7,
  "Invite Workspace": "Invita all'Area di Lavoro",
  "Invite Workspace members": "Invita membri dell'area di lavoro",
  Label: Label$7,
  Labels: Labels$7,
  Language: Language$7,
  "Language Name": "Nome Lingua",
  "Last Response Time": "Tempo di ultima risposta",
  "Last name": "Cognome",
  List: List$7,
  Login: Login$7,
  Logout: Logout$7,
  "Mail Encryption": "Crittografia Email",
  "Make Cover": "Imposta come Copertina",
  Member: Member$7,
  Members: Members$7,
  Memo: Memo$7,
  Menu: Menu$7,
  Move: Move$7,
  "Move Card": "Sposta Scheda",
  "Move Left": "Sposta a Sinistra",
  "Move Right": "Sposta a Destra",
  "Move Task": "Sposta Attività",
  "My Tasks": "Le mie Attività",
  "My Workspaces": "Le mie Aree di Lavoro",
  Name: Name$7,
  "New Tickets": "Nuovi Ticket",
  "No dates": "Nessuna data",
  "No item found!": "Nessun elemento trovato!",
  "No labels found.": "Nessuna etichetta trovata.",
  "No list found!": "Nessuna lista trovata!",
  "No members": "Nessun membro",
  "No task found!": "Nessuna attività trovata!",
  "No time log found.": "Nessun registro temporale trovato.",
  "No workspace found": "Nessuna area di lavoro trovata",
  Open: Open$7,
  "Open Tickets": "Ticket Aperti",
  Overdue: Overdue$7,
  Password: Password$7,
  Phone: Phone$7,
  Photo: Photo$7,
  Position: Position$7,
  "Pre made list": "Lista predefinita",
  Project: Project$7,
  "Project Details": "Dettagli Progetto",
  "Project name": "Nome Progetto",
  Projects: Projects$7,
  "Recently Viewed": "Visti di recente",
  Register: Register$7,
  Registration: Registration$7,
  Remove: Remove$7,
  "Remove Cover": "Rimuovi Copertina",
  Reset: Reset$7,
  "Reset Password": "Reimposta Password",
  "Revert Back": "Ripristina",
  Role: Role$7,
  "SMTP Host": "Host SMTP",
  "SMTP Password": "Password SMTP",
  "SMTP Port": "Porta SMTP",
  "SMTP Username": "Nome Utente SMTP",
  START: START$7,
  STOP: STOP$7,
  Save: Save$7,
  "Search User": "Cerca Utente",
  "Search labels": "Cerca etichette",
  "Search...": "Cerca...",
  "Select a color": "Seleziona un colore",
  "Select a destination": "Seleziona una destinazione",
  "Select a workspace": "Seleziona un'area di lavoro",
  "Send Password Reset Link": "Invia Link Reimpostazione Password",
  "Send to board": "Invia alla bacheca",
  "Show Registration link on the login page": "Mostra link di registrazione nella pagina di accesso",
  "Slack Notifications": "Notifiche Slack",
  "Slack webhook URL": "URL webhook di Slack",
  Slug: Slug$7,
  Starred: Starred$7,
  Started: Started$7,
  Stopped: Stopped$7,
  Submit: Submit$7,
  Task: Task$7,
  "Tasks assigned to me": "Attività a me assegnate",
  "Team Members": "Membri del Team",
  Template: Template$7,
  "This task is archived.": "Questa attività è archiviata.",
  "Ticket by department": "Ticket per dipartimento",
  "Ticket by type": "Ticket per tipo",
  "Ticket history": "Cronologia ticket",
  "Time Count": "Conteggio tempo",
  Title: Title$7,
  "To tasks found!": "Attività trovate!",
  "Top ticket creator": "Miglior creatore di ticket",
  "Total duration": "Durata totale",
  "Unassigned Tickets": "Ticket non assegnati",
  Update: Update$7,
  "Update User": "Aggiorna Utente",
  User: User$7,
  Users: Users$7,
  "Visible tasks only for the assigned people.": "Attività visibili solo alle persone assegnate.",
  Website: Website$7,
  Workspace: Workspace$7,
  "Workspace Description": "Descrizione area di lavoro",
  "Workspace Tasks": "Attività dell'area di lavoro",
  "Workspace Type": "Tipo di area di lavoro",
  "Workspace name": "Nome area di lavoro",
  "Write a comment...": "Scrivi un commento...",
  "last month": "mese scorso",
  optional: optional$7,
  "this month": "questo mese"
};
const __vite_glob_1_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$7,
  Activities: Activities$7,
  Address: Address$7,
  Archive: Archive$7,
  Assignee: Assignee$7,
  Assignees: Assignees$7,
  Attachment: Attachment$7,
  Attachments: Attachments$7,
  Average: Average$7,
  Background: Background$7,
  Cancel: Cancel$7,
  Checklist: Checklist$7,
  Code: Code$7,
  Contacts: Contacts$7,
  Create: Create$7,
  Customers: Customers$7,
  Dashboard: Dashboard$7,
  Delete: Delete$7,
  Description: Description$7,
  Details: Details$7,
  Duration: Duration$7,
  Edit: Edit$7,
  Email: Email$7,
  Favorites: Favorites$7,
  Filter: Filter$7,
  ID: ID$7,
  Label: Label$7,
  Labels: Labels$7,
  Language: Language$7,
  List: List$7,
  Login: Login$7,
  Logout: Logout$7,
  Member: Member$7,
  Members: Members$7,
  Memo: Memo$7,
  Menu: Menu$7,
  Move: Move$7,
  Name: Name$7,
  Open: Open$7,
  Overdue: Overdue$7,
  Password: Password$7,
  Phone: Phone$7,
  Photo: Photo$7,
  Position: Position$7,
  Project: Project$7,
  Projects: Projects$7,
  Register: Register$7,
  Registration: Registration$7,
  Remove: Remove$7,
  Reset: Reset$7,
  Role: Role$7,
  START: START$7,
  STOP: STOP$7,
  Save: Save$7,
  Slug: Slug$7,
  Starred: Starred$7,
  Started: Started$7,
  Stopped: Stopped$7,
  Submit: Submit$7,
  Task: Task$7,
  Template: Template$7,
  Title: Title$7,
  Update: Update$7,
  User: User$7,
  Users: Users$7,
  Website: Website$7,
  Workspace: Workspace$7,
  default: it,
  optional: optional$7
}, Symbol.toStringTag, { value: "Module" }));
const Action$6 = "Actie";
const Activities$6 = "Activiteiten";
const Address$6 = "Adres";
const Archive$6 = "Archief";
const Assignee$6 = "Toegewezen aan";
const Assignees$6 = "Toegewezenen";
const Attachment$6 = "Bijlage";
const Attachments$6 = "Bijlagen";
const Average$6 = "Gemiddelde";
const Background$6 = "Achtergrond";
const Cancel$6 = "Annuleren";
const Checklist$6 = "Checklist";
const Code$6 = "Code";
const Contacts$6 = "Contacten";
const Create$6 = "Creëren";
const Customers$6 = "Klanten";
const Dashboard$6 = "Dashboard";
const Delete$6 = "Verwijderen";
const Description$6 = "Beschrijving";
const Details$6 = "Details";
const Duration$6 = "Duur";
const Edit$6 = "Bewerken";
const Email$6 = "E-mail";
const Favorites$6 = "Favorieten";
const Filter$6 = "Filter";
const ID$6 = "ID";
const Label$6 = "Label";
const Labels$6 = "Labels";
const Language$6 = "Taal";
const List$6 = "Lijst";
const Login$6 = "Inloggen";
const Logout$6 = "Uitloggen";
const Member$6 = "Lid";
const Members$6 = "Leden";
const Memo$6 = "Memo";
const Menu$6 = "Menu";
const Move$6 = "Verplaatsen";
const Name$6 = "Naam";
const Open$6 = "Openen";
const Overdue$6 = "Te laat";
const Password$6 = "Wachtwoord";
const Phone$6 = "Telefoon";
const Photo$6 = "Foto";
const Position$6 = "Positie";
const Project$6 = "Project";
const Projects$6 = "Projecten";
const Register$6 = "Registreren";
const Registration$6 = "Registratie";
const Remove$6 = "Verwijderen";
const Reset$6 = "Resetten";
const Role$6 = "Rol";
const START$6 = "START";
const STOP$6 = "STOP";
const Save$6 = "Opslaan";
const Slug$6 = "Slug";
const Starred$6 = "Met ster";
const Started$6 = "Gestart";
const Stopped$6 = "Gestopt";
const Submit$6 = "Indienen";
const Task$6 = "Taak";
const Template$6 = "Sjabloon";
const Title$6 = "Titel";
const Update$6 = "Updaten";
const User$6 = "Gebruiker";
const Users$6 = "Gebruikers";
const Website$6 = "Website";
const Workspace$6 = "Werkruimte";
const optional$6 = "optioneel";
const nl = {
  Action: Action$6,
  Activities: Activities$6,
  "Add New": "Nieuw toevoegen",
  "Add Time": "Tijd toevoegen",
  "Add a new item": "Voeg een nieuw item toe",
  "Add a new list": "Voeg een nieuwe lijst toe",
  "Add a task": "Voeg een taak toe",
  "Add task": "Taak toevoegen",
  "Add time manually": "Tijd handmatig toevoegen",
  Address: Address$6,
  "Allowed File Types": "Toegestane bestandstypen",
  "App Name": "App Naam",
  Archive: Archive$6,
  "Archived Board Items": "Gearchiveerde board-items",
  "Archived Tasks": "Gearchiveerde taken",
  Assignee: Assignee$6,
  Assignees: Assignees$6,
  Attachment: Attachment$6,
  Attachments: Attachments$6,
  Average: Average$6,
  Background: Background$6,
  Cancel: Cancel$6,
  "Change Background": "Achtergrond wijzigen",
  "Change Task Visibility": "Zichtbaarheid van taak wijzigen",
  "Change Workspace": "Werkruimte wijzigen",
  "Check Update": "Controleer op update",
  Checklist: Checklist$6,
  "Clear All": "Alles wissen",
  "Click to rename project": "Klik om project te hernoemen",
  "Closed Tickets": "Gesloten tickets",
  Code: Code$6,
  "Confirm Password": "Bevestig wachtwoord",
  Contacts: Contacts$6,
  Create: Create$6,
  "Create New": "Nieuw creëren",
  "Create Project": "Project creëren",
  "Create Role": "Rol creëren",
  "Create Workspace": "Werkruimte creëren",
  "Create Workspace Type": "Type werkruimte creëren",
  "Create a New Role": "Een nieuwe rol creëren",
  "Create a new Workspace type": "Een nieuw type werkruimte creëren",
  "Create a new label": "Een nieuw label creëren",
  "Create workspace": "Werkruimte creëren",
  "Created At": "Gemaakt op",
  "Cron Job Instruction": "Cron Job Instructie",
  "Custom CSS": "Aangepaste CSS",
  Customers: Customers$6,
  Dashboard: Dashboard$6,
  "Default Language": "Standaardtaal",
  Delete: Delete$6,
  "Delete Project": "Project verwijderen",
  "Delete User": "Gebruiker verwijderen",
  Description: Description$6,
  Details: Details$6,
  "Due Date": "Vervaldatum",
  "Due in the next day": "Vervalt de volgende dag",
  Duration: Duration$6,
  Edit: Edit$6,
  "Edit Labels": "Labels bewerken",
  "Edit Profile": "Profiel bewerken",
  Email: Email$6,
  "Email Address": "E-mailadres",
  "Email Html": "E-mail Html",
  "Email Notifications": "E-mailmeldingen",
  "Enable Registration": "Registratie inschakelen",
  "Enable pre made board list": "Vooraf gemaakte boardlijst inschakelen",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Door dit in te schakelen, zijn de taken alleen zichtbaar voor de beheerder en toegewezen personen",
  "Enter a title for this task": "Voer een titel in voor deze taak",
  "Export tasks as CSV": "Taken exporteren als CSV",
  "Export tasks as Excel": "Taken exporteren als Excel",
  Favorites: Favorites$6,
  Filter: Filter$6,
  "Filter by role": "Filteren op rol",
  "Find tasks or projects": "Taken of projecten zoeken",
  "First Response Time": "Eerste reactietijd",
  "First name": "Voornaam",
  "Forgot your password?": "Wachtwoord vergeten?",
  "From Address": "Afzenderadres",
  "From Name": "Afzendernaam",
  "Global Settings": "Globale instellingen",
  "Google ReCaptcha Site Key": "Google ReCaptcha Site Sleutel",
  ID: ID$6,
  "Invite Workspace": "Werkruimte uitnodigen",
  "Invite Workspace members": "Leden van werkruimte uitnodigen",
  Label: Label$6,
  Labels: Labels$6,
  Language: Language$6,
  "Language Name": "Taalnaam",
  "Last Response Time": "Laatste reactietijd",
  "Last name": "Achternaam",
  List: List$6,
  Login: Login$6,
  Logout: Logout$6,
  "Mail Encryption": "Mailversleuteling",
  "Make Cover": "Omslag maken",
  Member: Member$6,
  Members: Members$6,
  Memo: Memo$6,
  Menu: Menu$6,
  Move: Move$6,
  "Move Card": "Kaart verplaatsen",
  "Move Left": "Naar links verplaatsen",
  "Move Right": "Naar rechts verplaatsen",
  "Move Task": "Taak verplaatsen",
  "My Tasks": "Mijn taken",
  "My Workspaces": "Mijn werkruimtes",
  Name: Name$6,
  "New Tickets": "Nieuwe tickets",
  "No dates": "Geen datums",
  "No item found!": "Geen item gevonden!",
  "No labels found.": "Geen labels gevonden.",
  "No list found!": "Geen lijst gevonden!",
  "No members": "Geen leden",
  "No task found!": "Geen taak gevonden!",
  "No time log found.": "Geen tijdlogboek gevonden.",
  "No workspace found": "Geen werkruimte gevonden",
  Open: Open$6,
  "Open Tickets": "Openstaande tickets",
  Overdue: Overdue$6,
  Password: Password$6,
  Phone: Phone$6,
  Photo: Photo$6,
  Position: Position$6,
  "Pre made list": "Vooraf gemaakte lijst",
  Project: Project$6,
  "Project Details": "Projectdetails",
  "Project name": "Projectnaam",
  Projects: Projects$6,
  "Recently Viewed": "Recent bekeken",
  Register: Register$6,
  Registration: Registration$6,
  Remove: Remove$6,
  "Remove Cover": "Omslag verwijderen",
  Reset: Reset$6,
  "Reset Password": "Wachtwoord resetten",
  "Revert Back": "Terugdraaien",
  Role: Role$6,
  "SMTP Host": "SMTP Host",
  "SMTP Password": "SMTP Wachtwoord",
  "SMTP Port": "SMTP Poort",
  "SMTP Username": "SMTP Gebruikersnaam",
  START: START$6,
  STOP: STOP$6,
  Save: Save$6,
  "Search User": "Gebruiker zoeken",
  "Search labels": "Labels zoeken",
  "Search...": "Zoeken...",
  "Select a color": "Selecteer een kleur",
  "Select a destination": "Selecteer een bestemming",
  "Select a workspace": "Selecteer een werkruimte",
  "Send Password Reset Link": "Link voor wachtwoordherstel verzenden",
  "Send to board": "Naar board sturen",
  "Show Registration link on the login page": "Registratielink tonen op de inlogpagina",
  "Slack Notifications": "Slack-meldingen",
  "Slack webhook URL": "Slack webhook URL",
  Slug: Slug$6,
  Starred: Starred$6,
  Started: Started$6,
  Stopped: Stopped$6,
  Submit: Submit$6,
  Task: Task$6,
  "Tasks assigned to me": "Aan mij toegewezen taken",
  "Team Members": "Teamleden",
  Template: Template$6,
  "This task is archived.": "Deze taak is gearchiveerd.",
  "Ticket by department": "Ticket per afdeling",
  "Ticket by type": "Ticket per type",
  "Ticket history": "Ticketgeschiedenis",
  "Time Count": "Tijdtelling",
  Title: Title$6,
  "To tasks found!": "Taken gevonden!",
  "Top ticket creator": "Top ticketmaker",
  "Total duration": "Totale duur",
  "Unassigned Tickets": "Niet-toegewezen tickets",
  Update: Update$6,
  "Update User": "Gebruiker updaten",
  User: User$6,
  Users: Users$6,
  "Visible tasks only for the assigned people.": "Zichtbare taken alleen voor de toegewezen personen.",
  Website: Website$6,
  Workspace: Workspace$6,
  "Workspace Description": "Beschrijving van werkruimte",
  "Workspace Tasks": "Taken van werkruimte",
  "Workspace Type": "Type werkruimte",
  "Workspace name": "Naam werkruimte",
  "Write a comment...": "Schrijf een opmerking...",
  "last month": "vorige maand",
  optional: optional$6,
  "this month": "deze maand"
};
const __vite_glob_1_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$6,
  Activities: Activities$6,
  Address: Address$6,
  Archive: Archive$6,
  Assignee: Assignee$6,
  Assignees: Assignees$6,
  Attachment: Attachment$6,
  Attachments: Attachments$6,
  Average: Average$6,
  Background: Background$6,
  Cancel: Cancel$6,
  Checklist: Checklist$6,
  Code: Code$6,
  Contacts: Contacts$6,
  Create: Create$6,
  Customers: Customers$6,
  Dashboard: Dashboard$6,
  Delete: Delete$6,
  Description: Description$6,
  Details: Details$6,
  Duration: Duration$6,
  Edit: Edit$6,
  Email: Email$6,
  Favorites: Favorites$6,
  Filter: Filter$6,
  ID: ID$6,
  Label: Label$6,
  Labels: Labels$6,
  Language: Language$6,
  List: List$6,
  Login: Login$6,
  Logout: Logout$6,
  Member: Member$6,
  Members: Members$6,
  Memo: Memo$6,
  Menu: Menu$6,
  Move: Move$6,
  Name: Name$6,
  Open: Open$6,
  Overdue: Overdue$6,
  Password: Password$6,
  Phone: Phone$6,
  Photo: Photo$6,
  Position: Position$6,
  Project: Project$6,
  Projects: Projects$6,
  Register: Register$6,
  Registration: Registration$6,
  Remove: Remove$6,
  Reset: Reset$6,
  Role: Role$6,
  START: START$6,
  STOP: STOP$6,
  Save: Save$6,
  Slug: Slug$6,
  Starred: Starred$6,
  Started: Started$6,
  Stopped: Stopped$6,
  Submit: Submit$6,
  Task: Task$6,
  Template: Template$6,
  Title: Title$6,
  Update: Update$6,
  User: User$6,
  Users: Users$6,
  Website: Website$6,
  Workspace: Workspace$6,
  default: nl,
  optional: optional$6
}, Symbol.toStringTag, { value: "Module" }));
const php_en = {
  "auth.failed": "These credentials do not match our records.",
  "auth.password": "The provided password is incorrect.",
  "auth.throttle": "Too many login attempts. Please try again in :seconds seconds.",
  "pagination.previous": "&laquo; Previous",
  "pagination.next": "Next &raquo;",
  "passwords.reset": "Your password has been reset.",
  "passwords.sent": "We have emailed your password reset link.",
  "passwords.throttled": "Please wait before retrying.",
  "passwords.token": "This password reset token is invalid.",
  "passwords.user": "We can't find a user with that email address.",
  "validation.accepted": "The :attribute field must be accepted.",
  "validation.accepted_if": "The :attribute field must be accepted when :other is :value.",
  "validation.active_url": "The :attribute field must be a valid URL.",
  "validation.after": "The :attribute field must be a date after :date.",
  "validation.after_or_equal": "The :attribute field must be a date after or equal to :date.",
  "validation.alpha": "The :attribute field must only contain letters.",
  "validation.alpha_dash": "The :attribute field must only contain letters, numbers, dashes, and underscores.",
  "validation.alpha_num": "The :attribute field must only contain letters and numbers.",
  "validation.array": "The :attribute field must be an array.",
  "validation.ascii": "The :attribute field must only contain single-byte alphanumeric characters and symbols.",
  "validation.before": "The :attribute field must be a date before :date.",
  "validation.before_or_equal": "The :attribute field must be a date before or equal to :date.",
  "validation.between.array": "The :attribute field must have between :min and :max items.",
  "validation.between.file": "The :attribute field must be between :min and :max kilobytes.",
  "validation.between.numeric": "The :attribute field must be between :min and :max.",
  "validation.between.string": "The :attribute field must be between :min and :max characters.",
  "validation.boolean": "The :attribute field must be true or false.",
  "validation.can": "The :attribute field contains an unauthorized value.",
  "validation.confirmed": "The :attribute field confirmation does not match.",
  "validation.current_password": "The password is incorrect.",
  "validation.date": "The :attribute field must be a valid date.",
  "validation.date_equals": "The :attribute field must be a date equal to :date.",
  "validation.date_format": "The :attribute field must match the format :format.",
  "validation.decimal": "The :attribute field must have :decimal decimal places.",
  "validation.declined": "The :attribute field must be declined.",
  "validation.declined_if": "The :attribute field must be declined when :other is :value.",
  "validation.different": "The :attribute field and :other must be different.",
  "validation.digits": "The :attribute field must be :digits digits.",
  "validation.digits_between": "The :attribute field must be between :min and :max digits.",
  "validation.dimensions": "The :attribute field has invalid image dimensions.",
  "validation.distinct": "The :attribute field has a duplicate value.",
  "validation.doesnt_end_with": "The :attribute field must not end with one of the following: :values.",
  "validation.doesnt_start_with": "The :attribute field must not start with one of the following: :values.",
  "validation.email": "The :attribute field must be a valid email address.",
  "validation.ends_with": "The :attribute field must end with one of the following: :values.",
  "validation.enum": "The selected :attribute is invalid.",
  "validation.exists": "The selected :attribute is invalid.",
  "validation.extensions": "The :attribute field must have one of the following extensions: :values.",
  "validation.file": "The :attribute field must be a file.",
  "validation.filled": "The :attribute field must have a value.",
  "validation.gt.array": "The :attribute field must have more than :value items.",
  "validation.gt.file": "The :attribute field must be greater than :value kilobytes.",
  "validation.gt.numeric": "The :attribute field must be greater than :value.",
  "validation.gt.string": "The :attribute field must be greater than :value characters.",
  "validation.gte.array": "The :attribute field must have :value items or more.",
  "validation.gte.file": "The :attribute field must be greater than or equal to :value kilobytes.",
  "validation.gte.numeric": "The :attribute field must be greater than or equal to :value.",
  "validation.gte.string": "The :attribute field must be greater than or equal to :value characters.",
  "validation.hex_color": "The :attribute field must be a valid hexadecimal color.",
  "validation.image": "The :attribute field must be an image.",
  "validation.in": "The selected :attribute is invalid.",
  "validation.in_array": "The :attribute field must exist in :other.",
  "validation.integer": "The :attribute field must be an integer.",
  "validation.ip": "The :attribute field must be a valid IP address.",
  "validation.ipv4": "The :attribute field must be a valid IPv4 address.",
  "validation.ipv6": "The :attribute field must be a valid IPv6 address.",
  "validation.json": "The :attribute field must be a valid JSON string.",
  "validation.lowercase": "The :attribute field must be lowercase.",
  "validation.lt.array": "The :attribute field must have less than :value items.",
  "validation.lt.file": "The :attribute field must be less than :value kilobytes.",
  "validation.lt.numeric": "The :attribute field must be less than :value.",
  "validation.lt.string": "The :attribute field must be less than :value characters.",
  "validation.lte.array": "The :attribute field must not have more than :value items.",
  "validation.lte.file": "The :attribute field must be less than or equal to :value kilobytes.",
  "validation.lte.numeric": "The :attribute field must be less than or equal to :value.",
  "validation.lte.string": "The :attribute field must be less than or equal to :value characters.",
  "validation.mac_address": "The :attribute field must be a valid MAC address.",
  "validation.max.array": "The :attribute field must not have more than :max items.",
  "validation.max.file": "The :attribute field must not be greater than :max kilobytes.",
  "validation.max.numeric": "The :attribute field must not be greater than :max.",
  "validation.max.string": "The :attribute field must not be greater than :max characters.",
  "validation.max_digits": "The :attribute field must not have more than :max digits.",
  "validation.mimes": "The :attribute field must be a file of type: :values.",
  "validation.mimetypes": "The :attribute field must be a file of type: :values.",
  "validation.min.array": "The :attribute field must have at least :min items.",
  "validation.min.file": "The :attribute field must be at least :min kilobytes.",
  "validation.min.numeric": "The :attribute field must be at least :min.",
  "validation.min.string": "The :attribute field must be at least :min characters.",
  "validation.min_digits": "The :attribute field must have at least :min digits.",
  "validation.missing": "The :attribute field must be missing.",
  "validation.missing_if": "The :attribute field must be missing when :other is :value.",
  "validation.missing_unless": "The :attribute field must be missing unless :other is :value.",
  "validation.missing_with": "The :attribute field must be missing when :values is present.",
  "validation.missing_with_all": "The :attribute field must be missing when :values are present.",
  "validation.multiple_of": "The :attribute field must be a multiple of :value.",
  "validation.not_in": "The selected :attribute is invalid.",
  "validation.not_regex": "The :attribute field format is invalid.",
  "validation.numeric": "The :attribute field must be a number.",
  "validation.password.letters": "The :attribute field must contain at least one letter.",
  "validation.password.mixed": "The :attribute field must contain at least one uppercase and one lowercase letter.",
  "validation.password.numbers": "The :attribute field must contain at least one number.",
  "validation.password.symbols": "The :attribute field must contain at least one symbol.",
  "validation.password.uncompromised": "The given :attribute has appeared in a data leak. Please choose a different :attribute.",
  "validation.present": "The :attribute field must be present.",
  "validation.present_if": "The :attribute field must be present when :other is :value.",
  "validation.present_unless": "The :attribute field must be present unless :other is :value.",
  "validation.present_with": "The :attribute field must be present when :values is present.",
  "validation.present_with_all": "The :attribute field must be present when :values are present.",
  "validation.prohibited": "The :attribute field is prohibited.",
  "validation.prohibited_if": "The :attribute field is prohibited when :other is :value.",
  "validation.prohibited_unless": "The :attribute field is prohibited unless :other is in :values.",
  "validation.prohibits": "The :attribute field prohibits :other from being present.",
  "validation.regex": "The :attribute field format is invalid.",
  "validation.required": "The :attribute field is required.",
  "validation.required_array_keys": "The :attribute field must contain entries for: :values.",
  "validation.required_if": "The :attribute field is required when :other is :value.",
  "validation.required_if_accepted": "The :attribute field is required when :other is accepted.",
  "validation.required_unless": "The :attribute field is required unless :other is in :values.",
  "validation.required_with": "The :attribute field is required when :values is present.",
  "validation.required_with_all": "The :attribute field is required when :values are present.",
  "validation.required_without": "The :attribute field is required when :values is not present.",
  "validation.required_without_all": "The :attribute field is required when none of :values are present.",
  "validation.same": "The :attribute field must match :other.",
  "validation.size.array": "The :attribute field must contain :size items.",
  "validation.size.file": "The :attribute field must be :size kilobytes.",
  "validation.size.numeric": "The :attribute field must be :size.",
  "validation.size.string": "The :attribute field must be :size characters.",
  "validation.starts_with": "The :attribute field must start with one of the following: :values.",
  "validation.string": "The :attribute field must be a string.",
  "validation.timezone": "The :attribute field must be a valid timezone.",
  "validation.unique": "The :attribute has already been taken.",
  "validation.uploaded": "The :attribute failed to upload.",
  "validation.uppercase": "The :attribute field must be uppercase.",
  "validation.url": "The :attribute field must be a valid URL.",
  "validation.ulid": "The :attribute field must be a valid ULID.",
  "validation.uuid": "The :attribute field must be a valid UUID.",
  "validation.custom.attribute-name.rule-name": "custom-message"
};
const __vite_glob_1_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: php_en
}, Symbol.toStringTag, { value: "Module" }));
const Action$5 = "Ação";
const Activities$5 = "Atividades";
const Address$5 = "Endereço";
const Archive$5 = "Arquivo";
const Assignee$5 = "Responsável";
const Assignees$5 = "Responsáveis";
const Attachment$5 = "Anexo";
const Attachments$5 = "Anexos";
const Average$5 = "Média";
const Background$5 = "Fundo";
const Cancel$5 = "Cancelar";
const Checklist$5 = "Lista de Verificação";
const Code$5 = "Código";
const Contacts$5 = "Contatos";
const Create$5 = "Criar";
const Customers$5 = "Clientes";
const Dashboard$5 = "Painel";
const Delete$5 = "Excluir";
const Description$5 = "Descrição";
const Details$5 = "Detalhes";
const Duration$5 = "Duração";
const Edit$5 = "Editar";
const Email$5 = "E-mail";
const Favorites$5 = "Favoritos";
const Filter$5 = "Filtro";
const ID$5 = "ID";
const Label$5 = "Etiqueta";
const Labels$5 = "Etiquetas";
const Language$5 = "Idioma";
const List$5 = "Lista";
const Login$5 = "Login";
const Logout$5 = "Sair";
const Member$5 = "Membro";
const Members$5 = "Membros";
const Memo$5 = "Memorando";
const Menu$5 = "Menu";
const Move$5 = "Mover";
const Name$5 = "Nome";
const Open$5 = "Abrir";
const Overdue$5 = "Atrasado";
const Password$5 = "Senha";
const Phone$5 = "Telefone";
const Photo$5 = "Foto";
const Position$5 = "Posição";
const Project$5 = "Projeto";
const Projects$5 = "Projetos";
const Register$5 = "Registrar";
const Registration$5 = "Registro";
const Remove$5 = "Remover";
const Reset$5 = "Redefinir";
const Role$5 = "Função";
const START$5 = "INICIAR";
const STOP$5 = "PARAR";
const Save$5 = "Salvar";
const Slug$5 = "Slug";
const Starred$5 = "Com estrela";
const Started$5 = "Iniciado";
const Stopped$5 = "Parado";
const Submit$5 = "Enviar";
const Task$5 = "Tarefa";
const Template$5 = "Modelo";
const Title$5 = "Título";
const Update$5 = "Atualizar";
const User$5 = "Usuário";
const Users$5 = "Usuários";
const Website$5 = "Website";
const Workspace$5 = "Espaço de Trabalho";
const optional$5 = "opcional";
const pt = {
  Action: Action$5,
  Activities: Activities$5,
  "Add New": "Adicionar Novo",
  "Add Time": "Adicionar Tempo",
  "Add a new item": "Adicionar um novo item",
  "Add a new list": "Adicionar uma nova lista",
  "Add a task": "Adicionar uma tarefa",
  "Add task": "Adicionar tarefa",
  "Add time manually": "Adicionar tempo manualmente",
  Address: Address$5,
  "Allowed File Types": "Tipos de arquivo permitidos",
  "App Name": "Nome do Aplicativo",
  Archive: Archive$5,
  "Archived Board Items": "Itens de quadro arquivados",
  "Archived Tasks": "Tarefas arquivadas",
  Assignee: Assignee$5,
  Assignees: Assignees$5,
  Attachment: Attachment$5,
  Attachments: Attachments$5,
  Average: Average$5,
  Background: Background$5,
  Cancel: Cancel$5,
  "Change Background": "Mudar Fundo",
  "Change Task Visibility": "Mudar Visibilidade da Tarefa",
  "Change Workspace": "Mudar Espaço de Trabalho",
  "Check Update": "Verificar Atualização",
  Checklist: Checklist$5,
  "Clear All": "Limpar Tudo",
  "Click to rename project": "Clique para renomear o projeto",
  "Closed Tickets": "Tickets Fechados",
  Code: Code$5,
  "Confirm Password": "Confirmar Senha",
  Contacts: Contacts$5,
  Create: Create$5,
  "Create New": "Criar Novo",
  "Create Project": "Criar Projeto",
  "Create Role": "Criar Função",
  "Create Workspace": "Criar Espaço de Trabalho",
  "Create Workspace Type": "Criar Tipo de Espaço de Trabalho",
  "Create a New Role": "Criar uma nova função",
  "Create a new Workspace type": "Criar um novo tipo de espaço de trabalho",
  "Create a new label": "Criar uma nova etiqueta",
  "Create workspace": "Criar espaço de trabalho",
  "Created At": "Criado em",
  "Cron Job Instruction": "Instrução de Cron Job",
  "Custom CSS": "CSS Personalizado",
  Customers: Customers$5,
  Dashboard: Dashboard$5,
  "Default Language": "Idioma Padrão",
  Delete: Delete$5,
  "Delete Project": "Excluir Projeto",
  "Delete User": "Excluir Usuário",
  Description: Description$5,
  Details: Details$5,
  "Due Date": "Data de Vencimento",
  "Due in the next day": "Vence no próximo dia",
  Duration: Duration$5,
  Edit: Edit$5,
  "Edit Labels": "Editar Etiquetas",
  "Edit Profile": "Editar Perfil",
  Email: Email$5,
  "Email Address": "Endereço de E-mail",
  "Email Html": "HTML de E-mail",
  "Email Notifications": "Notificações por E-mail",
  "Enable Registration": "Habilitar Registro",
  "Enable pre made board list": "Habilitar lista de quadro pré-definida",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Habilitando isso, as tarefas serão visíveis apenas para o administrador e pessoas designadas",
  "Enter a title for this task": "Digite um título para esta tarefa",
  "Export tasks as CSV": "Exportar tarefas como CSV",
  "Export tasks as Excel": "Exportar tarefas como Excel",
  Favorites: Favorites$5,
  Filter: Filter$5,
  "Filter by role": "Filtrar por função",
  "Find tasks or projects": "Encontrar tarefas ou projetos",
  "First Response Time": "Primeiro Tempo de Resposta",
  "First name": "Primeiro nome",
  "Forgot your password?": "Esqueceu sua senha?",
  "From Address": "Endereço do Remetente",
  "From Name": "Nome do Remetente",
  "Global Settings": "Configurações Globais",
  "Google ReCaptcha Site Key": "Chave do Site Google ReCaptcha",
  ID: ID$5,
  "Invite Workspace": "Convidar para o Espaço de Trabalho",
  "Invite Workspace members": "Convidar membros do espaço de trabalho",
  Label: Label$5,
  Labels: Labels$5,
  Language: Language$5,
  "Language Name": "Nome do Idioma",
  "Last Response Time": "Último Tempo de Resposta",
  "Last name": "Sobrenome",
  List: List$5,
  Login: Login$5,
  Logout: Logout$5,
  "Mail Encryption": "Criptografia de E-mail",
  "Make Cover": "Tornar Capa",
  Member: Member$5,
  Members: Members$5,
  Memo: Memo$5,
  Menu: Menu$5,
  Move: Move$5,
  "Move Card": "Mover Cartão",
  "Move Left": "Mover para Esquerda",
  "Move Right": "Mover para Direita",
  "Move Task": "Mover Tarefa",
  "My Tasks": "Minhas Tarefas",
  "My Workspaces": "Meus Espaços de Trabalho",
  Name: Name$5,
  "New Tickets": "Novos Tickets",
  "No dates": "Sem datas",
  "No item found!": "Nenhum item encontrado!",
  "No labels found.": "Nenhuma etiqueta encontrada.",
  "No list found!": "Nenhuma lista encontrada!",
  "No members": "Nenhum membro",
  "No task found!": "Nenhuma tarefa encontrada!",
  "No time log found.": "Nenhum registro de tempo encontrado.",
  "No workspace found": "Nenhum espaço de trabalho encontrado",
  Open: Open$5,
  "Open Tickets": "Tickets Abertos",
  Overdue: Overdue$5,
  Password: Password$5,
  Phone: Phone$5,
  Photo: Photo$5,
  Position: Position$5,
  "Pre made list": "Lista pré-definida",
  Project: Project$5,
  "Project Details": "Detalhes do Projeto",
  "Project name": "Nome do Projeto",
  Projects: Projects$5,
  "Recently Viewed": "Vistos Recentemente",
  Register: Register$5,
  Registration: Registration$5,
  Remove: Remove$5,
  "Remove Cover": "Remover Capa",
  Reset: Reset$5,
  "Reset Password": "Redefinir Senha",
  "Revert Back": "Reverter",
  Role: Role$5,
  "SMTP Host": "Host SMTP",
  "SMTP Password": "Senha SMTP",
  "SMTP Port": "Porta SMTP",
  "SMTP Username": "Nome de Usuário SMTP",
  START: START$5,
  STOP: STOP$5,
  Save: Save$5,
  "Search User": "Pesquisar Usuário",
  "Search labels": "Pesquisar etiquetas",
  "Search...": "Pesquisar...",
  "Select a color": "Selecione uma cor",
  "Select a destination": "Selecione um destino",
  "Select a workspace": "Selecione um espaço de trabalho",
  "Send Password Reset Link": "Enviar Link de Redefinição de Senha",
  "Send to board": "Enviar para o quadro",
  "Show Registration link on the login page": "Mostrar link de registro na página de login",
  "Slack Notifications": "Notificações do Slack",
  "Slack webhook URL": "URL do webhook do Slack",
  Slug: Slug$5,
  Starred: Starred$5,
  Started: Started$5,
  Stopped: Stopped$5,
  Submit: Submit$5,
  Task: Task$5,
  "Tasks assigned to me": "Tarefas atribuídas a mim",
  "Team Members": "Membros da Equipe",
  Template: Template$5,
  "This task is archived.": "Esta tarefa está arquivada.",
  "Ticket by department": "Ticket por departamento",
  "Ticket by type": "Ticket por tipo",
  "Ticket history": "Histórico de tickets",
  "Time Count": "Contagem de Tempo",
  Title: Title$5,
  "To tasks found!": "Tarefas encontradas!",
  "Top ticket creator": "Principal criador de tickets",
  "Total duration": "Duração total",
  "Unassigned Tickets": "Tickets não atribuídos",
  Update: Update$5,
  "Update User": "Atualizar Usuário",
  User: User$5,
  Users: Users$5,
  "Visible tasks only for the assigned people.": "Tarefas visíveis apenas para as pessoas designadas.",
  Website: Website$5,
  Workspace: Workspace$5,
  "Workspace Description": "Descrição do Espaço de Trabalho",
  "Workspace Tasks": "Tarefas do Espaço de Trabalho",
  "Workspace Type": "Tipo de Espaço de Trabalho",
  "Workspace name": "Nome do Espaço de Trabalho",
  "Write a comment...": "Escreva um comentário...",
  "last month": "mês passado",
  optional: optional$5,
  "this month": "este mês"
};
const __vite_glob_1_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$5,
  Activities: Activities$5,
  Address: Address$5,
  Archive: Archive$5,
  Assignee: Assignee$5,
  Assignees: Assignees$5,
  Attachment: Attachment$5,
  Attachments: Attachments$5,
  Average: Average$5,
  Background: Background$5,
  Cancel: Cancel$5,
  Checklist: Checklist$5,
  Code: Code$5,
  Contacts: Contacts$5,
  Create: Create$5,
  Customers: Customers$5,
  Dashboard: Dashboard$5,
  Delete: Delete$5,
  Description: Description$5,
  Details: Details$5,
  Duration: Duration$5,
  Edit: Edit$5,
  Email: Email$5,
  Favorites: Favorites$5,
  Filter: Filter$5,
  ID: ID$5,
  Label: Label$5,
  Labels: Labels$5,
  Language: Language$5,
  List: List$5,
  Login: Login$5,
  Logout: Logout$5,
  Member: Member$5,
  Members: Members$5,
  Memo: Memo$5,
  Menu: Menu$5,
  Move: Move$5,
  Name: Name$5,
  Open: Open$5,
  Overdue: Overdue$5,
  Password: Password$5,
  Phone: Phone$5,
  Photo: Photo$5,
  Position: Position$5,
  Project: Project$5,
  Projects: Projects$5,
  Register: Register$5,
  Registration: Registration$5,
  Remove: Remove$5,
  Reset: Reset$5,
  Role: Role$5,
  START: START$5,
  STOP: STOP$5,
  Save: Save$5,
  Slug: Slug$5,
  Starred: Starred$5,
  Started: Started$5,
  Stopped: Stopped$5,
  Submit: Submit$5,
  Task: Task$5,
  Template: Template$5,
  Title: Title$5,
  Update: Update$5,
  User: User$5,
  Users: Users$5,
  Website: Website$5,
  Workspace: Workspace$5,
  default: pt,
  optional: optional$5
}, Symbol.toStringTag, { value: "Module" }));
const Action$4 = "Acțiune";
const Activities$4 = "Activități";
const Address$4 = "Adresă";
const Archive$4 = "Arhivă";
const Assignee$4 = "Persoană desemnată";
const Assignees$4 = "Persoane desemnate";
const Attachment$4 = "Atașament";
const Attachments$4 = "Atașamente";
const Average$4 = "Medie";
const Background$4 = "Fundal";
const Cancel$4 = "Anulează";
const Checklist$4 = "Listă de verificare";
const Code$4 = "Cod";
const Contacts$4 = "Contacte";
const Create$4 = "Creează";
const Customers$4 = "Clienți";
const Dashboard$4 = "Panou de control";
const Delete$4 = "Șterge";
const Description$4 = "Descriere";
const Details$4 = "Detalii";
const Duration$4 = "Durată";
const Edit$4 = "Editează";
const Email$4 = "Email";
const Favorites$4 = "Favorite";
const Filter$4 = "Filtru";
const ID$4 = "ID";
const Label$4 = "Etichetă";
const Labels$4 = "Etichete";
const Language$4 = "Limbă";
const List$4 = "Listă";
const Login$4 = "Autentificare";
const Logout$4 = "Deconectare";
const Member$4 = "Membru";
const Members$4 = "Membri";
const Memo$4 = "Notă";
const Menu$4 = "Meniu";
const Move$4 = "Mută";
const Name$4 = "Nume";
const Open$4 = "Deschide";
const Overdue$4 = "Întârziat";
const Password$4 = "Parolă";
const Phone$4 = "Telefon";
const Photo$4 = "Fotografie";
const Position$4 = "Poziție";
const Project$4 = "Proiect";
const Projects$4 = "Proiecte";
const Register$4 = "Înregistrare";
const Registration$4 = "Înregistrare";
const Remove$4 = "Elimină";
const Reset$4 = "Resetează";
const Role$4 = "Rol";
const START$4 = "START";
const STOP$4 = "STOP";
const Save$4 = "Salvează";
const Slug$4 = "Slug";
const Starred$4 = "Marcat cu stea";
const Started$4 = "Început";
const Stopped$4 = "Oprit";
const Submit$4 = "Trimite";
const Task$4 = "Sarcină";
const Template$4 = "Șablon";
const Title$4 = "Titlu";
const Update$4 = "Actualizează";
const User$4 = "Utilizator";
const Users$4 = "Utilizatori";
const Website$4 = "Site web";
const Workspace$4 = "Spațiu de Lucru";
const optional$4 = "opțional";
const ro = {
  Action: Action$4,
  Activities: Activities$4,
  "Add New": "Adaugă Nou",
  "Add Time": "Adaugă Timp",
  "Add a new item": "Adaugă un element nou",
  "Add a new list": "Adaugă o listă nouă",
  "Add a task": "Adaugă o sarcină",
  "Add task": "Adaugă sarcină",
  "Add time manually": "Adaugă timp manual",
  Address: Address$4,
  "Allowed File Types": "Tipuri de fișiere permise",
  "App Name": "Numele Aplicației",
  Archive: Archive$4,
  "Archived Board Items": "Elemente de panou arhivate",
  "Archived Tasks": "Sarcini arhivate",
  Assignee: Assignee$4,
  Assignees: Assignees$4,
  Attachment: Attachment$4,
  Attachments: Attachments$4,
  Average: Average$4,
  Background: Background$4,
  Cancel: Cancel$4,
  "Change Background": "Schimbă Fundalul",
  "Change Task Visibility": "Schimbă Vizibilitatea Sarcinii",
  "Change Workspace": "Schimbă Spațiul de Lucru",
  "Check Update": "Verifică Actualizarea",
  Checklist: Checklist$4,
  "Clear All": "Șterge Tot",
  "Click to rename project": "Click pentru a redenumi proiectul",
  "Closed Tickets": "Tichete Închise",
  Code: Code$4,
  "Confirm Password": "Confirmă Parola",
  Contacts: Contacts$4,
  Create: Create$4,
  "Create New": "Creează Nou",
  "Create Project": "Creează Proiect",
  "Create Role": "Creează Rol",
  "Create Workspace": "Creează Spațiu de Lucru",
  "Create Workspace Type": "Creează Tip de Spațiu de Lucru",
  "Create a New Role": "Creează un rol nou",
  "Create a new Workspace type": "Creează un nou tip de spațiu de lucru",
  "Create a new label": "Creează o etichetă nouă",
  "Create workspace": "Creează spațiu de lucru",
  "Created At": "Creat la",
  "Cron Job Instruction": "Instrucțiune Cron Job",
  "Custom CSS": "CSS Personalizat",
  Customers: Customers$4,
  Dashboard: Dashboard$4,
  "Default Language": "Limbă implicită",
  Delete: Delete$4,
  "Delete Project": "Șterge Proiect",
  "Delete User": "Șterge Utilizator",
  Description: Description$4,
  Details: Details$4,
  "Due Date": "Data scadentă",
  "Due in the next day": "Scadent a doua zi",
  Duration: Duration$4,
  Edit: Edit$4,
  "Edit Labels": "Editează Etichete",
  "Edit Profile": "Editează Profilul",
  Email: Email$4,
  "Email Address": "Adresă de Email",
  "Email Html": "Email Html",
  "Email Notifications": "Notificări prin Email",
  "Enable Registration": "Activează Înregistrarea",
  "Enable pre made board list": "Activează lista de panou predefinită",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Activând aceasta, sarcinile vor fi vizibile doar pentru administrator și persoanele desemnate",
  "Enter a title for this task": "Introduceți un titlu pentru această sarcină",
  "Export tasks as CSV": "Exportă sarcinile ca CSV",
  "Export tasks as Excel": "Exportă sarcinile ca Excel",
  Favorites: Favorites$4,
  Filter: Filter$4,
  "Filter by role": "Filtrează după rol",
  "Find tasks or projects": "Găsește sarcini sau proiecte",
  "First Response Time": "Primul Timp de Răspuns",
  "First name": "Prenume",
  "Forgot your password?": "Ați uitat parola?",
  "From Address": "Adresa Expeditorului",
  "From Name": "Numele Expeditorului",
  "Global Settings": "Setări Globale",
  "Google ReCaptcha Site Key": "Cheia Site-ului Google ReCaptcha",
  ID: ID$4,
  "Invite Workspace": "Invită în Spațiul de Lucru",
  "Invite Workspace members": "Invită membri în spațiul de lucru",
  Label: Label$4,
  Labels: Labels$4,
  Language: Language$4,
  "Language Name": "Numele Limbii",
  "Last Response Time": "Ultimul Timp de Răspuns",
  "Last name": "Nume de familie",
  List: List$4,
  Login: Login$4,
  Logout: Logout$4,
  "Mail Encryption": "Criptare Mail",
  "Make Cover": "Setează ca și Copertă",
  Member: Member$4,
  Members: Members$4,
  Memo: Memo$4,
  Menu: Menu$4,
  Move: Move$4,
  "Move Card": "Mută Cardul",
  "Move Left": "Mută la Stânga",
  "Move Right": "Mută la Dreapta",
  "Move Task": "Mută Sarcina",
  "My Tasks": "Sarcinile Mele",
  "My Workspaces": "Spațiile Mele de Lucru",
  Name: Name$4,
  "New Tickets": "Tichete Noi",
  "No dates": "Fără date",
  "No item found!": "Niciun element găsit!",
  "No labels found.": "Nicio etichetă găsită.",
  "No list found!": "Nicio listă găsită!",
  "No members": "Fără membri",
  "No task found!": "Nicio sarcină găsită!",
  "No time log found.": "Niciun jurnal de timp găsit.",
  "No workspace found": "Niciun spațiu de lucru găsit",
  Open: Open$4,
  "Open Tickets": "Tichete Deschise",
  Overdue: Overdue$4,
  Password: Password$4,
  Phone: Phone$4,
  Photo: Photo$4,
  Position: Position$4,
  "Pre made list": "Listă predefinită",
  Project: Project$4,
  "Project Details": "Detalii Proiect",
  "Project name": "Nume Proiect",
  Projects: Projects$4,
  "Recently Viewed": "Vizualizate Recent",
  Register: Register$4,
  Registration: Registration$4,
  Remove: Remove$4,
  "Remove Cover": "Elimină Coperta",
  Reset: Reset$4,
  "Reset Password": "Resetează Parola",
  "Revert Back": "Revenire",
  Role: Role$4,
  "SMTP Host": "Gazdă SMTP",
  "SMTP Password": "Parolă SMTP",
  "SMTP Port": "Port SMTP",
  "SMTP Username": "Nume Utilizator SMTP",
  START: START$4,
  STOP: STOP$4,
  Save: Save$4,
  "Search User": "Caută Utilizator",
  "Search labels": "Caută etichete",
  "Search...": "Caută...",
  "Select a color": "Selectează o culoare",
  "Select a destination": "Selectează o destinație",
  "Select a workspace": "Selectează un spațiu de lucru",
  "Send Password Reset Link": "Trimite Link de Resetare a Parolei",
  "Send to board": "Trimite la panou",
  "Show Registration link on the login page": "Afișează linkul de înregistrare pe pagina de autentificare",
  "Slack Notifications": "Notificări Slack",
  "Slack webhook URL": "URL webhook Slack",
  Slug: Slug$4,
  Starred: Starred$4,
  Started: Started$4,
  Stopped: Stopped$4,
  Submit: Submit$4,
  Task: Task$4,
  "Tasks assigned to me": "Sarcini alocate mie",
  "Team Members": "Membrii Echipei",
  Template: Template$4,
  "This task is archived.": "Această sarcină este arhivată.",
  "Ticket by department": "Tichet pe departament",
  "Ticket by type": "Tichet pe tip",
  "Ticket history": "Istoric tichete",
  "Time Count": "Contorizare Timp",
  Title: Title$4,
  "To tasks found!": "Sarcini găsite!",
  "Top ticket creator": "Creator de top al tichetelor",
  "Total duration": "Durata totală",
  "Unassigned Tickets": "Tichete nealocate",
  Update: Update$4,
  "Update User": "Actualizează Utilizator",
  User: User$4,
  Users: Users$4,
  "Visible tasks only for the assigned people.": "Sarcini vizibile doar pentru persoanele desemnate.",
  Website: Website$4,
  Workspace: Workspace$4,
  "Workspace Description": "Descrierea Spațiului de Lucru",
  "Workspace Tasks": "Sarcini ale Spațiului de Lucru",
  "Workspace Type": "Tip de Spațiu de Lucru",
  "Workspace name": "Numele Spațiului de Lucru",
  "Write a comment...": "Scrie un comentariu...",
  "last month": "luna trecută",
  optional: optional$4,
  "this month": "luna aceasta"
};
const __vite_glob_1_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$4,
  Activities: Activities$4,
  Address: Address$4,
  Archive: Archive$4,
  Assignee: Assignee$4,
  Assignees: Assignees$4,
  Attachment: Attachment$4,
  Attachments: Attachments$4,
  Average: Average$4,
  Background: Background$4,
  Cancel: Cancel$4,
  Checklist: Checklist$4,
  Code: Code$4,
  Contacts: Contacts$4,
  Create: Create$4,
  Customers: Customers$4,
  Dashboard: Dashboard$4,
  Delete: Delete$4,
  Description: Description$4,
  Details: Details$4,
  Duration: Duration$4,
  Edit: Edit$4,
  Email: Email$4,
  Favorites: Favorites$4,
  Filter: Filter$4,
  ID: ID$4,
  Label: Label$4,
  Labels: Labels$4,
  Language: Language$4,
  List: List$4,
  Login: Login$4,
  Logout: Logout$4,
  Member: Member$4,
  Members: Members$4,
  Memo: Memo$4,
  Menu: Menu$4,
  Move: Move$4,
  Name: Name$4,
  Open: Open$4,
  Overdue: Overdue$4,
  Password: Password$4,
  Phone: Phone$4,
  Photo: Photo$4,
  Position: Position$4,
  Project: Project$4,
  Projects: Projects$4,
  Register: Register$4,
  Registration: Registration$4,
  Remove: Remove$4,
  Reset: Reset$4,
  Role: Role$4,
  START: START$4,
  STOP: STOP$4,
  Save: Save$4,
  Slug: Slug$4,
  Starred: Starred$4,
  Started: Started$4,
  Stopped: Stopped$4,
  Submit: Submit$4,
  Task: Task$4,
  Template: Template$4,
  Title: Title$4,
  Update: Update$4,
  User: User$4,
  Users: Users$4,
  Website: Website$4,
  Workspace: Workspace$4,
  default: ro,
  optional: optional$4
}, Symbol.toStringTag, { value: "Module" }));
const Action$3 = "إجراء";
const Activities$3 = "الأنشطة";
const Address$3 = "العنوان";
const Archive$3 = "أرشيف";
const Assignee$3 = "المكلف";
const Assignees$3 = "المكلفون";
const Attachment$3 = "مرفق";
const Attachments$3 = "المرفقات";
const Average$3 = "متوسط";
const Background$3 = "الخلفية";
const Cancel$3 = "إلغاء";
const Checklist$3 = "قائمة المراجعة";
const Code$3 = "الكود";
const Contacts$3 = "جهات الاتصال";
const Create$3 = "إنشاء";
const Customers$3 = "العملاء";
const Dashboard$3 = "لوحة التحكم";
const Delete$3 = "حذف";
const Description$3 = "الوصف";
const Details$3 = "التفاصيل";
const Duration$3 = "المدة";
const Edit$3 = "تعديل";
const Email$3 = "البريد الإلكتروني";
const Favorites$3 = "المفضلة";
const Filter$3 = "فلتر";
const ID$3 = "المعرف";
const Label$3 = "تسمية";
const Labels$3 = "التسميات";
const Language$3 = "اللغة";
const List$3 = "قائمة";
const Login$3 = "تسجيل الدخول";
const Logout$3 = "تسجيل الخروج";
const Member$3 = "عضو";
const Members$3 = "الأعضاء";
const Memo$3 = "مذكرة";
const Menu$3 = "القائمة";
const Move$3 = "نقل";
const Name$3 = "الاسم";
const Open$3 = "فتح";
const Overdue$3 = "متأخر";
const Password$3 = "كلمة المرور";
const Phone$3 = "الهاتف";
const Photo$3 = "صورة";
const Position$3 = "الموضع";
const Project$3 = "مشروع";
const Projects$3 = "المشاريع";
const Register$3 = "تسجيل";
const Registration$3 = "التسجيل";
const Remove$3 = "إزالة";
const Reset$3 = "إعادة تعيين";
const Role$3 = "الدور";
const START$3 = "بدء";
const STOP$3 = "إيقاف";
const Save$3 = "حفظ";
const Slug$3 = "الاسم اللطيف";
const Starred$3 = "مميز بنجمة";
const Started$3 = "بدأ";
const Stopped$3 = "توقف";
const Submit$3 = "إرسال";
const Task$3 = "مهمة";
const Template$3 = "قالب";
const Title$3 = "العنوان";
const Update$3 = "تحديث";
const User$3 = "مستخدم";
const Users$3 = "المستخدمون";
const Website$3 = "موقع الكتروني";
const Workspace$3 = "مساحة العمل";
const optional$3 = "اختياري";
const sa = {
  Action: Action$3,
  Activities: Activities$3,
  "Add New": "إضافة جديد",
  "Add Time": "إضافة وقت",
  "Add a new item": "إضافة عنصر جديد",
  "Add a new list": "إضافة قائمة جديدة",
  "Add a task": "إضافة مهمة",
  "Add task": "إضافة مهمة",
  "Add time manually": "إضافة الوقت يدويًا",
  Address: Address$3,
  "Allowed File Types": "أنواع الملفات المسموح بها",
  "App Name": "اسم التطبيق",
  Archive: Archive$3,
  "Archived Board Items": "عناصر اللوحة المؤرشفة",
  "Archived Tasks": "المهام المؤرشفة",
  Assignee: Assignee$3,
  Assignees: Assignees$3,
  Attachment: Attachment$3,
  Attachments: Attachments$3,
  Average: Average$3,
  Background: Background$3,
  Cancel: Cancel$3,
  "Change Background": "تغيير الخلفية",
  "Change Task Visibility": "تغيير رؤية المهمة",
  "Change Workspace": "تغيير مساحة العمل",
  "Check Update": "التحقق من التحديث",
  Checklist: Checklist$3,
  "Clear All": "مسح الكل",
  "Click to rename project": "انقر لإعادة تسمية المشروع",
  "Closed Tickets": "التذاكر المغلقة",
  Code: Code$3,
  "Confirm Password": "تأكيد كلمة المرور",
  Contacts: Contacts$3,
  Create: Create$3,
  "Create New": "إنشاء جديد",
  "Create Project": "إنشاء مشروع",
  "Create Role": "إنشاء دور",
  "Create Workspace": "إنشاء مساحة عمل",
  "Create Workspace Type": "إنشاء نوع مساحة العمل",
  "Create a New Role": "إنشاء دور جديد",
  "Create a new Workspace type": "إنشاء نوع مساحة عمل جديد",
  "Create a new label": "إنشاء تسمية جديدة",
  "Create workspace": "إنشاء مساحة عمل",
  "Created At": "أنشئ في",
  "Cron Job Instruction": "تعليمات وظيفة كرون",
  "Custom CSS": "CSS مخصص",
  Customers: Customers$3,
  Dashboard: Dashboard$3,
  "Default Language": "اللغة الافتراضية",
  Delete: Delete$3,
  "Delete Project": "حذف المشروع",
  "Delete User": "حذف المستخدم",
  Description: Description$3,
  Details: Details$3,
  "Due Date": "تاريخ الاستحقاق",
  "Due in the next day": "مستحق في اليوم التالي",
  Duration: Duration$3,
  Edit: Edit$3,
  "Edit Labels": "تعديل التسميات",
  "Edit Profile": "تعديل الملف الشخصي",
  Email: Email$3,
  "Email Address": "عنوان البريد الإلكتروني",
  "Email Html": "HTML البريد الإلكتروني",
  "Email Notifications": "إشعارات البريد الإلكتروني",
  "Enable Registration": "تمكين التسجيل",
  "Enable pre made board list": "تمكين قائمة اللوحة المعدة مسبقًا",
  "Enabling this the tasks will be visible only for the admin and assigned people": "تمكين هذا سيجعل المهام مرئية فقط للمسؤول والأشخاص المعينين",
  "Enter a title for this task": "أدخل عنوانًا لهذه المهمة",
  "Export tasks as CSV": "تصدير المهام كـ CSV",
  "Export tasks as Excel": "تصدير المهام كـ Excel",
  Favorites: Favorites$3,
  Filter: Filter$3,
  "Filter by role": "التصفية حسب الدور",
  "Find tasks or projects": "البحث عن مهام أو مشاريع",
  "First Response Time": "وقت الاستجابة الأول",
  "First name": "الاسم الأول",
  "Forgot your password?": "هل نسيت كلمة المرور؟",
  "From Address": "عنوان المرسل",
  "From Name": "اسم المرسل",
  "Global Settings": "الإعدادات العامة",
  "Google ReCaptcha Site Key": "مفتاح موقع Google ReCaptcha",
  ID: ID$3,
  "Invite Workspace": "دعوة إلى مساحة العمل",
  "Invite Workspace members": "دعوة أعضاء مساحة العمل",
  Label: Label$3,
  Labels: Labels$3,
  Language: Language$3,
  "Language Name": "اسم اللغة",
  "Last Response Time": "وقت الاستجابة الأخير",
  "Last name": "الاسم الأخير",
  List: List$3,
  Login: Login$3,
  Logout: Logout$3,
  "Mail Encryption": "تشفير البريد",
  "Make Cover": "تعيين كغلاف",
  Member: Member$3,
  Members: Members$3,
  Memo: Memo$3,
  Menu: Menu$3,
  Move: Move$3,
  "Move Card": "نقل البطاقة",
  "Move Left": "نقل إلى اليسار",
  "Move Right": "نقل إلى اليمين",
  "Move Task": "نقل المهمة",
  "My Tasks": "مهامي",
  "My Workspaces": "مساحات العمل الخاصة بي",
  Name: Name$3,
  "New Tickets": "تذاكر جديدة",
  "No dates": "لا تواريخ",
  "No item found!": "لم يتم العثور على أي عنصر!",
  "No labels found.": "لم يتم العثور على تسميات.",
  "No list found!": "لم يتم العثور على قائمة!",
  "No members": "لا يوجد أعضاء",
  "No task found!": "لم يتم العثور على مهمة!",
  "No time log found.": "لم يتم العثور على سجل زمني.",
  "No workspace found": "لم يتم العثور على مساحة عمل",
  Open: Open$3,
  "Open Tickets": "التذاكر المفتوحة",
  Overdue: Overdue$3,
  Password: Password$3,
  Phone: Phone$3,
  Photo: Photo$3,
  Position: Position$3,
  "Pre made list": "قائمة معدة مسبقًا",
  Project: Project$3,
  "Project Details": "تفاصيل المشروع",
  "Project name": "اسم المشروع",
  Projects: Projects$3,
  "Recently Viewed": "تم عرضه مؤخرًا",
  Register: Register$3,
  Registration: Registration$3,
  Remove: Remove$3,
  "Remove Cover": "إزالة الغلاف",
  Reset: Reset$3,
  "Reset Password": "إعادة تعيين كلمة المرور",
  "Revert Back": "عودة",
  Role: Role$3,
  "SMTP Host": "مضيف SMTP",
  "SMTP Password": "كلمة مرور SMTP",
  "SMTP Port": "منفذ SMTP",
  "SMTP Username": "اسم مستخدم SMTP",
  START: START$3,
  STOP: STOP$3,
  Save: Save$3,
  "Search User": "بحث عن مستخدم",
  "Search labels": "بحث عن تسميات",
  "Search...": "بحث...",
  "Select a color": "اختر لونًا",
  "Select a destination": "اختر وجهة",
  "Select a workspace": "اختر مساحة عمل",
  "Send Password Reset Link": "إرسال رابط إعادة تعيين كلمة المرور",
  "Send to board": "إرسال إلى اللوحة",
  "Show Registration link on the login page": "إظهار رابط التسجيل في صفحة تسجيل الدخول",
  "Slack Notifications": "إشعارات Slack",
  "Slack webhook URL": "عنوان URL لـ Slack webhook",
  Slug: Slug$3,
  Starred: Starred$3,
  Started: Started$3,
  Stopped: Stopped$3,
  Submit: Submit$3,
  Task: Task$3,
  "Tasks assigned to me": "المهام المسندة إليّ",
  "Team Members": "أعضاء الفريق",
  Template: Template$3,
  "This task is archived.": "هذه المهمة مؤرشفة.",
  "Ticket by department": "تذكرة حسب القسم",
  "Ticket by type": "تذكرة حسب النوع",
  "Ticket history": "سجل التذاكر",
  "Time Count": "عداد الوقت",
  Title: Title$3,
  "To tasks found!": "تم العثور على المهام!",
  "Top ticket creator": "أفضل منشئ للتذاكر",
  "Total duration": "المدة الإجمالية",
  "Unassigned Tickets": "التذاكر غير المعينة",
  Update: Update$3,
  "Update User": "تحديث المستخدم",
  User: User$3,
  Users: Users$3,
  "Visible tasks only for the assigned people.": "المهام المرئية فقط للأشخاص المعينين.",
  Website: Website$3,
  Workspace: Workspace$3,
  "Workspace Description": "وصف مساحة العمل",
  "Workspace Tasks": "مهام مساحة العمل",
  "Workspace Type": "نوع مساحة العمل",
  "Workspace name": "اسم مساحة العمل",
  "Write a comment...": "اكتب تعليقًا...",
  "last month": "الشهر الماضي",
  optional: optional$3,
  "this month": "هذا الشهر"
};
const __vite_glob_1_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$3,
  Activities: Activities$3,
  Address: Address$3,
  Archive: Archive$3,
  Assignee: Assignee$3,
  Assignees: Assignees$3,
  Attachment: Attachment$3,
  Attachments: Attachments$3,
  Average: Average$3,
  Background: Background$3,
  Cancel: Cancel$3,
  Checklist: Checklist$3,
  Code: Code$3,
  Contacts: Contacts$3,
  Create: Create$3,
  Customers: Customers$3,
  Dashboard: Dashboard$3,
  Delete: Delete$3,
  Description: Description$3,
  Details: Details$3,
  Duration: Duration$3,
  Edit: Edit$3,
  Email: Email$3,
  Favorites: Favorites$3,
  Filter: Filter$3,
  ID: ID$3,
  Label: Label$3,
  Labels: Labels$3,
  Language: Language$3,
  List: List$3,
  Login: Login$3,
  Logout: Logout$3,
  Member: Member$3,
  Members: Members$3,
  Memo: Memo$3,
  Menu: Menu$3,
  Move: Move$3,
  Name: Name$3,
  Open: Open$3,
  Overdue: Overdue$3,
  Password: Password$3,
  Phone: Phone$3,
  Photo: Photo$3,
  Position: Position$3,
  Project: Project$3,
  Projects: Projects$3,
  Register: Register$3,
  Registration: Registration$3,
  Remove: Remove$3,
  Reset: Reset$3,
  Role: Role$3,
  START: START$3,
  STOP: STOP$3,
  Save: Save$3,
  Slug: Slug$3,
  Starred: Starred$3,
  Started: Started$3,
  Stopped: Stopped$3,
  Submit: Submit$3,
  Task: Task$3,
  Template: Template$3,
  Title: Title$3,
  Update: Update$3,
  User: User$3,
  Users: Users$3,
  Website: Website$3,
  Workspace: Workspace$3,
  default: sa,
  optional: optional$3
}, Symbol.toStringTag, { value: "Module" }));
const Action$2 = "Åtgärd";
const Activities$2 = "Aktiviteter";
const Address$2 = "Adress";
const Archive$2 = "Arkiv";
const Assignee$2 = "Tilldelad";
const Assignees$2 = "Tilldelade";
const Attachment$2 = "Bilaga";
const Attachments$2 = "Bilagor";
const Average$2 = "Genomsnitt";
const Background$2 = "Bakgrund";
const Cancel$2 = "Avbryt";
const Checklist$2 = "Checklista";
const Code$2 = "Kod";
const Contacts$2 = "Kontakter";
const Create$2 = "Skapa";
const Customers$2 = "Kunder";
const Dashboard$2 = "Instrumentpanel";
const Delete$2 = "Ta bort";
const Description$2 = "Beskrivning";
const Details$2 = "Detaljer";
const Duration$2 = "Varaktighet";
const Edit$2 = "Redigera";
const Email$2 = "E-post";
const Favorites$2 = "Favoriter";
const Filter$2 = "Filter";
const ID$2 = "ID";
const Label$2 = "Etikett";
const Labels$2 = "Etiketter";
const Language$2 = "Språk";
const List$2 = "Lista";
const Login$2 = "Logga in";
const Logout$2 = "Logga ut";
const Member$2 = "Medlem";
const Members$2 = "Medlemmar";
const Memo$2 = "PM";
const Menu$2 = "Meny";
const Move$2 = "Flytta";
const Name$2 = "Namn";
const Open$2 = "Öppna";
const Overdue$2 = "Försenad";
const Password$2 = "Lösenord";
const Phone$2 = "Telefon";
const Photo$2 = "Foto";
const Position$2 = "Position";
const Project$2 = "Projekt";
const Projects$2 = "Projekt";
const Register$2 = "Registrera";
const Registration$2 = "Registrering";
const Remove$2 = "Ta bort";
const Reset$2 = "Återställ";
const Role$2 = "Roll";
const START$2 = "START";
const STOP$2 = "STOPP";
const Save$2 = "Spara";
const Slug$2 = "Slug";
const Starred$2 = "Stjärnmärkt";
const Started$2 = "Startad";
const Stopped$2 = "Stoppad";
const Submit$2 = "Skicka";
const Task$2 = "Uppgift";
const Template$2 = "Mall";
const Title$2 = "Titel";
const Update$2 = "Uppdatera";
const User$2 = "Användare";
const Users$2 = "Användare";
const Website$2 = "Webbplats";
const Workspace$2 = "Arbetsyta";
const optional$2 = "valfri";
const se = {
  Action: Action$2,
  Activities: Activities$2,
  "Add New": "Lägg till ny",
  "Add Time": "Lägg till tid",
  "Add a new item": "Lägg till ett nytt objekt",
  "Add a new list": "Lägg till en ny lista",
  "Add a task": "Lägg till en uppgift",
  "Add task": "Lägg till uppgift",
  "Add time manually": "Lägg till tid manuellt",
  Address: Address$2,
  "Allowed File Types": "Tillåtna filtyper",
  "App Name": "Appnamn",
  Archive: Archive$2,
  "Archived Board Items": "Arkiverade tavleobjekt",
  "Archived Tasks": "Arkiverade uppgifter",
  Assignee: Assignee$2,
  Assignees: Assignees$2,
  Attachment: Attachment$2,
  Attachments: Attachments$2,
  Average: Average$2,
  Background: Background$2,
  Cancel: Cancel$2,
  "Change Background": "Ändra bakgrund",
  "Change Task Visibility": "Ändra uppgiftens synlighet",
  "Change Workspace": "Byt arbetsyta",
  "Check Update": "Sök efter uppdatering",
  Checklist: Checklist$2,
  "Clear All": "Rensa allt",
  "Click to rename project": "Klicka för att döpa om projektet",
  "Closed Tickets": "Stängda ärenden",
  Code: Code$2,
  "Confirm Password": "Bekräfta lösenord",
  Contacts: Contacts$2,
  Create: Create$2,
  "Create New": "Skapa ny",
  "Create Project": "Skapa projekt",
  "Create Role": "Skapa roll",
  "Create Workspace": "Skapa arbetsyta",
  "Create Workspace Type": "Skapa arbetsytetyp",
  "Create a New Role": "Skapa en ny roll",
  "Create a new Workspace type": "Skapa en ny arbetsytetyp",
  "Create a new label": "Skapa en ny etikett",
  "Create workspace": "Skapa arbetsyta",
  "Created At": "Skapad den",
  "Cron Job Instruction": "Instruktion för Cron-jobb",
  "Custom CSS": "Anpassad CSS",
  Customers: Customers$2,
  Dashboard: Dashboard$2,
  "Default Language": "Standardspråk",
  Delete: Delete$2,
  "Delete Project": "Ta bort projekt",
  "Delete User": "Ta bort användare",
  Description: Description$2,
  Details: Details$2,
  "Due Date": "Förfallodatum",
  "Due in the next day": "Förfaller nästa dag",
  Duration: Duration$2,
  Edit: Edit$2,
  "Edit Labels": "Redigera etiketter",
  "Edit Profile": "Redigera profil",
  Email: Email$2,
  "Email Address": "E-postadress",
  "Email Html": "E-post Html",
  "Email Notifications": "E-postmeddelanden",
  "Enable Registration": "Aktivera registrering",
  "Enable pre made board list": "Aktivera förgjord tavellista",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Genom att aktivera detta blir uppgifterna endast synliga för administratören och tilldelade personer",
  "Enter a title for this task": "Ange en titel för denna uppgift",
  "Export tasks as CSV": "Exportera uppgifter som CSV",
  "Export tasks as Excel": "Exportera uppgifter som Excel",
  Favorites: Favorites$2,
  Filter: Filter$2,
  "Filter by role": "Filtrera efter roll",
  "Find tasks or projects": "Hitta uppgifter eller projekt",
  "First Response Time": "Första svarstid",
  "First name": "Förnamn",
  "Forgot your password?": "Glömt ditt lösenord?",
  "From Address": "Från-adress",
  "From Name": "Från-namn",
  "Global Settings": "Globala inställningar",
  "Google ReCaptcha Site Key": "Google ReCaptcha webbplatsnyckel",
  ID: ID$2,
  "Invite Workspace": "Bjud in till arbetsyta",
  "Invite Workspace members": "Bjud in medlemmar till arbetsytan",
  Label: Label$2,
  Labels: Labels$2,
  Language: Language$2,
  "Language Name": "Språknamn",
  "Last Response Time": "Senaste svarstid",
  "Last name": "Efternamn",
  List: List$2,
  Login: Login$2,
  Logout: Logout$2,
  "Mail Encryption": "E-postkryptering",
  "Make Cover": "Gör till omslag",
  Member: Member$2,
  Members: Members$2,
  Memo: Memo$2,
  Menu: Menu$2,
  Move: Move$2,
  "Move Card": "Flytta kort",
  "Move Left": "Flytta vänster",
  "Move Right": "Flytta höger",
  "Move Task": "Flytta uppgift",
  "My Tasks": "Mina uppgifter",
  "My Workspaces": "Mina arbetsytor",
  Name: Name$2,
  "New Tickets": "Nya ärenden",
  "No dates": "Inga datum",
  "No item found!": "Inget objekt hittades!",
  "No labels found.": "Inga etiketter hittades.",
  "No list found!": "Ingen lista hittades!",
  "No members": "Inga medlemmar",
  "No task found!": "Ingen uppgift hittades!",
  "No time log found.": "Ingen tidslogg hittades.",
  "No workspace found": "Ingen arbetsyta hittades",
  Open: Open$2,
  "Open Tickets": "Öppna ärenden",
  Overdue: Overdue$2,
  Password: Password$2,
  Phone: Phone$2,
  Photo: Photo$2,
  Position: Position$2,
  "Pre made list": "Färdig lista",
  Project: Project$2,
  "Project Details": "Projektdetaljer",
  "Project name": "Projektnamn",
  Projects: Projects$2,
  "Recently Viewed": "Nyligen visade",
  Register: Register$2,
  Registration: Registration$2,
  Remove: Remove$2,
  "Remove Cover": "Ta bort omslag",
  Reset: Reset$2,
  "Reset Password": "Återställ lösenord",
  "Revert Back": "Återgå",
  Role: Role$2,
  "SMTP Host": "SMTP-värd",
  "SMTP Password": "SMTP-lösenord",
  "SMTP Port": "SMTP-port",
  "SMTP Username": "SMTP-användarnamn",
  START: START$2,
  STOP: STOP$2,
  Save: Save$2,
  "Search User": "Sök användare",
  "Search labels": "Sök etiketter",
  "Search...": "Sök...",
  "Select a color": "Välj en färg",
  "Select a destination": "Välj en destination",
  "Select a workspace": "Välj en arbetsyta",
  "Send Password Reset Link": "Skicka länk för återställning av lösenord",
  "Send to board": "Skicka till tavla",
  "Show Registration link on the login page": "Visa registreringslänk på inloggningssidan",
  "Slack Notifications": "Slack-meddelanden",
  "Slack webhook URL": "Slack webhook-URL",
  Slug: Slug$2,
  Starred: Starred$2,
  Started: Started$2,
  Stopped: Stopped$2,
  Submit: Submit$2,
  Task: Task$2,
  "Tasks assigned to me": "Uppgifter tilldelade mig",
  "Team Members": "Teammedlemmar",
  Template: Template$2,
  "This task is archived.": "Denna uppgift är arkiverad.",
  "Ticket by department": "Ärende per avdelning",
  "Ticket by type": "Ärende per typ",
  "Ticket history": "Ärendehistorik",
  "Time Count": "Tidsräkning",
  Title: Title$2,
  "To tasks found!": "Uppgifter hittades!",
  "Top ticket creator": "Främsta ärendeskapare",
  "Total duration": "Total varaktighet",
  "Unassigned Tickets": "Otilldelade ärenden",
  Update: Update$2,
  "Update User": "Uppdatera användare",
  User: User$2,
  Users: Users$2,
  "Visible tasks only for the assigned people.": "Synliga uppgifter endast för tilldelade personer.",
  Website: Website$2,
  Workspace: Workspace$2,
  "Workspace Description": "Beskrivning av arbetsyta",
  "Workspace Tasks": "Arbetsytans uppgifter",
  "Workspace Type": "Typ av arbetsyta",
  "Workspace name": "Namn på arbetsyta",
  "Write a comment...": "Skriv en kommentar...",
  "last month": "förra månaden",
  optional: optional$2,
  "this month": "denna månad"
};
const __vite_glob_1_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$2,
  Activities: Activities$2,
  Address: Address$2,
  Archive: Archive$2,
  Assignee: Assignee$2,
  Assignees: Assignees$2,
  Attachment: Attachment$2,
  Attachments: Attachments$2,
  Average: Average$2,
  Background: Background$2,
  Cancel: Cancel$2,
  Checklist: Checklist$2,
  Code: Code$2,
  Contacts: Contacts$2,
  Create: Create$2,
  Customers: Customers$2,
  Dashboard: Dashboard$2,
  Delete: Delete$2,
  Description: Description$2,
  Details: Details$2,
  Duration: Duration$2,
  Edit: Edit$2,
  Email: Email$2,
  Favorites: Favorites$2,
  Filter: Filter$2,
  ID: ID$2,
  Label: Label$2,
  Labels: Labels$2,
  Language: Language$2,
  List: List$2,
  Login: Login$2,
  Logout: Logout$2,
  Member: Member$2,
  Members: Members$2,
  Memo: Memo$2,
  Menu: Menu$2,
  Move: Move$2,
  Name: Name$2,
  Open: Open$2,
  Overdue: Overdue$2,
  Password: Password$2,
  Phone: Phone$2,
  Photo: Photo$2,
  Position: Position$2,
  Project: Project$2,
  Projects: Projects$2,
  Register: Register$2,
  Registration: Registration$2,
  Remove: Remove$2,
  Reset: Reset$2,
  Role: Role$2,
  START: START$2,
  STOP: STOP$2,
  Save: Save$2,
  Slug: Slug$2,
  Starred: Starred$2,
  Started: Started$2,
  Stopped: Stopped$2,
  Submit: Submit$2,
  Task: Task$2,
  Template: Template$2,
  Title: Title$2,
  Update: Update$2,
  User: User$2,
  Users: Users$2,
  Website: Website$2,
  Workspace: Workspace$2,
  default: se,
  optional: optional$2
}, Symbol.toStringTag, { value: "Module" }));
const Action$1 = "Eylem";
const Activities$1 = "Aktiviteler";
const Address$1 = "Adres";
const Archive$1 = "Arşiv";
const Assignee$1 = "Atanan";
const Assignees$1 = "Atananlar";
const Attachment$1 = "Ek";
const Attachments$1 = "Ekler";
const Average$1 = "Ortalama";
const Background$1 = "Arka Plan";
const Cancel$1 = "İptal";
const Checklist$1 = "Kontrol Listesi";
const Code$1 = "Kod";
const Contacts$1 = "Kişiler";
const Create$1 = "Oluştur";
const Customers$1 = "Müşteriler";
const Dashboard$1 = "Kontrol Paneli";
const Delete$1 = "Sil";
const Description$1 = "Açıklama";
const Details$1 = "Detaylar";
const Duration$1 = "Süre";
const Edit$1 = "Düzenle";
const Email$1 = "E-posta";
const Favorites$1 = "Favoriler";
const Filter$1 = "Filtre";
const ID$1 = "ID";
const Label$1 = "Etiket";
const Labels$1 = "Etiketler";
const Language$1 = "Dil";
const List$1 = "Liste";
const Login$1 = "Giriş Yap";
const Logout$1 = "Çıkış Yap";
const Member$1 = "Üye";
const Members$1 = "Üyeler";
const Memo$1 = "Not";
const Menu$1 = "Menü";
const Move$1 = "Taşı";
const Name$1 = "İsim";
const Open$1 = "Aç";
const Overdue$1 = "Vadesi Geçmiş";
const Password$1 = "Şifre";
const Phone$1 = "Telefon";
const Photo$1 = "Fotoğraf";
const Position$1 = "Pozisyon";
const Project$1 = "Proje";
const Projects$1 = "Projeler";
const Register$1 = "Kayıt Ol";
const Registration$1 = "Kayıt";
const Remove$1 = "Kaldır";
const Reset$1 = "Sıfırla";
const Role$1 = "Rol";
const START$1 = "BAŞLAT";
const STOP$1 = "DURDUR";
const Save$1 = "Kaydet";
const Slug$1 = "Kısa ad";
const Starred$1 = "Yıldızlı";
const Started$1 = "Başladı";
const Stopped$1 = "Durduruldu";
const Submit$1 = "Gönder";
const Task$1 = "Görev";
const Template$1 = "Şablon";
const Title$1 = "Başlık";
const Update$1 = "Güncelle";
const User$1 = "Kullanıcı";
const Users$1 = "Kullanıcılar";
const Website$1 = "Web sitesi";
const Workspace$1 = "Çalışma Alanı";
const optional$1 = "isteğe bağlı";
const tr = {
  Action: Action$1,
  Activities: Activities$1,
  "Add New": "Yeni Ekle",
  "Add Time": "Süre Ekle",
  "Add a new item": "Yeni bir öğe ekle",
  "Add a new list": "Yeni bir liste ekle",
  "Add a task": "Bir görev ekle",
  "Add task": "Görev ekle",
  "Add time manually": "Süreyi manuel ekle",
  Address: Address$1,
  "Allowed File Types": "İzin Verilen Dosya Türleri",
  "App Name": "Uygulama Adı",
  Archive: Archive$1,
  "Archived Board Items": "Arşivlenmiş Pano Öğeleri",
  "Archived Tasks": "Arşivlenmiş Görevler",
  Assignee: Assignee$1,
  Assignees: Assignees$1,
  Attachment: Attachment$1,
  Attachments: Attachments$1,
  Average: Average$1,
  Background: Background$1,
  Cancel: Cancel$1,
  "Change Background": "Arka Planı Değiştir",
  "Change Task Visibility": "Görev Görünürlüğünü Değiştir",
  "Change Workspace": "Çalışma Alanını Değiştir",
  "Check Update": "Güncellemeyi Kontrol Et",
  Checklist: Checklist$1,
  "Clear All": "Tümünü Temizle",
  "Click to rename project": "Projeyi yeniden adlandırmak için tıkla",
  "Closed Tickets": "Kapatılmış Biletler",
  Code: Code$1,
  "Confirm Password": "Şifreyi Onayla",
  Contacts: Contacts$1,
  Create: Create$1,
  "Create New": "Yeni Oluştur",
  "Create Project": "Proje Oluştur",
  "Create Role": "Rol Oluştur",
  "Create Workspace": "Çalışma Alanı Oluştur",
  "Create Workspace Type": "Çalışma Alanı Türü Oluştur",
  "Create a New Role": "Yeni bir rol oluştur",
  "Create a new Workspace type": "Yeni bir çalışma alanı türü oluştur",
  "Create a new label": "Yeni bir etiket oluştur",
  "Create workspace": "Çalışma alanı oluştur",
  "Created At": "Oluşturulma Tarihi",
  "Cron Job Instruction": "Cron Job Talimatı",
  "Custom CSS": "Özel CSS",
  Customers: Customers$1,
  Dashboard: Dashboard$1,
  "Default Language": "Varsayılan Dil",
  Delete: Delete$1,
  "Delete Project": "Projeyi Sil",
  "Delete User": "Kullanıcıyı Sil",
  Description: Description$1,
  Details: Details$1,
  "Due Date": "Son Tarih",
  "Due in the next day": "Bir sonraki gün vadesi doluyor",
  Duration: Duration$1,
  Edit: Edit$1,
  "Edit Labels": "Etiketleri Düzenle",
  "Edit Profile": "Profili Düzenle",
  Email: Email$1,
  "Email Address": "E-posta Adresi",
  "Email Html": "E-posta Html",
  "Email Notifications": "E-posta Bildirimleri",
  "Enable Registration": "Kaydı Etkinleştir",
  "Enable pre made board list": "Hazır pano listesini etkinleştir",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Bunu etkinleştirmek, görevleri yalnızca yönetici ve atanan kişiler için görünür kılacaktır",
  "Enter a title for this task": "Bu görev için bir başlık girin",
  "Export tasks as CSV": "Görevleri CSV olarak dışa aktar",
  "Export tasks as Excel": "Görevleri Excel olarak dışa aktar",
  Favorites: Favorites$1,
  Filter: Filter$1,
  "Filter by role": "Role göre filtrele",
  "Find tasks or projects": "Görev veya proje bul",
  "First Response Time": "İlk Yanıt Süresi",
  "First name": "Ad",
  "Forgot your password?": "Şifrenizi mi unuttunuz?",
  "From Address": "Gönderen Adresi",
  "From Name": "Gönderen Adı",
  "Global Settings": "Genel Ayarlar",
  "Google ReCaptcha Site Key": "Google ReCaptcha Site Anahtarı",
  ID: ID$1,
  "Invite Workspace": "Çalışma Alanına Davet Et",
  "Invite Workspace members": "Çalışma alanı üyelerini davet et",
  Label: Label$1,
  Labels: Labels$1,
  Language: Language$1,
  "Language Name": "Dil Adı",
  "Last Response Time": "Son Yanıt Süresi",
  "Last name": "Soyadı",
  List: List$1,
  Login: Login$1,
  Logout: Logout$1,
  "Mail Encryption": "Posta Şifreleme",
  "Make Cover": "Kapak Yap",
  Member: Member$1,
  Members: Members$1,
  Memo: Memo$1,
  Menu: Menu$1,
  Move: Move$1,
  "Move Card": "Kartı Taşı",
  "Move Left": "Sola Taşı",
  "Move Right": "Sağa Taşı",
  "Move Task": "Görevi Taşı",
  "My Tasks": "Görevlerim",
  "My Workspaces": "Çalışma Alanlarım",
  Name: Name$1,
  "New Tickets": "Yeni Biletler",
  "No dates": "Tarih yok",
  "No item found!": "Öğe bulunamadı!",
  "No labels found.": "Etiket bulunamadı.",
  "No list found!": "Liste bulunamadı!",
  "No members": "Üye yok",
  "No task found!": "Görev bulunamadı!",
  "No time log found.": "Zaman kaydı bulunamadı.",
  "No workspace found": "Çalışma alanı bulunamadı",
  Open: Open$1,
  "Open Tickets": "Açık Biletler",
  Overdue: Overdue$1,
  Password: Password$1,
  Phone: Phone$1,
  Photo: Photo$1,
  Position: Position$1,
  "Pre made list": "Hazır liste",
  Project: Project$1,
  "Project Details": "Proje Detayları",
  "Project name": "Proje adı",
  Projects: Projects$1,
  "Recently Viewed": "Son Görüntülenenler",
  Register: Register$1,
  Registration: Registration$1,
  Remove: Remove$1,
  "Remove Cover": "Kapağı Kaldır",
  Reset: Reset$1,
  "Reset Password": "Şifreyi Sıfırla",
  "Revert Back": "Geri Al",
  Role: Role$1,
  "SMTP Host": "SMTP Sunucusu",
  "SMTP Password": "SMTP Şifresi",
  "SMTP Port": "SMTP Portu",
  "SMTP Username": "SMTP Kullanıcı Adı",
  START: START$1,
  STOP: STOP$1,
  Save: Save$1,
  "Search User": "Kullanıcı Ara",
  "Search labels": "Etiket ara",
  "Search...": "Ara...",
  "Select a color": "Bir renk seçin",
  "Select a destination": "Bir hedef seçin",
  "Select a workspace": "Bir çalışma alanı seçin",
  "Send Password Reset Link": "Şifre Sıfırlama Bağlantısı Gönder",
  "Send to board": "Panoya gönder",
  "Show Registration link on the login page": "Giriş sayfasında kayıt bağlantısını göster",
  "Slack Notifications": "Slack Bildirimleri",
  "Slack webhook URL": "Slack webhook URL'si",
  Slug: Slug$1,
  Starred: Starred$1,
  Started: Started$1,
  Stopped: Stopped$1,
  Submit: Submit$1,
  Task: Task$1,
  "Tasks assigned to me": "Bana atanan görevler",
  "Team Members": "Takım Üyeleri",
  Template: Template$1,
  "This task is archived.": "Bu görev arşivlenmiştir.",
  "Ticket by department": "Departmana göre bilet",
  "Ticket by type": "Türe göre bilet",
  "Ticket history": "Bilet geçmişi",
  "Time Count": "Zaman Sayacı",
  Title: Title$1,
  "To tasks found!": "Görevler bulundu!",
  "Top ticket creator": "En çok bilet oluşturan",
  "Total duration": "Toplam süre",
  "Unassigned Tickets": "Atanmamış Biletler",
  Update: Update$1,
  "Update User": "Kullanıcıyı Güncelle",
  User: User$1,
  Users: Users$1,
  "Visible tasks only for the assigned people.": "Yalnızca atanan kişiler için görünür görevler.",
  Website: Website$1,
  Workspace: Workspace$1,
  "Workspace Description": "Çalışma Alanı Açıklaması",
  "Workspace Tasks": "Çalışma Alanı Görevleri",
  "Workspace Type": "Çalışma Alanı Türü",
  "Workspace name": "Çalışma alanı adı",
  "Write a comment...": "Bir yorum yazın...",
  "last month": "geçen ay",
  optional: optional$1,
  "this month": "bu ay"
};
const __vite_glob_1_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action: Action$1,
  Activities: Activities$1,
  Address: Address$1,
  Archive: Archive$1,
  Assignee: Assignee$1,
  Assignees: Assignees$1,
  Attachment: Attachment$1,
  Attachments: Attachments$1,
  Average: Average$1,
  Background: Background$1,
  Cancel: Cancel$1,
  Checklist: Checklist$1,
  Code: Code$1,
  Contacts: Contacts$1,
  Create: Create$1,
  Customers: Customers$1,
  Dashboard: Dashboard$1,
  Delete: Delete$1,
  Description: Description$1,
  Details: Details$1,
  Duration: Duration$1,
  Edit: Edit$1,
  Email: Email$1,
  Favorites: Favorites$1,
  Filter: Filter$1,
  ID: ID$1,
  Label: Label$1,
  Labels: Labels$1,
  Language: Language$1,
  List: List$1,
  Login: Login$1,
  Logout: Logout$1,
  Member: Member$1,
  Members: Members$1,
  Memo: Memo$1,
  Menu: Menu$1,
  Move: Move$1,
  Name: Name$1,
  Open: Open$1,
  Overdue: Overdue$1,
  Password: Password$1,
  Phone: Phone$1,
  Photo: Photo$1,
  Position: Position$1,
  Project: Project$1,
  Projects: Projects$1,
  Register: Register$1,
  Registration: Registration$1,
  Remove: Remove$1,
  Reset: Reset$1,
  Role: Role$1,
  START: START$1,
  STOP: STOP$1,
  Save: Save$1,
  Slug: Slug$1,
  Starred: Starred$1,
  Started: Started$1,
  Stopped: Stopped$1,
  Submit: Submit$1,
  Task: Task$1,
  Template: Template$1,
  Title: Title$1,
  Update: Update$1,
  User: User$1,
  Users: Users$1,
  Website: Website$1,
  Workspace: Workspace$1,
  default: tr,
  optional: optional$1
}, Symbol.toStringTag, { value: "Module" }));
const Action = "Hành động";
const Activities = "Hoạt động";
const Address = "Địa chỉ";
const Archive = "Lưu trữ";
const Assignee = "Người được giao";
const Assignees = "Những người được giao";
const Attachment = "Tệp đính kèm";
const Attachments = "Các tệp đính kèm";
const Average = "Trung bình";
const Background = "Nền";
const Cancel = "Hủy";
const Checklist = "Danh sách kiểm tra";
const Code = "Mã";
const Contacts = "Danh bạ";
const Create = "Tạo";
const Customers = "Khách hàng";
const Dashboard = "Bảng điều khiển";
const Delete = "Xóa";
const Description = "Mô tả";
const Details = "Chi tiết";
const Duration = "Thời lượng";
const Edit = "Chỉnh sửa";
const Email = "Email";
const Favorites = "Yêu thích";
const Filter = "Bộ lọc";
const ID = "ID";
const Label = "Nhãn";
const Labels = "Các nhãn";
const Language = "Ngôn ngữ";
const List = "Danh sách";
const Login = "Đăng nhập";
const Logout = "Đăng xuất";
const Member = "Thành viên";
const Members = "Các thành viên";
const Memo = "Ghi nhớ";
const Menu = "Menu";
const Move = "Di chuyển";
const Name = "Tên";
const Open = "Mở";
const Overdue = "Quá hạn";
const Password = "Mật khẩu";
const Phone = "Điện thoại";
const Photo = "Ảnh";
const Position = "Vị trí";
const Project = "Dự án";
const Projects = "Các dự án";
const Register = "Đăng ký";
const Registration = "Đăng ký";
const Remove = "Xóa bỏ";
const Reset = "Đặt lại";
const Role = "Vai trò";
const START = "BẮT ĐẦU";
const STOP = "DỪNG";
const Save = "Lưu";
const Slug = "Slug";
const Starred = "Được gắn dấu sao";
const Started = "Đã bắt đầu";
const Stopped = "Đã dừng";
const Submit = "Gửi";
const Task = "Công việc";
const Template = "Mẫu";
const Title = "Tiêu đề";
const Update = "Cập nhật";
const User = "Người dùng";
const Users = "Những người dùng";
const Website = "Trang web";
const Workspace = "Không gian làm việc";
const optional = "tùy chọn";
const vi = {
  Action,
  Activities,
  "Add New": "Thêm Mới",
  "Add Time": "Thêm Thời gian",
  "Add a new item": "Thêm một mục mới",
  "Add a new list": "Thêm một danh sách mới",
  "Add a task": "Thêm một công việc",
  "Add task": "Thêm công việc",
  "Add time manually": "Thêm thời gian thủ công",
  Address,
  "Allowed File Types": "Các loại tệp được phép",
  "App Name": "Tên ứng dụng",
  Archive,
  "Archived Board Items": "Các mục trên bảng đã lưu trữ",
  "Archived Tasks": "Các công việc đã lưu trữ",
  Assignee,
  Assignees,
  Attachment,
  Attachments,
  Average,
  Background,
  Cancel,
  "Change Background": "Thay đổi nền",
  "Change Task Visibility": "Thay đổi khả năng hiển thị công việc",
  "Change Workspace": "Thay đổi không gian làm việc",
  "Check Update": "Kiểm tra cập nhật",
  Checklist,
  "Clear All": "Xóa tất cả",
  "Click to rename project": "Nhấp để đổi tên dự án",
  "Closed Tickets": "Các phiếu đã đóng",
  Code,
  "Confirm Password": "Xác nhận mật khẩu",
  Contacts,
  Create,
  "Create New": "Tạo Mới",
  "Create Project": "Tạo Dự án",
  "Create Role": "Tạo Vai trò",
  "Create Workspace": "Tạo Không gian làm việc",
  "Create Workspace Type": "Tạo loại không gian làm việc",
  "Create a New Role": "Tạo một vai trò mới",
  "Create a new Workspace type": "Tạo một loại không gian làm việc mới",
  "Create a new label": "Tạo một nhãn mới",
  "Create workspace": "Tạo không gian làm việc",
  "Created At": "Tạo lúc",
  "Cron Job Instruction": "Hướng dẫn Cron Job",
  "Custom CSS": "CSS tùy chỉnh",
  Customers,
  Dashboard,
  "Default Language": "Ngôn ngữ mặc định",
  Delete,
  "Delete Project": "Xóa Dự án",
  "Delete User": "Xóa người dùng",
  Description,
  Details,
  "Due Date": "Ngày hết hạn",
  "Due in the next day": "Hết hạn vào ngày mai",
  Duration,
  Edit,
  "Edit Labels": "Chỉnh sửa nhãn",
  "Edit Profile": "Chỉnh sửa hồ sơ",
  Email,
  "Email Address": "Địa chỉ Email",
  "Email Html": "Email Html",
  "Email Notifications": "Thông báo qua Email",
  "Enable Registration": "Bật đăng ký",
  "Enable pre made board list": "Bật danh sách bảng tạo sẵn",
  "Enabling this the tasks will be visible only for the admin and assigned people": "Bật tính năng này, các công việc sẽ chỉ hiển thị cho quản trị viên và những người được giao",
  "Enter a title for this task": "Nhập tiêu đề cho công việc này",
  "Export tasks as CSV": "Xuất công việc dưới dạng CSV",
  "Export tasks as Excel": "Xuất công việc dưới dạng Excel",
  Favorites,
  Filter,
  "Filter by role": "Lọc theo vai trò",
  "Find tasks or projects": "Tìm công việc hoặc dự án",
  "First Response Time": "Thời gian phản hồi đầu tiên",
  "First name": "Tên",
  "Forgot your password?": "Quên mật khẩu?",
  "From Address": "Địa chỉ gửi",
  "From Name": "Tên người gửi",
  "Global Settings": "Cài đặt chung",
  "Google ReCaptcha Site Key": "Khóa trang web Google ReCaptcha",
  ID,
  "Invite Workspace": "Mời vào không gian làm việc",
  "Invite Workspace members": "Mời thành viên vào không gian làm việc",
  Label,
  Labels,
  Language,
  "Language Name": "Tên ngôn ngữ",
  "Last Response Time": "Thời gian phản hồi cuối cùng",
  "Last name": "Họ",
  List,
  Login,
  Logout,
  "Mail Encryption": "Mã hóa thư",
  "Make Cover": "Đặt làm ảnh bìa",
  Member,
  Members,
  Memo,
  Menu,
  Move,
  "Move Card": "Di chuyển thẻ",
  "Move Left": "Di chuyển sang trái",
  "Move Right": "Di chuyển sang phải",
  "Move Task": "Di chuyển công việc",
  "My Tasks": "Công việc của tôi",
  "My Workspaces": "Không gian làm việc của tôi",
  Name,
  "New Tickets": "Phiếu mới",
  "No dates": "Không có ngày",
  "No item found!": "Không tìm thấy mục nào!",
  "No labels found.": "Không tìm thấy nhãn nào.",
  "No list found!": "Không tìm thấy danh sách nào!",
  "No members": "Không có thành viên",
  "No task found!": "Không tìm thấy công việc nào!",
  "No time log found.": "Không tìm thấy nhật ký thời gian.",
  "No workspace found": "Không tìm thấy không gian làm việc",
  Open,
  "Open Tickets": "Các phiếu đang mở",
  Overdue,
  Password,
  Phone,
  Photo,
  Position,
  "Pre made list": "Danh sách tạo sẵn",
  Project,
  "Project Details": "Chi tiết dự án",
  "Project name": "Tên dự án",
  Projects,
  "Recently Viewed": "Đã xem gần đây",
  Register,
  Registration,
  Remove,
  "Remove Cover": "Xóa ảnh bìa",
  Reset,
  "Reset Password": "Đặt lại mật khẩu",
  "Revert Back": "Hoàn tác",
  Role,
  "SMTP Host": "Máy chủ SMTP",
  "SMTP Password": "Mật khẩu SMTP",
  "SMTP Port": "Cổng SMTP",
  "SMTP Username": "Tên người dùng SMTP",
  START,
  STOP,
  Save,
  "Search User": "Tìm kiếm người dùng",
  "Search labels": "Tìm kiếm nhãn",
  "Search...": "Tìm kiếm...",
  "Select a color": "Chọn một màu",
  "Select a destination": "Chọn một đích đến",
  "Select a workspace": "Chọn một không gian làm việc",
  "Send Password Reset Link": "Gửi liên kết đặt lại mật khẩu",
  "Send to board": "Gửi đến bảng",
  "Show Registration link on the login page": "Hiển thị liên kết đăng ký trên trang đăng nhập",
  "Slack Notifications": "Thông báo Slack",
  "Slack webhook URL": "URL webhook của Slack",
  Slug,
  Starred,
  Started,
  Stopped,
  Submit,
  Task,
  "Tasks assigned to me": "Các công việc được giao cho tôi",
  "Team Members": "Thành viên nhóm",
  Template,
  "This task is archived.": "Công việc này đã được lưu trữ.",
  "Ticket by department": "Phiếu theo phòng ban",
  "Ticket by type": "Phiếu theo loại",
  "Ticket history": "Lịch sử phiếu",
  "Time Count": "Đếm thời gian",
  Title,
  "To tasks found!": "Đã tìm thấy công việc!",
  "Top ticket creator": "Người tạo phiếu hàng đầu",
  "Total duration": "Tổng thời lượng",
  "Unassigned Tickets": "Các phiếu chưa được giao",
  Update,
  "Update User": "Cập nhật người dùng",
  User,
  Users,
  "Visible tasks only for the assigned people.": "Các công việc chỉ hiển thị cho những người được giao.",
  Website,
  Workspace,
  "Workspace Description": "Mô tả không gian làm việc",
  "Workspace Tasks": "Các công việc của không gian làm việc",
  "Workspace Type": "Loại không gian làm việc",
  "Workspace name": "Tên không gian làm việc",
  "Write a comment...": "Viết bình luận...",
  "last month": "tháng trước",
  optional,
  "this month": "tháng này"
};
const __vite_glob_1_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Action,
  Activities,
  Address,
  Archive,
  Assignee,
  Assignees,
  Attachment,
  Attachments,
  Average,
  Background,
  Cancel,
  Checklist,
  Code,
  Contacts,
  Create,
  Customers,
  Dashboard,
  Delete,
  Description,
  Details,
  Duration,
  Edit,
  Email,
  Favorites,
  Filter,
  ID,
  Label,
  Labels,
  Language,
  List,
  Login,
  Logout,
  Member,
  Members,
  Memo,
  Menu,
  Move,
  Name,
  Open,
  Overdue,
  Password,
  Phone,
  Photo,
  Position,
  Project,
  Projects,
  Register,
  Registration,
  Remove,
  Reset,
  Role,
  START,
  STOP,
  Save,
  Slug,
  Starred,
  Started,
  Stopped,
  Submit,
  Task,
  Template,
  Title,
  Update,
  User,
  Users,
  Website,
  Workspace,
  default: vi,
  optional
}, Symbol.toStringTag, { value: "Module" }));
async function resolvePageComponent(path, pages) {
  for (const p2 of Array.isArray(path) ? path : [path]) {
    const page = pages[p2];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
function t() {
  return t = Object.assign ? Object.assign.bind() : function(t3) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var o2 = arguments[e2];
      for (var n2 in o2)
        ({}).hasOwnProperty.call(o2, n2) && (t3[n2] = o2[n2]);
    }
    return t3;
  }, t.apply(null, arguments);
}
const e = String.prototype.replace, o = /%20/g, n = { RFC1738: function(t3) {
  return e.call(t3, o, "+");
}, RFC3986: function(t3) {
  return String(t3);
} };
var r = "RFC3986";
const i = Object.prototype.hasOwnProperty, s = Array.isArray, u = function() {
  const t3 = [];
  for (let e2 = 0; e2 < 256; ++e2)
    t3.push("%" + ((e2 < 16 ? "0" : "") + e2.toString(16)).toUpperCase());
  return t3;
}(), l = function t2(e2, o2, n2) {
  if (!o2)
    return e2;
  if ("object" != typeof o2) {
    if (s(e2))
      e2.push(o2);
    else {
      if (!e2 || "object" != typeof e2)
        return [e2, o2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !i.call(Object.prototype, o2)) && (e2[o2] = true);
    }
    return e2;
  }
  if (!e2 || "object" != typeof e2)
    return [e2].concat(o2);
  let r2 = e2;
  return s(e2) && !s(o2) && (r2 = function(t3, e3) {
    const o3 = e3 && e3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
    for (let e4 = 0; e4 < t3.length; ++e4)
      void 0 !== t3[e4] && (o3[e4] = t3[e4]);
    return o3;
  }(e2, n2)), s(e2) && s(o2) ? (o2.forEach(function(o3, r3) {
    if (i.call(e2, r3)) {
      const i2 = e2[r3];
      i2 && "object" == typeof i2 && o3 && "object" == typeof o3 ? e2[r3] = t2(i2, o3, n2) : e2.push(o3);
    } else
      e2[r3] = o3;
  }), e2) : Object.keys(o2).reduce(function(e3, r3) {
    const s2 = o2[r3];
    return e3[r3] = i.call(e3, r3) ? t2(e3[r3], s2, n2) : s2, e3;
  }, r2);
}, c = 1024, a = function(t3, e2) {
  return [].concat(t3, e2);
}, f = function(t3, e2) {
  if (s(t3)) {
    const o2 = [];
    for (let n2 = 0; n2 < t3.length; n2 += 1)
      o2.push(e2(t3[n2]));
    return o2;
  }
  return e2(t3);
}, p = Object.prototype.hasOwnProperty, y = { brackets: function(t3) {
  return t3 + "[]";
}, comma: "comma", indices: function(t3, e2) {
  return t3 + "[" + e2 + "]";
}, repeat: function(t3) {
  return t3;
} }, d = Array.isArray, h = Array.prototype.push, b = function(t3, e2) {
  h.apply(t3, d(e2) ? e2 : [e2]);
}, m = Date.prototype.toISOString, g = { addQueryPrefix: false, allowDots: false, allowEmptyArrays: false, arrayFormat: "indices", charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encodeDotInKeys: false, encoder: function(t3, e2, o2, n2, r2) {
  if (0 === t3.length)
    return t3;
  let i2 = t3;
  if ("symbol" == typeof t3 ? i2 = Symbol.prototype.toString.call(t3) : "string" != typeof t3 && (i2 = String(t3)), "iso-8859-1" === o2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t4) {
      return "%26%23" + parseInt(t4.slice(2), 16) + "%3B";
    });
  let s2 = "";
  for (let t4 = 0; t4 < i2.length; t4 += c) {
    const e3 = i2.length >= c ? i2.slice(t4, t4 + c) : i2, o3 = [];
    for (let t5 = 0; t5 < e3.length; ++t5) {
      let n3 = e3.charCodeAt(t5);
      45 === n3 || 46 === n3 || 95 === n3 || 126 === n3 || n3 >= 48 && n3 <= 57 || n3 >= 65 && n3 <= 90 || n3 >= 97 && n3 <= 122 || "RFC1738" === r2 && (40 === n3 || 41 === n3) ? o3[o3.length] = e3.charAt(t5) : n3 < 128 ? o3[o3.length] = u[n3] : n3 < 2048 ? o3[o3.length] = u[192 | n3 >> 6] + u[128 | 63 & n3] : n3 < 55296 || n3 >= 57344 ? o3[o3.length] = u[224 | n3 >> 12] + u[128 | n3 >> 6 & 63] + u[128 | 63 & n3] : (t5 += 1, n3 = 65536 + ((1023 & n3) << 10 | 1023 & e3.charCodeAt(t5)), o3[o3.length] = u[240 | n3 >> 18] + u[128 | n3 >> 12 & 63] + u[128 | n3 >> 6 & 63] + u[128 | 63 & n3]);
    }
    s2 += o3.join("");
  }
  return s2;
}, encodeValuesOnly: false, format: r, formatter: n[r], indices: false, serializeDate: function(t3) {
  return m.call(t3);
}, skipNulls: false, strictNullHandling: false }, w = {}, v = function(t3, e2, o2, n2, r2, i2, s2, u2, l2, c2, a2, p2, y2, h2, m2, j2, $2, E2) {
  let O2 = t3, T2 = E2, R2 = 0, S2 = false;
  for (; void 0 !== (T2 = T2.get(w)) && !S2; ) {
    const e3 = T2.get(t3);
    if (R2 += 1, void 0 !== e3) {
      if (e3 === R2)
        throw new RangeError("Cyclic object value");
      S2 = true;
    }
    void 0 === T2.get(w) && (R2 = 0);
  }
  if ("function" == typeof c2 ? O2 = c2(e2, O2) : O2 instanceof Date ? O2 = y2(O2) : "comma" === o2 && d(O2) && (O2 = f(O2, function(t4) {
    return t4 instanceof Date ? y2(t4) : t4;
  })), null === O2) {
    if (i2)
      return l2 && !j2 ? l2(e2, g.encoder, $2, "key", h2) : e2;
    O2 = "";
  }
  if ("string" == typeof (I2 = O2) || "number" == typeof I2 || "boolean" == typeof I2 || "symbol" == typeof I2 || "bigint" == typeof I2 || function(t4) {
    return !(!t4 || "object" != typeof t4 || !(t4.constructor && t4.constructor.isBuffer && t4.constructor.isBuffer(t4)));
  }(O2))
    return l2 ? [m2(j2 ? e2 : l2(e2, g.encoder, $2, "key", h2)) + "=" + m2(l2(O2, g.encoder, $2, "value", h2))] : [m2(e2) + "=" + m2(String(O2))];
  var I2;
  const A2 = [];
  if (void 0 === O2)
    return A2;
  let D2;
  if ("comma" === o2 && d(O2))
    j2 && l2 && (O2 = f(O2, l2)), D2 = [{ value: O2.length > 0 ? O2.join(",") || null : void 0 }];
  else if (d(c2))
    D2 = c2;
  else {
    const t4 = Object.keys(O2);
    D2 = a2 ? t4.sort(a2) : t4;
  }
  const _2 = u2 ? e2.replace(/\./g, "%2E") : e2, k = n2 && d(O2) && 1 === O2.length ? _2 + "[]" : _2;
  if (r2 && d(O2) && 0 === O2.length)
    return k + "[]";
  for (let e3 = 0; e3 < D2.length; ++e3) {
    const f2 = D2[e3], g2 = "object" == typeof f2 && void 0 !== f2.value ? f2.value : O2[f2];
    if (s2 && null === g2)
      continue;
    const T3 = p2 && u2 ? f2.replace(/\./g, "%2E") : f2, S3 = d(O2) ? "function" == typeof o2 ? o2(k, T3) : k : k + (p2 ? "." + T3 : "[" + T3 + "]");
    E2.set(t3, R2);
    const I3 = /* @__PURE__ */ new WeakMap();
    I3.set(w, E2), b(A2, v(g2, S3, o2, n2, r2, i2, s2, u2, "comma" === o2 && j2 && d(O2) ? null : l2, c2, a2, p2, y2, h2, m2, j2, $2, I3));
  }
  return A2;
}, j = Object.prototype.hasOwnProperty, $ = Array.isArray, E = { allowDots: false, allowEmptyArrays: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decodeDotInKeys: false, decoder: function(t3, e2, o2) {
  const n2 = t3.replace(/\+/g, " ");
  if ("iso-8859-1" === o2)
    return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t4) {
    return n2;
  }
}, delimiter: "&", depth: 5, duplicates: "combine", ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, O = function(t3) {
  return t3.replace(/&#(\d+);/g, function(t4, e2) {
    return String.fromCharCode(parseInt(e2, 10));
  });
}, T = function(t3, e2) {
  return t3 && "string" == typeof t3 && e2.comma && t3.indexOf(",") > -1 ? t3.split(",") : t3;
}, R = function(t3, e2, o2, n2) {
  if (!t3)
    return;
  const r2 = o2.allowDots ? t3.replace(/\.([^.[]+)/g, "[$1]") : t3, i2 = /(\[[^[\]]*])/g;
  let s2 = o2.depth > 0 && /(\[[^[\]]*])/.exec(r2);
  const u2 = s2 ? r2.slice(0, s2.index) : r2, l2 = [];
  if (u2) {
    if (!o2.plainObjects && j.call(Object.prototype, u2) && !o2.allowPrototypes)
      return;
    l2.push(u2);
  }
  let c2 = 0;
  for (; o2.depth > 0 && null !== (s2 = i2.exec(r2)) && c2 < o2.depth; ) {
    if (c2 += 1, !o2.plainObjects && j.call(Object.prototype, s2[1].slice(1, -1)) && !o2.allowPrototypes)
      return;
    l2.push(s2[1]);
  }
  return s2 && l2.push("[" + r2.slice(s2.index) + "]"), function(t4, e3, o3, n3) {
    let r3 = n3 ? e3 : T(e3, o3);
    for (let e4 = t4.length - 1; e4 >= 0; --e4) {
      let n4;
      const i3 = t4[e4];
      if ("[]" === i3 && o3.parseArrays)
        n4 = o3.allowEmptyArrays && "" === r3 ? [] : [].concat(r3);
      else {
        n4 = o3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
        const t5 = "[" === i3.charAt(0) && "]" === i3.charAt(i3.length - 1) ? i3.slice(1, -1) : i3, e5 = o3.decodeDotInKeys ? t5.replace(/%2E/g, ".") : t5, s3 = parseInt(e5, 10);
        o3.parseArrays || "" !== e5 ? !isNaN(s3) && i3 !== e5 && String(s3) === e5 && s3 >= 0 && o3.parseArrays && s3 <= o3.arrayLimit ? (n4 = [], n4[s3] = r3) : "__proto__" !== e5 && (n4[e5] = r3) : n4 = { 0: r3 };
      }
      r3 = n4;
    }
    return r3;
  }(l2, e2, o2, n2);
};
function S(t3, e2) {
  const o2 = /* @__PURE__ */ function(t4) {
    return E;
  }();
  if ("" === t3 || null == t3)
    return o2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  const n2 = "string" == typeof t3 ? function(t4, e3) {
    const o3 = { __proto__: null }, n3 = (e3.ignoreQueryPrefix ? t4.replace(/^\?/, "") : t4).split(e3.delimiter, Infinity === e3.parameterLimit ? void 0 : e3.parameterLimit);
    let r3, i3 = -1, s2 = e3.charset;
    if (e3.charsetSentinel)
      for (r3 = 0; r3 < n3.length; ++r3)
        0 === n3[r3].indexOf("utf8=") && ("utf8=%E2%9C%93" === n3[r3] ? s2 = "utf-8" : "utf8=%26%2310003%3B" === n3[r3] && (s2 = "iso-8859-1"), i3 = r3, r3 = n3.length);
    for (r3 = 0; r3 < n3.length; ++r3) {
      if (r3 === i3)
        continue;
      const t5 = n3[r3], u2 = t5.indexOf("]="), l2 = -1 === u2 ? t5.indexOf("=") : u2 + 1;
      let c2, p2;
      -1 === l2 ? (c2 = e3.decoder(t5, E.decoder, s2, "key"), p2 = e3.strictNullHandling ? null : "") : (c2 = e3.decoder(t5.slice(0, l2), E.decoder, s2, "key"), p2 = f(T(t5.slice(l2 + 1), e3), function(t6) {
        return e3.decoder(t6, E.decoder, s2, "value");
      })), p2 && e3.interpretNumericEntities && "iso-8859-1" === s2 && (p2 = O(p2)), t5.indexOf("[]=") > -1 && (p2 = $(p2) ? [p2] : p2);
      const y2 = j.call(o3, c2);
      y2 && "combine" === e3.duplicates ? o3[c2] = a(o3[c2], p2) : y2 && "last" !== e3.duplicates || (o3[c2] = p2);
    }
    return o3;
  }(t3, o2) : t3;
  let r2 = o2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  const i2 = Object.keys(n2);
  for (let e3 = 0; e3 < i2.length; ++e3) {
    const s2 = i2[e3], u2 = R(s2, n2[s2], o2, "string" == typeof t3);
    r2 = l(r2, u2, o2);
  }
  return true === o2.allowSparse ? r2 : function(t4) {
    const e3 = [{ obj: { o: t4 }, prop: "o" }], o3 = [];
    for (let t5 = 0; t5 < e3.length; ++t5) {
      const n3 = e3[t5], r3 = n3.obj[n3.prop], i3 = Object.keys(r3);
      for (let t6 = 0; t6 < i3.length; ++t6) {
        const n4 = i3[t6], s2 = r3[n4];
        "object" == typeof s2 && null !== s2 && -1 === o3.indexOf(s2) && (e3.push({ obj: r3, prop: n4 }), o3.push(s2));
      }
    }
    return function(t5) {
      for (; t5.length > 1; ) {
        const e4 = t5.pop(), o4 = e4.obj[e4.prop];
        if (s(o4)) {
          const t6 = [];
          for (let e5 = 0; e5 < o4.length; ++e5)
            void 0 !== o4[e5] && t6.push(o4[e5]);
          e4.obj[e4.prop] = t6;
        }
      }
    }(e3), t4;
  }(r2);
}
class I {
  constructor(t3, e2, o2) {
    var n2, r2;
    this.name = t3, this.definition = e2, this.bindings = null != (n2 = e2.bindings) ? n2 : {}, this.wheres = null != (r2 = e2.wheres) ? r2 : {}, this.config = o2;
  }
  get template() {
    const t3 = `${this.origin}/${this.definition.uri}`.replace(/\/+$/, "");
    return "" === t3 ? "/" : t3;
  }
  get origin() {
    return this.config.absolute ? this.definition.domain ? `${this.config.url.match(/^\w+:\/\//)[0]}${this.definition.domain}${this.config.port ? `:${this.config.port}` : ""}` : this.config.url : "";
  }
  get parameterSegments() {
    var t3, e2;
    return null != (t3 = null == (e2 = this.template.match(/{[^}?]+\??}/g)) ? void 0 : e2.map((t4) => ({ name: t4.replace(/{|\??}/g, ""), required: !/\?}$/.test(t4) }))) ? t3 : [];
  }
  matchesUrl(t3) {
    var e2;
    if (!this.definition.methods.includes("GET"))
      return false;
    const o2 = this.template.replace(/[.*+$()[\]]/g, "\\$&").replace(/(\/?){([^}?]*)(\??)}/g, (t4, e3, o3, n3) => {
      var r3;
      const i3 = `(?<${o3}>${(null == (r3 = this.wheres[o3]) ? void 0 : r3.replace(/(^\^)|(\$$)/g, "")) || "[^/?]+"})`;
      return n3 ? `(${e3}${i3})?` : `${e3}${i3}`;
    }).replace(/^\w+:\/\//, ""), [n2, r2] = t3.replace(/^\w+:\/\//, "").split("?"), i2 = null != (e2 = new RegExp(`^${o2}/?$`).exec(n2)) ? e2 : new RegExp(`^${o2}/?$`).exec(decodeURI(n2));
    if (i2) {
      for (const t4 in i2.groups)
        i2.groups[t4] = "string" == typeof i2.groups[t4] ? decodeURIComponent(i2.groups[t4]) : i2.groups[t4];
      return { params: i2.groups, query: S(r2) };
    }
    return false;
  }
  compile(t3) {
    return this.parameterSegments.length ? this.template.replace(/{([^}?]+)(\??)}/g, (e2, o2, n2) => {
      var r2, i2;
      if (!n2 && [null, void 0].includes(t3[o2]))
        throw new Error(`Ziggy error: '${o2}' parameter is required for route '${this.name}'.`);
      if (this.wheres[o2] && !new RegExp(`^${n2 ? `(${this.wheres[o2]})?` : this.wheres[o2]}$`).test(null != (i2 = t3[o2]) ? i2 : ""))
        throw new Error(`Ziggy error: '${o2}' parameter '${t3[o2]}' does not match required format '${this.wheres[o2]}' for route '${this.name}'.`);
      return encodeURI(null != (r2 = t3[o2]) ? r2 : "").replace(/%7C/g, "|").replace(/%25/g, "%").replace(/\$/g, "%24");
    }).replace(this.config.absolute ? /(\.[^/]+?)(\/\/)/ : /(^)(\/\/)/, "$1/").replace(/\/+$/, "") : this.template;
  }
}
class A extends String {
  constructor(e2, o2, n2 = true, r2) {
    if (super(), this.t = null != r2 ? r2 : "undefined" != typeof Ziggy ? Ziggy : null == globalThis ? void 0 : globalThis.Ziggy, !this.t && "undefined" != typeof document && document.getElementById("ziggy-routes-json") && (globalThis.Ziggy = JSON.parse(document.getElementById("ziggy-routes-json").textContent), this.t = globalThis.Ziggy), this.t = t({}, this.t, { absolute: n2 }), e2) {
      if (!this.t.routes[e2])
        throw new Error(`Ziggy error: route '${e2}' is not in the route list.`);
      this.i = new I(e2, this.t.routes[e2], this.t), this.u = this.l(o2);
    }
  }
  toString() {
    const e2 = Object.keys(this.u).filter((t3) => !this.i.parameterSegments.some(({ name: e3 }) => e3 === t3)).filter((t3) => "_query" !== t3).reduce((e3, o2) => t({}, e3, { [o2]: this.u[o2] }), {});
    return this.i.compile(this.u) + function(t3, e3) {
      let o2 = t3;
      const i2 = function(t4) {
        if (!t4)
          return g;
        if (void 0 !== t4.allowEmptyArrays && "boolean" != typeof t4.allowEmptyArrays)
          throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
        if (void 0 !== t4.encodeDotInKeys && "boolean" != typeof t4.encodeDotInKeys)
          throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
        if (null != t4.encoder && "function" != typeof t4.encoder)
          throw new TypeError("Encoder has to be a function.");
        const e4 = t4.charset || g.charset;
        if (void 0 !== t4.charset && "utf-8" !== t4.charset && "iso-8859-1" !== t4.charset)
          throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        let o3 = r;
        if (void 0 !== t4.format) {
          if (!p.call(n, t4.format))
            throw new TypeError("Unknown format option provided.");
          o3 = t4.format;
        }
        const i3 = n[o3];
        let s3, u3 = g.filter;
        if (("function" == typeof t4.filter || d(t4.filter)) && (u3 = t4.filter), s3 = t4.arrayFormat in y ? t4.arrayFormat : "indices" in t4 ? t4.indices ? "indices" : "repeat" : g.arrayFormat, "commaRoundTrip" in t4 && "boolean" != typeof t4.commaRoundTrip)
          throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        return { addQueryPrefix: "boolean" == typeof t4.addQueryPrefix ? t4.addQueryPrefix : g.addQueryPrefix, allowDots: void 0 === t4.allowDots ? true === t4.encodeDotInKeys || g.allowDots : !!t4.allowDots, allowEmptyArrays: "boolean" == typeof t4.allowEmptyArrays ? !!t4.allowEmptyArrays : g.allowEmptyArrays, arrayFormat: s3, charset: e4, charsetSentinel: "boolean" == typeof t4.charsetSentinel ? t4.charsetSentinel : g.charsetSentinel, commaRoundTrip: t4.commaRoundTrip, delimiter: void 0 === t4.delimiter ? g.delimiter : t4.delimiter, encode: "boolean" == typeof t4.encode ? t4.encode : g.encode, encodeDotInKeys: "boolean" == typeof t4.encodeDotInKeys ? t4.encodeDotInKeys : g.encodeDotInKeys, encoder: "function" == typeof t4.encoder ? t4.encoder : g.encoder, encodeValuesOnly: "boolean" == typeof t4.encodeValuesOnly ? t4.encodeValuesOnly : g.encodeValuesOnly, filter: u3, format: o3, formatter: i3, serializeDate: "function" == typeof t4.serializeDate ? t4.serializeDate : g.serializeDate, skipNulls: "boolean" == typeof t4.skipNulls ? t4.skipNulls : g.skipNulls, sort: "function" == typeof t4.sort ? t4.sort : null, strictNullHandling: "boolean" == typeof t4.strictNullHandling ? t4.strictNullHandling : g.strictNullHandling };
      }(e3);
      let s2, u2;
      "function" == typeof i2.filter ? (u2 = i2.filter, o2 = u2("", o2)) : d(i2.filter) && (u2 = i2.filter, s2 = u2);
      const l2 = [];
      if ("object" != typeof o2 || null === o2)
        return "";
      const c2 = y[i2.arrayFormat], a2 = "comma" === c2 && i2.commaRoundTrip;
      s2 || (s2 = Object.keys(o2)), i2.sort && s2.sort(i2.sort);
      const f2 = /* @__PURE__ */ new WeakMap();
      for (let t4 = 0; t4 < s2.length; ++t4) {
        const e4 = s2[t4];
        i2.skipNulls && null === o2[e4] || b(l2, v(o2[e4], e4, c2, a2, i2.allowEmptyArrays, i2.strictNullHandling, i2.skipNulls, i2.encodeDotInKeys, i2.encode ? i2.encoder : null, i2.filter, i2.sort, i2.allowDots, i2.serializeDate, i2.format, i2.formatter, i2.encodeValuesOnly, i2.charset, f2));
      }
      const h2 = l2.join(i2.delimiter);
      let m2 = true === i2.addQueryPrefix ? "?" : "";
      return i2.charsetSentinel && (m2 += "iso-8859-1" === i2.charset ? "utf8=%26%2310003%3B&" : "utf8=%E2%9C%93&"), h2.length > 0 ? m2 + h2 : "";
    }(t({}, e2, this.u._query), { addQueryPrefix: true, arrayFormat: "indices", encodeValuesOnly: true, skipNulls: true, encoder: (t3, e3) => "boolean" == typeof t3 ? Number(t3) : e3(t3) });
  }
  p(e2) {
    e2 ? this.t.absolute && e2.startsWith("/") && (e2 = this.h().host + e2) : e2 = this.m();
    let o2 = {};
    const [n2, r2] = Object.entries(this.t.routes).find(([t3, n3]) => o2 = new I(t3, n3, this.t).matchesUrl(e2)) || [void 0, void 0];
    return t({ name: n2 }, o2, { route: r2 });
  }
  m() {
    const { host: t3, pathname: e2, search: o2 } = this.h();
    return (this.t.absolute ? t3 + e2 : e2.replace(this.t.url.replace(/^\w*:\/\/[^/]+/, ""), "").replace(/^\/+/, "/")) + o2;
  }
  current(e2, o2) {
    const { name: n2, params: r2, query: i2, route: s2 } = this.p();
    if (!e2)
      return n2;
    const u2 = new RegExp(`^${e2.replace(/\./g, "\\.").replace(/\*/g, ".*")}$`).test(n2);
    if ([null, void 0].includes(o2) || !u2)
      return u2;
    const l2 = new I(n2, s2, this.t);
    o2 = this.l(o2, l2);
    const c2 = t({}, r2, i2);
    if (Object.values(o2).every((t3) => !t3) && !Object.values(c2).some((t3) => void 0 !== t3))
      return true;
    const a2 = (t3, e3) => Object.entries(t3).every(([t4, o3]) => Array.isArray(o3) && Array.isArray(e3[t4]) ? o3.every((o4) => e3[t4].includes(o4) || e3[t4].includes(decodeURIComponent(o4))) : "object" == typeof o3 && "object" == typeof e3[t4] && null !== o3 && null !== e3[t4] ? a2(o3, e3[t4]) : e3[t4] == o3 || e3[t4] == decodeURIComponent(o3));
    return a2(o2, c2);
  }
  h() {
    var t3, e2, o2, n2, r2, i2;
    const { host: s2 = "", pathname: u2 = "", search: l2 = "" } = "undefined" != typeof window ? window.location : {};
    return { host: null != (t3 = null == (e2 = this.t.location) ? void 0 : e2.host) ? t3 : s2, pathname: null != (o2 = null == (n2 = this.t.location) ? void 0 : n2.pathname) ? o2 : u2, search: null != (r2 = null == (i2 = this.t.location) ? void 0 : i2.search) ? r2 : l2 };
  }
  get params() {
    const { params: e2, query: o2 } = this.p();
    return t({}, e2, o2);
  }
  get routeParams() {
    return this.p().params;
  }
  get queryParams() {
    return this.p().query;
  }
  has(t3) {
    return this.t.routes.hasOwnProperty(t3);
  }
  l(e2 = {}, o2 = this.i) {
    null != e2 || (e2 = {}), e2 = ["string", "number"].includes(typeof e2) ? [e2] : e2;
    const n2 = o2.parameterSegments.filter(({ name: t3 }) => !this.t.defaults[t3]);
    return Array.isArray(e2) ? e2 = e2.reduce((e3, o3, r2) => t({}, e3, n2[r2] ? { [n2[r2].name]: o3 } : "object" == typeof o3 ? o3 : { [o3]: "" }), {}) : 1 !== n2.length || e2[n2[0].name] || !e2.hasOwnProperty(Object.values(o2.bindings)[0]) && !e2.hasOwnProperty("id") || (e2 = { [n2[0].name]: e2 }), t({}, this.v(o2), this.j(e2, o2));
  }
  v(e2) {
    return e2.parameterSegments.filter(({ name: t3 }) => this.t.defaults[t3]).reduce((e3, { name: o2 }, n2) => t({}, e3, { [o2]: this.t.defaults[o2] }), {});
  }
  j(e2, { bindings: o2, parameterSegments: n2 }) {
    return Object.entries(e2).reduce((e3, [r2, i2]) => {
      if (!i2 || "object" != typeof i2 || Array.isArray(i2) || !n2.some(({ name: t3 }) => t3 === r2))
        return t({}, e3, { [r2]: i2 });
      if (!i2.hasOwnProperty(o2[r2])) {
        if (!i2.hasOwnProperty("id"))
          throw new Error(`Ziggy error: object passed as '${r2}' parameter is missing route model binding key '${o2[r2]}'.`);
        o2[r2] = "id";
      }
      return t({}, e3, { [r2]: i2[o2[r2]] });
    }, {});
  }
  valueOf() {
    return this.toString();
  }
}
function D(t3, e2, o2, n2) {
  const r2 = new A(t3, e2, o2, n2);
  return t3 ? r2.toString() : r2;
}
const _ = { install(t3, e2) {
  const o2 = (t4, o3, n2, r2 = e2) => D(t4, o3, n2, r2);
  parseInt(t3.version) > 2 ? (t3.config.globalProperties.route = o2, t3.provide("route", o2)) : t3.mixin({ methods: { route: o2 } });
} };
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-Djt3kVck.js"), "./Pages/Auth/ForgotPasswordInput.vue": () => import("./assets/ForgotPasswordInput-Ctzj9z-P.js"), "./Pages/Auth/Login-last-backup.vue": () => import("./assets/Login-last-backup-YQUQKeHg.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-BT9mJTKj.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-BkaKBXSB.js"), "./Pages/Dashboard/Index.vue": () => import("./assets/Index-s26OK4an.js"), "./Pages/EmailTemplates/Edit.vue": () => import("./assets/Edit-W7LeM2YN.js"), "./Pages/EmailTemplates/Index.vue": () => import("./assets/Index-7g-dnOZQ.js"), "./Pages/Error.vue": () => import("./assets/Error-TMrBdlSY.js"), "./Pages/Installer/Steps/Admin.vue": () => import("./assets/Admin-DHhwY1zf.js"), "./Pages/Installer/Steps/Complete.vue": () => import("./assets/Complete-xOcC-bUe.js"), "./Pages/Installer/Steps/Database.vue": () => import("./assets/Database-DadVgG53.js"), "./Pages/Installer/Steps/Environment.vue": () => import("./assets/Environment-BEUPVY2z.js"), "./Pages/Installer/Steps/License.vue": () => import("./assets/License-Bawzyd4d.js"), "./Pages/Installer/Steps/Progress.vue": () => import("./assets/Progress-D4p3XS2W.js"), "./Pages/Installer/Steps/Welcome.vue": () => import("./assets/Welcome-BGMLeWHw.js"), "./Pages/Labels/Create.vue": () => import("./assets/Create-O4PDB5jL.js"), "./Pages/Labels/Edit.vue": () => import("./assets/Edit-CuwgTX0C.js"), "./Pages/Labels/Index.vue": () => import("./assets/Index-DuYo5H6G.js"), "./Pages/Languages/Create.vue": () => import("./assets/Create-DCEJNqdF.js"), "./Pages/Languages/Edit.vue": () => import("./assets/Edit-DIRpm5qz.js"), "./Pages/Languages/Index.vue": () => import("./assets/Index-C4coRNLH.js"), "./Pages/License/Activate.vue": () => import("./assets/Activate-OCZfXM7N.js"), "./Pages/License/Settings.vue": () => import("./assets/Settings-D5c7RZ6c.js"), "./Pages/Notifications/Index.vue": () => import("./assets/Index-bLxDYnhJ.js"), "./Pages/Projects/Calendar.vue": () => import("./assets/Calendar-C0JycOTC.js"), "./Pages/Projects/Calendar_Clean.vue": () => import("./assets/Calendar_Clean-B61gv3NW.js"), "./Pages/Projects/Dashboard.vue": () => import("./assets/Dashboard-B73fVo7A.js"), "./Pages/Projects/GanttChart.vue": () => import("./assets/GanttChart-BE8UZRuA.js"), "./Pages/Projects/Index.vue": () => import("./assets/Index-D4qrGkDY.js"), "./Pages/Projects/Na.vue": () => import("./assets/Na-SiRghESm.js"), "./Pages/Projects/Table.vue": () => import("./assets/Table--FsrJBZQ.js"), "./Pages/Projects/Timeline.vue": () => import("./assets/Timeline-CkcoD5OJ.js"), "./Pages/Projects/Timer.vue": () => import("./assets/Timer-BNWc3adi.js"), "./Pages/Projects/View.vue": () => import("./assets/View-C_34LC2b.js"), "./Pages/Roles/Create.vue": () => import("./assets/Create-DLAVYx_k.js"), "./Pages/Roles/Edit.vue": () => import("./assets/Edit-DTcAT11C.js"), "./Pages/Roles/Index.vue": () => import("./assets/Index-DySLxMTW.js"), "./Pages/Settings/Index.vue": () => import("./assets/Index-W9Pu5n_c.js"), "./Pages/Settings/Notification.vue": () => import("./assets/Notification-DqmA6pqG.js"), "./Pages/Settings/NotificationSettings.vue": () => import("./assets/NotificationSettings-fX91GQZb.js"), "./Pages/Settings/PreMadeList.vue": () => import("./assets/PreMadeList-vHP-bQn9.js"), "./Pages/Settings/Smtp.vue": () => import("./assets/Smtp-pMc0zD4E.js"), "./Pages/Settings/Update.vue": () => import("./assets/Update-B86jf7hp.js"), "./Pages/Users/Create.vue": () => import("./assets/Create-C7kLfp5v.js"), "./Pages/Users/Edit.vue": () => import("./assets/Edit-BKjO_Aif.js"), "./Pages/Users/EditProfile.vue": () => import("./assets/EditProfile-B9UBdQD2.js"), "./Pages/Users/Index.vue": () => import("./assets/Index-wd76J5tR.js"), "./Pages/WorkspaceTypes/Create.vue": () => import("./assets/Create-SOetQl7Q.js"), "./Pages/WorkspaceTypes/Edit.vue": () => import("./assets/Edit-CTPSahAW.js"), "./Pages/WorkspaceTypes/Index.vue": () => import("./assets/Index-CNaJVad6.js"), "./Pages/Workspaces/Board.vue": () => import("./assets/Board-CDq8hll-.js"), "./Pages/Workspaces/Calendar.vue": () => import("./assets/Calendar-DfjS0802.js"), "./Pages/Workspaces/Members.vue": () => import("./assets/Members-BGNVNV6K.js"), "./Pages/Workspaces/MyTasks.vue": () => import("./assets/MyTasks-BEmWD_zj.js"), "./Pages/Workspaces/MyTasksBoard.vue": () => import("./assets/MyTasksBoard-BWi_4b_x.js"), "./Pages/Workspaces/MyTasksCalendar.vue": () => import("./assets/MyTasksCalendar-DU7mj_-h.js"), "./Pages/Workspaces/MyTasksTimeline.vue": () => import("./assets/MyTasksTimeline-CdsCSCxi.js"), "./Pages/Workspaces/Table.vue": () => import("./assets/Table-DfO1ziZy.js"), "./Pages/Workspaces/Timeline.vue": () => import("./assets/Timeline-BdompwIL.js"), "./Pages/Workspaces/View.vue": () => import("./assets/View-D62sh_7v.js") })),
    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h$1(App, props) }).use(plugin).use(_, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      }).use(i18nVue, {
        lang: "pt",
        resolve: (lang) => {
          const langs = /* @__PURE__ */ Object.assign({ "../../lang/bd.json": __vite_glob_1_0, "../../lang/cn.json": __vite_glob_1_1, "../../lang/de.json": __vite_glob_1_2, "../../lang/en.json": __vite_glob_1_3, "../../lang/es.json": __vite_glob_1_4, "../../lang/extracted.json": __vite_glob_1_5, "../../lang/it.json": __vite_glob_1_6, "../../lang/nl.json": __vite_glob_1_7, "../../lang/php_en.json": __vite_glob_1_8, "../../lang/pt.json": __vite_glob_1_9, "../../lang/ro.json": __vite_glob_1_10, "../../lang/sa.json": __vite_glob_1_11, "../../lang/se.json": __vite_glob_1_12, "../../lang/tr.json": __vite_glob_1_13, "../../lang/vi.json": __vite_glob_1_14 });
          return langs[`../../lang/${lang}.json`].default;
        }
      });
    }
  })
);

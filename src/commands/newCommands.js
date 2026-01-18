const { Command } = require('commander');
const colors = require('../../utils/colors');

// أمر تحديث المشروع
const updateCommand = new Command('تحديث')
  .description('تحديث MarwanHub CLI لأحدث إصدار')
  .action(() => {
    console.log(colors.info(`
🔄 جاري تحديث MarwanHub CLI...

1. تحميل أحدث الإصدار...
2. تثبيت الاعتمادات الجديدة...
3. تطبيق التحديثات...

📦 يمكنك التحديث يدوياً باستخدام:
   npm install -g marwanhub-cli@latest

⭐ تابع المستودع للحصول على أحدث التحديثات:
   https://github.com/marwanhubeg/marwanhub-cli
`));
  });

// أمر الأدوات والتقنيات
const toolsCommand = new Command('أدوات')
  .description('عرض الأدوات والتقنيات المستخدمة في ماروان هوب')
  .action(() => {
    console.log(colors.success(`
🛠️ الأدوات والتقنيات في ماروان هوب:

1. لغات البرمجة:
   - JavaScript/Node.js
   - Python
   - Java
   - HTML/CSS

2. أطر العمل:
   - React.js
   - Vue.js
   - Express.js
   - Django

3. قواعد البيانات:
   - MongoDB
   - MySQL
   - PostgreSQL
   - Redis

4. أدوات التطوير:
   - Git & GitHub
   - Docker
   - VS Code
   - Termux (للأندرويد)

🎯 نستخدم أحدث التقنيات لتقديم أفضل الحلول!
`));
  });

// أمر التواصل مع الفريق
const contactCommand = new Command('تواصل')
  .description('طرق التواصل مع فريق ماروان هوب')
  .action(() => {
    console.log(colors.warning(`
📞 طرق التواصل مع ماروان هوب:

1. البريد الإلكتروني:
   - عام: info@marwanhub.tech
   - دعم: support@marwanhub.tech
   - تعاون: collab@marwanhub.tech

2. وسائل التواصل الاجتماعي:
   - GitHub: https://github.com/marwanhubeg
   - Twitter: @MarwanHubTech
   - LinkedIn: Marwan Hub للتقنية

3. الموقع الرسمي:
   - https://marwanhub.tech

4. للاستفسارات الفورية:
   - راسلنا عبر البريد
   - افتح issue على GitHub

🤝 نحن هنا لمساعدتك!
`));
  });

// تصدير الأوامر
module.exports = {
  updateCommand,
  toolsCommand,
  contactCommand
};

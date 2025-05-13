const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer');

// إعدادات رفع الملفات باستخدام multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// تقديم الملفات الثابتة (static files) مثل الصور
app.use(express.static('uploads'));

// التعامل مع طلب رفع ملفات
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully', file: req.file });
});

// إعداد الخادم للعمل على المنفذ الذي تحدده Vercel
const port = process.env.PORT || 3000;  // Vercel يحدد المنفذ عبر المتغيرات البيئية
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;  // تصدير التطبيق لتشغيله على Vercel

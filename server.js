const express = require('express');
const app = express();

// تحديد المسار الرئيسي
app.get('/', (req, res) => {
  res.send('Hello from your Vercel-hosted app!');
});

// تحديد البورت الذي سيستخدمه Vercel
const port = process.env.PORT || 3000; // إذا لم يكن هناك بورت، استخدم 3000 كافتراضي

// جعل التطبيق يستمع على البورت المحدد
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// إعداد Dotenv
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// مسار الثابتات (الملفات المدمجة من Webpack)
app.use(express.static('dist'));

// التعامل مع الطلبات
app.get('/', (req, res) => {
  res.sendFile(path.resolve('dist/index.html'));
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});

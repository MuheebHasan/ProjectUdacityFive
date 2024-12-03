const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.post('/api', async (req, res) => {
  const { text } = req.body;
  // اجعل الطلب إلى API هنا باستخدام axios
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});

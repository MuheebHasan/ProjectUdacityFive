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

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&txt=${encodeURIComponent(
      text
    )}&lang=en`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json({
      polarity: data.score_tag,
      subjectivity: data.subjectivity,
      text,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process request' });
  }
});

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});

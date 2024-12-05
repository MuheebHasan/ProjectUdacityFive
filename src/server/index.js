const express = require('express');
const app = express();
app.use(express.json());
app.post('/test', (req, res) => {
    const { url } = req.body;
    res.send({ message: `URL received: ${url}` });
});
app.listen(8081, () => console.log('Server running on port 8081'));

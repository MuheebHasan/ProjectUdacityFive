import './styles.css';

document.getElementById('article-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const text = document.getElementById('article-text').value;

  fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('results').innerHTML = `
        <p>Polarity: ${data.polarity}</p>
        <p>Subjectivity: ${data.subjectivity}</p>
      `;
    });
});

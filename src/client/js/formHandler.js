async function handleSubmit(event) {
    event.preventDefault();
    
    const formText = document.getElementById('name').value;
    const response = await fetch('http://localhost:8080/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: formText }),
    });
    
    const data = await response.json();
    document.getElementById('results').innerHTML = `Polarity: ${data.polarity}, Subjectivity: ${data.subjectivity}`;
  }
  
  export { handleSubmit };
  
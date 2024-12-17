import { checkUrl } from './urlChecker';

const handleSubmit = async (event) => {
    event.preventDefault();

    // Get input value
    const formText = document.getElementById('name').value;

    // Validate input using `checkUrl`
    if (!checkUrl(formText)) {
        alert('The URL provided is invalid. Please enter a valid URL.');
        return; // Stop execution if input is invalid
    }

    console.log('::: Form Submitted :::');

    // Call API to analyze the text
    const response = await fetch('http://localhost:8081/analyze', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: formText }),
    });

    try {
        const data = await response.json();
        document.getElementById('results').innerHTML = data.message;
    } catch (error) {
        console.error('Error:', error);
    }
};

export { handleSubmit };

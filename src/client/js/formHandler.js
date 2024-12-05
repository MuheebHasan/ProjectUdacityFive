export const handleSubmit = async (event) => {
    event.preventDefault();
    const url = document.getElementById('url').value;
    if (checkURL(url)) {
        await fetch('http://localhost:8081/test', {
            method: 'POST',
            body: JSON.stringify({ url }),
            headers: { 'Content-Type': 'application/json' },
        });
    } else {
        alert('Invalid URL');
    }
};

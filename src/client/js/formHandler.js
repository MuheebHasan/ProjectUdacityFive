import { checkUrl } from './urlChecker';

const handleSubmit = async (event) => {
    event.preventDefault();

    // الحصول على قيمة الإدخال
    const formText = document.getElementById('name').value;

    // التحقق من صحة الإدخال باستخدام `checkUrl`
    if (!checkUrl(formText)) {
        alert('The URL provided is invalid. Please enter a valid URL.');
        return; // إنهاء التنفيذ إذا كان الإدخال غير صالح
    }

    console.log('::: Form Submitted :::');

    // استدعاء API لمعالجة النص
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

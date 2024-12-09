import { checkUrl } from '../src/client/js/urlChecker'; // استيراد وظيفة التحقق

const handleSubmit = async (event) => {
    event.preventDefault();

    const url = document.getElementById('inputText').value; // الحصول على الإدخال

    // التحقق من صحة عنوان URL
    if (checkUrl(url)) {
        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: url }),
            });
            const data = await response.json();

            if (data.success) {
                console.log("تحليل ناجح:", data);
            } else {
                alert("فشل التحليل، الرجاء المحاولة لاحقًا.");
            }
        } catch (error) {
            console.error("حدث خطأ أثناء الاتصال بالخادم:", error);
        }
    } else {
        alert("عنوان URL غير صالح. الرجاء إدخال رابط صالح.");
    }
};

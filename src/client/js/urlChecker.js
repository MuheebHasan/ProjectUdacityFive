const checkUrl = (inputText) => {
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
  return urlRegex.test(inputText); // التحقق من مطابقة النص للنمط
};

export { checkUrl };

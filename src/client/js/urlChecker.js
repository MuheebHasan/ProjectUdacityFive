const checkUrl = (inputText) => {
  const urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // البروتوكول
      '((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|' + // اسم المجال
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // أو عنوان IP
      '(\\:\\d+)?(\\/[-a-zA-Z0-9%_.~+]*)*' + // المنفذ والمسار
      '(\\?[;&a-zA-Z0-9%_.~+=-]*)?' + // الاستعلام
      '(\\#[-a-zA-Z0-9_]*)?$',
      'i'
  );
  return urlPattern.test(inputText); // إرجاع true إذا كان الإدخال صالحًا
};

export { checkUrl };

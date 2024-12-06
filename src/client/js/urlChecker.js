function checkURL(inputText) {
    const urlRegex = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
    return urlRegex.test(inputText);
  }
  
  export { checkURL };
  
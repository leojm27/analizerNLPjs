const cleanText = (text) => {

    let cleanText = '';
    cleanText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    cleanText = cleanText.replace(/[^a-zA-Z0-9]/g, ' ');
    return cleanText;

}

module.exports = { cleanText }
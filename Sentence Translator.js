const apiURL = "https://api.funtranslations.com/translate/minion.json";


const inputField = document.getElementById("userinput");
const translateButton = document.getElementById("translatebtn");
const outputField = document.getElementById("useroutput");


function getTranslationURL(text) {
    return `${apiURL}?text=${encodeURIComponent(text)}`;
}

// Error handler
function errorHandler(error) {
    console.error("Error occurred:", error);
    alert("Something went wrong! Please try again later.");
}

// Click event handler
function clickHandler() {
    const inputText = inputField.value;

    // Simple validation
    if (!inputText.trim()) {
        alert("Please enter some text to translate.");
        return;
    }

    // Fetch translation
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            outputField.value = translatedText;
        })
        .catch(errorHandler);
}

// Attach event listener
translateButton.addEventListener("click", clickHandler);
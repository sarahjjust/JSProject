const uri = 'https://localhost:7071/Translation';

function translate() {
    const inputWord = document.querySelector("#toTranslate").value;
    fetch(uri + '/' + inputWord)
        .then(response => response.text())
        .then(_update)
        .catch(error => console.error('Unable to get items.', error));
}

function _update(data) {
    const answerSpace = document.querySelector("#answer");
    answerSpace.innerHTML = data;
}
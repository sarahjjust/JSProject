var uri = 'https://localhost:7071/Translation';
function translate() {
    var inputWord = document.querySelector("#toTranslate").value;
    fetch(uri + '/' + inputWord)
        .then(function (response) { return response.text(); })
        .then(_update)
        .catch(function (error) { return console.error('Unable to get items.', error); });
}
function _update(data) {
    var answerSpace = document.querySelector("#answer");
    answerSpace.innerHTML = data;
}

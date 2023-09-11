const uri = 'https://localhost:7071/Translation';

function translate() {
    const inputWord = document.querySelector("#toTranslate").value;
    let answer = "";
    fetch(uri)
        .then(response => response.text())
        .then(data => answer = data)
        .catch(error => console.error('Unable to get items.', error));
    const answerSpace = document.querySelector("#answer");
    answerSpace.innerHTML = answer;
}
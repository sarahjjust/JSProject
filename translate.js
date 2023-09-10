function translate() {
    const inputWord = document.querySelector("#toTranslate").value;
    const answerSpace = document.querySelector("#answer");
    answerSpace.innerHTML = inputWord;
}
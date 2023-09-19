"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const uri = 'https://localhost:7071/Translation';
const numButtons = 3;
let answer = -1;
// Called everytime the page loads. Accesses the API twice, to get three random EN words and the JP translation of one of them.
// Updates the page with those words.
// Stores the correct answer in global variable.
function resetGame() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(uri + '/rand/en/' + numButtons);
            const data = yield response.json();
            _updateButtons(data);
            answer = Math.floor(Math.random() * numButtons);
            const response2 = yield fetch(uri + '/en/jp/' + data[answer]);
            const toTrans = yield response2.text();
            _updateJPWord(toTrans);
        }
        catch (error) {
            console.error('Unable to initialize game.', error);
        }
    });
}
// Called when a button is pressed. Displays a positive or negative message depending on if the button was correct. Then reloads the page.
function checkAnswer(buttonNum) {
    if (buttonNum == answer) {
        window.alert("That's correct!");
    }
    else {
        window.alert("Sorry, that's not correct :(");
    }
    location.reload();
}
// Updates the text on the buttons.
function _updateButtons(labels) {
    let currButton;
    for (let i = 0; i < numButtons; i++) {
        currButton = document.querySelector('#b' + i);
        currButton.innerHTML = labels[i];
    }
}
// Updates the page to display the word for the player to translate.
function _updateJPWord(word) {
    const jpWord = document.querySelector('#jpWord');
    jpWord.innerHTML = word;
}

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
function resetGame() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(uri + '/rand/en/3');
            const data = yield response.json();
            const answer = _updateButtons(data);
            const response2 = yield fetch(uri + '/en/jp/' + data[answer]);
            const toTrans = yield response2.text();
            _updateJPWord(toTrans);
        }
        catch (error) {
            console.error('Unable to initialize game.', error);
        }
    });
}
function checkAnswer(buttonNum) {
    console.log(buttonNum);
}
function _updateButtons(labels) {
    const numButtons = labels.length;
    let currButton;
    for (let i = 0; i < numButtons; i++) {
        currButton = document.querySelector('#b' + i);
        currButton.innerHTML = labels[i];
    }
    const answer = Math.floor(Math.random() * numButtons);
    return answer;
}
function _updateJPWord(word) {
    const jpWord = document.querySelector('#jpWord');
    jpWord.innerHTML = word;
}

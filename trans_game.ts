const uri = 'https://localhost:7071/Translation';
const numButtons = 3;
let answer = -1;

// Called everytime the page loads. Accesses the API twice, to get three random EN words and the JP translation of one of them.
// Updates the page with those words.
// Stores the correct answer in global variable.
async function resetGame() : Promise<void> {
    try{
        const response = await fetch(uri + '/rand/en/' + numButtons);
        const data = await response.json();
        _updateButtons(data);
        answer = Math.floor(Math.random() * numButtons);
        const response2 = await fetch(uri + '/en/jp/' + data[answer])
        const toTrans = await response2.text();
        _updateJPWord(toTrans);
    } catch (error) {
        console.error('Unable to initialize game.', error);
    }
}

// Called when a button is pressed. Displays a positive or negative message depending on if the button was correct. Then reloads the page.
function checkAnswer(buttonNum: number) : void {
    if (buttonNum == answer) {
        window.alert("That's correct!");
    } else {
        window.alert("Sorry, that's not correct :(")
    }
    location.reload();
}

// Updates the text on the buttons.
function _updateButtons(labels : string[]) : void {
    let currButton : HTMLButtonElement;
    for (let i = 0; i < numButtons; i++) {
        currButton = document.querySelector('#b' + i)!;
        currButton.innerHTML = labels[i];
    }
}

// Updates the page to display the word for the player to translate.
function _updateJPWord(word : string) : void {
    const jpWord = document.querySelector('#jpWord')!;
    jpWord.innerHTML = word;
}
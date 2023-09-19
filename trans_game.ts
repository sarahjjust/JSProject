const uri = 'https://localhost:7071/Translation';

async function resetGame() : Promise<void> {
    try{
        const response = await fetch(uri + '/rand/en/3');
        const data = await response.json();
        const answer = _updateButtons(data);
        const response2 = await fetch(uri + '/en/jp/' + data[answer])
        const toTrans = await response2.text();
        _updateJPWord(toTrans);
    } catch (error) {
        console.error('Unable to initialize game.', error);
    }
}

function checkAnswer(buttonNum: number) : void {
    console.log(buttonNum);
}

function _updateButtons(labels : string[]) : number {
    const numButtons = labels.length;

    let currButton : HTMLButtonElement;
    for (let i = 0; i < numButtons; i++) {
        currButton = document.querySelector('#b' + i)!;
        currButton.innerHTML = labels[i];
    }

    const answer = Math.floor(Math.random() * numButtons);
    return answer;
}

function _updateJPWord(word : string) : void {
    const jpWord = document.querySelector('#jpWord')!;
    jpWord.innerHTML = word;
}
const openDialogButton = document.getElementById('openDialogButton');
const gameDialog = document.getElementById('rulesDialog');
const scoreNumber = document.getElementById('scoreNumber');

openDialogButton.addEventListener('click', () => {
    gameDialog.showModal();
});

const closeDialogButton = document.getElementById('closeDialog');
closeDialogButton.addEventListener('click', () => {
    gameDialog.close();
});

const gameButtons = ['paper', 'scissors', 'rock'];

function createGameButtons() {
    const paperCircle = document.createElement('div');
    paperCircle.classList.add('circle');

    const paper = document.createElement('div');
    paper.classList.add('paper');

    const scissorsCircle = document.createElement('div');
    scissorsCircle.classList.add('circleScissors');

    const scissors = document.createElement('div');
    scissors.classList.add('scissors');

    const rockCircle = document.createElement('div');
    rockCircle.classList.add('circleRock');

    const rock = document.createElement('div');
    rock.classList.add('rock');

    const btnWrapper = document.querySelector('.btnWrapper');
    const gameButtons = document.querySelector('.gameBtns');
    const gameArea = document.querySelector('.gameArea');

    const gameButtonsResults = document.createElement('div');
    gameButtonsResults.classList.add('gameBtnsResults');

    btnWrapper.appendChild(paperCircle);
    btnWrapper.appendChild(scissorsCircle);
    gameButtons.appendChild(rockCircle);
    gameArea.appendChild(gameButtonsResults);
    paperCircle.appendChild(paper);
    scissorsCircle.appendChild(scissors);
    rockCircle.appendChild(rock);

    var resultsExecuted = false;
    var random = Math.floor(Math.random() * 2);
    const playAgain = document.createElement('button');
    playAgain.innerText = 'PLAY AGAIN';
    playAgain.classList.add('playAgain');

    const youPicked = document.createElement('h5');
    const ourPicked = document.createElement('h5');
    const housePicked = document.createElement('div');
    const playerPicked = document.createElement('div');
   
    youPicked.classList.add('youPicked');
    youPicked.innerText = 'YOU PICKED';
   
    ourPicked.classList.add('ourPicked');
    ourPicked.innerText = 'THE HOUSE PICKED';
   


    playerPicked.classList.add('playerPicked');
    playerPicked.appendChild(youPicked);
   
    housePicked.classList.add('housePicked');
    housePicked.appendChild(ourPicked);
    function handlePaperClick() {
        if (!resultsExecuted) { 
            resultsPaper();
            resultsExecuted = true;
        }
    }
   
    function handleScissorsClick() {
        if (!resultsExecuted) { 
            resultsScissors();
            resultsExecuted = true; 
        }
    }
    function handleRockClick() {
        if (!resultsExecuted) { 
            resultsRock();
            resultsExecuted = true; 
        }
    }
   
    paper.addEventListener('click', handlePaperClick);
    scissors.addEventListener('click', handleScissorsClick);
    rock.addEventListener('click', handleRockClick);

    function resultsPaper() {
        while(gameButtons.firstChild){
            gameButtons.removeChild(gameButtons.firstChild)
        }
       
        
        btnWrapper.removeChild(scissorsCircle);
        btnWrapper.removeChild(paperCircle);

        playerPicked.appendChild(paperCircle);
        btnWrapper.appendChild(playerPicked);
        gameButtonsResults.appendChild(btnWrapper);

        if (random == 0) {
            const result = document.createElement('div');
            result.classList.add('result');

            const lose = document.createElement('div');
            lose.classList.add('lose');
            lose.innerText = 'YOU LOSE';
            result.appendChild(lose);
            result.appendChild(playAgain);
            btnWrapper.appendChild(result);
            btnWrapper.appendChild(housePicked);
            housePicked.appendChild(scissorsCircle);

        }
        if (random == 1) {
            const result = document.createElement('div');
            result.classList.add('result');

            const win = document.createElement('div');
            win.classList.add('lose');
            win.innerText = 'YOU WIN';
            
            result.appendChild(win);
            result.appendChild(playAgain);
            btnWrapper.appendChild(result);
            btnWrapper.appendChild(housePicked);
            housePicked.appendChild(rockCircle);

            const currentScore = parseInt(scoreNumber.innerText, 10);
            scoreNumber.innerText = (currentScore + 1).toString();
        }
       
    }
    
    function resultsScissors() {
        while(gameButtons.firstChild){
            gameButtons.removeChild(gameButtons.firstChild)
        }
        playerPicked.appendChild(scissorsCircle);
        btnWrapper.removeChild(paperCircle);
        btnWrapper.appendChild(playerPicked);
        gameButtonsResults.appendChild(btnWrapper);

        if (random == 0) {
            const result = document.createElement('div');
            result.classList.add('result');

            const win = document.createElement('div');
            win.classList.add('lose');
            win.innerText = 'YOU WIN';
            
            result.appendChild(win);
            result.appendChild(playAgain);
            btnWrapper.appendChild(result);
            btnWrapper.appendChild(housePicked);
            housePicked.appendChild(paperCircle);
            const currentScore = parseInt(scoreNumber.innerText, 10);
            scoreNumber.innerText = (currentScore + 1).toString();
        }
        if (random == 1) {
            const result = document.createElement('div');
            result.classList.add('result');

            const lose = document.createElement('div');
            lose.classList.add('lose');
            lose.innerText = 'YOU LOSE';
            
            result.appendChild(lose);
            result.appendChild(playAgain);
            btnWrapper.appendChild(result);

            btnWrapper.appendChild(housePicked);
            housePicked.appendChild(rockCircle);
        }
       
    }
    function resultsRock() {
        while(gameButtons.firstChild){
            gameButtons.removeChild(gameButtons.firstChild)
        }
        
        btnWrapper.removeChild(paperCircle);
        btnWrapper.removeChild(scissorsCircle);
        playerPicked.appendChild(rockCircle);
        btnWrapper.appendChild(playerPicked);
        gameButtonsResults.appendChild(btnWrapper);
        
        if (random == 0) {
            const result = document.createElement('div');
            result.classList.add('result');

            const lose = document.createElement('div');
            lose.classList.add('lose');
            lose.innerText = 'YOU LOSE';
           

            result.appendChild(lose);
            result.appendChild(playAgain);
            btnWrapper.appendChild(result);

            btnWrapper.appendChild(housePicked);
            housePicked.appendChild(paperCircle);;
        }
        
        if (random == 1) {
            const result = document.createElement('div');
            result.classList.add('result');

            const win = document.createElement('div');
            win.classList.add('lose');
            win.innerText = 'YOU WIN';
            

            result.appendChild(win);
            result.appendChild(playAgain);
            btnWrapper.appendChild(result);
            btnWrapper.appendChild(housePicked);
            housePicked.appendChild(scissorsCircle);
            const currentScore = parseInt(scoreNumber.innerText, 10);
            scoreNumber.innerText = (currentScore + 1).toString();
        }
       
    }
    playAgain.addEventListener('click', () => {
        
        gameButtonsResults.removeChild(btnWrapper);
        while (btnWrapper.firstChild) {
            btnWrapper.removeChild(btnWrapper.firstChild);
        }

        btnWrapper.appendChild(paperCircle);
        btnWrapper.appendChild(scissorsCircle);
        gameButtons.appendChild(btnWrapper);
        gameButtons.appendChild(rockCircle);
        resultsExecuted = false;
        random = Math.floor(Math.random() * 2);  })
}

createGameButtons();

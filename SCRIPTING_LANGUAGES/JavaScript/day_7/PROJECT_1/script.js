

//Selecting Elements
const score0El= document.getElementById('score--0');
const score1El= document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')



let scores,currentScore,activePlayer,playing;
//init fn
const init = function(){
    
        score = [0,0];
        currentScore = 0;
        activePlayer = 0;
        playing = true;
        diceEl.classList.add('hidden');
        score0El.textContent = 0
        score1El.textContent = 0
        current0El.textContent = 0
        current1El.textContent = 0
        player0El.classList.remove('player--winner')
        player1El.classList.remove('player--winner')
        player0El.classList.add('player--active')
        player1El.classList.remove('player--active')
}

init()

//switchPlayer fucntion

const switchPlayer = function(){
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
}

// Rolling Dice Functionality
btnRoll.addEventListener('click', function() {
    if (playing){
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
        //Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{

        //Switch to next player
        switchPlayer()

    }}
    });

    btnHold.addEventListener('click',function(){
        //add current score to active player
        if (playing){
        score[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer] 

        if (score[activePlayer]>=100){
            playing = false
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
            diceEl.classList.add('hidden');
             
        }else{

            switchPlayer()
        }
    }

    })

    btnNew.addEventListener('click',init)
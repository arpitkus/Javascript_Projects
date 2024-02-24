const computerChoicedisplay = document.getElementById('computer-choice');
const userchoicedisplay = document.getElementById('user-choice')
const resultdisplay = document.getElementById('result')

const possible_choices = document.querySelectorAll('button')

let userchoice
let computerChoice
let result

possible_choices.forEach(possible_choices => possible_choices.addEventListener('click',(e)=>{
    userchoice = e.target.id.toLowerCase();
    userchoicedisplay.innerHTML = userchoice

    gencomputechoice()
    getresult()
    resultdisplay.innerHTML = result
}));

function gencomputechoice(){
    const randomnumber = Math.floor(Math.random() * possible_choices.length) + 1

    switch(randomnumber){
        case 1 :
            computerChoice = 'rock';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        case 3:
            computerChoice = 'paper';
            break;
    }
    computerChoicedisplay.innerHTML = computerChoice
}

function getresult(){
    if(computerChoice === 'rock'){
        if(userchoice === 'paper'){
            result = 'you won'
        }
        else if(userchoice === 'rock'){
            result = 'draw'
        }
        else{
            result = 'you lost'
        }
    }
    else if(computerChoice === 'paper'){
        if(userchoice === 'paper'){
            result = 'draw'
        }
        else if(userchoice === 'scissors'){
            result = 'you won'
        }
        else{
            result = 'you lost'
        }
    }
    else{
        if(userchoice === 'scissors'){
            result = 'draw'
        }
        else if(userchoice === 'rock'){
            result = 'you won'
        }
        else{
            result = 'you lost'
        }
    }
}
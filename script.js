// Initialize scores
let computer_score = 0;
let user_score = 0;

// Get DOM elements
const result_ref = document.getElementById("result");
const computerScoreRef = document.getElementById("computer_score");
const userScoreRef = document.getElementById("user_score");
const userChoiceRef = document.getElementById("user_choice");
const compChoiceRef = document.getElementById("comp_choice");

// Game logic object
const choices_object = {
    'rock': {
        'rock': 'draw',
        'scissor': 'win',
        'paper': 'lose'
    },
    'scissor': {
        'rock': 'lose',
        'scissor': 'draw',
        'paper': 'win'
    },
    'paper': {
        'rock': 'win',
        'scissor': 'lose',
        'paper': 'draw'
    }
};

// Main game function
function checker(input) {
    // Possible choices array
    const choices = ["rock", "paper", "scissor"];
    
    // Generate computer's choice
    const computer_choice = choices[Math.floor(Math.random() * 3)];
    
    // Update choice displays
    compChoiceRef.innerHTML = `Computer chose <span>${computer_choice.toUpperCase()}</span>`;
    userChoiceRef.innerHTML = `You chose <span>${input.toUpperCase()}</span>`;
    
    // Get result from choices object
    const result = choices_object[input][computer_choice];
    
    // Update UI based on result
    switch(result) {
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
            result_ref.innerHTML = "YOU WIN!";
            user_score++;
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE!";
            computer_score++;
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW!";
            break;
    }
    
    // Update scores
    computerScoreRef.innerHTML = computer_score;
    userScoreRef.innerHTML = user_score;
    
    // Add animation to result
    result_ref.classList.add('result-animation');
    setTimeout(() => {
        result_ref.classList.remove('result-animation');
    }, 500);
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    // Reset scores
    computer_score = 0;
    user_score = 0;
    
    // Update initial score display
    computerScoreRef.innerHTML = computer_score;
    userScoreRef.innerHTML = user_score;
    
    // Clear previous results
    result_ref.innerHTML = '';
    userChoiceRef.innerHTML = '';
    compChoiceRef.innerHTML = '';
});
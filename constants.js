const CHOICES = [
    {
        name: 'scissors',
        uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
    },
    {
        name: 'rock',
        uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
    },
    {
        name: 'paper',
        uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
    },
];

function RULES(playerChoiceName, computerChoiceName) {
    let result = '';

    if (playerChoiceName === 'rock') {
        result = (computerChoiceName === 'scissors' ? 'Victory!' : 'Defeat!');
    }
    if (playerChoiceName === 'paper') {
        result = computerChoiceName === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (playerChoiceName === 'scissors') {
        result = computerChoiceName === 'paper' ? 'Victory!' : 'Defeat!';
    }
    if (playerChoiceName === computerChoiceName) {
        result = 'Tie game!'
    };
    
    return result;
}

export { CHOICES, RULES };
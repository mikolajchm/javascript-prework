function playGame(playerInput) {
    clearMessages();

    function getMoveName(moveId) {
        if (moveId === 1) {
            return 'kamień';
        } else if (moveId === 2) {
            return 'papier';
        } else if (moveId === 3) {
            return 'nożyce';
        } else {
            return 'nieznany ruch';
        }
    }

    function displayResult(playerMove, computerMove) {
        // kod funkcji displayResult() zdefiniowanej wcześniej
    }

    // Komputer
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let moves = ['kamień', 'papier', 'nożyce'];
    let computerMove = moves[randomNumber - 1];
    console.log('Wylosowana liczba to: ' + randomNumber);
    printMessage('Mój ruch to: ' + computerMove);

    // Gracz
    let playerNumber = parseInt(playerInput);

    if (playerNumber >= 1 && playerNumber <= 3) {
        let playerMove = moves[playerNumber - 1];
        console.log('Gracz wpisał: ' + playerInput);
        printMessage('Twój ruch to: ' + playerMove);

        // Wynik Gry
       if (playerMove === computerMove) {
            printMessage('Remis');
        } else if ((playerMove === 'kamień' && computerMove === 'nożyce') ||
                (playerMove === 'papier' && computerMove === 'kamień') ||
                (playerMove === 'nożyce' && computerMove === 'papier')) {
            printMessage('Ty wygrywasz!');
        } else {
            printMessage('Przegrywasz!');
        }
    } else {
        let playerMove = 'nieznany ruch';
        console.log('Gracz wpisał: ' + playerInput);
        printMessage('Twój ruch to: ' + playerMove);
        printMessage('Nieprawidłowy wybór! Proszę wybrać 1, 2 lub 3.');
    }
}

function buttonClicked(choice) {
    playGame(choice);
}

let playKamienButton = document.getElementById('play-kamień');
playKamienButton.addEventListener('click', function() {
    buttonClicked(1);
});

let playPapierButton = document.getElementById('play-papier');
playPapierButton.addEventListener('click', function() {
    buttonClicked(2);
});

let playNozyceButton = document.getElementById('play-nozyce');
playNozyceButton.addEventListener('click', function() {
    buttonClicked(3);
});
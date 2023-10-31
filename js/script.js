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
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

    if (playerMove === computerMove) {
        printMessage('Remis');
    } else if ((playerMove === 'kamień' && computerMove === 'nożyce') ||
               (playerMove === 'papier' && computerMove === 'kamień') ||
               (playerMove === 'nożyce' && computerMove === 'papier')) {
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Przegrywasz!');
    }
}

// Komputer
let randomNumber = Math.floor(Math.random() * 3) + 1;
let moves = ['kamień', 'papier', 'nożyce'];
let computerMove = moves[randomNumber - 1];

console.log('Wylosowana liczba to: ' + randomNumber);
printMessage('Mój ruch to: ' + computerMove);

// Gracz
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerNumber = parseInt(playerInput); // Konwertuj do liczby

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
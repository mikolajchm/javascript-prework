// Komputer
let randomNumber = Math.floor(Math.random() * 3) + 1;
let moves = ['kamień', 'papier', 'nożyce'];
let computerMove = moves[randomNumber - 1];

console.log('Wylosowana liczba to: ' + randomNumber);
printMessage('Mój ruch to: ' + computerMove);

// Gracz
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = moves[playerInput - 1] || 'nieznany ruch';

console.log('Gracz wpisał: ' + playerInput);
printMessage('Twój ruch to: ' + playerMove);

// Wynik Gry
if (playerMove == 'nieznany ruch'){
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
    printMessage('Nieprawidłowy wybór! Proszę wybrać 1, 2 lub 3.');
}
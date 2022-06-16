//Jogo da adivinhação

let userNum = prompt("Adivinhe em qual número estou pensando. Está entre 0 e 10")
const randomNumber = Math.round(Math.random()*10)

let xAttempts = 1

while(Number(userNum) != randomNumber) {
    userNum = prompt("Erro, tente novamente.")
    xAttempts++
}
alert(`Parabéns! Você acertou em ${xAttempts} tentativas.`)
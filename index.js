const diceInput = document.getElementById("numDice");
const diceRoll = document.getElementById("rollDice");
const diceOutput = document.getElementById("diceValues");
const diceImages = document.getElementById("diceImages");


function dice_Roll() {
    let numbers = [];
    let images = [];
    let rolls = Number(diceInput.value);
    for (let i = 1; i <= rolls; i++){
        let x = Math.floor(Math.random() * 6) + 1;
        numbers.push(x);
        images.push(`<img src="diceImages/${x}.png" alt="Dice image of ${x}">`);
    }
    diceOutput.textContent = numbers.join(", ");
    diceImages.innerHTML = images.join("<hr>");
}

diceRoll.onclick = dice_Roll;
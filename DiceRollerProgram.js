function rolldice() {
    const numOfDice = document.getElementById("textbox").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for(let i=0;i<numOfDice;i++) {
        const random = Math.floor(Math.random() * 6)+1;
        values.push(random);
        images.push(`<img src="dice_images/${random}.png">`);      
    }
    diceresult.textContent = `dice: ${values.join(", ")}`;
    diceimages.innerHTML = images.join(' ');
}
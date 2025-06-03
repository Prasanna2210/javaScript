let temp;
function convert() {
    event.preventDefault();
    if(document.getElementById("toFahrenheit").checked) {
        temp=Number(document.getElementById("textbox").value);
        temp = temp*(9/5) + 32;
        document.getElementById("result").textContent = temp.toFixed(1)+"°F";
    }
    else if(document.getElementById("toCelsius").checked) {
        temp=Number(document.getElementById("textbox").value);
        temp = (temp-32) * 5/9;
        document.getElementById("result").textContent = temp.toFixed(1)+"°C";
    }
    else {
        document.getElementById("result").textContent = "Select a unit";
    }
}




// for degree symbol in windows: alt+0176 
// for emojis: alt+;
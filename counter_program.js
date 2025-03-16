// const decreasebtn = document.getElementById("decreasebtn");
// const resetbtn = document.getElementById("resetbtn");
// const increasebtn = document.getElementById("increasebtn");
// const countLabel = document.getElementById("countLabel");

// let count=0;

// decreasebtn.onclick = function() {
//     count--;
//     countLabel.textContent = count;
// }
// increasebtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }
// resetbtn.onclick = function() {
//     count=0;
//     countLabel.textContent = count;
// }



let count=0;
document.getElementById("decreasebtn").onclick = function() {
    count--;
    document.getElementById("countLabel").textContent = count;
}
document.getElementById("increasebtn").onclick = function() {
    count++;
    document.getElementById("countLabel").textContent = count;
}
document.getElementById("resetbtn").onclick = function() {
    count=0;
    document.getElementById("countLabel").textContent = count;
}

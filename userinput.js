// how to accept user Input

// easy way = window prompt
// professional way = html textbox


// window prompt

// let username;
// username = window.prompt("What is your username? ");
// console.log(username);



// html textbox

document.getElementById("mysubmit").onclick =  function() {
    let username = document.getElementById("name").value;
    document.getElementById("result").textContent = `hello ${username}`;
}
document.getElementById("mybutton").onclick = function() {
    if(document.getElementById("mycheckbox").check) {
        document.getElementById("subresult").textContent = `you are subscribed`;
    }
    else {
        document.getElementById("subresult").textContent = `you are not subscribed`;
    }

    if(document.getElementById("visabtn").checked) {
        document.getElementById("paymentresult").textContent = `you selected visa`;
    }
    else if(document.getElementById("mastercardbtn").checked) {
        document.getElementById("paymentresult").textContent = `you selected mastercard`;
    }
    else if(document.getElementById("paypalbtn").checked) {
        document.getElementById("paymentresult").textContent = `you selected paypal`;
    }
    else {
        document.getElementById("paymentresult").textContent = `you didnt select any payment option`;
    }
}
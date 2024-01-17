const square1 = document.getElementById("square-1");
const square2 = document.getElementById("square-2");
const square3 = document.getElementById("square-3");
const square4 = document.getElementById("square-4");

let password = [1, 1, 4, 2, 4, 1];
let sequence = [];

function checkPassword() {
    if (sequence.length === password.length) {
        if (JSON.stringify(sequence) === JSON.stringify(password)) {
            alert("Vault Disarmed");
        } else {
            alert("Incorrect Password");
            console.log(JSON.stringify(sequence));
            console.log(JSON.stringify(password));
        }
        sequence = [];
    }
}

square1.addEventListener("click", function() {
    sequence.push(1);
    checkPassword();
});

square2.addEventListener("click", function() {
    sequence.push(2);
    checkPassword();
});

square3.addEventListener("click", function() {
    sequence.push(3);
    checkPassword();
});

square4.addEventListener("click", function() {
    sequence.push(4);
    checkPassword();
});
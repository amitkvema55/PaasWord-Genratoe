const passwordbox = document.getElementById("password");
const length = 12;

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "1234567890";
let symbol = "!@#$%^&*()+";

const allchar = uppercase + lowercase + number + symbol;

function createPassword() {
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random ()* lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random ()* symbol.length)];

    while (password.length < length) {
        password += allchar[Math.floor(Math.random() * allchar.length)];
    }

   passwordbox.value=password;
}


function copypassword(){
    passwordbox.select();
    document.execCommand("copy");
}



function generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "~!@#$%^&*()_+-=";

    let allowedchars = "";
    let password = "";
    
    allowedchars += includeLowercase ? lowercasechars : "";
    allowedchars += includeUppercase ? uppercasechars : "";
    allowedchars += includeNumbers ? numberchars : "";
    allowedchars += includeSymbols ? symbolchars : "";

    if(passwordLength<=0) {
        return '(Password length must be greater than or equal to 1)';
    }
    if(allowedchars.length === 0) {
        return '(Atleast one set set of characters need to be selected)';
    }
   
    for(let i=0;i<passwordLength;i++) {
        let randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }
    return password;
}

const passwordLength = 10;
const includeLowercase = true;
const includeUppercase = false;
const includeNumbers = false;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                    includeLowercase, 
                                    includeUppercase, 
                                    includeNumbers, 
                                    includeSymbols);
console.log(`Genereated password: ${password}`);
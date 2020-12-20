const generateNumber = () => {
    const numbers = '1234567890';
    return numbers[Math.floor(Math.random() * numbers.length)]
}

const generateSmallChar = () => {
    const smallChars = 'qwertyuiopasdfghjklzxcvbnm';
    return smallChars[Math.floor(Math.random() * smallChars.length)]
}

const generateBigChar = () => {
    const bigChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    console.log()
    return bigChars[Math.floor(Math.random() * bigChars.length)]
}

const generateSpecialChar = () => {
    const specialChars = '!@#$%^&*():"{}?><';
    return specialChars[Math.floor(Math.random() * specialChars.length)]
}

class Password {
    constructor(length) {
        this.length = length;
        this.password = '';
    }

    generatePassword(whatIsIncluded) {
        console.log(whatIsIncluded);
        if (whatIsIncluded.numbers || whatIsIncluded.upperCase || whatIsIncluded.lowerCase || whatIsIncluded.special) {
            for (let i = 0; i < this.length; i++) {
                const current = Math.floor(Math.random() * 4);
                if (current === 0 && whatIsIncluded.numbers) {
                    this.password += generateNumber();
                } else if (current === 1 && whatIsIncluded.upperCase) {
                    this.password += generateBigChar();
                } else if (current === 2 && whatIsIncluded.lowerCase) {
                    this.password += generateSmallChar();
                } else if (current === 3 && whatIsIncluded.special) {
                    this.password += generateSpecialChar();
                } else {
                    i--;
                }
            }
        } else {
            this.password = `You haven't ticked chars`;
        }
    }

    displayPassword() {
        document.querySelector('.password').textContent = this.password;
    }
}

const getInput = () => {
    return {
        howLong: parseInt(document.getElementById('how-many').value),
        upperCase: document.getElementById('upper').checked,
        lowerCase: document.getElementById('lower').checked,
        numbers: document.getElementById('numbers').checked,
        special: document.getElementById('special').checked
    }

};

document.querySelector('.btn').addEventListener('click', () => {
    const inputValue = getInput();
    const newPassword = new Password(inputValue.howLong);
    newPassword.generatePassword(inputValue);
    newPassword.displayPassword();
});
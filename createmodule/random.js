function generateRandomNumber(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}

// Example usage:
let randomNumber = generateRandomNumber(1, 100);
console.log("Random number:", randomNumber);


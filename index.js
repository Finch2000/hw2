// 1. 
function compareNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}

// 2. 
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 3. 
function combineDigits(a, b, c) {
    return parseInt(`${a}${b}${c}`);
}

// 4. 
function calculateArea(length, width = length) {
    return length * width;
}

// 5. 
function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

// 6. 
function findPerfectNumbersInRange(min, max) {
    let perfectNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) perfectNumbers.push(i);
    }
    return perfectNumbers;
}

// 7.
function formatTime(hours, minutes = 0, seconds = 0) {
    const pad = (num) => (num < 10 ? "0" + num : num);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// 8. 
function timeToSeconds(hours, minutes, seconds) {
    return hours * 3600 + minutes * 60 + seconds;
}

// 9. 
function secondsToTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    seconds %= 60;
    return formatTime(hours, minutes, seconds);
}

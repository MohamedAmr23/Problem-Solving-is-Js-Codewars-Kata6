function digPow(n, p){
    const sum = n.toString().split('').reduce((acc, digit, index) => {
        return acc + Math.pow(parseInt(digit), p + index);
    }, 0);
    return sum % n === 0 ? sum / n : -1;

}

console.log(digPow(89, 1)); // 1
function narcissistic(value) {
    const numberOfDigits = String(value).length;
    const finalSumResult = String(value)
      .split("")
      .map((number) => Math.pow(Number(number), numberOfDigits))
      .reduce((acc, current) => acc + current);
    return finalSumResult === value ? true : false;
  }
  
  console.log(narcissistic(153));
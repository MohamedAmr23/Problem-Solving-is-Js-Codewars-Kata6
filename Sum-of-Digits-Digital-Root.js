function digitalRoot(n) {
    if (n < 10) return n;
    let sum =   n.toString().split('').map((num)=>Number(num)).reduce((acc,curr)=>acc+curr)
    return digitalRoot(sum)
  }

  console.log(digitalRoot(456))
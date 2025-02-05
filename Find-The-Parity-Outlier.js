function findOutlier(integers) {
    const slicedArray = integers.slice(0, 4);
    const arrayType =
      slicedArray.filter((number) => number % 2 === 0).length > 1
        ? "even"
        : "odd";
    if (arrayType === "odd") {
      return integers.filter((number) => number % 2 === 0)[0];
    } else {
      return integers.filter((number) => number % 2 !== 0)[0];
    }

}

console.log(findOutlier([1,1,0,1,1]));

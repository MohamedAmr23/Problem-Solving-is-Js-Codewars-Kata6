function createPhoneNumber(numbers){
   const firstPart =  numbers.slice(0,3).join('')
   const secondPart = numbers.slice(3,6).join('')
   const thirdPart = numbers.slice(6,10).join('')
   return `(${firstPart}) ${secondPart}-${thirdPart}`
}

// another solution 
function createPhoneNumber(numbers){
   var format = `(xxx) xxx-xxxx`

   for(let i = 0 ; i<=numbers.length; i++){
    format = format.replace('x',numbers[i])
   }
   return format
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
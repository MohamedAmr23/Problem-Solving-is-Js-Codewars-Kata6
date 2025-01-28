// function findOdd(A) {
//     const numberOfAll= A.reduce((acc,cur)=>{
//         acc[cur] =(acc[cur] || 0)+1
//         return acc
//     },{})
//     console.log(numberOfAll)
//     for (const key in numberOfAll){
//         if (numberOfAll[key] % 2 !=0){
//             return parseInt(key) 
//         }
//     }
// }

// another solution
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
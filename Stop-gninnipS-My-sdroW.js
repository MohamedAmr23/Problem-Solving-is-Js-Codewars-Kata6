function spinWords(string){
    // let result = []
    // let convertToArray = string.split(' ')
    // for (let i = 0 ; i <convertToArray.length; i++){
    //     if (convertToArray[i].length>=5){
    //         result.push([...convertToArray[i]].reverse().join(''))
    //     }else{
    //         result.push(convertToArray[i])
    //     }
    // }
    // return result.join(' ')


    // another solution 

    return string.split(' ').map((item)=>item.length >= 5?[...item].reverse().join(''):item).join(' ')
}

console.log(spinWords('Hey fellow warriors'))
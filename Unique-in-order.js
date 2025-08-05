var uniqueInOrder=function(iterable){
    if (!iterable || iterable.length === 0) {
        return [];
    }
    
   let res = []
   let previos
   for (let element of iterable){
        if (element !=previos){
            res.push(element)
            previos = element
        }
   }
   return res
}
var uniqueInOrder=function(iterable){
return [...iterable].filter((a, i) => a !== iterable[i-1])
}
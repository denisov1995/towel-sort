
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined||1>matrix.length){
    return matrix = []
   }
   for (let i = 0; i < matrix.length; i++) {
     if (i%2!==0) {
       matrix[i].reverse()
     }
   }
   let a = matrix.join(',')
   result = a.split(',')
   let c = result.map(i => Number(i))
   return c
}

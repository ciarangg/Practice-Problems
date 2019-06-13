function plusMinus(arr) {

    let length = arr.length
  
    let numPositive = 0
    let numNegative = 0
    let numZero = 0
  
  
    arr.forEach(function(e, i) {
      if (e > 0) {
        numPositive = numPositive + 1
      }
      else if (e < 0) {      
        numNegative = numNegative + 1
      }
      else {
        numZero = numZero + 1
      }
    });
  
    let fractionPositive = numPositive/length
    let fractionNegative = numNegative/length
    let fractionZero = numZero/length
  
    console.log(fractionPositive)
    console.log(fractionNegative)
    console.log(fractionZero)
  
  
  }
  
//   plusMinus(array)
  
  
  // let array = [ -4, 3, -9, 0, 4, 1 ]
  
  // expected output 
  // 0.500000
  // 0.333333
  // 0.166667
  
  // let array = [ 1, 2, 3, -1, -2, -3, 0, 0 ]
  
  // expected output 
  // 0.375000
  // 0.375000
  // 0.250000
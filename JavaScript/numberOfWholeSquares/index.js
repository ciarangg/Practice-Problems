function solution(A, B) {

    if (A === B) {
      if(Number.isInteger(Math.sqrt(A))) {
        return 1
      }
      else {
        return 0
      }
    }

    let arrayOfWholeSR = []

    let arrayOfSR = []

    let array = []

    let beginArray = [A,B]

    beginArray.sort(function(a, b) {
      return a - b;
    })

    for (let i = beginArray[0]; i < beginArray[1] + 1; i++) { 
      array.push(i)
    }

    for (i = 0; i < array.length; i++) { 
      arrayOfSR.push(Math.sqrt(array[i]))  
    }

    for (i = 0; i < arrayOfSR.length; i++) { 
       if (Number.isInteger(arrayOfSR[i]) === true) {
         arrayOfWholeSR.push(arrayOfSR[i])
       }
    }

    return arrayOfWholeSR.length

}

solution(integerA, integerB)

// let integerA = 4

// let integerB = 17

// let integerA = 13

// let integerB = 2

// let integerA = 3

// let integerB = 3
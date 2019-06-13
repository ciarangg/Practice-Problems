let array = [ 3, 2, 1, 3 ]

function birthdayCakeCandles(ar) {

  let count = 0

  let max = ar.reduce(function(a, b) {
    return Math.max(a, b)
  })

  ar.forEach(function(e) {
    if (e === max) {
      count = count + 1
    }
  })

  return count
}

birthdayCakeCandles(array)
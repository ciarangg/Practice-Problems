let array = [9,1,3,5,7]

function miniMaxSum(arr) {

  arr.sort()

  let minSum = 0
  let maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    if(i !== arr.length-1) {
      minSum = minSum + arr[i]
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if(i !== 0) {
      maxSum = maxSum + arr[i]
    }
  }

  console.log(`${minSum} ${maxSum}`)

}

miniMaxSum(array)
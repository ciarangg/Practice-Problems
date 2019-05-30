// let array = [ 2, 3, 10, 2, 4, 8, 1 ]

let array = [10,8,7,6,5]


function maxDifference(arr) {
  
  let arrayOfDifferences = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (j < i && arr[j] < arr[i]) {
                arrayOfDifferences.push(arr[i] - arr[j])
            }
        }
    }

    console.log(arrayOfDifferences)

    if (arrayOfDifferences.length < 1) {
        return -1
    }
    else {
        return Math.max(...arrayOfDifferences)
    }


}

maxDifference(array)
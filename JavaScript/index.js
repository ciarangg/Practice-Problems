
// let array = [1, 3, 6, 4, 1, 2]

// let array = [1, 2, 3]

//[ 1, 1, 2, 3, 4, 6 ]

// let array = [-1, -3]

function solution(A) {
    A.sort()

    for(let i = 0; i < A.length; i++) {
      if(A.length === 1 && A[i-1] + 1 > 0) {
        return A[i] +1
      }
      if(i !== 0 && A[i] !== A[i-1] && A[i] !== A[i-1]+ 1 && A[i-1] + 1 > 0) {
        return A[i-1] +1
      }
      if(i === A.length - 1 && A[i-1] + 1 > 0) {
        return A[i] + 1
      }
      if(A[i-1] + 1 <= 0) {
        return 1
      }
    }

}

solution(array) 
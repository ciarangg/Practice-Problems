// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  
// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the  function in the editor below. It must return an integer representing the absolute diagonal difference.

// diagonalDifference takes the following parameter:

// arr: an array of integers .
// Input Format

// The first line contains a single integer, , the number of rows and columns in the matrix . 
// Each of the next  lines describes a row, , and consists of  space-separated integers .

// Constraints

// Output Format

// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19 
// Difference: |4 - 19| = 15

function diagonalDifference(arr) {

    let sumOne = 0
  
    let sumTwo = 0
  
    for (let i = 0; i < arr.length; i++) {         
      for (let j = 0; j < arr[i].length; j++) {
        if(i === j) {
          sumOne = sumOne + arr[i][j]
        }
      }
    }
  
    for (let i = 0; i < arr.length; i++) {         
      for (let j = 0; j < arr[i].length; j++) {
        if(i + j === arr.length - 1) {
          sumTwo = sumTwo + arr[i][j]
        }
      }
    }
  
    return Math.abs(sumOne - sumTwo)
  
  
  }
  
  // diagonalDifference(array)
  
  // let array = [ [ 11, 2, 4 ],[ 4, 5, 6 ],[ 10, 8, -12 ] ]
  
  //expected output 15
  
  // let array = [
  //   [-1, 1, -7, -8],
  //   [-10, -8, -5, -2],
  //   [0, 9, 7, -1],
  //   [4, 4, -2, 1]
  // ]
  
  //expected output 1
  
  // let array = [
  //   [6, 6, 7, -10, 9, -3, 8, 9, -1],
  //   [9, 7, -10, 6, 4, 1, 6, 1, 1],
  //   [-1, -2, 4, -6, 1, -4, -6, 3, 9],
  //   [-8, 7, 6, -1, -6, -6, 6, -7, 2],
  //   [-10, -4, 9, 1, -7, 8, -5, 3, -5],
  //   [-8, -3, -4, 2, -3, 7, -5, 1, -5],
  //   [-2, -7, -4, 8, 3, -1, 8, 2, 3],
  //   [-3, 4, 6, -7, -7, -8, -3, 9, -6],
  //   [-2, 0, 5, 4, 4, 4, -3, 3, 0]
  
  // ]
  
  //expected output 52
  
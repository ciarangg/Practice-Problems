let startPoint = 7
let endPoint = 11

let appleTree = 5
let orangeTree = 15

let applesss = [-2, 2, 1]
let orangesss = [5, -6]

function countApplesAndOranges(s, t, a, b, apples, oranges) {

  let numApples = 0

  let numOranges = 0

  apples = apples.map(function(e,i) {
    return e + a  
  })

  oranges = oranges.map(function(e,i) {
    return e + b 
  })

  apples.forEach(function(e,i) {
    if(e >= s && e <= t) {
      numApples = numApples + 1
    }
  })

  oranges.forEach(function(e,i) {
    if(e >= s && e <= t) {
      numOranges = numOranges + 1
    }
  })  
    console.log(numApples)
    console.log(numOranges)

}

countApplesAndOranges(startPoint, endPoint, appleTree, orangeTree, applesss, orangesss)




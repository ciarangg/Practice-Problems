let g = [ 73, 67, 38, 33 ]
// expected output 75,67,40,33

function gradingStudents(grades) {

  let rounded = grades.map(x => Math.ceil(x/5)*5)

  let returnArray = []
  
  grades.forEach(function(element,index,arr) {
    rounded.forEach(function(e,i,a) {

      if(index === i) {
        if( element >= 38 && e-element < 3 ){ 
          returnArray.push(e)
          console.log(e === [75])
        }
        else {
          returnArray.push(element)
        }
      }
    }) 
  })

  return returnArray

}

gradingStudents(g)
function solution(E, L) {

    let totalCost = 2
  
    let enterSplit = E.split(":")
  
    let leaveSplit = L.split(":")
  
    let hours = leaveSplit[0] - enterSplit[0]
  
    let minutes = leaveSplit[1] - enterSplit[1]
  
    if(minutes > 0) {
      hours = hours + 1
    }
  
    if (hours >= 1) {
      totalCost = totalCost + 3
    }
  
    for (i = 2; i <= hours; i++) { 
      totalCost = totalCost + 4
    }
  
    return totalCost
  
  }
  
  solution(enterTime, leaveTime)
  
  // let enterTime = "10:00"
  
  // let leaveTime = "13:21"
  
  // let enterTime = "00:00"
  
  // let leaveTime = "00:00"
  
  // let enterTime = "03:33"
  
  // let leaveTime = "03:34"
  
  // let enterTime = "03:00"
  
  // let leaveTime = "04:34"
  
  // let enterTime = "00:00"
  
  // let leaveTime = "23:00"
  
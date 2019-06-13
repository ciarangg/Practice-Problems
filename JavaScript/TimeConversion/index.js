
function timeConversion(s) {

    let militaryTime = ""
    
    let editTime
  
    if(s[0] === "1" && s[1] === "2") {
  
      if (s.includes("PM")) {
        editTime = s.replace("PM","")
        return editTime
      }
  
      else if (s.includes("AM")) {
        editTime = s.replace("AM","")
        editTime = editTime.split(":")
        editTime[0] = "00"
  
        editTime = editTime.forEach(function(e) {
          militaryTime = militaryTime + e + ":"
        })
  
        return militaryTime.slice(0, -1)
  
      }
    }
    
    else {
  
      if (s.includes("PM")) {
  
        editTime = s.replace("PM","")
        editTime = editTime.split(":")
        editTime[0] = parseInt(editTime[0])
        editTime[0] = editTime[0] + 12
        editTime[0] = editTime[0].toString()
        
        editTime = editTime.forEach(function(e) {
          militaryTime = militaryTime + e + ":"
        })
  
        return militaryTime.slice(0, -1)
      }
  
      else if (s.includes("AM")) {
        editTime = s.replace("AM","")
        return editTime
      }
    }
  }
  
  timeConversion(string)
  
  // let string = "07:05:45AM"
  // let string = "07:05:45PM"
  // let string = "12:05:45PM"
  // let string = "12:05:45AM"
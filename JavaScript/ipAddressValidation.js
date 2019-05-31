// Write a function which given an array of possible ip addresses, 
// returns an array determining whether each item in the array is
// IPv4 IPv6 or neither

function validateAddresses(addresses) {
    let returnArray = []

    let ipType = ""

    for (let i = 0; i < addresses.length; i++) {

        //first conditional: IPv4
        if (addresses[i].includes(".")) {

            let validOctal = ["0", "00", "01", "02", "03", "04", "05", "06", "07", "000", "001", "002", "003", "004", "005", "006", "007"]

            let ip = addresses[i].split(".")

            for (let j = 0; j < ip.length; j++) {

                if (ip[j] === "") {
                    ipType = "Neither"
                    break
                }

                if (ip[j][0] === "0" && !validOctal.includes(ip[j])) {
                    ipType = "Neither"
                    break
                }

                let checkNumber = Number(ip[j])

                if (ip.length === 4 && ip[j] >= 0 && ip[j] <= 255 && Number.isInteger(checkNumber)) {
                    ipType = "IPv4"
                }

                else {
                    ipType = "Neither"
                    break
                }
            }
        }

        //second conditional: IPv6
        else if (addresses[i].includes(":")) {

            let ip = addresses[i].split(":")

            if (ip.length > 8 || addresses[i].split("::") > 2) {
                ipType = "Neither"
            }

            else if (ip.length < 8 && addresses[i].split("::").length === 1) {
                ipType = "Neither"
            }

            else {

                for (let j = 0; j < ip.length; j++) {

                    let checkNumberRegEx = /^[0-9A-Fa-f]+$/g

                    if (ip[j] === "" || checkNumberRegEx.test(ip[j])) {
                        ipType = "IPv6"
                    }

                    else {
                        ipType = "Neither"
                        break
                    }
                    checkNumberRegEx.lastIndex = 0
                }
            }
        }

        //third conditional: not an ip address 
        else {
            ipType = "Neither"
        }

        returnArray.push(ipType)
    }

    return returnArray

}

// let ipAddresses =       ['121.18.19.20',
//   '0.12.12.34',
//   '121.234.12.12',
//   '23.45.12.56',
//   '0.1.2.3',
//   '2001:0db8:0000:0042:0000:8a2e:0370:7334',
//   'blahhhhh',
//   '2001:0db8:0000:0042:0000:8a2e:0370:000j']


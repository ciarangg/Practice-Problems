let i = [["owjevtkuyv", "58584272", "62930912" ],["rpaqgbjxik", "9425650", "96088250"], ["dfbkasyqcn", "37469674", "46363902"], ["vjrrisdfxe", "18666489", "88046739"]]
let sP = 2
let sO = 1
let iPP = 2
let pN = 0


function fetchItemsToDisplay(items, sortParameter, sortOrder, itemPerPage, pageNumber) {

    let returnArray = []

    let itemsInOrder = []

    let itemsInOrderOnPages = []

    itemsInOrder = items.sort(sortFunction);

    function sortFunction(a, b) {
      if(sortOrder === 0) {
      return a[sortParameter] > b[sortParameter]
      }
      else if (sortOrder === 1) {
        return a[sortParameter] < b[sortParameter]
      }
    }

    itemsInOrderOnPages = itemsInOrder.reduce(function(result, value, index, array) {
      if (index % itemPerPage === 0)
      result.push(array.slice(index, index + itemPerPage));
      return result;
    }, []);


    for(let i = 0; i < itemsInOrderOnPages[pageNumber].length; i++) {
      returnArray.push(itemsInOrderOnPages[pageNumber][i][0])
    }

    return returnArray


}

fetchItemsToDisplay(i, sP, sO, iPP, pN)


//[name/id,relevence,price]

// let i = [ [ 'p1', '1', '2' ], [ 'p2', '2', '1' ] ]
// let sP = 0
// let sO = 0
// let iPP = 1
// let pN = 0 


// let i = [["item1",10, 15 ],["item2",3,4], ["item3",17,8]]
// let sP = 1
// let sO = 0
// let iPP = 2
// let pN = 1

// let i = [["item1",10, 15 ],["item2",3,4], ["item3",17,8]]
// let sP = 1
// let sO = 0
// let iPP = 2
// let pN = 0

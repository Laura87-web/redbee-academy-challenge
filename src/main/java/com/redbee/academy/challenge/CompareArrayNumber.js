

  /**
   * Method that receives two lists and returns
   * another list with de max of each index
   * 
   ** Método que recibe dos listas y devuelve
    * otra lista con el máximo de cada índice
    * 
   * @param a - Some Integer Number (Some List of integer)
   * @param b - Another Integer Number (another list of integer)
   * @return The result of a + b (One list whit the max values of each index)
   */

//if the lists has the same length and cannot be empty
//--- Option 1 -----
function CompareArrayNumbers( a, b) {
//TODO: Implement me
    let newList = []
    for (let i = 0; i < a.length; i++){
        if( a[i] > b[i] ){
            newList.push( a[i] )
        }else{
            newList.push( b[i] )
        }
    }
    return newList
}

// --- Option 2 ----
function CompareArrayNumbers( a, b) {
//TODO: Implement me
return a.map((elem, index) => Math.max(elem, b[index]))   
  
}




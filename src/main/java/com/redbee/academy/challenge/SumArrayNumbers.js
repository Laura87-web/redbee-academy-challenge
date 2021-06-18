


  /**
   * Method that receives an array of numbers and
   * returns the sum of each number
   *
   * @param array - Some integer list. ([1,2,3])
   * @return The result of 1 + 2 + 3
   */
  
  //-----------------------------
  function sumArrayNumbers(array) {
    //TODO: Implement me
    let result = 0;
    for(let i = 0; i < array.length; i++){
        result = result + array[i]
    }
    return result;
  }
//-------------------------------
  //also exist a method that make array sums in one line    
  function sumArrayNumbers(array) {
    //TODO: Implement me
    return array.reduce((a,b) => a + b) 
  }
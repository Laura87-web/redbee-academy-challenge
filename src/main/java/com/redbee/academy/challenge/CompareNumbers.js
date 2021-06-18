
    /**
     * Method that receives two(three) numbers and returns the
     * max of both(them)
     *
     * @param a - Some Integer Number
     * @param b - Another Integer Number
     * @param c - Another Integer Number
     * @return The max of a, b and c
     */

//--- Option 1 -----
function CompareNumbers(a, b, c) {
    let max;
    if (a > b) {
        if (a > c) {
            max = a
        } else if (c > b) {
            max = c
        }
    } else if (b > c) {
        max = b
    } else {
        max = c
    }
    return max;
}

//----Option 2---
function CompareNumbers(a, b, c) {  
  
    return Math.max(a,b,c)
  
}

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative numbers are not palindromes (e.g., -121 reversed is 121-, not equal)
    if (x < 0) {
        return false;
    }
    
    let reversed = x.toString().split('').reverse().join('');
    return x.toString() === reversed;
};


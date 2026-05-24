/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const nums = [3,2,4]
const target = 6
let found = false

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                found = true;
                return [i, j];
            }
        }
    }
    if (!found) {
        console.log("Nothing Found");
    }
}

// Test call
console.log(twoSum(nums, target));

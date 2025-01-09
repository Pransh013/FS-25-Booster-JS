/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = [];
  const freqMap = new Map();
  nums.forEach((val, idx) => {
    if (freqMap.get(target - val) >= 0) {
      arr.push(freqMap.get(target - val), idx);
      return arr;
    } else {
      freqMap.set(val, idx);
    }
  });
  return arr;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort();
  let output = [];
  if (nums[0] > 0) return output;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      let j = i + 1;
      let k = nums.length - 1;
      while (j < k) {
        const sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          let triplet = [nums[i], nums[j], nums[k]];
          output.push(triplet);
          j++;
          k--;
          while (j < k && nums[j] === nums[j - 1]) j++;
          while (j < k && nums[k] === nums[k + 1]) k--;
        } else if (sum < 0) {
          j++;
        } else {
          k--;
        }
      }
    }
  }
  return output;
};

// Question 2: DSA Given an array of integers nums and an integer target, return the indices of the two
// numbers such that they add up to target. You may assume that each input would have exactly one
// solution, and you may not use the same element twice. You can return the answer in any order.
const nums = [2, 7, 11, 15];
const target = 17;

// Sol -1
const getindices = (nums, target) => {
  let matchedindices = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        matchedindices.push(i, j);
      }
    }
  }
  return matchedindices;
};

console.log(getindices(nums, target));

// Sol-2

const getindices2 = (nums, target) => {
  if (typeof target !== "number") {
    throw new Error("provide valid targernum");
  }
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const compliment = target - nums[i];
    if (!map.has(compliment)) {
      map.set(nums[i], i);
    } else {
      return [map.get(compliment), i];
    }
  }
};
try {
  console.log(getindices2(nums, target));
} catch (error) {
  console.log(error);
}   

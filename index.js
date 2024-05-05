function permuteUnique(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  const used = new Array(nums.length).fill(false);
  backtrack([]);
  return result;
  function backtrack(permutation) {
    if (permutation.length === nums.length) {
      result.push([...permutation]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]))
        continue;
      used[i] = true;
      permutation.push(nums[i]);
      backtrack(permutation);
      permutation.pop();
      used[i] = false;
    }
  }
}

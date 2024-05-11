function permute(nums) {
  const result = [];
  backtrack([]);
  return result;
  function backtrack(current) {
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }
    for (const num of nums) {
      if (current.includes(num)) continue;
      current.push(num);
      backtrack(current);
      current.pop();
    }
  }
}

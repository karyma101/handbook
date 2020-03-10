const insertionSort = (nums) => {
  counter = 0
  for(let i = 1; i < nums.length; i++){
    counter++
    for(let j = 0; j < i; j++){
      counter++
      if(nums[i] < nums[j]){
        const spliced = nums.splice(i, 1)
        nums.splice(j, 0, spliced[0])
      }
    }
  }
  console.log(counter)
  return nums
}

console.log(insertionSort([10,5,3,8,2,6,4,7,9,1]))
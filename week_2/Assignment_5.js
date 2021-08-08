function twoSum (nums,target){
    for (i = 0; i < nums.length; i++){
      for (j = 0; j < nums.length; j++){
        let a = nums[i];
        let b = nums[j];
        if ((a + b) === target && i < j) {
          console.log([i,j]);
      }
    }
  }
  }
  
  twoSum([2,7,11,5],9)//[ 0, 1 ]
  twoSum([2,7,11,5],16)//[ 2, 3 ]
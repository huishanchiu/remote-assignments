function max(numbers){
    let maxnumber = numbers[0];
    for (let i = 0; i < numbers.length; i++ ) {
      if (numbers[i] > maxnumber){
        maxnumber = numbers[i]
      }
    }
    return maxnumber;
  }

  max([1, 2, 4, 5]);//5
  max([4,78,23,68,99,101]);//101
// #12
// Instructions: For this challenge we will implement a function called checkAir(), which will check a collection of air samples. The function will take in two arguments. The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. The second argument is a number representing the highest acceptable amount of dirty samples. For example, a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.


const checkAir = function (samples, threshold) {
  var cleanCount = 0;
  var dirtyCount = 0;
  
   for(x=0; x < samples.length; x++){
       if(samples[x] === 'clean'){
           cleanCount += 1;
       } else if (samples[x]=== 'dirty'){
           dirtyCount +=1;
       }
   }
  
  if (dirtyCount * 0.1 > threshold){
      return "Polluted";
  } else {
      return "Clean";
  }
  
  }
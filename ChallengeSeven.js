// #7
// Instructions: We need to go through the survey responses to see what your constituents would like you to focus on over the course of your term in office. The array that you are given contains many phrases and words pulled from a number of interviews. We only want to focus on the following three key phrases: "smart city", "arts funding", and "transportation".

// Our termTopics function needs to count how many times each of those topics was mentioned in the surveys, and then return an array with the number of mentions in the following order: smart city, arts funding, and then transportation.    


const termTopics = (interviews) => {

    let results = [0,0,0];
    
   for (x = 0; x < interviews.length; x++) {
     if (interviews[x] === 'smart city') {
       results[0]+=1;
       
     } else if (interviews[x] === 'arts funding') {
       results[1]+=1;
     } else if(interviews[x] === 'transportation') {
       results[2]+=1;
     }
   }
   
   return results;
   
   }
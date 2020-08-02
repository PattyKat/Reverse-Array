// Write your code here:
const reverseArray=(array)=>{
  let newArray = [];
  for (let i= array.length - 1; i >= 0; i--){
     newArray.push(array[i]);
  };
  console.log(newArray);
};







// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];


reverseArray(sentence); 

// Should print ['This', 'will', 'all', 'make', 'sense.'];




module.exports = function transform(arr) {

    if((/-prev\b/).test(arr[0])) arr.shift();
    if((/-next\b/).test(arr[arr.length-1])) arr.pop();
  arr = arr.map((el,idx,ar) => {
        if(el=='--double-next') {
        return ar[idx+1];
        }
        else if(el=='--double-prev') {
            return ar[idx-1];
        }  
        else return el;
      });  
   while ( arr.indexOf('--discard-next') != -1) {
       arr.splice(arr.indexOf('--discard-next'),2);
       if((/-prev\b/).test(arr[0])) arr.shift();
      
   }
   while (arr.indexOf('--discard-prev') != -1) {
       arr.splice(arr.indexOf('--discard-prev')-1,2);
       if((/-prev\b/).test(arr[0])) arr.shift();
     
   }   

  return arr;
 
};

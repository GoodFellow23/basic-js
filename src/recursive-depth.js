module.exports = class DepthCalculator {
    
    calculateDepth(arr) { 

         if (arr.findIndex(el=>Array.isArray(el))==-1) return 1;         
         else return 1+this.calculateDepth(arr.flat(1));         
         
    }
};
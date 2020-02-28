module.exports = class DepthCalculator {
    
    calculateDepth(arr) { 

         return arr.findIndex(el=>Array.isArray(el))==-1? 1: 1+this.calculateDepth(arr.flat(1));           
    }
};

 
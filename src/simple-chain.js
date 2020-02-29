const chainMaker = {
   arr:[],    
  getLength() {
    return this.arr.length;
  },
  addLink(value="( )") {    
    this.arr=this.arr.concat(String(value)); 
    return  this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || 
    position!=Math.trunc(position) ||  
    position<=0  ||  
    position >= this.arr.length) throw this.finishChain(true);    
    
    this.arr= this.arr.filter((el,idx) =>idx==position-1? 0 :el);
    return this;
  },
  reverseChain() {
    this.arr=this.arr.reverse();
    return this;
  },
  finishChain(err) {
    if(err){
     return this.arr=[];
    }
    else {
    let result=this.arr.join(" )~~( ");
    this.arr=[];
    return result.padStart(result.length+2,"( ").padEnd(result.length+4," )");
   }
  } 
};

module.exports = chainMaker;

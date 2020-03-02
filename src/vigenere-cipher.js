class VigenereCipheringMachine {

    alphabet=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        
     constructor (value=true) {
        this.direct=value;
    }

    decrypt(str,key) {
        if(str == undefined || key == undefined) throw new Error();        
        let temp;
        let i = 0;
        str = this.direct ? str.toUpperCase().split('') : str.toUpperCase().split('').reverse();
        key = this.direct ? key.toUpperCase().split('') : key.toUpperCase().split('').reverse();
       
        return str.map((el,idx) => {            
          if(this.alphabet.indexOf(el) == -1) return el;          
          else {
              i = (i < key.length ? i : 0);
              temp = this.alphabet.length + this.alphabet.indexOf(el) - this.alphabet.indexOf(key[i++]); 
              return this.alphabet[temp < this.alphabet.length ? temp : temp - this.alphabet.length];             
            }
        }).join('');
    };

    encrypt(str,key) {        
        if(str==undefined || key==undefined) throw new Error();
        let temp=0;
        let i=0;
        str = this.direct ? str.toUpperCase().split('') : str.toUpperCase().split('').reverse();
        key = this.direct ? key.toUpperCase().split('') : key.toUpperCase().split('').reverse();

       return str.map((el) => {                      
          if(!this.alphabet.includes(el)) return el;
          else {
              i = (i < key.length ? i : 0);
              temp = this.alphabet.indexOf(el) + this.alphabet.indexOf(key[i++]);              
              return this.alphabet[temp < this.alphabet.length ? temp : temp - this.alphabet.length];
            }            
        }).join('');
    };    
}
   
module.exports = VigenereCipheringMachine;

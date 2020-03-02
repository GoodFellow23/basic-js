module.exports = function getSeason( date ) {

    if(!date) return 'Unable to determine the time of year!';

    if(!(Object.prototype.toString.apply(date) === '[object Date]')) throw new Error;
    if(date.getMonth() >11 || date.getMonth() < 0) throw new Error;    
    if(2 <= date.getMonth() && date.getMonth() < 5) return 'spring';
    else if( 5 <= date.getMonth() && date.getMonth() < 8) return 'summer';
    else if( 8 <= date.getMonth() && date.getMonth() < 11) return 'autumn';
    else return 'winter';
    
   
    
};

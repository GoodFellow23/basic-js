

module.exports = function repeater(str, options) {
    
    if(!options.separator) options.separator='+';
    if(!options.additionSeparator) options.additionSeparator='|';
    if(options.addition===null)options.addition="null";
    return  (Array(options.repeatTimes).fill(str+(Array(options.additionRepeatTimes).fill(options.addition).join(options.additionSeparator))).join(options.separator));
};
  
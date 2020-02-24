module.exports = function countCats(matrix) {
   return matrix.flat().reduce((temp, item) => temp + (item =="^^"?1:0),0);
};

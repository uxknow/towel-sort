
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let towelSort = [];
  if (!matrix) {
    return [];
  }
matrix.forEach((el, i) => !(i%2) ? el : el.reverse());
 towelSort = [].concat(...matrix);
  return towelSort;
}

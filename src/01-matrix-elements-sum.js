/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let column;
  let index;
  const getColumn = (columnId) => {
    const col = [];
    matrix.forEach((row) => col.push(row[columnId]));
    return col;
  };
  for (let x = 0; x < matrix[0].length; x++) {
    column = getColumn(x);
    index = column.findIndex((el) => el === 0);
    if (index !== -1) {
      sum += column.slice(0, index).reduce((a, c) => a + c, 0);
    } else {
      sum += column.reduce((a, c) => a + c, 0);
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;

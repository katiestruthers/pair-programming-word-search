// Collaboration with @EstelleWho

const transpose = function(matrix) {
  let newMatrix = [];
  
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push([]);
    for (let j = 0; j < matrix.length; j++) {
      newMatrix[i].push(matrix[j][i]);
    }
  }

  return newMatrix;
};

// const diagonalJoin = function(matrix) {
//   const newArray = Array(matrix[0].length * 2).fill('');

//   for (let i = 0; i < matrix[0].length; i++) {
//     let column = i;
//     for (let j = 0; j <= i; j++) {
//       newArray[i] += matrix[column][j];
//       column--;
//     }

//     column = i;
//     for (let j = matrix[0].length - i - 1; j < matrix[0].length - i; j++) {
//       newArray[i + matrix[0].length] += matrix[column][j];
//       column--;
//     }
//   }

//   console.log(newArray);

//   return newArray;
// };

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  const horizontalJoinReverse = letters.map(ls => ls.reverse().join(''));
  const horizontalJoin = letters.map(ls => ls.reverse().join(''));
  // const horizontalDiagonalJoin = diagonalJoin(letters);
  const verticalJoinReverse = transpose(letters).map(ls => ls.reverse().join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  // const verticalDiagonalJoin = diagonalJoin(transpose(letters));

  for (let i = 0; i < horizontalJoin.length; i++) {
    if (horizontalJoin[i] === word || horizontalJoinReverse[i] === word) return true;
  }

  for (let i = 0; i < verticalJoin.length; i++) {
    if (verticalJoin[i] === word || verticalJoinReverse[i] === word) return true;
  }

  // for (let i = 0; i < horizontalDiagonalJoin.length; i++) {
  //   if (horizontalDiagonalJoin[i] === word || verticalDiagonalJoin[i] === word) return true;
  // }

  return false;
};

module.exports = wordSearch;

const matrix = [
  ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
  ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']];

wordSearch(matrix, 'SEINFELD');


// // top-left to bottom-right
// total = 0;
// column = i;
// for (j = 0; j < (8 - i); j++) {
//   total += board[column][j];
//   column++;
// }
// if (total === 2) {
//   return true;
// }
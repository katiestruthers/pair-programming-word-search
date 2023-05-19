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

const wordSearch = (letters, word) => {
  if (letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticalJoin = transpose(letters).map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
};

module.exports = wordSearch;
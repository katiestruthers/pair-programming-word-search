const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js');

describe("#wordSearch()", function() {
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

  // CORE TESTING //

  it("should return false if empty array", function() {
    const result = wordSearch([], '');
    assert.isFalse(result);
  });
  
  it("should return false if the word is not present", function() {
    const result = wordSearch(matrix, 'FRANK');
    assert.isFalse(result);
  });

  it("should return true if the word is present (forwards, horizontal)", function() {
    const result = wordSearch(matrix, 'SEINFELD');
    assert.isTrue(result);
  });

  it("should return true if the word is present (forwards, vertical)", function() {
    const result = wordSearch(matrix, 'ASYHWBUOE');
    assert.isTrue(result);
  });

  // STRETCH TESTING //

  it("should return true if the word is present (backwards, horizontal)", function() {
    const result = wordSearch(matrix, 'DLEFNIES');
    assert.isTrue(result);
  });

  it("should return true if the word is present (backwards, vertical)", function() {
    const result = wordSearch(matrix, 'EOUBWHYSA');
    assert.isTrue(result);
  });

  // it("should return true if the word is present (diagonal, bottom-right to top-left)", function() {
  //   const result = wordSearch(matrix, 'UKWRHH');
  //   assert.isTrue(result);
  // });

  // it("should return true if the word is present (diagonal, bottom-left to top-right)", function() {
  //   const result = wordSearch(matrix, 'FKPYL');
  //   assert.isTrue(result);
  // });
});

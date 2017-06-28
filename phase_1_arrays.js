Array.prototype.uniq = function(){
  let uniques = [];
  for(let i = 0; i < this.length; i++){
    if (!uniques.includes(this[i])){
      uniques.push(this[i]);
    }
  }
  return uniques;

}

Array.prototype.twoSum = function(){
  let pairs = [];
  for (let i = 0; i < this.length-1; i++){
    for(let j = i + 1; j< this.length; j++ ){
      if (this[i] + this[j] === 0){
        pairs.push([i, j]);
      }
    }
  }

  return pairs;
}

Array.prototype.printMatrix = function() {
  for (let row = 0; row < this.length; row++) {
    let string = "[";
    for (let col = 0; col < this[row].length; col++) {
      string += this[row][col] + ","
    }
    string += "]"
    console.log(string);
  }
}

Array.prototype.transpose = function(){
  // [ [1,2,3], [4,5,6], [7,8,9] ]
  // [ [1,4,7], [2,5,8], [3,6,9] ]
  transposed = []
  for (let i = 0; i < this[0].length; i++) {
    transposed.push([])
  }

  for (let row = 0; row < this.length; row++) {
    for (let col = 0; col < this[row].length; col++) {
      transposed[col][row] = this[row][col];
    }
  }

  return transposed;
}

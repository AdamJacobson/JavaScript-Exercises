Array.prototype.bubblesort = function(){
  let sorted = this.slice();
  let switched = true;

  while (switched){
    switched = false;

    for (let i = 0; i < this.length - 1; i++){
      let j = i + 1;

      if (sorted[i] > sorted[j]) {
        let temp = sorted[i];
        sorted[i] = sorted[j];
        sorted[j] = temp;
        switched = true;
      }
    }
  }
  return sorted;
}

String.prototype.substrings = function() {
  let substrings = [];
  for (let i = 0; i < this.length; i++) {
    for (let k = i + 1; k < this.length + 1; k++) {
      substrings.push(this.slice(i, k));
    }
  }
  return substrings;
}

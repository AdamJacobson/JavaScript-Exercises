Array.prototype.myEach = function(callback){
  for (let i = 0; i < this.length; i++){
    callback(this[i]);
  }
}

Array.prototype.myMap = function(callback){
  let mapped = [];

  const map = function(el) {
    mapped.push(callback(el));
  }
  this.myEach(map);

  return mapped;
}

Array.prototype.myReduce = function(callback, initialValue = null) {
  const reduce = function(el){
    accumulator = callback(accumulator, el);
  }

  let accumulator;
  if (initialValue === null) {
    accumulator = this[0];
    this.slice(1).myEach(reduce);
  } else {
    accumulator = initialValue;
    this.myEach(reduce);
  }
  return accumulator;
}

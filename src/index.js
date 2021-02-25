
exports.min = function min (array) {
  if (Array.isArray(array) && array.length) {
    return array.reduce((a, b) => (a < b ? a : b));
  } else {
    return 0;
  }  
}

exports.max = function max (array) {
  if (Array.isArray(array) && array.length) {
    return array.reduce((a, b) => (a > b ? a : b))
  } else {
    return 0;
  }
  
}

exports.avg = function avg (array) {
  if (Array.isArray(array) && array.length) {
    return array.reduce((a, b) => (a + b)) / array.length;
  } else {
    return 0;
  }
}

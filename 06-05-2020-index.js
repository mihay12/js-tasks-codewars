//1. https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript?fbclid=IwAR0iHYt1qy8dONVPFaksjGoW-J6pYpKVkOEhoVxGEw6jiQ6v31VnmD4k_Es
var min = function (list) {
  for (let i = 0; i < list.length; i++) {
    if (list[0] > list[i]) {
      list[0] = list[i];
    }
  }
  return list[0];
};

var max = function (list) {
  for (let i = 0; i < list.length; i++) {
    if (list[0] < list[i]) {
      list[0] = list[i];
    }
  }
  return list[0];
};


//2. https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
function maps(x) {
  const array = [];
  for (let i = 0; i < x.length; i++) {
    array.push(x[i] * 2);
  }
  return array;
}

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

//3. https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript?fbclid=IwAR3llJ0VKNjb8JnaCBS_bpbu-wIMgxmDvGn2fsUxU89XMJPtlIAsAEu9kVc
function stringToArray(string) {
  return string.split(" ");
}

//4. 


//Завдання не з домашньої роботи:
//1. https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) even.push(arr[i]);
    else odd.push(arr[i]);
  }
  return [odd, even];
}

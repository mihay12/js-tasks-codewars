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

//4. https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript?fbclid=IwAR3JIuuTPmhz0yk7N1-GBUXlCDw9B4r0vaHho22iRvGOSQ84jWX1X2Cix9E
function warnTheSheep(queue) {
  let index = 0;
  queue.reverse();
  if (queue[0] === "wolf") {
    return "Pls go away and stop eating my sheep";
  } else {
    for (let i = 0; i < queue.length; i++) {
      if (queue[i] === "sheep") {
        index++;
      } else {
        break;
      }
    }
    return (
      "Oi! Sheep number " + index + "! You are about to be eaten by a wolf!"
    );
  }
}


//5. https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript?fbclid=IwAR2g4XqbR_z94F1vtBJYr8BMA2oUWCtpib3hGcb4qE034g3ndP7zbe9oJB4
function firstNonConsecutive(arr) {
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] + 1 !== arr[i]) {
      console.log(arr[i]);
      return arr[i];
    }
  }
  return null;
}


//6. https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript?fbclid=IwAR2Ac2owq-tEC6iRYvAQQ7gB489EbN9cKTGzVbbqciait_lgvYOUIDscnqE 
function min(arr, toReturn) {
console.log(arr);
  let minIndex = 0;
  if (toReturn === "value") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[0] > arr[i]) {
          arr[0] = arr[i];
      }
    }
    return arr[0];
  }
  if (toReturn === "index") {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] > arr[i]) {
            arr[0] = arr[i];
            minIndex = i;
        }  
      }
    return minIndex;
  }
}

//7. https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript?fbclid=IwAR1RHPne4_L8z7-aATt0zb131hME4uRfI4Y3nkm4NPtNy5yBrsHB6HB2PYM 
function DNAtoRNA(dna) {
  dna.split();
  let rna = [];
  console.log(dna);
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna.push("U");
      continue;
    }
    rna.push(dna[i]);
  }

  return rna.join("");
}



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

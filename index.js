function numberToWords(number) {
  let arr = [1];
  for (i = 0; i < 15; i++){
    arr.push(arr[i] * 10);
  }
  arr.reverse();
  let sebutan = {
    1: 'satu',
    2: 'dua',
    3: 'tiga',
    4: 'empat',
    5: 'lima',
    6: 'enam',
    7: 'tujuh',
    8: 'delapan',
    9: 'sembilan'
  }

  if (number < 1) return '';
  let numStr = String(number);
  let text = '';
  if (numStr.length % 3 == 2) {
    if (numStr[0] == '1') {
      if (numStr[1] == '1') text = 'sebelas ';
      else if (numStr[1] == '0') text = 'sepuluh ';
      else text = sebutan[numStr[1]] + ' belas ';
    }
    else text = sebutan[numStr[0]] + ' puluh ';
  }
  else if (numStr.length % 3 == 1) {
    if (numStr.length >= 7) text = sebutan[numStr[0]] + ' ';
    else if (numStr.length == 4) {
      if (numStr[0] == '1') text = 'seribu ';
      else text = sebutan[numStr[0]] + ' ribu ';
    }
    else if (numStr.length == 1) text = sebutan[numStr[0]];
  }
  else if (numStr.length % 3 == 0) {
    if (numStr[0] == '1') text = 'seratus ';
    else text = sebutan[numStr[0]] + ' ratus ';
  }

  if ((numStr[1] == '0' && numStr[2] == '0') || numStr.length % 3 > 0) {
    if (numStr.length >= 13) text += 'triliun ';
    else if (numStr.length >= 10) text += 'milyar ';
    else if (numStr.length >= 7) text += 'juta ';
    else if (numStr.length > 4) text += 'ribu ';
  }

  let temp = 0;
  for (let i in arr) {
    if (number / arr[i] >= 1) {
      if (numStr.length % 3 == 2 && numStr[0] == '1' && numStr[1] !== '0') {
        let a = Math.floor(number / arr[i]) * arr[i];
        let b = Math.floor((number - a) / arr[Number(i) + 1]) * arr[Number(i) + 1];
        temp = a + b;
        break;
      }
      else {
        temp = Math.floor(number / arr[i]) * arr[i];
        break;
      }
    }
  }

  return text + numberToWords(number - temp);
  // Your code here
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

function numberToWords(number) {
  let output = '',
    steps = [[1, 'satu'], [10, 'puluh'], [100, 'ratus'], [1000, 'ribu'], [1000000, 'juta'], [1000000000, 'milyar'], [1000000000000, 'triliyun']],
    dictionary = {
      1: 'satu', 2: 'dua', 3: 'tiga', 4: 'empat', 5: 'lima', 6: 'enam', 7: 'tujuh', 8: 'delapan', 9: 'sembilan', 10: 'sepuluh',
      11: 'sebelas', 12: 'dua belas', 13: 'tiga belas', 14: 'empat belas', 15: 'lima belas', 16: 'enam belas', 17: 'tujuh belas',
      18: 'delapan belas', 19: 'sembilan belas'
  };
  
  if (number < 20) {
    return dictionary[number];
  }
  for (let i = steps.length - 1; i >= 0; i--) {
    if (number >= steps[i][0]) {
      if (Math.floor(number / steps[i][0]) === 1 && i === 3) {
        output += 'se';
      } else if (Math.floor(number / steps[i][0]) >= 20) {
        output += numberToWords(Math.floor(number / steps[i][0]));
        output += ' ';
      } else {
        output += dictionary[Math.floor(number / steps[i][0])];
        output += ' ';
      }
      output += steps[i][1];
      number %= steps[i][0];
      if (number > 0) {
        output += ' ';
        output += numberToWords(number);
      }
      break;
    }
  }  
  return output;
}

// Driver code
console.log(numberToWords(20));
console.log(numberToWords(20131));
console.log(numberToWords(1000011));
console.log(numberToWords(82102713));

//abaikan code dibawah ini
module.exports = numberToWords;

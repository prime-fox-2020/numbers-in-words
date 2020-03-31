function numberToWords(number) {
  let output = '',
  steps = [[1],[10, 'puluh'], [100, 'ratus'], [1000, 'ribu'], [1000000, 'juta']],
  dictionary = {
      1: 'satu', 2: 'dua', 3: 'tiga', 4: 'empat', 5: 'lima', 6: 'enam', 7: 'tujuh', 8: 'delapan', 9: 'sembilan', 10: 'sepuluh',
      11: 'sebelas', 12: 'dua belas', 13: 'tiga belas', 14: 'empat belas', 15: 'lima belas', 16: 'enam belas', 17: 'tujuh belas',
      18: 'delapan belas', 19: 'sembilan belas'
  };

  if (number < 20) {
    // console.log(dictionary[number])
    return dictionary[number];
  }
  for (let i = steps.length - 1; i >= 0; i--) {
    if (number < 20 && number !==0) {
      output += numberToWords(number);
      number %= number;
    } else if (number >= steps[i][0]) {
      if (Math.floor(number / steps[i][0]) === 1) {
        output += 'se';
        output += steps[i][1];
      } else {
        output += dictionary[Math.floor(number / steps[i][0])];
        output += ' ';
        output += steps[i][1];
      }
      number = number % steps[i][0];
      output += ' ';
    }
  }  
  return output;
}

// Driver code
console.log(numberToWords(112));
console.log(numberToWords(921));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

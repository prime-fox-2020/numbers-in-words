function numberToWords(number) {
  // Your code here
  let string = number + ''
  let numbers = string.length % 3;
  if (numbers === 0) numbers = 3;
  let result = ''

  let numerator = string.substr(0, numbers);

  for (let i = 0; i < numerator.length; i++) {
      let cache = '';
      switch (numerator[numerator.length - 1 - i]) {
          case '1':
              cache += 'se';
              break;
          case '2':
              cache += 'dua ';
              break;
          case '3':
              cache += 'tiga ';
              break;
          case '4':
              cache += 'empat ';
              break;
          case '5':
              cache += 'lima ';
              break;
          case '6':
              cache += 'enam ';
              break;
          case '7':
              cache += 'tujuh ';
              break;
          case '8':
              cache += 'delapan ';
              break;
          case '9':
              cache += 'sembilan ';
              break;
      }

      if (numerator[numerator.length - 2] === '1' && numerator[i] !== '0' && i === 0) {
          cache += 'belas ';
          i++;
      } else if (i === 0 && numerator[numerator.length - 1] === '1' && !(string.length < 7 && string.length > 3)) {
          cache = 'satu ';
      } else if (i === 0 && numerator[numerator.length - 1] === '1' && numerator.length > 1) {
          cache = 'satu ';
      } else if (i === 1 && cache) cache += 'puluh ';
      else if (i === 2 && cache) cache += 'ratus ';
      result = cache + result;
  }

  if (string.length > 12) return result + 'trilyun ' + numberToWords(number % 1000000000000);
  else if (string.length > 9) return result + 'milyar ' + numberToWords(number % 1000000000);
  else if (string.length > 6) return result + 'juta ' + numberToWords(number % 1000000);
  else if (string.length > 3) return result + 'ribu ' + numberToWords(number % 1000);
  else return result;
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

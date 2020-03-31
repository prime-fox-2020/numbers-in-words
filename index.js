function numberToWords(number) {
  // Your code here
  let dict = [
    '', 'satu', 'dua', 'tiga', 'empat', 'lima', 
    'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 
    'sebelas'
  ]
  if (number == 0){
    return "";
  }

  if (number < 12) {
    return dict[number];
  }

  if (number < 20){
    return numberToWords(number % 10) + ' belas'
  }

  if (number < 100){
    return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(Math.floor(number % 10))
  }

  if (number < 200){
    return 'seratus ' + numberToWords(Math.floor(number % 100));
  }

  if (number < 1000){
    return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(Math.floor(number % 100))
  }

  if (number < 2000){
    return 'seribu ' + numberToWords(Math.floor(number % 1000));
  }

  if (number < 1000000){
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(Math.floor(number % 1000))
  }

  if (number < 1000000000){
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(Math.floor(number % 1000000))
  }

  if (number < 1000000000000){
    return numberToWords(Math.floor(number / 1000000000)) + ' miliar ' + numberToWords(Math.floor(number % 1000000000))
  }

  if (number < 1000000000000000){
    return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(Math.floor(number % 1000000000000))
  }

}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

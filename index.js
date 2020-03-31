function numberToWords(number) {
  // Your code here
  var arr = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']

  if (number == 0){
    return ''
  }
  if (number <= 11){
    return arr[number]
  }
  if (number <= 19){
    return arr[number % 10] + ' belas'
  }
  if (number <= 99){
    return arr[Math.floor(number / 10)] + ' puluh ' + numberToWords(number % 10)
  }
  if (number <= 999){
    if (Math.floor(number/100) == 1){
      return 'seratus ' + numberToWords(number % 100)
    }
    return arr[Math.floor(number / 100)] + ' ratus ' + numberToWords(number % 100)
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

console.log(numberToWords(1));
console.log(numberToWords(89));
console.log(numberToWords(289));
console.log(numberToWords(1189));
console.log(numberToWords(1999));
console.log(numberToWords(4371641));
console.log(numberToWords(1111899999999));

//abaikan code dibawah ini
module.exports = numberToWords;

function numberToWords(number) {
  var words = [
    '',
    'satu',
    'dua',
    'tiga',
    'empat',
    'lima',
    'enam',
    'tujuh',
    'delapan',
    'sembilan',
    'sepuluh',
    'sebelas',
  ]
  if (number < 12) {
    return words[number]
  } else if (number < 20) {
    return numberToWords(number - 10) + ' belas '
  } else if (number <100) {
    return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
  } else if (number >99 && number <200) {
    return  'seratus ' + numberToWords(number - 100)
  } else if (number < 1000){
    return  numberToWords(Math.floor(number/100)) + ' ratus ' + numberToWords(number % 100 )
  } else if (number > 999 && number < 2000){
    return 'seribu ' + numberToWords(number - 1000)
  } else if (number < 1000000){
    return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number % 1000)
  } else if (number < 1000000000){
    return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number % 1000000)
  } else if (number < 1000000000000){
    return numberToWords(Math.floor(number/1000000000)) + ' milyar ' + numberToWords(number % 1000000000000)
  } else if (number < 1000000000000000){
    return numberToWords(Math.floor(number/1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000000)
  }

}

  //testcode 1-99
  // console.log(numberToWords(123910242));
  // console.log(numberToWords(123224));
  // console.log(numberToWords(32));
  // console.log(numberToWords(105));
  console.log(numberToWords(1104));
  console.log(numberToWords(985678));
  console.log(numberToWords(11223));
  console.log(numberToWords(1140));
  console.log(numberToWords(34500));

// Driver code
// console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));

//abaikan code dibawah ini
// module.exports = numberToWords;

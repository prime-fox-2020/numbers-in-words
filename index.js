function numberToWords(number) {
  // Your code here
  var num = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan', 'Sepuluh', 'Sebelas']

  if (number < 12){
    return num[number]
  } else if (number < 20){
    return numberToWords(number%10) + " Belas"
  } else if (number < 100){
    return numberToWords(Math.floor(number/10)) + " Puluh " + numberToWords(number%10)
  } else if (number < 200){
    return "Seratus " + numberToWords(number%100)
  } else if (number < 1000){
    return numberToWords(Math.floor(number/100)) + " Ratus " + numberToWords(number%100)
  } else if (number < 2000){
    return "Seribu " + numberToWords(number%1000)
  } else if (number < 1000000){
    return numberToWords(Math.floor(number/1000)) + " Ribu " + numberToWords(number%1000)
  } else if (number < 1000000000){
    return numberToWords(Math.floor(number/1000000)) + " Juta " + numberToWords(number%1000000)
  } else if (number < 1000000000000){
    return numberToWords(Math.floor(number/1000000000)) + " Milyar " + numberToWords(number%1000000000)
  } else if (number < 1000000000000000){
    return numberToWords(Math.floor(number/1000000000000)) + " Triliun " + numberToWords(number%1000000000000)
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

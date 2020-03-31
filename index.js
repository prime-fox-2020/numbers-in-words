function numberToWords(number) {
  // Your code here
  if (number!==0){
      var satuan = 
      [
        'Satu',
        'Dua', 
        'Tiga', 
        'Empat', 
        'Lima', 
        'Enam', 
        'Tujuh', 
        'Delapan', 
        'Sembilan', 
        'Sepuluh', 
        'Sebelas']

      if (number < 12) {
        return satuan[number-1];
      }
      if (number < 20){
        return numberToWords(number % 10) + ' Belas'
      }
      if (number < 100){
        return numberToWords(Math.floor(number / 10)) + ' Puluh ' + numberToWords(Math.floor(number % 10))
      }
      if (number < 200){
        return 'Seratus ' + numberToWords(Math.floor(number % 100));
      }
      if (number < 1000){
        return numberToWords(Math.floor(number / 100)) + ' Ratus ' + numberToWords(Math.floor(number % 100))
      }
      if (number < 2000){
        return 'Seribu ' + numberToWords(Math.floor(number % 1000));
      }
      if (number < 1000000){
        return numberToWords(Math.floor(number / 1000)) + ' Ribu ' + numberToWords(Math.floor(number % 1000))
      }
      if (number < 1000000000){
        return numberToWords(Math.floor(number / 1000000)) + ' Juta ' + numberToWords(Math.floor(number % 1000000))
      }
      if (number < 1000000000000){
        return numberToWords(Math.floor(number / 1000000000)) + ' Milyar ' + numberToWords(Math.floor(number % 1000000000))
      }
      if (number < 1000000000000000){
        return numberToWords(Math.floor(number / 1000000000000)) + ' Triliun ' + numberToWords(Math.floor(number % 1000000000000))
      }
  }else{
    return " "
  }
}
// Driver code
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079));
console.log(numberToWords(82102713));
console.log(numberToWords(999));
console.log(numberToWords(999999999999));


//abaikan code dibawah ini
module.exports = numberToWords;
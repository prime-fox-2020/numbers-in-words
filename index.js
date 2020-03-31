function numberToWords(num) {
  let words = ["", " satu ", " dua ", " tiga ", " empat ", " lima ", "enam ", " tujuh ", " delapan ", " sembilan ", " sepuluh ", " sebelas "];

  if (num < 12) {
    return words[num];
  }
  else if (num <= 19) {
    return numberToWords(num - 10 ) + " belas";
  }
  else if (num < 100) {
    return numberToWords(num - 10) + " puluh" + numberToWords(num %10);
  }
  else if (num > 99 && num < 200) {
    return "seratus" + numberToWords(num - 100);
  }
  else if (num < 1000) {
    return words[Math.floor(num/100)] + " ratus" + numberToWords(num % 100);
  }
  else if (num > 999 && num < 2000){
    return "seribu" + numberToWords(num - 1000);
  }
  else if (num < 1000000) {
    return numberToWords(Math.floor(num/1000)) + " ribu" + numberToWords(num % 1000);
  }
  else if (num < 1000000000) {
    return numberToWords(Math.floor(num/1000000)) + " juta" + numberToWords(num % 1000000);
  }
  else if (num < 1000000000000) {
    return numberToWords(Math.floor(num/1000000000)) + " miliar" + numberToWords(num % 1000000000);
  }
  else if (num < 1000000000000000) {
    return numberToWords(Math.floor(num % 1000000000000)) + " trilliun" + numberToWords(num % 1000000000000);
  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

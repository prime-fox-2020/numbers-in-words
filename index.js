function numberToWords(number) {
  // Your code here
  let satuan = ['', 'se', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']

  if(number === 1){
    return 'satu '
  }else if(number < 12 && number !== 1){
    return satuan[number]
  }else if(number < 20){
    return numberToWords(number % 10) + " belas"
  }else if(number < 100){
    return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
  }else if(number < 200){
    return "seratus " + numberToWords(number % 100)
  }else if (number < 1000){
    return numberToWords(Math.floor(number / 100)) + " ratus " + numberToWords(number % 100)
  }else if (number < 2000){
    return "seribu " + numberToWords(number % 1000)
  }else if (number < 1000000){
    return numberToWords(Math.floor(number / 1000)) + " ribu " + numberToWords(number % 1000)
  }else if (number < 1000000000){
    return numberToWords(Math.floor(number / 1000000)) + " juta " + numberToWords(number % 1000000)
  }else if (number < 1000000000000){
    return numberToWords(Math.floor(number / 1000000000)) + " milyar " + numberToWords(number % 1000000000)
  }else if (number < 1000000000000000){
    return numberToWords(Math.floor(number / 1000000000000)) + " triliun " + numberToWords(number % 1000000000000)
  }
}

// Driver code
console.log(numberToWords(11));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

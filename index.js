function numberToWords(number) {
  // Your code here
  let satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']

  for(let i = 0; i < satuan.length; i++) {
    if(number < 12) {
      return satuan[number]
    } else if(number <= 19) {
      return numberToWords(number - 10) +' belas'
    } else if(number < 100) {
      return satuan[Math.floor(number/10)] + ' puluh ' + numberToWords(number % 10)
    } else if(number > 99 && number < 200) {
      return 'seratus ' + numberToWords(number - 100)
    } else if(number < 1000) {
      return satuan[Math.floor(number/100)] +' ratus ' + numberToWords(number % 100)
    } else if(number > 999 && number  < 2000) {
      return 'seribu ' + numberToWords(number - 1000)
    } else if(number < 1000000) {
      return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number % 1000)
    } else if(number < 1000000000) {
      return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number % 1000000)
    }  else if(number < 1000000000000) {
      return numberToWords(Math.floor(number/1000000000)) + ' miliar ' + numberToWords(number % 1000000000)
    }  else if(number < 1000000000000000) {
      return numberToWords(Math.floor(number/1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000)
    }
  }
}

// Driver code

console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

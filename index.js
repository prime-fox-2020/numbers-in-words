function numberToWords(number) {
  // Your code here
  let obj = {
    10 : 'sepuluh',
    9 : 'sembilan',
    8 : 'delapan',
    7 : 'tujuh',
    6 : 'enam',
    5 : 'lima',
    4 : 'empat',
    3 : 'tiga',
    2 : 'dua',
    1 : 'satu'
  }

  if(number === 0) {
    return ''
  } else if (number <= 10) {
    return obj[number]
  } else if (number > 10 && number < 20) {
    if (number % 10 === 1){
      return 'sebelas'
    } else {
      return obj[number % 10] + ' belas '
    }
  } else if (number > 20 && number < 100){
    return obj[Math.floor(number / 10)] + ' puluh ' + numberToWords(number % 10)
  } else if (number >= 100 && number < 1000) {
    if (number / 100 === 1) {
      return 'seratus' + numberToWords(number % 100)
    } else {
      return obj[Math.floor(number / 100)] + ' ratus ' + numberToWords(number % 100)
    }
  }
 
}

// Driver code
console.log(numberToWords(999))
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

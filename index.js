function numberToWords(number) {
  // Your code here
  // let result = ''
  // if (number > 999999999999999) {
  //   return 'number melebihi 999 triliun'
  // } else{
  //   // triliun
  //   if ((number / 1000000000000) >= 1){
  //     result += `${numberToWords(number / 1000000000000)} triliun `
  //     number %= 1000000000000
  //   }

  //   // miliaran
  //   if ((number / 1000000000) >= 1){
  //     result += `${numberToWords(number / 1000000000)} miliar `
  //     number %= 1000000000
  //   }

  //   // jutaan
  //   if ((number / 1000000) >= 1){
  //     result += `${numberToWords(number / 1000000)} juta `
  //     number %= 1000000
  //   }

  //   // ribuan
  //   if ((number / 1000 >= 1 && (number < 2000 && number >= 1000))) {
  //     result += 'seribu '
  //     number %= 1000
  //   } else if ((number / 1000) >= 1){
  //     result += `${numberToWords(number / 1000)} ribu `
  //     number %= 1000
  //   }

  //   // ratusan
  //   if ((number / 100 >= 1 && (number < 200 && number >= 100))) {
  //     result += 'seratus '
  //     number %= 100
  //   } else if ((number / 100) >= 1){
  //     result += `${numberToWords(number / 100)} ratus `
  //     debugger
  //     number %= 100
  //     debugger
  //   }

  //   // puluhan
  //   if ((number / 10) >= 1 && (number >= 20)) {
  //     result += `${numberToWords(number / 10)} puluh `
  //     debugger
  //     number %= 10
  //     debugger
  //     // belasan
  //   } else if ((number / 10) >= 1) {
  //     let belasan = {
  //       'sembilan belas': 19,
  //       'delapan belas': 18,
  //       'tujuh belas': 17,
  //       'enam belas': 16,
  //       'lima belas': 15,
  //       'empat belas': 14,
  //       'tiga belas' : 13,
  //       'dua belas' : 12,
  //       'sebelas' : 11,
  //       'sepuluh' : 10
  //     }
  //     for (const key in belasan) {
  //       if (number >= belasan[key]) {
  //         result += key
  //         return result
  //       }
  //     }
  //   }

  //   // satuan
  //   if (number > 0) {
  //     let satuan = {
  //       'sembilan' : 9,
  //       'delapan' : 8,
  //       'tujuh' : 7,
  //       'enam' : 6,
  //       'lima' : 5,
  //       'empat' : 4,
  //       'tiga' : 3,
  //       'dua' : 2,
  //       'satu' : 1
  //     }
  //     for (const key in satuan) {
  //       if (number >= satuan[key]) {
  //         result += key
  //         debugger
  //         return result
  //       }
  //     }
  //   }
  // }
  // return result

  

  let satuan = {
    1000 : 'seribu',
    100 : 'seratus',
    11 : 'sebelas',
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

  if (number == 0) {
    return ' '
  }
  if (number < 12) {
    return  satuan[number]
  }
  if (number > 11 && number < 20) {
    return satuan[number % 10] + ' belas'
  }
  if (number > 20 && number < 100) {
    return satuan[Math.floor(number / 10)] + ' puluh ' + numberToWords(number % 10)
  }
  if (number >= 100 && number < 1000) {
    if (Math.floor(number / 100) == 1) {
      return satuan[number - (number % 100)] + ' ' + numberToWords(number % 100)
    } else {
      return satuan[Math.floor(number / 100)] + ' ratus ' + numberToWords(number % 100)
    }
  }
  if (number >= 1000 && number < 1000000) {
    if (Math.floor(number / 1000) == 1) {
      return satuan[number - (number % 1000)] + ' ' + numberToWords(number % 1000)
    } else {
      return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
    }
  }
  if (number >= 1000000 && number < 1000000000) {
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
  }
  if (number >= 1000000000 && number < 1000000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + ' miliar ' + numberToWords(number % 1000000000)
  }
  if (number >= 1000000000000 && number < 1000000000000000) {
    return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000)
  }
}

// Driver code
console.log(numberToWords(91))
console.log(numberToWords(215291))

console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

console.log(numberToWords(821027139237));
console.log(numberToWords(999999999999999));
console.log(numberToWords(2921237983479374));

//abaikan code dibawah ini
module.exports = numberToWords;

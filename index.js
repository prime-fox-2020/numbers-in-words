function numberToWords(number) {
  // Your code here
  let result = ''
  if (number > 999) {
    return 'number melebihi 999'
  } else{
    // ratusan
    if ((number / 100 >= 1 && (number < 200 && number >= 100))) {
      result += 'seratus '
      number %= 100
    } else if ((number / 100) >= 1){
      result += `${numberToWords(number / 100)} ratus `
      number %= 100
    }

    // puluhan
    if ((number / 10) >= 1 && (number >= 20)) {
      result += `${numberToWords(number / 10)} puluh`
      number %= 10

      // belasan
    } else if ((number / 10) >= 1) {
      let belasan = {
        'sembilan belas': 19,
        'delapan belas': 18,
        'tujuh belas': 17,
        'enam belas': 16,
        'lima belas': 15,
        'empat belas': 14,
        'tiga belas' : 13,
        'dua belas' : 12,
        'sebelas' : 11,
        'sepuluh' : 10
      }
      for (const key in belasan) {
        if (number >= belasan[key]) {
          result += key
          return result
        }
      }
    }
    // satuan
    if (number > 0) {
      let satuan = {
        'sembilan' : 9,
        'delapan' : 8,
        'tujuh' : 7,
        'enam' : 6,
        'lima' : 5,
        'empat' : 4,
        'tiga' : 3,
        'dua' : 2,
        'satu' : 1
      }
      for (const key in satuan) {
        if (number >= satuan[key]) {
          result += key
          return result
        }
      }
    }
  }
  return result
}

// Driver code
console.log(numberToWords(105));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

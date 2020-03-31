function numberToWords(number) {
  // Your code here
  let result = ''
  if (number > 999999999999999) {
    return 'number melebihi 999 triliun'
  } else{
    // triliun
    if ((number / 1000000000000) >= 1){
      result += `${numberToWords(number / 1000000000000)} triliun `
      number %= 1000000000000
    }

    // miliaran
    if ((number / 1000000000) >= 1){
      result += `${numberToWords(number / 1000000000)} miliar `
      number %= 1000000000
    }

    // jutaan
    if ((number / 1000000) >= 1){
      result += `${numberToWords(number / 1000000)} juta `
      number %= 1000000
    }

    // ribuan
    if ((number / 1000 >= 1 && (number < 2000 && number >= 1000))) {
      result += 'seribu '
      number %= 1000
    } else if ((number / 1000) >= 1){
      result += `${numberToWords(number / 1000)} ribu `
      number %= 1000
    }

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
      result += `${numberToWords(number / 10)} puluh `
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
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

console.log(numberToWords(821027139237));
console.log(numberToWords(999999999999999));
console.log(numberToWords(2921237983479374));

//abaikan code dibawah ini
module.exports = numberToWords;

function numberToWords(number) {
  // Your code here
  var hasil = ''
  if (number > 999999999999999) {
    return 'Angka yang diinputkan melebihi 999 triliun'
  } else {
    if ((number / 1000000000000) >= 1) {
      hasil += `${numberToWords(number / 1000000000000)} triliun `
      number %= 1000000000000
      // console.log(hasil);
      // console.log(number);
    }
    if ((number / 1000000000) >= 1) {
      hasil += `${numberToWords(number / 1000000000)} miliar `
      number %= 1000000000
      // console.log(hasil);
      // console.log(number);
    }
    if ((number / 1000000) >= 1) {
      hasil += `${numberToWords(number / 1000000)} juta `
      number %= 1000000
    }
    if ((number / 1000 > 1 && (number < 2000 && number >= 1000))) {
      hasil += 'seribu '
      number %= 1000
    } else if ((number / 1000) >= 1) {
      hasil += `${numberToWords(number / 1000)} ribu `
      number %= 1000
    }
    if ((number / 100 >= 1 && (number < 200 && number >= 100))) {
      hasil += 'seratus '
      number %= 100
    } else if ((number / 100) >= 1) {
      hasil += `${numberToWords(number / 100)} ratus `
      number %= 100
    }
    if ((number / 10) >= 1 && (number >= 20)) {
      hasil += `${numberToWords(number / 10)} puluh `
      number %= 10
      // console.log(hasil);
      // console.log(number);
    } else if ((number / 10) >= 1) {
      var belasan = {
        'sembilan belas': 19,
        'delapan belas': 18,
        'tujuh belas': 17,
        'enam belas': 16,
        'lima belas': 15,
        'empat belas': 14,
        'tiga belas': 13,
        'dua belas': 12,
        'sebelas': 11,
        'sepuluh': 10

      }
      for (var key in belasan) {
        if (number >= belasan[key]) {
          hasil += key
          return hasil
        }
      }
    }

    if (number > 0) {
      var satuan = {
        'sembilan': 9,
        'delapan': 8,
        'tujuh': 7,
        'enam': 6,
        'lima': 5,
        'empat': 4,
        'tiga': 3,
        'dua': 2,
        'satu': 1

      }
      for (var key in satuan) {
        if (number >= satuan[key]) {
          hasil += key
          return hasil
        }
      }
    }
  }
  // console.log(hasil);
  return hasil
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(2));
console.log(numberToWords(21));
console.log(numberToWords(123));
console.log(numberToWords(1230));
console.log(numberToWords(123456));
console.log(numberToWords(99999999999999999));

//abaikan code dibawah ini
module.exports = numberToWords;


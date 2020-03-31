function numberToWords(number) {
  let literal = {
    1: ["se", "satu "], // "se-" if (scale != satuan)
    2: ["dua "],
    3: ["tiga "],
    4: ["empat "],
    5: ["lima "],
    6: ["enam "],
    7: ["tujuh "],
    8: ["delapan "],
    9: ["sembilan "],
    10: ["sepuluh "]
  }
  let unit = [
    ['triliun '],
    ['milyar '],
    ['juta '],
    ['ribu '],
    ['ratus '],
    ['puluh ', 'belas '],
    ['satuan']
  ];

  let unitNumber = [
    1000000000000,
    1000000000,
    1000000,
    1000,
    100,
    10,
    1
  ];

  let i = 0;
  let devider = unitNumber[i];
  while (devider > number) { // Cari pembagi paling besar yang mungkin
    i++;
    devider = unitNumber[i];
  }

  let string = '';
  if (number > 0) { // base case number = 0 (habis)
    let numberHead = Math.floor(number / devider); // Cari angka depan

    if (unit[i][0] != 'satuan') { 
      if (number < 20 && number > 10) { // handle belasan
        string = literal[number % devider][0] + unit[i][1];
        number -= Number(String(numberHead) + (number % devider));
      } else {
        if (literal[numberHead] == undefined) { // rekursi lagi, jika angka depan masih bisa dibagi unit
          string = numberToWords(numberHead) + unit[i][0];
        } else {
          string = literal[numberHead][0] + unit[i][0];
        }
        number %= devider;
      }
    } else {
      if (numberHead == 1) { // Jika angka 1, se => satu
        string = literal[numberHead][1];
      } else {
        string = literal[numberHead][0];
      }
      number -= numberHead; // number = 0;
    }

    if (string == 'setriliun ') { // handle se => satu
      string = 'satu triliun ';
    } else if (string == 'semilyar ') {
      string = 'satu milyar ';
    } else if (string == 'sejuta ') {
      string = 'satu juta ';
    }

    return string + numberToWords(number); // rekursi
  } else {
    return '';
  }
}

// Driver code
// JANGAN DICOBA!!! 
// for (let asik = 1; asik < 1000000000000; asik++) {
//   console.log(numberToWords(asik));
// }
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;
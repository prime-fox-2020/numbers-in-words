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
    ['ratus '],
    ['puluh ', 'belas '],
    ['satuan']
  ];

  let devider = 100;
  let i = 0;
  while (devider > number) { // Cari pembagi paling besar yang mungkin
    devider /= 10;
    i++;
  }

  let string = '';
  if (number > 0) { // base case number = 0 (habis)
    let numberHead = Math.floor(number / devider); // Cari angka depan
    if (unit[i][0] != 'satuan') { // Jika bukan satuan
      if (number < 20 && number > 10) {
        string = literal[number % devider][0] + unit[i][1];
        number -= Number(String(numberHead) + (number % devider));
      } else {
        string = literal[numberHead][0] + unit[i][0]; // Tambahkan unit dibelakang angka depan
        number %= devider;
      }
    } else { // Jika satuan
      if (numberHead == 1) { // Jika angka 1, se => satu
        string = literal[numberHead][1];
      } else {
        string = literal[numberHead][0];
      }
      number -= numberHead; // number = 0;
    }
    return string + numberToWords(number);
  } else {
    return '';
  }
}

// Driver code
for (i = 1; i < 1000; i++) {
  console.log(numberToWords(i))
  if (i % 100 == 0) {
    console.log();
  }
}
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;
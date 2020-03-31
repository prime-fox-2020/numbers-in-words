function numberToWords(number) {
  // Your code here
  var kalimatNilai = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  var banyak = ['puluh', 'belas', 'ratus', 'ribu', 'juta', 'miliar', 'triliun']
  hasil = ''
  if (number == 0) {
    return ''
  }
  if (number <= 11) {
    return kalimatNilai[number - 1]
  }
  else if (number < 20) {
    return numberToWords(number - 10) + ` ${banyak[1]} `

  } else if (number < 100) {
    return numberToWords(Math.trunc(number / 10)) + ` ${banyak[0]} ` + numberToWords(number % 10)

  } else if (number < 200) {
    return `Se${2}` + numberToWords(number - 100);

  } else if (number < 1000) {
    return numberToWords(Math.trunc(number / 100)) + ` ${banyak[2]} ` + numberToWords(number % 100)

  } else if (number < 2000) {
    return `Se${3}` + numberToWords(number - 1000);

  } else if (number < 1000000) {
    return numberToWords(Math.trunc(number / 1000)) + ` ${banyak[3]} ` + numberToWords(number % 1000)

  } else if (number < 1000000000) {
    return numberToWords(Math.trunc(number / 1000000)) + ` ${banyak[4]} ` + numberToWords(number % 1000000)

  } else if (number < 1000000000000) {
    return numberToWords(Math.trunc(number / 1000000000)) + ` ${banyak[5]} ` + numberToWords(number % 1000000000)

  } else if (number < 1000000000000000) {
    return numberToWords(Math.trunc(number / 1000000000000)) + ` ${banyak[6]} ` + numberToWords(number % 1000000000000)

  } else if (number > 1000000000000000) {
    return "Angka Melebihi 999.999.999.999.999"
  }
}

// Driver code
console.log(numberToWords(704));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(999999999999999));

//abaikan code dibawah ini
module.exports = numberToWords;
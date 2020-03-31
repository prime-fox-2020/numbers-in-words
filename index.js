function numberToWords(number) {
  // Your code here
  var satuan = {
    0: '',
    1: 'satu',
    2: 'dua',
    3: 'tiga',
    4: 'empat',
    5: 'lima',
    6: 'enam',
    7: 'tujuh',
    8: 'delapan',
    9: 'sembilan',
    10: 'sepuluh',
    11: 'sebelas',
    12: 'dua belas',
    13: 'tiga belas',
    14: 'empat belas',
    15: 'lima belas',
    16: 'enam belas',
    17: 'tujuh belas',
    18: 'delapan belas',
    19: 'sembilan belas'
  }

  const nilai = [
    [100, 'seratus', 'ratus'],
    [10, 'belas', 'puluh']]

  var hasil = ''

  if (number == 0) {
    return ''
  }else if (number >= 1000000) {
    let temp = Math.trunc(number / 1000000)
    let temp1 = temp * 1000000
    number -= temp1
    return `${numberToWords(temp)}juta ${numberToWords(number)}`
  } else if (number >= 1000) {
    let temp = Math.trunc(number / 1000)
    let temp1 = temp * 1000
    number -= temp1
    return `${numberToWords(temp)}ribu ${numberToWords(number)}`
  } else {
    while (number > 0) {
      if (satuan[number]) {
        hasil += `${satuan[number]}`
        number = 0
      }
      for (let i = 0; i < nilai.length; i++) {
        if (satuan[number]) {
          hasil += `${satuan[number]}`
          number = 0
        } else if (number > 0) {
          let temp = Math.trunc(number / nilai[i][0])
          let temp1 = temp * nilai[i][0]
          number -= temp1
          if (temp !== 0) {
            if (temp == 1) {
              if (satuan[temp1]) {
                hasil += `${satuan[temp]} `
              } else {
                if (nilai[i][0] == 1000000) {
                  hasil += ` ${satuan[temp]} ${nilai[i][2]} `
                } else {
                  hasil += `se${nilai[i][2]} `
                }
              }
            } else {
              if (satuan[temp1]) {
                hasil += `${satuan[temp]} `
              } else {
                hasil += `${satuan[temp]} ${nilai[i][2]} `
              }
            }
          }
        }
      }
      return `${hasil} ${numberToWords(number)}`
    }

  }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(111));
console.log(numberToWords(72));
console.log(numberToWords(423));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

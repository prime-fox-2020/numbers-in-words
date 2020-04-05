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

    var hasil = ''

    if (number == 0) {
        return ''
    } else if (number >= 1000000000000) {
        let temp = Math.trunc(number / 1000000000000)
        let temp1 = temp * 1000000000000
        number -= temp1
        return `${numberToWords(temp)}triliun ${numberToWords(number)}`
    } else if (number >= 1000000000) {
        let temp = Math.trunc(number / 1000000000)
        let temp1 = temp * 1000000000
        number -= temp1
        return `${numberToWords(temp)}milyar ${numberToWords(number)}`
    } else if (number >= 1000000) {
        let temp = Math.trunc(number / 1000000)
        let temp1 = temp * 1000000
        number -= temp1
        return `${numberToWords(temp)}juta ${numberToWords(number)}`
    } else if (number >= 1000) {
        let temp = Math.trunc(number / 1000)
        let temp1 = temp * 1000
        number -= temp1
        return `${numberToWords(temp)}ribu ${numberToWords(number)}`
    } else if (number >= 100) {
        let temp = Math.trunc(number / 100)
        let temp1 = temp * 100
        number -= temp1
        if (temp == 1) {
            return `seratus ${numberToWords(number)}`
        } else {
            return `${numberToWords(temp)}ratus ${numberToWords(number)}`
        }
    } else if (number > 20) {
        let temp = Math.trunc(number / 10)
        let temp1 = temp * 10
        number -= temp1
        hasil += `${satuan[number]}`
        if (temp == 1) {
            return `sepuluh ${numberToWords(number)}`
        } else {
            return `${numberToWords(temp)}puluh ${numberToWords(number)}`
        }
    } else if (satuan[number]) {
        hasil += `${satuan[number]}`
        number = 0
        return `${hasil} ${numberToWords(number)}`
    }

}


// Driver code
console.clear();
console.log(numberToWords(705));
console.log(numberToWords(111));
console.log(numberToWords(72));
console.log(numberToWords(423));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(2011845010));
console.log(numberToWords(42507188198145));

//abaikan code dibawah ini
module.exports = numberToWords;

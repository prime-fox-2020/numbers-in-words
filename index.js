function numberToWords(number) {
  // Your code here
  var words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']

    if (number === 0){
        return ''
    } 
    if (number <= 11){
        return words[number]
    }
    if (number <= 19){
        return words[number-10] + ' belas'
    }
    if (number < 100){
        return words[Math.floor(number/10)] + ' puluh ' + numberToWords(number%10)
    }
    if (number > 99 && number < 200){
        return 'seratus ' + numberToWords(number%100)
    }
    if (number < 1000){
        return words[Math.floor(number/100)] + ' ratus ' + numberToWords(number%100)
    }
    if (number > 999 && number < 2000){
        return 'seribu ' + numberToWords(number%1000)
    }
    if (number < 1000000){
        return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number%1000)
    }
    if (number < 1000000000){
        return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number%1000000)
    }
    if (number < 1000000000000){
        return numberToWords(Math.floor(number/1000000000)) + ' miliar ' + numberToWords(number%1000000000)
    }
    if (number < 1000000000000000){
        return numberToWords(Math.floor(number/1000000000000)) + ' triliun ' + numberToWords(number%1000000000000)
    }
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

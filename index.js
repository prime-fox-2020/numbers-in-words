function numberToWords(number) {
  const singleNums = ['', 'Satu', 'Dua', 'Tiga', 'Empat', 'Lima', 'Enam', 'Tujuh', 'Delapan', 'Sembilan'];
    const num = number.toString();

    if(number < 10){
      for (let i = 0; i < singleNums.length; i++) {
        if(i === number) return singleNums[i];
      };
    };
    if(number === 10){
      return 'Sepuluh';
    };
    if(number === 11){
      return 'Sebelas';
    };
    if(number < 20){
      return singleNums[number - 10] + ' Belas';
    };
    if(number < 100){
      return singleNums[Math.floor(number / 10)] + ' Puluh ' + numberToWords(number % 10);
    };
    if(number < 200){
      return 'Seratus ' + numberToWords(number % 100);
    };
    if(number < 1e3){
      return singleNums[Math.floor(number / 100)] + ' Ratus ' + numberToWords(number % 100);
    };
    if(number < 2e3){
      return 'Seribu ' + numberToWords(number % 1e3);
    };
    if(number < 1e4){
      return singleNums[Math.floor(number / 1e3)] + ' Ribu ' + numberToWords(number % 1000);
    };
    if(number < 11e3){
      return 'Sepuluh Ribu ' + numberToWords(number % 1e4);
    };
    if(number < 12e3){
      return 'Sebelas Ribu ' + numberToWords((number % 1e4) % 1e3);
    };
    if(number < 2e4){
      return singleNums[num[1]] + ' Belas Ribu ' + numberToWords((number % 1e4) % 1e3);
    };
    if(number < 1e5){
      return singleNums[Math.floor(number / 1e4)] + ' Puluh ' + singleNums[num[1]] + ' Ribu ' + numberToWords((number % 1e4) % 1e3);
    };
    if(number < 2e5){ // too lazy to refactor haha
      return 'Seratus ' + ((Math.floor(number / 1e3) - 100) === 11 ? 'Sebelas' : (Math.floor(number / 1e3) - 100) === 10 ? 'Sepuluh' : numberToWords(Number(num[1] + num [2]))) + ' Ribu ' + numberToWords(((number % 1e5) % 1e4) % 1e3);
    };
    if(number < 1e6){ // too lazy to refactor haha
      return numberToWords(Number(num[0])) + ' Ratus ' + ((Math.floor(number / 1e3) - 100) === 11 ? 'Sebelas' : (Math.floor(number / 1e3) - 100) === 10 ? 'Sepuluh' : numberToWords(Number(num[1] + num [2]))) + ' Ribu ' + numberToWords(((number % 1e5) % 1e4) % 1e3);
    };
    if(number < 2e6){
      return numberToWords(Number(num[0])) + ' Juta ' + numberToWords(number % 1e6);
    };
    if(number < 1e7){
      return numberToWords(Number(num[0])) + ' Juta ' + numberToWords(number % 1e6);
    };
    if(number < 1e8){
      return numberToWords(Number(num[0] + num[1])) + ' Juta ' + numberToWords(number - Number(num[0] + num[1] + '000000'));
    };
    if(number < 1e9){
      return numberToWords(Number(num[0] + num[1] + num[2])) + ' Juta ' + numberToWords(number - Number(num[0] + num[1] + num[2] + '000000'));
    };
    if(number < 1e10){
      return numberToWords(Number(num[0])) + ' Miliar ' + numberToWords(number % 1e9);
    };
    if(number < 1e11){
      return numberToWords(Number(num[0] + num[1])) + ' Miliar ' + numberToWords(number - Number(num[0] + num[1] + '000000000'));
    };
    if(number < 1e12){
      return numberToWords(Number(num[0] + num[1] + num[2])) + ' Miliar ' + numberToWords(number - Number(num[0] + num[1] + num[2] +'000000000'));
    };
    if(number < 1e13){
      return numberToWords(Number(num[0])) + ' Triliun ' + numberToWords(number % 1e12);
    };
    if(number < 1e14){
      return numberToWords(Number(num[0] + num[1])) + ' Triliun ' + numberToWords(number - Number(num[0] + num[1] + '000000000000'));
    };
    if(number < 1e15){
      return numberToWords(Number(num[0] + num[1] + num[2])) + ' Triliun ' + numberToWords(number - Number(num[0] + num[1] + num[2] + '000000000000'));
    };
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(21111));
console.log(numberToWords(404617705552155));
console.log(numberToWords(999999999999999));

//abaikan code dibawah ini
module.exports = numberToWords;

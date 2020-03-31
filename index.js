
function numberToWords(input){
  var bacaan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh']
  var sebutan = ['belas','puluh','ratus']

  //Base Case ( Satuan dan Belasan)
  if(input <=10){
      return bacaan[input]
  }else if(input<20){
      return bacaan[input-10] +' ' +sebutan[0]
  }

  // Recursive
  for (let i = 2; i >=0; i--) {
      var satuan = Math.pow(10,i);
      var angkaDepan= Math.floor(input/satuan);
      //Kasus Angka Depan =1
      if(angkaDepan == 1){
          input -= angkaDepan*satuan;
          return 'se'+sebutan[i]+' ' + numberToWords(input) ;
      //Kasus Angka Depan = 2-9
      }else if(angkaDepan > 1){
          input -= angkaDepan*satuan;
          return bacaan[angkaDepan] +' '+sebutan[i] +' ' + numberToWords(input) ;
      }
  }
}

console.log(numberToWords(5))
console.log(numberToWords(14))
console.log(numberToWords(76))
console.log(numberToWords(112))
console.log(numberToWords(712))
console.log(numberToWords(999))
// Driver code
console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

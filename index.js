
function numberToWords(input){
  var bacaan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh']
  var sebutan = ['belas','puluh','ratus','ribu','juta','milyar','triliyun']
  var temp = input.toString()
  //Base Case ( Satuan dan Belasan)
  if(temp.length % 3 ===2){
      var duaDepan = Number(temp.slice(0,2))
      var inputNew = Number(temp.slice(2,temp.length))
      var indexS = Math.floor(temp.length/3)
      if(duaDepan==11){
        return 'se' +sebutan[0] +' '+ sebutan[indexS+2]+' ' + numberToWords(inputNew);
      }else if(duaDepan<20){
        return bacaan[duaDepan-10] +' ' +sebutan[0] +' '+ sebutan[indexS+2]+' ' + numberToWords(inputNew)
      }
  }
  if(input <=10){
      return bacaan[input]
  }else if(input<20){
      return bacaan[input-10] +' ' +sebutan[0]
  }

  //Kasus Jutaan
  if(temp.length>=7){
    for (let i = 2 ; i >=0; i--) {
      var satuan = Math.pow(10,i+6);
      var angkaDepan= Math.floor(input/satuan);
      //Kasus Angka Depan =1
      if(angkaDepan == 1){
          input -= angkaDepan*satuan;
          return 'se'+sebutan[4]+' ' + numberToWords(input) ;
      //Kasus Angka Depan = 2-9
      }else if(angkaDepan > 1){
          input -= angkaDepan*satuan;
          return bacaan[angkaDepan] +' '+sebutan[i] +' ' + numberToWords(input) ;
      }
    }
  }

  //Kasus Ribuan
  if(temp.length>=4){
    for (let i = 2 ; i >=0; i--) {
      var satuan = Math.pow(10,i+3);
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
  
  // Recursive
  for (let i = 3 ; i >=0; i--) {
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

// console.log(numberToWords(5))
// console.log(numberToWords(14))
// console.log(numberToWords(100))
// console.log(numberToWords(712))
// console.log(numberToWords(999))
// console.log(numberToWords(19999))
// console.log(numberToWords(253676))
// Driver code
console.log(numberToWords(38709))
console.log(numberToWords(82102713))

console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

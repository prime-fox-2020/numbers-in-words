
function numberToWords(input){
    var bacaan = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh']
    var sebutan = ['belas','puluh','ratus','ribu','juta','Milyar','Triliun']
    var temp = input.toString()
    //Base Case ( Satuan dan Belasan)
    if(temp.length % 3 ===1 && temp.length>3){
        var satuDepan = Number(temp.slice(0,1))
        var inputNew = Number(temp.slice(1,temp.length))
        var indexSatu = Math.floor(temp.length/3)
        return numberToWords(satuDepan) +' '+ sebutan[indexSatu+2]+' ' + numberToWords(inputNew)
    }

    if(temp.length % 3 ===2 && temp.length>3){
        var duaDepan = Number(temp.slice(0,2))
        var inputNew = Number(temp.slice(2,temp.length))
        var indexDua = Math.floor(temp.length/3)
        if(duaDepan==11){
          return 'se' +sebutan[0] +' '+ sebutan[indexDua+2]+' ' + numberToWords(inputNew);
        }else if(duaDepan<20){
          return bacaan[duaDepan-10] +' ' +sebutan[0] +' '+ sebutan[indexDua+2]+' ' + numberToWords(inputNew)
        }else if(duaDepan<99){
            return numberToWords(duaDepan) +' '+ sebutan[indexDua+2]+' ' + numberToWords(inputNew)
        }
    }

    if(temp.length % 3 ===0 && temp.length>3){
        // if()
        var tigaDepan = Number(temp.slice(0,3))
        var inputNew = Number(temp.slice(3,temp.length))
        var indexTiga = Math.floor(temp.length/3)-1
        return numberToWords(tigaDepan) +' '+ sebutan[indexTiga+2]+' ' + numberToWords(inputNew)
    }

    if(input <=10){
        return bacaan[input]
    }else if(input<20){
        return bacaan[input-10] +' ' +sebutan[0]
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
  

  // Driver code
  console.log(numberToWords(705));
  console.log(numberToWords(1000000));
  console.log(numberToWords(2011845));

  // test another number up to 999milion
  console.log(numberToWords(38709))
  console.log(numberToWords(82102713))
  console.log(numberToWords(999999999));

  // test another number up to 999triliun
  console.log(numberToWords(85987567213));
  console.log(numberToWords(785987567213));
  console.log(numberToWords(8555987567213));
  console.log(numberToWords(85986667567213));
  console.log(numberToWords(999999999999999));
  
  //abaikan code dibawah ini
  module.exports = numberToWords;
  
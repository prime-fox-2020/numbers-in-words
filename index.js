function numberToWords(number) {

  let list = [
    [19,'sembilan belas'],
    [18,'delapan belas'],
    [17,'tujuh belas'],
    [16,'enam belas'],
    [15,'lima belas'],
    [14,'empat belas'],
    [13,'tiga belas'],
    [12,'dua belas'],
    [11,'sebelas'],
    [10,'sepuluh'],
    [9,'sembilan'],
    [8,'delapan'],
    [7,'tujuh'],
    [6,'enam'],
    [5,'lima'],
    [4,'empat'],
    [3,'tiga'],
    [2,'dua'],
    [1,'satu'],
  ]


  for(let i = 0; i < list.length; i++){
    if(number > 99999 && number < 200000 && String(number)[0] == list[i][0]){
      return ' seratus ' + numberToWords(number % 10000)
    }
    
// puluh ribu
    if(number > 9999 && String(number)[0] + String(number)[1] == list[i][0]){
      return list[i][1] + ' ribu ' + numberToWords(number - (list[i][0] * 1000))
    }

    if(number > 19999 && String(number)[0] == list[i][0] && String(number)[1] == 0){
        return list[i][1] + ' puluh ribu ' + numberToWords(number % 1000)
    }

    if(number > 19999 && String(number)[0] == list[i][0]){
      for(let j = 0; j < list.length; j++){
        if(String(number)[1] == list[j][0]){

          return list[i][1] + ' puluh ' + list[j][1] + ' ribu ' + numberToWords(number % 1000)
        }
      }
    }
  
    if(number >= 1000 && number < 2000){
      return 'seribu ' + numberToWords(number - 1000)
    }

    if(number > 1999 && String(number)[0] == list[i][0]){
      return list[i][1] + ' ribu ' + numberToWords(number - (list[i][0] * 1000))
    }
  

  
    if(number >= 100 && number < 200){
      return 'seratus ' + numberToWords(number - 100)
    }

    if(number > 199 && String(number)[0] == list[i][0]){
      return list[i][1] + ' ratus ' + numberToWords(number - (list[i][0] * 100))
    }
  
  
  
    if(number > 19 && String(number)[0] == list[i][0]){
      return list[i][1] + ' puluh ' + numberToWords(number % 10)
    }
  
  
  
    /*
    if(number > 11 && String(number)[1] == list[i][0]){
      return list[i][1] + ' belas '
    }
    */

    if(number <= 0){
      return ''
    } else if(number >= list[i][0] && number < 20){
      return list[i][1] + numberToWords(number - list[i][0])
    }
  }
}

// Driver code
console.log(numberToWords(100000));
//console.log(numberToWords(705));
//console.log(numberToWords(1000000));
//console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

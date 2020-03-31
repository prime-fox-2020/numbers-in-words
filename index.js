function numberToWords(num){
  let result = ''
  let str = num.toString()
  let len = str.length
  let dictionary = {
      0 : '',
      1 : 'se',
      2 : 'dua ',
      3 : 'tiga ',
      4 : 'empat ',
      5 : "lima ",
      6 : "enam ",
      7 : "tujuh ",
      8 : "delapan ",
      9 : "sembilan "
  }
  let satuan = ['','','puluh','ratus','ribu','puluh', 'ratus', 'juta','puluh', 'ratus', 'milyar', 'puluh', 'ratus', 'triliun', 'puluh', 'ratus']

  if(len == 1){
      if(num == 1){
          result += 'satu'
          return result
      }
      else{
          for(let key in dictionary){
              if(key == num){
                  result += dictionary[key]
                  return result
              }
          }
      }
  }
  else if(len == 2 && str[0] == 1){
      if(str[1] == 0){
          return 'sepuluh'
      }
      else{
          for(let key in dictionary){
              if(key == str[1]){
                  result += (dictionary[key] + 'belas')
                  return result
              }
          }
      }
  }

  let nextIndex = 0
  if(str[0] == 1 && (len == 5 || len == 8 || len == 11 || len == 14)){
      if(str[1] == 0){
          result +=  ('sepuluh ' + satuan[len-1])
      }
      else{
          for(let key in dictionary){
              if(key == str[1]){
                  result += (dictionary[key] + 'belas ' + satuan[len-1] + ' ')
                  break
              }
          }
      }
       nextIndex += 2 
  }
  else{
      if((len == 4 || len == 7 || len == 10 || len == 13) && str[0] == 1){
          result += ('satu ' + satuan[len] + ' ')
      }
      else{
          for(let key in dictionary){
              if(key == str[0]){
                  result += (dictionary[key] + satuan[len] + ' ')
                  break
              }
          }
      }
      if(str[1] == 0){
          if(len == 5 || len == 6){
              result += satuan[4] + ' '
          }
          else if(len == 8 || len == 9){
              result += satuan[7] + ' '
          }
          else if(len == 11 || len == 12){
              result += satuan[10] + ' '
          }
          else if(len == 14 || len == 15){
              result += satuan[13] + ' '
          }
      }
      nextIndex++
  }
  let nextNum = ''
  for(let i = nextIndex; i < len; i++){
    nextNum += str[i]
  }

  return result + numberToWords(parseInt(nextNum))
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));
console.log(numberToWords(38079))
console.log(numberToWords(999999999999999))

// Case tambahan
// console.log(in_words(12001))
// console.log(in_words(20011))
// console.log(in_words(1000212))

//abaikan code dibawah ini
module.exports = numberToWords;

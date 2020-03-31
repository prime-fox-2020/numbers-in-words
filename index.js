function numberToWords(number) {
   var numberWords= [
     [1,'Satu'],
     [2, 'Dua'],
     [3,'Tiga'],
     [4,'Empat'],
     [5, 'Lima'],
     [6,'Enam'],
     [7, 'Tujuh'],
     [8, 'Delepan'],
     [9, 'Sembilan'],
     [10, 'Sepuluh'],
     [11, 'Sebelas']
   ] 

   var stringNumber = String(number);
   for(var i = 0; i < numberWords.length; i++) {
     if(stringNumber.length === 1 || 2 && number < 12) {
       if(stringNumber == numberWords[i][0]) {
         return numberWords[i][1];
       }
     }
     if(stringNumber.length === 2 && number < 20) {
        if(stringNumber[1] == numberWords[i][0]) {
          return numberWords[i][1] + ' Belas'
        }
     }
     if(stringNumber.length === 2 && number < 100 && number > 19) {
       var temp = number % 10; 
       if(stringNumber[0] == numberWords[i][0])  {
         for(var j in numberWords) {
           if(temp == numberWords[j][0] && temp >= 1) {
             return numberWords[i][1] + ' Puluh ' + numberWords[j][1];
           } else if (temp != numberWords[j][0] && temp < 1) {
             return numberWords[i][1] + ' Puluh'
           }
           }
         }
       }
       if(stringNumber.length === 3) {
         if(stringNumber[0] == numberWords[i][0]) {
            var temp1 = number % 100;
            if(temp1 >= 1) {
              return numberWords[i][1] + ' Ratus ' + numberToWords(number % 100);
            } else if (temp1 < 1) {
              return numberWords[i][1] + ' Ratus '
            }
         }
       }
       if(stringNumber.length === 4) {
         if(stringNumber[0] == numberWords[i][0]) {
            var temp2 = number % 1000;
            if(temp2 >= 1) {
              return numberWords[i][1] + ' Ribu ' + numberToWords(number % 1000);
            } else if (temp2 < 1) {
              return numberWords[i][1] + ' Ribu '
            }
         }
       }
       if(stringNumber.length === 5) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 10000;
           if(temp2 >= 1000) {
             return numberWords[i][1] + ' Puluh ' + numberToWords(number % 10000);
           } else if (temp2 < 1000 && temp2 > 1) {
             return numberWords[i][1] + ' Puluh Ribu ' + numberToWords(number % 10000)
           } else if (temp2 < 1) {
             return numberWords[i][1] + ' Puluh Ribu'
           }
        }
      }
      if(stringNumber.length === 6) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 100000;
           if(temp2 >= 10000) {
             return numberWords[i][1] + ' Ratus ' + numberToWords(number % 100000);
           } else if (temp2 <= 10000 && temp2 >= 100) {
             return numberWords[i][1] + ' Ratus ' + numberToWords(number % 100000);
           } else if (temp2 < 100 && temp2 > 1) {
             return numberWords[i][1] + ' Ratus Ribu ' + numberToWords(number % 100000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Ratus Ribu '
           }
        }
      }
      if(stringNumber.length === 7) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 1000000;
           if(temp2 >= 100000) {
             return numberWords[i][1] + ' Juta ' + numberToWords(number % 1000000);
           } else if (temp2 <= 100000 && temp2 >= 1000) {
             return numberWords[i][1] + ' Juta ' + numberToWords(number % 1000000);
           } else if (temp2 < 1000 && temp2 > 1) {
             return numberWords[i][1] + ' Juta ' + numberToWords(number % 1000000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Juta '
           }
        }
      }
      if(stringNumber.length === 8) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 10000000;
           if(temp2 >= 1000000) {
             return numberWords[i][1] + ' Puluh ' + numberToWords(number % 10000000);
           } else if (temp2 <= 1000000 && temp2 >= 10000) {
             return numberWords[i][1] + ' Puluh ' + numberToWords(number % 10000000);
           } else if (temp2 < 10000 && temp2 > 1) {
             return numberWords[i][1] + ' Puluh Juta ' + numberToWords(number % 10000000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Puluh Juta '
           }
        }
      }
      if(stringNumber.length === 9) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 100000000;
           if(temp2 >= 10000000) {
             return numberWords[i][1] + ' Ratus ' + numberToWords(number % 100000000);
           } else if (temp2 <= 10000000 && temp2 >= 100000) {
             return numberWords[i][1] + ' Ratus Juta ' + numberToWords(number % 100000000);
           } else if (temp2 < 100000 && temp2 > 1) {
             return numberWords[i][1] + ' Ratus Juta ' + numberToWords(number % 100000000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Ratus Juta '
           }
        }
      }
      if(stringNumber.length === 10) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 1000000000;
           if(temp2 >= 100000000) {
             return numberWords[i][1] + ' Milyar ' + numberToWords(number % 1000000000);
           } else if (temp2 <= 100000000 && temp2 >= 1000000) {
             return numberWords[i][1] + ' Milyar ' + numberToWords(number % 100000000);
           } else if (temp2 < 1000000 && temp2 > 1) {
             return numberWords[i][1] + ' Milyar ' + numberToWords(number % 1000000000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Milyar '
           }
        }
      }
      if(stringNumber.length === 11) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 10000000000;
           if(temp2 >= 1000000000) {
             return numberWords[i][1] + ' Puluh ' + numberToWords(number % 10000000000);
           } else if (temp2 <= 1000000000 && temp2 >= 10000000) {
             return numberWords[i][1] + ' Milyar ' + numberToWords(number % 1000000000);
           } else if (temp2 < 10000000 && temp2 > 1) {
             return numberWords[i][1] + ' Puluh Milyar ' + numberToWords(number % 10000000000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Puluh Milyar '
           }
        }
      }
      if(stringNumber.length === 12) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 100000000000;
           if(temp2 >= 10000000000) {
             return numberWords[i][1] + ' Ratus ' + numberToWords(number % 100000000000);
           } else if (temp2 <= 10000000000 && temp2 >= 100000000) {
             return numberWords[i][1] + ' Ratus Milyar ' + numberToWords(number % 10000000000);
           } else if (temp2 < 100000000 && temp2 > 1) {
             return numberWords[i][1] + ' Ratus Milyar ' + numberToWords(number % 100000000000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Ratus Milyar '
           }
        }
      }
      if(stringNumber.length === 13) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 1000000000000;
           if(temp2 >= 100000000000) {
             return numberWords[i][1] + ' Triliun ' + numberToWords(number % 1000000000000);
           } else if (temp2 <= 100000000000 && temp2 >= 1000000000) {
             return numberWords[i][1] + ' Triliun ' + numberToWords(number % 100000000000);
           } else if (temp2 < 1000000000 && temp2 > 1) {
             return numberWords[i][1] + ' Triliun ' + numberToWords(number % 1000000000000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Triliun '
           }
        }
      }
      if(stringNumber.length === 14) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 10000000000000;
           if(temp2 >= 100000000000) {
             return numberWords[i][1] + ' Puluh ' + numberToWords(number % 10000000000000);
           } else if (temp2 <= 1000000000000 && temp2 >= 10000000000) {
             return numberWords[i][1] + ' Triliun ' + numberToWords(number % 1000000000000);
           } else if (temp2 < 10000000000 && temp2 > 1) {
             return numberWords[i][1] + ' Puluh Triliun ' + numberToWords(number % 10000000000000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Puluh Triliun '
           }
        }
      }
      if(stringNumber.length === 15) {
        if(stringNumber[0] == numberWords[i][0]) {
           var temp2 = number % 100000000000000;
           if(temp2 >= 1000000000000) {
             return numberWords[i][1] + ' Ratus ' + numberToWords(number % 100000000000000);
           } else if (temp2 <= 10000000000000 && temp2 >= 100000000000) {
             return numberWords[i][1] + ' Triliun ' + numberToWords(number % 1000000000000);
           } else if (temp2 < 100000000000 && temp2 > 1) {
             return numberWords[i][1] + ' Ratus Triliun ' + numberToWords(number % 100000000000000);
           } else if(temp2 < 1) {
            return numberWords[i][1] + ' Ratus Triliun '
           }
        }
      }
     }
     
   }

   // 


// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2021845));
console.log(numberToWords(999999999999999))

//abaikan code dibawah ini
module.exports = numberToWords;

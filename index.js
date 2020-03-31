function numberToWords(number) {
  // Your code here
  const big = [
    [1, ""],
    [10, "puluh"], 
    [100, "ratus"], 
    [1000, "ribu"],
    [1000000, "juta"],
    [1000000000, "miliar"],
    [1000000000000, "triliun"]
  ];
  const base      = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 100, 1000],
        baseSpell = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas", "seratus", "seribu"];
  let str = "";
  //Looping for check belasan di atas 1000
  for(let i = big.length-1; i > 2; i--){
    if((number/big[i][0]) > 100) break;
    if((number/big[i][0]) > 10 && (number/big[i][0]) < 20){
      let sisa = Math.floor(number/big[i][0]);
      if(base.indexOf(sisa) !== -1) str += baseSpell[base.indexOf(sisa)] + " " + big[i][1];
      let temp = number % big[i][0];
      return str + numberToWords(temp);
    }
    if(number > 10 && number < 20) return baseSpell[base.indexOf(number)]
  }

  for(let i = big.length-1; i >= 0; i--){
    if(number >= big[i][0]){
      let kepala = Math.floor(number/big[i][0]);
      let tail = big[i][1];
      let temp = number % big[i][0];
      if((kepala*big[i][0])/10 === 1 || (kepala*big[i][0])/100 === 1 || (kepala*big[i][0])/1000 === 1) {
        kepala *= big[i][0];
        tail = "";
      }else if(kepala > 99){
        kepala = Math.floor(kepala/100);
        temp = number % (big[i][0]*100);
        tail = "ratus";
      }else if(kepala > 9){
        kepala = Math.floor(kepala/10);
        temp = number % (big[i][0]*10);
        tail = "puluh";
      }
      str += baseSpell[base.indexOf(kepala)] + " " + tail + " ";
      return str + numberToWords(temp);
    }
  }
  return str;
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

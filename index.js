function numberToWords(number) {
  // Your code here
  let pangkat = [[1, ""],[10, " puluh "],[100, " ratus "],[1000, "ribu "],[1000000, " juta "],[1000000000, " miliar "],[1000000000000, " triliun "]];
  let angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 100, 1000]
  let bilangan = ["", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", "delapan belas", "sembilan belas", "seratus", "seribu"];
  let str = "";
  for(let i = pangkat.length-1; i > 2; i--){
    if((number/pangkat[i][0]) > 100) break;
    if((number/pangkat[i][0]) > 10 && (number/pangkat[i][0]) < 20){
      let sisa = Math.floor(number/pangkat[i][0]);
      if(angka.indexOf(sisa) !== -1) str += bilangan[angka.indexOf(sisa)] + " " + pangkat[i][1];
      let temp = number % pangkat[i][0];
      return str + numberToWords(temp);
    }
    if(number > 10 && number < 20) return bilangan[angka.indexOf(number)]
  }
  for(let i = pangkat.length-1; i >= 0; i--){
    if(number >= pangkat[i][0]){
      let head = Math.floor(number/pangkat[i][0]);
      let tail = pangkat[i][1];
      let temp = number % pangkat[i][0];
      if((head*pangkat[i][0])/10 === 1 || (head*pangkat[i][0])/100 === 1 || (head*pangkat[i][0])/1000 === 1) {
        head *= pangkat[i][0];
        tail = "";
      }else if(head > 99){
        head = Math.floor(head/100);
        temp = number % (pangkat[i][0]*100);
        tail = "ratus";
      }else if(head > 9){
        head = Math.floor(head/10);
        temp = number % (pangkat[i][0]*10);
        tail = "puluh";
      }
      str += bilangan[angka.indexOf(head)] + "" + tail ;
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

var i=0;
var res=''
function numberToWords(number) {
  // Your code here
  var angka={
    0:'',
    1:'satu',
    2:'dua',
    3:'tiga',
    4:'empat',
    5:'lima',
    6:'enam',
    7:'tujuh',
    8:'delapan',
    9:'sembilan'
  }
  var hasil
  var panjang=number.toString()
  if(panjang.length-i!=4&& i!=panjang.length-1){
    angka[1]='se'
  }
  var satuan =['','puluh','ratus','ribu','puluh','ratus','juta','puluh','ratus','milyar','puluh','ratus','trilion','puluh','ratus',]
  var batas=panjang.length-1
  for (const key in angka) {
    if(panjang[i]==key && panjang[i]!=0){
      if(panjang[i]==1&&panjang[i+1]!=0&&(i%3!=1||i==1)&&(panjang.length-i!=4)){
        i++
        angka[1]='se'
        for (const a in angka) {
          if(panjang[i]==a){
            res+= angka[a]
            res+='belas'
            if(i!=batas){
              res+=' '
              res+=satuan[panjang.length-1-i]
              res+=' '
            }
          }
        }
        break
      }
      res+=angka[key]
      if(angka[key]!='se'){
        res+=' '
      }
      res+=satuan[panjang.length-1-i]
      if (i!=batas) {
        res+=' '
      }
      // var j=i
      var cek
      for(var j=2;j<panjang.length;j++){
        cek=true
        if(panjang[j]!=0){
          cek=false
          break
        }
      }
      if((cek==true&&panjang[i+1]==0&&panjang.length%3!=1)||(panjang.length%3==2&&panjang[i+1]==0&&i<2)&&i!=panjang.length-1){
        res+=satuan[panjang.length-1-i-1]
        res+=' '
      }
      break;
    }
  }
  if(i == batas){
    i=0;hasil=res;res='';
    return hasil
  }
  else{
    i++
    return numberToWords(number)
  }
  }


// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1000000));
console.log(numberToWords(2011845));

//Test Tambahan
console.log(numberToWords(999999999999999))
console.log(numberToWords(217));
console.log(numberToWords(14));
console.log(numberToWords(20000));
console.log(numberToWords(11000))
console.log(numberToWords(31300))
console.log(numberToWords(2340))
console.log(numberToWords(320000))
console.log(numberToWords(302000))
console.log(numberToWords(12001))
console.log(numberToWords(20011))
console.log(numberToWords(1000212))

//abaikan code dibawah ini
module.exports = numberToWords;



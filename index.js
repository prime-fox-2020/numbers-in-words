function numberToWords(number) {
  // Your code here
  var kata = 
  ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  var num = String(number)
  if (num <= 11) return kata[num];
  else if (num < 20) {
    return `${numberToWords(num % 10)} belas`;}
  else if (num < 100) {
    return `${kata[num[0]]} puluh ${numberToWords(num % 10)}`}
  if (num > 99 && num < 200) {
    return `seratus ${numberToWords(num % 100)}`}
  if (num >= 200 && num < 1000) {
    return `${kata[num[0]]} ratus ${numberToWords(num % 100)}`}
  if (num >= 1000 && num < 1999) {
    return `seribu ${numberToWords(num % 1000)}`}
  if (num >= 2000 && num < 1000000) {
    return `${numberToWords(Math.floor(num / 1000))} ribu ${numberToWords(num % 1000)}`}
  else if(number < 1000000000) {
    return `${numberToWords(Math.floor(number/1000000))} juta ${numberToWords(number % 1000000)}`}
  else if(number < 1000000000000) {
    return `${numberToWords(Math.floor(number/1000000000))} miliar ${numberToWords(number % 1000000000)}`}
  else if(number < 1000000000000000) {
    return `${numberToWords(Math.floor(number/1000000000000))} triliun ${numberToWords(number % 1000000000000)}`}
}

// Driver code
console.log(numberToWords(705));
console.log(numberToWords(1956311));
console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;

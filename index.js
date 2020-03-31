function numberToWords(number) {
  var words = [
    [1, 'satu'],
    [2, 'dua'],
    [3, 'tiga'],
    [4, 'empat'],
    [5, 'lima'],
    [6, 'enam'],
    [7, 'tujuh'],
    [8, 'delapan'],
    [9, 'sembilan']
  ];

  var div = [
    [10, 'sepuluh', 'puluh'],
    [100, 'seratus', 'ratus']
  ]

  var toWord = '', min = 0;

  if (number == min) {
    return toWord;
  }

  for (var i = 0; i < div.length; i++) {
    for (var j = 0; j < words.length; j++) {
      if (number >= div[i][0]) {
        if (number / div[i][0] >= words[j][0]) {
          toWord = `${words[j][1]} ${div[i][2]}`;
          min = Math.floor(number / div[i][0]) * div[i][0];
        } else if (number / div[i][0] == 1) {
          toWord = div[i][1];
        }
      } else {
        if (number == words[j][0]) {
          toWord = words[j][1];
          min = words[j][0];
        }
      }
    }
  }

  return toWord + ' ' + numberToWords(number - min);
}

// Driver code
// console.log(numberToWords(705));
// console.log(numberToWords(1000000));
// console.log(numberToWords(2011845));

//abaikan code dibawah ini
module.exports = numberToWords;


console.log(numberToWords(999));
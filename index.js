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
  ];

  var triple = [
    [1000, 'ribu'],
    [1000000, 'juta'],
    [1000000000, 'miliar'],
    [1000000000000, 'triliun']
  ]

  var toWord = '', min = 0;

  if (number == min) {
    return toWord;
  }

  var operate = number;
  var timer = 1;
  for (var i = 0; i < div.length; i++) {
    var last = '';
    for (var k = 0; k < triple.length; k++) {
      if (number >= triple[k][0]) {
        operate = Math.floor(number / triple[k][0]);
        last = triple[k][1];
        timer = triple[k][0];
      }
    }
    for (var j = 0; j < words.length; j++) {
      if (operate >= div[i][0]) {
        if (operate / div[i][0] >= words[j][0]) {
          toWord = `${words[j][1]} ${div[i][2]}`;
          min = Math.floor(operate / div[i][0]) * div[i][0] * timer;
        } else if (operate / div[i][0] < 2) {
          if (operate == 11) {
            toWord = `sebelas ${last}`;
          } else if (operate % 10 == words[j][0]) {
            toWord = `${words[j][1]} belas ${last}`;
          } else if (operate / 10 == 1 || (operate / 100 < 2 && i == 1)) {
            toWord = `${div[i][1]} ${last}`;
          }
          min = operate * timer;
        }
      } else {
        if (operate == words[j][0]) {
          toWord = `${words[j][1]} ${last}`;
          if (operate*timer == 1000) {
            toWord = 'seribu'
          }
          min = words[j][0] * timer;
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

console.log(numberToWords(999999999999999))
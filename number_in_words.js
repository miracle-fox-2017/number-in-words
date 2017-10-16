function numberToWords(number) {
  let huruf = ''
  let sisa;
  let objNumber = {
    0: '',
    1: 'Satu',
    2: 'Dua',
    3: 'Tiga',
    4: 'Empat',
    5: 'Lima',
    6: 'Enam',
    7: 'Tujuh',
    8: 'Delapan',
    9: 'Sembilan',
    10: 'Sepuluh',
  }

  if (number <= 10) {
    huruf = objNumber[number]
  } else if (number > 10 && number < 20) {
    sisa = number % 10;
    if (sisa == 1) {
      huruf = 'Sebelas'
    } else {
      huruf = objNumber[sisa] + ' Belas'
    }

  } else if (number >= 20 && number < 100) {
    sisa = Math.floor(number / 10)
    huruf = objNumber[sisa] + ' Puluh ' + numberToWords(number % 10)
  } else if (number >= 100 && number < 1000) {
    sisa = Math.floor(number / 100)
    if (sisa == 1) {
      huruf = 'Seratus ' + numberToWords(number % 100)
    } else {
      huruf = objNumber[sisa] + ' Ratus ' + numberToWords(number % 100)
    }
  } else if (number >= 1000 && number < 10000) {
    sisa = Math.floor(number / 1000)
    if (sisa == 1) {
      huruf = 'Seribu ' + numberToWords(number % 1000)
    } else {
      huruf = objNumber[sisa] + ' Ribu ' + numberToWords(number % 1000)
    }
  } else if (number >= 10000 && number < 1000000) {
    sisa = Math.floor(number / 1000)
    if (sisa == 11) {
      huruf = 'Sebelas Ribu ' + numberToWords(number % 1000)
    } else {
      huruf = numberToWords(sisa) + ' Ribu ' + numberToWords(number % 1000)
    }
  } else if (number >= 1000000 && number < 1000000000) {
    sisa = Math.floor(number / 1000000)
    if (sisa == 1) {
      huruf = 'Sejuta ' + numberToWords(number % 1000000)
    } else {
      huruf = numberToWords(sisa) + ' Juta ' + numberToWords(number % 1000000)
    }
  } else if (number >= 1000000000 && number < 1000000000000) {
    sisa = Math.floor(number / 1000000000)
    huruf = numberToWords(sisa) + ' Milyar ' + numberToWords(number % 1000000000)

  }
  return huruf;
}

// Driver code
console.log(numberToWords(1000000));
// console.log(numberToWords(123));
// console.log(numberToWords(11));
// console.log(numberToWords(15));
// console.log(numberToWords(16));
// console.log(numberToWords(27));
// console.log(numberToWords(55));
// console.log(numberToWords(101));
// console.log(numberToWords(354));
// console.log(numberToWords(999));
// console.log(numberToWords(1004));
// console.log(numberToWords(1110));
// console.log(numberToWords(1011));
// console.log(numberToWords(10301));
// console.log(numberToWords(10651));
// console.log(numberToWords(1000001));
// console.log(numberToWords(9999999));
// console.log(numberToWords(9999999999));

module.exports = {
  numberToWords: numberToWords
}

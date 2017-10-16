function numberToWords(number) {
  // Your code here
  let angka = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh'];
  if (number < 11) {
    return angka[number];
  } else if (number == 11) {
    return 'sebelas';
  } else if (number < 20) {
    return angka[(number % 10)] + ' belas';
  } else if (number <= 99) {
    return angka[Math.floor(number / 10)] + ' puluh ' + numberToWords(number % 10);
  } else if (number <= 199) {
    return 'seratus ' + numberToWords(number % 100);
  } else if (number <= 999) {
    return angka[Math.floor((number / 100))] + ' ratus ' + numberToWords(number % 100);
  } else if (number <= 1999) {
    return 'seribu ' + numberToWords(number % 1000);
  } else if (number <= 999999) {
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000);
  } else if (number <= 1999999) {
    return 'sejuta ' + numberToWords(number % 1000000);
  } else if (number <= 999999999) {
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000);
  } else if (number <= 999999999999) {
    return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(number % 1000000000);
  } else if (number <= 999999999999999) {
    return numberToWords(Math.floor(number / 1000000000000)) + ' triliun ' + numberToWords(number % 1000000000000);
  }
}

// Driver code
// console.log(numberToWords(1));
// console.log(numberToWords(19));
console.log(numberToWords(190));
// console.log(numberToWords(30000));
// console.log(numberToWords(9999));
// console.log(numberToWords(39999));
// console.log(numberToWords(139999));
// console.log(numberToWords(539999));
// console.log(numberToWords(1000000));
// console.log(numberToWords(5430000));
console.log(numberToWords(994190254540000));
// console.log(numberToWords(1254000000));

module.exports = {
  numberToWords: numberToWords
}

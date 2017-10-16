function numberToWords(number) {
  // Your code here
  let words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  if (number <= 11) {
    return words[number]
  }
  if (number <=19) {
    return words[number - 10] + ' belas';
  }
  if (number < 100) {
    return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10);
  }
  if (number < 200) {
    return  'seratus ' + numberToWords(number % 100);
  }
  if (number < 1000) {
    return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100);
  }
  if (number < 1000000) {
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000);
  }
  if (number < 1000000000) {
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000);
  }
  if (number < 1000000000000) {
    return numberToWords(Math.floor(number / 1000000000))+ ' milyar ' + numberToWords(number % 1000000000);
  }
  if (number < 10000000000000) {
    return numberToWords(Math.floor(number / 1000000000000)) + ' trillion ' + numberToWords(number % 1000000000000);
  }
}
// Driver code

console.log(numberToWords(9999000000000));
console.log(numberToWords(1000));
//console.log(numberToWords(1000000));



module.exports = {
  numberToWords: numberToWords
}

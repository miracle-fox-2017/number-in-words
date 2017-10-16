function numberToWords(number) {
  var satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var simpan = '';
  if (number < 12) {
    simpan = satuan[number];
  } else if (number < 20) {
    simpan = numberToWords(number % 10) + 'belas';
  } else if (number < 100) {
    var nilai = Math.floor(number / 10);
    simpan = numberToWords(nilai) + ' puluh ' + satuan[number % 10];
  } else if (number < 200) {
    simpan = 'seratus ' + numberToWords(number - 100);
  } else if (number < 1000) {
    var nilai = Math.floor(number / 100);
    simpan = numberToWords(nilai) + ' ratus ' + numberToWords(number % 100);
  } else if (number < 2000) {
    simpan = 'seribu' + numberToWords(number%1000);
  } else if (number < 10000) {
    simpan = numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000);
  } else if (number < 10000) {
    simpan = numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000);
  } else if (number < 100000) {
    simpan = numberToWords(Math.floor(number / 10000)) + ' ribu ' + numberToWords(number % 10000);
  }
  return simpan;
}
// Driver code
console.log(numberToWords(1));
console.log(numberToWords(2));
console.log(numberToWords(10));
console.log(numberToWords(11));
console.log(numberToWords(12));
console.log(numberToWords(20));
console.log(numberToWords(23));
console.log(numberToWords(90));
console.log(numberToWords(110));
console.log(numberToWords(999));
console.log(numberToWords(1000));
console.log(numberToWords(100000));
// console.log(numberToWords(1000000));

// module.exports = {
//   numberToWords: numberToWords
// }

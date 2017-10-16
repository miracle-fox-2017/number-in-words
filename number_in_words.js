function numberToWords(number) {
  var key = ['','satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh',
   'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas',
   'sembilan belas']

  if(number < 20){
    return key[number]
  }
  else if(number < 100){
    // var angka = Math.floor(number/10)
    return numberToWords(Math.floor(number/10)) + ' puluh ' + numberToWords(number % 10)
  }
  else if(number < 200){
    return 'seratus ' + numberToWords(number %100)
  }
  else if(number < 1000){
    // var angka = Math.floor(number/10)
    return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100)
   }
  // else if (number)
}

// Driver code
console.log(numberToWords(4)); //"empat"
console.log(numberToWords(17)); //"sepuluh tujuh"
console.log(numberToWords(27)); //"dua puluh tujuh"
console.log(numberToWords(144)); //
console.log(numberToWords(911)); //
// console.log(numberToWords(270000)); //
// console.log(numberToWords(5500000)); //
// console.log(numberToWords(1000000));

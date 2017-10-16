function numberToWords(number) {
  // Your code here
  var angka = ["", 'satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas'];


  if(number <= 11){
    return angka[number];
  }
  else if(number <= 19 ){
    return numberToWords(number % 10) + ' belas';
  }
  else if (number <= 99){
    return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10);
  }
  else if (number < 200){
    return 'seratus ' + numberToWords(number % 100);
  }
  else if (number <= 999){
      return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100);
  }
  else if ( number < 2000){
      return 'seribu ' + numberToWords(number % 1000);
  }
  else if ( number <= 99999){
      return numberToWords(Math.floor(number / 1000)) + 'ribu ' + numberToWords(number % 1000);
  }
  
  else if (number <= 999999){
      return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000);
  }
  else if (number < 99999999){
      return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000);
  }
  else if (number < 200000000){
      return "seratus " + numberToWords(number % 100000000)
  }
  else if (number <= 999999999){
      return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
  }
  else if (number <= 999999999999){
      return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords (number % 1000000000)
  }
  else if (number <= 999999999999999){
      return numberToWords(Math.floor(number / 10000000000)) + ' triliun ' + numberToWords(number % 10000000000);
  }
}
console.log(numberToWords(1001001))

module.exports = {
  numberToWords: numberToWords
}

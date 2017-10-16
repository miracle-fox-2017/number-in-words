function numberToWords(number) {
  // Your code here
  const num = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan','sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
  
    let result = '';
  
    if (number < 20) return num[number];
    else if (number < 100) return numberToWords((number - (number % 10)) / 10) + ' puluh ' + numberToWords(number % 10);
    else if (number < 200) return 'seratus ' + numberToWords(number % 100);
  
    else if (number < 1000) return numberToWords((number - (number % 100)) / 100) + ' ratus ' + numberToWords(number % 100);
    else if (number < 2000) return 'seribu ' + numberToWords(number % 1000);
  
    else if (number < 10000) return numberToWords((number - (number % 10000)) / 10000) + ' ribu ' + numberToWords(number % 1000);
    else if (number < 20000) return numberToWords((number - (number % 1000)) / 1000) + ' ribu';
  
    else if (number < 200000) return numberToWords((number - (number % 1000)) / 1000) + numberToWords(number % 10000);
    
    else if (number < 1000000) return numberToWords((number - (number % 100000)) / 100000) + ' ratus ' + numberToWords(number % 100000);
  
    else if (number < 20000000) return numberToWords((number - (number % 1000000)) / 1000000) + ' juta ' + numberToWords(number % 1000000);
}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}

function numberToWords(number) {
  // Your code here
    let satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas',]
    
    let hasil = '';
    
    if(number < 12) return satuan[number];

    else if (number < 20){
      return numberToWords(number % 10) + ' belas'; 
    }
    else if(number < 100){
      return numberToWords(number.toString()[0]) + ' puluh ' + numberToWords(number % 10)
    } 
    else if(number < 200){
      return 'seratus ' + numberToWords(number % 100)
    }
    else if(number < 1000){
      return  numberToWords(Math.floor(number / 100))  + ' ratus ' + numberToWords(number % 100)
    }
    else if(number < 2000){
      return 'seribu ' + numberToWords(number % 1000)
    }
    else if(number < 10000){
      return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
    }
    else if(number < 100000){
      return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
    }
    else if(number < 1000000){
      return numberToWords(Math.floor(number / 100000)) + ' ratus' + numberToWords(number % 10000);
    }
}

// Driver code
console.log(numberToWords(999999));

// module.exports = {
//   numberToWords: numberToWords
// }

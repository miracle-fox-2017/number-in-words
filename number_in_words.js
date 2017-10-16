function numberToWords(number) {
  // Your code here
  let numSatuan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 100, 1000, 10000]
  let satuan = ['satu', 'dua', 'tiga', 'empat ', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas', 'seratus', 'seribu'];
  let hasil = '';
  let strNumber = number.toString();
  let splitNumber = strNumber.split('');

  let hasil1 = '';
  let hasil2 = '';


  for(var i = 0; i < numSatuan.length; i++ ){
    // Unik bilangan
    if(number === numSatuan[i]){
        return satuan[i];
    }

    if (strNumber.length === 2) {
      if (parseInt(splitNumber[0]) === 1 && parseInt(splitNumber[1]) > 0) {
        return numberToWords(number % 10) + ' belas';
      }
      if (parseInt(splitNumber[0]) > 1) {
        if (parseInt(splitNumber[1]) === 0) {
          return numberToWords(Math.floor(number / 10)) + ' puluh';
        }
        return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10);
      }
    }

    if (strNumber.length === 3){
      if (parseInt(splitNumber[0]) === 1) {
        return 'seratus '+ numberToWords(number % 100);
      }
      if (parseInt(splitNumber[0]) > 1 && parseInt(splitNumber[1]) === 0 && parseInt(splitNumber[2]) === 0) {
        return numberToWords(Math.floor(number / 100))+' ratus';
      }
      if (parseInt(splitNumber[0]) > 1) {
        return numberToWords(Math.floor(number / 100))+' ratus '+numberToWords(number % 100)
      }
    }

    if (strNumber.length === 4) {
      if (parseInt(splitNumber[0]) === 1) {
        return ' seribu '+ numberToWords(number % 1000);
      }

      if (parseInt(splitNumber[0]) > 1 && parseInt(splitNumber[1]) === 0 && parseInt(splitNumber[2]) === 0 && parseInt(splitNumber[3]) === 0) {
        return numberToWords(Math.floor(number / 1000))+' ribu ';
      }

      if (parseInt(splitNumber[0]) > 1) {
        return numberToWords(Math.floor(number / 1000))+' ribu '+numberToWords(number % 1000)
      }

    }

    if (strNumber.length === 5) {
      if (parseInt(splitNumber[0]) === 1) {
        return ' sepuluh ribu '+ numberToWords(number % 10000);
      }

      if (parseInt(splitNumber[0]) > 1 && parseInt(splitNumber[1]) === 0 && parseInt(splitNumber[2]) === 0 && parseInt(splitNumber[3]) === 0 && parseInt(splitNumber[4]) === 0) {
        return numberToWords(Math.floor(number / 10000))+' puluh ribu ';
      }

      if (parseInt(splitNumber[0]) > 1) {
        return numberToWords(Math.floor(number / 10000))+' puluh ribu '+numberToWords(number % 10000)
      }

    }

    if (strNumber.length === 6) {
      if (parseInt(splitNumber[0]) === 1) {
        return ' seratus ribu '+ numberToWords(number % 100000);
      }

      if (parseInt(splitNumber[0]) > 1 && parseInt(splitNumber[1]) === 0 && parseInt(splitNumber[2]) === 0 && parseInt(splitNumber[3]) === 0 && parseInt(splitNumber[4]) === 0 && parseInt(splitNumber[5]) === 0) {
        return numberToWords(Math.floor(number / 100000))+' ratus ribu ';
      }

      if (parseInt(splitNumber[0]) > 1) {
        return numberToWords(Math.floor(number / 100000))+' ratus ribu '+numberToWords(number % 100000)
      }

    }

    if (strNumber.length === 7) {
      if (parseInt(splitNumber[0]) === 1) {
        return ' satu juta '+ numberToWords(number % 1000000);
      }

      if (parseInt(splitNumber[0]) > 1 && parseInt(splitNumber[1]) === 0 && parseInt(splitNumber[2]) === 0 && parseInt(splitNumber[3]) === 0 && parseInt(splitNumber[4]) === 0 && parseInt(splitNumber[5]) === 0 && parseInt(splitNumber[6]) === 0) {
        return numberToWords(Math.floor(number / 1000000))+' juta ';
      }

      if (parseInt(splitNumber[0]) > 1) {
        return numberToWords(Math.floor(number / 1000000))+' juta '+numberToWords(number % 1000000)
      }

    }


  }

}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(15));
console.log(numberToWords(315501));
console.log(numberToWords(139));
console.log(numberToWords(3000));
console.log(numberToWords(999));
console.log(numberToWords(1000000));
/*
module.exports = {
  numberToWords: numberToWords
}*/

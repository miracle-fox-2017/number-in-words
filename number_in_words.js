function numberToWords(number) {
  // Your code here
  var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  var kata = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  var hasil = '';

  for (var i = 0; i < angka.length; i++) {
  	if (number === angka[i]) {
  		return kata[i];
  	} 

  	if (number > 11 && number < 20) {
  		// belasan
  		return numberToWords(number % 10) + ' belas';
  	}

  	if (number > 20 &&  number < 100) {

  		if (number % 10 === 0) {
  			return numberToWords(Math.floor(number / 10)) + ' puluh ';
  		}
  		
  		return numberToWords(Math.floor(number / 10)) + ' puluh ' +  numberToWords(number % 10);
  	}

  	if (number > 99 && number < 200) {
  		if (number % 100 == 0) {
  			return 'seratus';
  		}

  		return 'seratus ' + numberToWords(number % 100);
  	}

  	if (number > 199 && number < 1000) {
  		if (number % 100 === 0) {
  			return numberToWords(Math.floor(number / 100)) + ' ratus ';
  		}

  		return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100);
  	}

  	if (number > 999 && number < 2000) {
  		if (number % 1000 === 0) {
  			return 'seribu ';
  		}

  		return 'seribu '+ numberToWords(number % 1000);
  	}

  	// 2000 - 9999
  	if (number > 1999 && number < 10000) {
  		if (number % 1000 === 0) {
  			return numberToWords(Math.floor(number / 1000))+  ' ribu ';
  		}

  		return numberToWords(Math.floor(number / 1000))+  ' ribu '+ numberToWords(number % 1000);
  	}

  	//10.000 - 19.999
  	if (number > 9999 && number < 20000) {
  		if (number % 1000 === 0) {
  			return numberToWords(Math.floor(number / 1000))+  ' ribu ';
  		}

  		return numberToWords(Math.floor(number / 1000))+' ribu '+ numberToWords(number % 1000);
  	}

  	// 20ribu - 99 999
  	if (number > 19999 && number < 999999) {
  		if (number % 1000 === 0) {
  			return numberToWords(Math.floor(number / 1000))+  ' ribu ';
  		}

  		return numberToWords(Math.floor(number / 1000))+' ribu '+ numberToWords(number % 1000);
  	}


  	// 1 juta - 10 juta
  	if (number > 999999 && number < 99999999) {
  		if (number % 1000000 === 0) {
  			return numberToWords(Math.floor(number / 1000000))+  ' juta ';
  		}

  		return numberToWords(Math.floor(number / 1000000))+' juta '+ numberToWords(number % 1000);
  	}
  }

}

// Driver code
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102)); // seratus dua

console.log(numberToWords(55)); // seribu seratus
console.log(numberToWords(18850)); // seribu seratus

console.log(numberToWords(38079)); // tiga puluh delapan ribu tujuh puluh sembilan
console.log(numberToWords(1000000));


module.exports = {
  numberToWords: numberToWords
}

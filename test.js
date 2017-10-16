const numberToWords = (num) => {
	var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	var kata = ['satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
	var hasil = '';


	for (var i = 0; i < angka.length; i++) {
		if (num === angka[i]) {
			return kata[i];
		}

		if (num > 11 && num < 20) {
			return kata[angka.indexOf(num % 10)] +  ' belas';
		}

		if (num > 19 && num < 100) {
			if (num % 10 === 0) {
				return kata[angka.indexOf(num / 10)] +  ' puluh';
			}
			
			return kata[angka.indexOf(Math.floor(num / 10))] +  ' puluh ' + kata[angka.indexOf(num % 10)];
		}

		if (num > 99 && num < 199) {
			if (num % 100 === 0) {
				return 'Seratus ' + kata[angka.indexOf(num % 10)];
			}
			
			return 'Seratus ' + kata[angka.indexOf(num % 100)];
		}
	}

	return hasil;
}

// console.log(110 % 100)

// console.log(numberToWords(4));
// console.log(numberToWords(99));
console.log(numberToWords(55)); // seratus dua

// console.log(numberToWords(55)); // seribu seratus
// console.log(numberToWords(18850)); // seribu seratus

// console.log(numberToWords(38079)); // tiga puluh delapan ribu tujuh puluh sembilan
// // console.log(numberToWords(82102713));
// console.log(numberToWords(1000000));


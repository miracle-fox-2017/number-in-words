function numberToWord(num) {
  // Your code here
  const numLib = {
		1 : 'Satu',
		2 : 'Dua',
		3 : 'Tiga',
		4 : 'Empat',
		5 : 'Lima',
		6 : 'Enam',
		7 : 'Tujuh',
		8 : 'Delapan',
		9 : 'Sembilan',
		10 : 'Sepuluh',
		11 : 'Sebelas'
	}

	let temp = 0

	if(num >=1 && num <=11){
		return numLib[num]
	}
		
	if(num>11 && num <20){
		temp = num%10
		return numLib[temp]+' Belas '
	}
			
	if(num>=20 && num<100){
		return numLib[Math.floor(num/10)]+' Puluh '+numberToWord(num%10)
	}
	
	if(num >= 100 && num <200){
		if(num === 100){
			return 'Seratus'
		}else{
			return 'Seratus ' + numberToWord(num%100)	
		}
	}

	if(num>=200 && num<1000){
		if(num%100 === 0){
			return numLib[Math.floor(num/100)]+' Ratus '	
		}else{
			return numLib[Math.floor(num/100)]+' Ratus '+numberToWord(num%100)
		}				
	}

	if(num>1000 && num<2000){

		if(num===1000){
			return 'Seribu'
		}else{
			return 'Seribu ' + numberToWord(num%1000)
		}
	}

	if(num>=2000 && num<1000000){
		if(num%1000===0){
			return numberToWord(num/1000) + ' Ribu'	
		}else{
			return numberToWord(Math.floor(num/1000)) + ' Ribu '+numberToWord(num%1000)	
		}
	}

	if(num>=1000000 && num<1000000000){
		if(num%1000000===0){
			return numberToWord(Math.floor(num/1000000))+' juta'	
		}else{
			return numberToWord(Math.floor(num/1000000))+' juta '+numberToWord(num%1000000)	
		}
	}

	if(num>=1000000000 && num<1000000000000){
		if(num%1000000000===0){
			return numberToWord(Math.floor(num/1000000000))+' Miliyar'	
		}else{
			return numberToWord(Math.floor(num/1000000000))+' Miliyar '+numberToWord(num%1000000000)	
		}	
	}

	if(num>=1000000000000 && num<1000000000000000){
		if(num%1000000000000===0){
			return numberToWord(Math.floor(num/1000000000000))+' Triliun'	
		}else{
			return numberToWord(Math.floor(num/1000000000000))+' Triliun '+numberToWord(num%1000000000000)	
		}	
	}
}

// Driver code
console.log(numberToWord(1000000));
console.log(numberToWord(4));
console.log(numberToWord(27));
console.log(numberToWord(102));
console.log(numberToWord(38079));
console.log(numberToWord(82102713));
console.log(numberToWord(111111111));

module.exports = {
  numberToWords: numberToWord
}

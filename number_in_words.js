function numberToWords(number) {
  // Your code here
	let numStr = number.toString();
	let result = '';
	var tempResult = '';
	let convertAngka = {
							"1" : "satu",
							"2" : "dua",
							"3" : "tiga",
							"4" : "empat",
							"5" : "lima",
							"6" : "enam",
							"7" : "tujuh",
							"8" : "delapan",
							"9" : "sembilan"
	}
	let convertSatuan = ["puluh","ratus"];
	let convertRibuan = ["ribu","juta"];
	let satuanIndex = [10,100];
		// if (numStr.length > 4){
		// 	let newStr = numStr.slice(numStr.length-3 , numStr.length);
		//     numStr =  numStr.slice(0,numStr.length-3);
		// }
		if (numStr.length < 4){
			while (numStr.length !== 0){
					if (numStr[0] === "0"){
						numStr = numStr.slice(1);
					}			
					if (numStr[0] !== "0" & numStr.length !==1){
					result = result + " "+ convertAngka[numStr[0]]+" "+ convertSatuan[satuanIndex.indexOf(Math.pow(10,numStr.length-1))];
					numStr = numStr.slice(1);
					}
					if (numStr.length === 1){
						result = result + " "+ convertAngka[numStr[0]];
						numStr = numStr.slice(1);
					}
			}

		}
		return result;
}  


// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(2));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079)); 
console.log(numberToWords(82102713));

module.exports = {
  numberToWords: numberToWords
}

function numberToWords(number) {
  // Your code here
	let numStr = number.toString();
	let result = '';
	let convertAngka = {
							"0" : "",
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
	let satuanIndex = [10,100];
		if (numStr.length < 4){
			while (numStr.length !== 0){
					if (numStr[0] === "0" && numStr.length !== 1){
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
			return result;
		}
		if (numStr.length > 3 && numStr.length < 7){
			if (numStr[0] === "0" && numStr.length !== 4){
				numStr = Number(numStr.slice(1));
				return result + numberToWords(numStr);
			}
			if (numStr[0] !== "0" & numStr.length !==4){
				result = result + " "+ convertAngka[numStr[0]]+" "+ convertSatuan[satuanIndex.indexOf(Math.pow(10,numStr.length-4))];
				numStr = Number(numStr.slice(1));				
				if (numStr === 0){
					return result +" ribu"+ numberToWords(numStr);
				}				
				return result + numberToWords(numStr);
			}
			if (numStr.length === 4){
				result = result + " "+ convertAngka[numStr[0]] + " ribu";
				numStr = Number(numStr.slice(1));
				return result + numberToWords(numStr);
			}			
		}
		if (numStr.length > 6 && numStr.length < 10){
			if (numStr[0] === "0" && numStr.length !== 7){
				numStr = Number(numStr.slice(1));
				return result + numberToWords(numStr);
			}
			if (numStr[0] !== "0" & numStr.length !==7){
				result = result + " "+ convertAngka[numStr[0]]+" "+ convertSatuan[satuanIndex.indexOf(Math.pow(10,numStr.length-7))];
				numStr = Number(numStr.slice(1));
				if (numStr === 0){
					return result +" juta"+ numberToWords(numStr);
				}				
				return result + numberToWords(numStr);
			}
			if (numStr.length === 7){
				result = result + " "+ convertAngka[numStr[0]] + " juta";
				numStr = Number(numStr.slice(1));
				return result + numberToWords(numStr);
			}			
		}
		if (numStr.length > 9 && numStr.length < 14){
			if (numStr[0] === "0" && numStr.length !== 10){
				numStr = Number(numStr.slice(1));
				return result + numberToWords(numStr);
			}
			if (numStr[0] !== "0" & numStr.length !==10){
				result = result + " "+ convertAngka[numStr[0]]+" "+ convertSatuan[satuanIndex.indexOf(Math.pow(10,numStr.length-10))];
				numStr = Number(numStr.slice(1));				
				if (numStr === 0){
					return result +" Milliar"+ numberToWords(numStr);
				}				
				return result + numberToWords(numStr);
			}
			if (numStr.length === 10){
				result = result + " "+ convertAngka[numStr[0]] + " milliar";
				numStr = Number(numStr.slice(1));
				return result + numberToWords(numStr);
			}			
		}		

}
// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(10000000000));
console.log(numberToWords(2));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079)); 
console.log(numberToWords(82102713));

module.exports = {
  numberToWords: numberToWords
}

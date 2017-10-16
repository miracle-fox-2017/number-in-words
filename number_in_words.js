function numberToWords(number) {
  // Your code here
let arrnum = [ '','Satu','Dua','Tiga','Empat','Lima','Enam','Tujuh','Delapan','Sembilan']

if (number<10){
  return arrnum[number]
}
else if (number === 10){ return 'Sepuluh' }
else if (number === 11){ return 'Sebelas' }
else if (number<20){ return arrnum[number % 10] + 'Belas' }
else if (number < 100){return numberToWords(Math.floor(number/10)) + ' Puluh ' + numberToWords(number % 10)}
else if (number < 200){return 'Seratus ' + numberToWords(number % 100)}
else if (number < 1000){return numberToWords(Math.floor(number/100)) + ' Ratus ' + numberToWords(number % 100)}
else if (number < 2000){return 'Seribu ' + numberToWords(number % 1000)}

else if (number < 100000){return numberToWords(Math.floor(number/1000)) + ' Ribu ' + numberToWords(number % 1000)}

else if (number < 1000000){return numberToWords(Math.floor(number/1000)) + ' Ribu ' + numberToWords(number % 1000)}

else if (number < 10000000){return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number % 1000000)}

}


// Driver code
// console.log(numberToWords(1000000));
console.log(numberToWords(1000000));

// module.exports = {
//   numberToWords: numberToWords
// }

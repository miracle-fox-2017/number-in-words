function numberToWords(number) {
 let kata =['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan']
  if(number<10){
    return kata[number]
  }
  else if(number === 10){
    return 'sepuluh'
  }
  else if(number === 11){
    return 'sebelas'
  }
  else if(number < 20){
    return kata[number %10]+' belas '
  }
  else if(number < 100){
    return numberToWords(Math.floor(number/10))+ ' puluh ' + numberToWords(number%10)
  }
  else if(number < 200 ){
    return ' serarus '+numberToWords(number%100)
  }
  else if(number < 1000){
    return numberToWords(Math.floor(number/100))+' ratus '+ numberToWords(number%100)
  }
  else if(number < 2000){
    return ' seribu '+ numberToWords(number%1000)
  }
  else if (number < 10000) {
    return numberToWords(Math.floor(number/1000))+ ' ribu '+numberToWords(number%1000)
  }
  else if (number < 20000) {
    return numberToWords(Math.flor(number/1000))+ ' ribu '+numberToWords(number%1000)
}

// Driver code
console.log(numberToWords(999));
console.log(numberToWords(1000000));

// module.exports = {
//   numberToWords: numberToWords
// }

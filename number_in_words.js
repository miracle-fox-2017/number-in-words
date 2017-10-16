function numberToWords(number) {
  let words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh'];

  if (number<=10) {
    return words[number]
  } else if(number <= 11){
    return 'sebelas '
  } else if(number <= 19){
    return words[number%10]+ ' belas '
  } else if(number <= 99){
    return words[Math.floor(number/10)] +' puluh '+ numberToWords(number%10)
  } else if(number <= 199){
    return 'seratus ' + numberToWords(number%100)
  } else if(number <= 999){
    return words[Math.floor(number/100)] +' ratus '+ numberToWords(number%100)
  } else if(number <= 1999){
    return 'seribu '+ numberToWords(number%1000)
  } else if(number <= 999999){
    return numberToWords(Math.floor(number/1000))+' ribu '+ numberToWords(number%1000)
  } else if(number <= 999999999){
    return numberToWords(Math.floor(number/1000000))+' juta ' +numberToWords(number%1000000)
  } else if(number <= 999999999999){
    return numberToWords(Math.floor(number/1000000000))+' miliar ' + numberToWords(number%1000000000)
  } else if(number <= 999999999999998){
    return numberToWords(Math.floor(number/1000000000000))+' triliun ' + numberToWords(number%1000000000000)
  }
}

// Driver code
// console.log(numberToWords(999999999999999));
console.log(numberToWords(1030000));

module.exports = {
  numberToWords: numberToWords
}

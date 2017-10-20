function numberToWords(number) {
  let angka = ['satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','']
  if(number === 0){
    return angka[number.length-1]
  }
  if(number > 0 && number <= 10){
    return angka[number-1]
  }
  if(number > 10 && number <= 19){
    if(number%10 === 1){
      return 'sebelas'
    }
    else{
      return angka[Math.floor(number%10)-1] + ' belas'
    }
  }
  if(number > 19 && number <= 99){
    if(number % 10 === 0){
      return angka[Math.floor(number/10)-1] + ' puluh '
    }
    else{
      return angka[Math.floor(number/10)-1] + ' puluh ' + numberToWords(number % 10)
    }
  }
  if(number > 99 && number <= 999){
    if(Math.floor(number / 100) === 1){
      return 'seratus ' + numberToWords(number % 100)
    }
    else if(number % 100 === 0){
      return angka[Math.floor(number/100)-1] + ' ratus'
    }
    else{
      return angka[Math.floor(number/100)-1] + ' ratus ' + numberToWords(number % 100)
    }
  }
  if(number > 999 && number <= 999999){
    if(Math.floor(number / 1000) === 1){
      return 'seribu ' + numberToWords(number % 1000)
    }
    else if(number % 1000 === 0){
      return numberToWords(Math.floor(number/1000)) + ' ribu '
    }
    else{
      return numberToWords(Math.floor(number/1000)) + ' ribu ' + numberToWords(number % 1000)
    }
  }
  if(number > 999999 && number <= 999999999){
    if(number % 1000000 === 0){
      return numberToWords(Math.floor(number/1000000)) + ' juta '
    }
    else{
      return numberToWords(Math.floor(number/1000000)) + ' juta ' + numberToWords(number % 1000000)
    }
  }
  if(number > 999999999 && number < 9999999999){
    if(number % 10000000 === 0){
      return numberToWords(Math.floor(number/1000000000)) + ' milyar '
    }
    else{
      return numberToWords(Math.floor(number/1000000000)) + ' milyar ' + numberToWords(number % 1000000000)
    }
  }
}

// Driver code
console.log(numberToWords(5102200010));
console.log(numberToWords(150000));


module.exports = {
  numberToWords: numberToWords
}

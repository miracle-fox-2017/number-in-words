function numberToWords(number) {
  // Your code here
  const words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']
  const split = number.toString().split('')

  if(number <= 11){
    return words[number]
  }else if(number <= 19){
    return `${words[number-10]} belas`
  }else if(number <= 99){
    return `${words[split[0]]} puluh ${numberToWords(number%10)}`
  }else if(number < 200){
    return `seratus ${numberToWords(number%100)}`
  }else if(number <= 999){
    return `${numberToWords(Math.floor(number/100))} ratus ${numberToWords(number%100)}`
  }else if(number <= 9999){
    if(split[0] === '1'){
      return `seribu ${numberToWords(number%1000)}`
    }else{
      return `${numberToWords(Math.floor(number/1000))} ribu ${numberToWords(number%1000)}`
    }
  }else if(number <= 99999){
    return `${numberToWords(Math.floor(number/1000))} ribu ${numberToWords(number%1000)}`
  }else if(number <= 99999999){
    return `${numberToWords(Math.floor(number/1000000))} juta ${numberToWords(number%1000000)}`
  }else if(number <= 99999999999){
    return `${numberToWords(Math.floor(number/1000000000))} milyar ${numberToWords(number%1000000000)}`
  }else if(number <= 999999999999999){
    return `${numberToWords(Math.floor(number/1000000000000))} triliun ${numberToWords(number%1000000000000)}`
  }

}

// Driver code
console.log(numberToWords(999000000000000));

module.exports = {
  numberToWords: numberToWords
}

function numberToWords(number) {
  // Your code here
  const words = ['','satu','dua','tiga','empat','lima','enam','tujuh','delapan','sembilan','sepuluh','sebelas']

  if(number <= 11){
    return words[number]
  }else if(number <= 19){
    return `${words[number-10]} belas`
  }else if(number <= 99){
    let split = number.toString().split('')
    return `${words[split[0]]} puluh ${numberToWords(number%10)}`
  }else if(number === 100){
    return `seratus`
  }else if(number <= 119){
    return `seratus ${numberToWords(number%100)}`
  }else if(number <= 999){
    let split = number.toString().split('')
    return `${words[split[0]]} ratus ${numberToWords(number%100)}`
  }

}

// Driver code
console.log(numberToWords(919));

module.exports = {
  numberToWords: numberToWords
}

function numberToWords(number) {
  // Your code here
  let word = {
    0:'',
    1:'SATU',
    2:'DUA',
    3:'TIGA',
    4:'EMPAT',
    5:'LIMA',
    6:'ENAM',
    7:'TUJUH',
    8:'DELAPAN',
    9:'SEMBILAN',
    10:'SEPULUH',
    11:'SEBELAS',
    100:'SERATUS',
    1000:'SERIBU'
  };

  if(number <= 11){
    return word[number];
  }
  if(number < 20){
    temp = number%10;
    return `${numberToWords(temp)} BELAS`;
  }
  if(number < 100){
    temp = Math.floor(number/10);
    return `${numberToWords(temp)} PULUH ${numberToWords(number%10)}`;
  }
  if(number < 200){
    return `${word[100]} ${numberToWords(number%100)}`;
  }
  if(number < 1000){
    temp = Math.floor(number/100);
    return `${numberToWords(temp)} RATUS ${numberToWords(number%100)}`;
  }
  if(number < 2000){
    return `${word[1000]} ${numberToWords(number%1000)}`;
  }
  if(number < 1000000){
    temp = Math.floor(number/1000);
    return `${numberToWords(temp)} RIBU ${numberToWords(number%1000)}`;
  }
  if(number < 1000000000){
    temp = Math.floor(number/1000000);
    return `${numberToWords(temp)} JUTA ${numberToWords(number%1000000)}`;
  }
  if(number < 1000000000000){
    temp = Math.floor(number/1000000000);
    return `${numberToWords(temp)} MILYAR ${numberToWords(number%1000000000)}`;
  }
  if(number < 1000000000000000){
    temp = Math.floor(number/1000000000000);
    return `${numberToWords(temp)} TRILIUN ${numberToWords(number%1000000000000)}`;
  }
}

// Driver code
console.log(numberToWords(999999999999999));

module.exports = {
  numberToWords: numberToWords
}

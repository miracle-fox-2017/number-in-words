
let numberWords = {
  0 : '',
  1 : 'satu',
  2 : 'dua',
  3 : 'tiga',
  4 : 'empat',
  5 : 'lima',
  6 : 'enam',
  7 : 'tujuh',
  8 : 'delapan',
  9 : 'sembilan',
  10 : 'sepuluh'

}

function number_in_words(num){
//let res = ''
let temp = 0
  if(num <= 10){
    return numberWords[num]
  }

  if(num > 10 && num <= 19){
    temp = num%10
      if(temp == 1){
        return 'Sebelas'
      }else{

      return numberWords[temp] + ' belas '
    }
  }

  // puluhan
  if(num >= 20 && num <= 99){
    temp = Math.floor(num/10)
    return  numberWords[temp] + ' puluh ' + number_in_words(num%10)
  }

  // ratusan
  if(num > 100 && num<= 999){
    console.log('masuk');
    temp = Math.floor(num/100)
    return (temp !== 1) ? numberWords[temp] + ' ratus ' + number_in_words(num%100) :
    'seratus ' + number_in_words(num%100)
  }

  if(num >= 1000 && num <= 999999){
    temp = Math.floor(num/1000)
    //console.log(temp);
    return (temp !== 1) ? number_in_words(temp) + ' ribu ' + number_in_words(num%1000) :
    'seribu ' + number_in_words(num%1000)
  }

  // juta
  if(num >= 1000000 && num <= 999999999){
    temp = Math.floor(num/1000000)
    return (temp !== 1) ? number_in_words(temp) + ' juta ' + number_in_words(num%1000000) :
    'sejuta ' + number_in_words(num%1000000)
  }

  // milyar
  if(num >= 1000000000 && num <= 999999999999){
    temp = Math.floor(num/1000000000)
    return (temp !== 1) ? number_in_words(temp) + ' milyar ' + number_in_words(num%1000000000) :
    numberWords[temp] + ' milyar ' + number_in_words(num%1000000000)
  }

  //trilliun
  if(num >= 1000000000000 && num <= 999999999999999){
    temp = Math.floor(num/1000000000000)
    return (temp !== 1) ? number_in_words(temp) + ' trilliun ' + number_in_words(num%1000000000000) :
    numberWords[temp] + ' trilliun ' + number_in_words(num%1000000000000)
  }




}






console.log(number_in_words(999000000000000));


module.exports = {
  number_in_words: number_in_words
}

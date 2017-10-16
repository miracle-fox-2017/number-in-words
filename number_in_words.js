function numberToWords(number) {
  // Your code here
  if(number == 1) {
    return 'satu'
  } else if(number == 2) {
    return 'dua'
  } else if(number == 3) {
    return 'tiga'
  } else if(number == 4) {
    return 'empat'
  } else if(number == 5) {
    return 'lima'
  } else if(number == 6) {
    return 'enam'
  } else if(number == 7) {
    return 'tujuh'
  } else if(number == 8) {
    return 'delapan'
  } else if(number == 9) {
    return 'sembilan'
  } else if(number == 10) {
    return 'sepuluh'
  } else if(number == 11) {
    return 'sebelas'
  } else if(number == 0) {
    return ''
  }

  else if(number < 20) {
    return numberToWords(number - 10) + ' belas'
  }

  else if(number < 100) {
    return numberToWords(Math.floor(number / 10)) + ' puluh ' + numberToWords(number % 10)
  }

  else if(number < 200) {
    return 'seratus ' + numberToWords(number % 100)
  }

  else if(number < 1000) {
    return numberToWords(Math.floor(number / 100)) + ' ratus ' + numberToWords(number % 100)
  }

  else if(number < 2000) {
    return 'Seribu ' + numberToWords(number % 1000)
  }

  else if(number < 1000000) {
    return numberToWords(Math.floor(number / 1000)) + ' ribu ' + numberToWords(number % 1000)
  }

  else if(number < 1000000000) {
    return numberToWords(Math.floor(number / 1000000)) + ' juta ' + numberToWords(number % 1000000)
  }

  else if(number < 1000000000000) {
    return numberToWords(Math.floor(number / 1000000000)) + ' milyar ' + numberToWords(number % 1000000000)
  }

  else if(number < 1000000000000000) {
    return numberToWords(Math.floor(number / 1000000000000)) + ' triliyun ' + numberToWords(number % 1000000000000)
  }
}

// Driver code
console.log(numberToWords(1000000));
console.log(numberToWords(999000000000000));

module.exports = {
  numberToWords: numberToWords
}

function numberToWords(number) {
  // Your code here
  let output = ''
  let kata = {
  	11: 'sebelas',
  	10: 'sepuluh',
  	9: 'sembilan',
  	8: 'delapan',
  	7: 'tujuh',
  	6: 'enam',
  	5: 'lima',
  	4: 'empat',
  	3: 'tiga',
  	2: 'dua',
  	1: 'satu',
  	0: ''
  }

  if (number < 12) {
  	return `${kata[number]}`
  }

  if (number < 20) {
  	return `${numberToWords(number % 10)} belas`
  }

  if (number < 100) {
  	return `${numberToWords(Math.floor(number / 10))} puluh ${numberToWords(number % 10)}`
  }

  if (number < 200) {
  	return `seratus ${numberToWords(number % 100)}`
  }

  if (number < 1000) {
  	return `${numberToWords(Math.floor(number / 100))} ratus ${numberToWords(number % 100)}`
  }

  if (number < 1000000) {
  	return `${numberToWords(Math.floor(number / 1000))} ribu ${numberToWords(number % 1000)}`
  }

  if (number < 1000000000) {
  	return `${numberToWords(Math.floor(number / 1000000))} juta ${numberToWords(number % 1000000)}`
  }

  if (number < 1000000000000) {
  	return `${numberToWords(Math.floor(number / 1000000000))} milyar ${numberToWords(number % 1000000000)}`
  }

  if (number < 1000000000000000) {
  	return `${numberToWords(Math.floor(number / 1000000000000))} triliun ${numberToWords(number % 1000000000000)}`
  }
}

// Driver code
console.log(numberToWords(999000000000));

module.exports = {
  numberToWords: numberToWords
}

function numberToWords(number) {
  // Your code here
    var kata = ["", "satu ", "dua ", "tiga ", "empat ", "lima ", "enam ", "tujuh ", "delapan ", "sembilan ", "sepuluh ", "sebelas "];

  if (number < 12) {
    return kata[number];
  } else if (number < 20) {
    return kata[number % 10] + "belas "; 
  } else if (number < 100) {
    return kata[Math.floor(number / 10)] + "puluh" + kata[number % 10];
  } else if (number < 200) {
    return "seratus " + numberToWords(number % 100);
  } else if (number < 1000) {
    return kata[Math.floor(number / 100)] + "ratus" + numberToWords(number % 100);
  } else if (number < 2000) {
    return "seribu " + numberToWords(number % 1000);
  } else if (number < 1000000) {
    return numberToWords(Math.floor(number / 1000)) + "ribu" + numberToWords(number % 1000);
  } else if (number < 1000000000) {
    return numberToWords(Math.floor(number / 1000000)) + "juta" + numberToWords(number % 1000000);
  }
}

// Driver code
console.log(numberToWords(1000000));

module.exports = {
  numberToWords: numberToWords
}


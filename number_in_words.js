function numberToWords(number) {
  // Your code here
  //satu-sembilan
  //sebelas,sembilanbelas
  //satu puluh
  //dua puluh
  //satu ratus
  //satu ribu
  //satu puluh ribu
  //satu ratus ribu
  //satu juta
  //satu puluh juta
  //satu ratus juta
  //satu milyar

  //array
  var satuan = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
  var belasan = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];

  //1 000 000
  var jadiString = String(number);
  var hasil = "";

  //if satu digit
  //return satuan
  if(number<10){
    hasil = satuan[Number(jadiString[0])];
    return hasil;
  } else {
  //else
  //if dua digit belasan
  if(number<20){
    hasil = belasan[Number(jadiString[1])];
    //return belasan
    return hasil;
  }

  //if dua digit puluhan
  if(number>=20 && number<100){
    hasil = satuan[Number(jadiString[0])] + " puluh";
    //return hasil + " " + numberToWords(number%10);
    return hasil + " " + numberToWords(number%10);
  }

  //if tiga digit ratusan
  if(number>=100 && number<1000){
    hasil = satuan[Number(jadiString[0])] + " ratus ";
    return hasil + numberToWords(number%100);
  }

  //if empat digit ribuan
  if(number>=1000 && number<10000){
    hasil = satuan[Number(jadiString[0])] + " ribu ";
    return hasil + numberToWords(number%1000);
  }

  //if lima digit belas ribuan
  if(number>=10000 && number<20000){
    hasil = belasan[Number(jadiString[1])] + " ribu ";
    return hasil + numberToWords(number%1000);
  }

  //if lima digit puluh ribuan
  if(number>=20000 && number<100000){
    hasil = satuan[Number(jadiString[0])] + " puluh ";
    return hasil + numberToWords(number%10000);
  }

  //if enam digit ratus ribuan
  if(number>=100000 && number<1000000){
    hasil = satuan[Number(jadiString[0])] + " ratus ";
    return hasil + numberToWords(number%100000);
  }

  //if tujuh digit jutaan
  if(number>=1000000 && number<10000000){
    hasil = satuan[Number(jadiString[0])] + " juta ";
    return hasil + numberToWords(number%1000000);
  }

  //if delapan digit belas juta
  if(number>=10000000 && number<20000000){
    hasil = belasan[Number(jadiString[0])] + " juta ";
    return hasil + numberToWords(number%100000);
  }

  //if delapan digit puluh juta
  if(number>=20000000 && number<100000000){
    hasil = satuan[Number(jadiString[0])] + " puluh ";
    if(jadiString[1] == 0){
      hasil += "juta ";
    }
    return hasil + numberToWords(number%10000000);
  }

  //if sembilan digit ratus juta
  if(number>=100000000 && number<1000000000){
    hasil = satuan[Number(jadiString[0])] + " ratus ";
    if(jadiString[1] == 0 && jadiString[2] == 0 ){
      hasil += "juta";
    }
    return hasil + numberToWords(number%100000000);
  }

  //if 10 digit triliun
  if(number>=1000000000 && number<10000000000){
    hasil = satuan[Number(jadiString[0])] + " triliun ";
    return hasil + numberToWords(number%1000000000);
  }

  //11 digit belasan triliun
  if(number>=10000000000 && number<20000000000){
    hasil = belasan[Number(jadiString[1])] + " triliun ";
    return hasil + numberToWords(number%1000000000);
  }

  //11 digit puluhan triliun
  if(number>=20000000000 && number<100000000000){
    hasil = satuan[Number(jadiString[0])] + " puluh ";
    if(jadiString[1] == 0){
      hasil += "triliun";
    }
    return hasil + numberToWords(number%10000000000);
  }

  //12 digit ratus triliun
  if(number>=100000000000 && number<1000000000000){
    hasil = satuan[Number(jadiString[0])] + " ratus ";
    if(jadiString[1] == 0 && jadiString[2] == 0){
      hasil += "triliun";
    }
    return hasil + numberToWords(number%100000000000);
  }

  }
}


// Driver code
console.log(numberToWords(4));
console.log(numberToWords(27));
console.log(numberToWords(102));
console.log(numberToWords(38079));
console.log(numberToWords(1000000));
console.log(numberToWords(82102713));
console.log(numberToWords(909090909090));

module.exports = {
  numberToWords: numberToWords
}

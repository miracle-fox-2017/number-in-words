function numberToWords(number) {
  // console.log(number);
  var hasil = '';

  if(String(number).length === 3){
    switch(String(number)[0]){
      case '1': hasil += 'Seratus'; break;
      case '2': hasil += 'Dua ratus'; break;
      case '3': hasil += 'Tiga ratus'; break;
      case '4': hasil += 'Empat ratus'; break;
      case '5': hasil += 'Lima ratus'; break;
      case '6': hasil += 'Enam ratus'; break;
      case '7': hasil += 'Tujuh ratus'; break;
      case '8': hasil += 'Delapan ratus'; break;
      case '9': hasil += 'Sembilan ratus'; break;
      case '0': hasil += ''; break;
    }
    return hasil + ' ' + numberToWords(Number(String(number).slice(1)));
  }

  if(String(number).length === 2 && String(number)[0] === '1'){
    switch(String(number)){
      case '11': hasil += 'Sebelas'; break;
      case '12': hasil += 'Dua belas'; break;
      case '13': hasil += 'Tiga belas'; break;
      case '14': hasil += 'Empat belas'; break;
      case '15': hasil += 'Lima belas'; break;
      case '16': hasil += 'Enam belas'; break;
      case '17': hasil += 'Tujuh belas'; break;
      case '18': hasil += 'Delapan belas'; break;
      case '19': hasil += 'Sembilan belas'; break;
      case '0': hasil += ''; break;
    }
    return hasil;
  }

  if(String(number).length === 2){
    switch(String(number)[0]){
      case '1': hasil += 'Sepuluh'; break;
      case '2': hasil += 'Dua puluh'; break;
      case '3': hasil += 'Tiga puluh'; break;
      case '4': hasil += 'Empat puluh'; break;
      case '5': hasil += 'Lima puluh'; break;
      case '6': hasil += 'Enam puluh'; break;
      case '7': hasil += 'Tujuh puluh'; break;
      case '8': hasil += 'Delapan puluh'; break;
      case '9': hasil += 'Sembilan puluh'; break;
      case '0': hasil += ''; break;
    }
    return hasil + ' ' + numberToWords(Number(String(number).slice(1)));
  }

  if(String(number).length === 1){
    switch(String(number)[0]){
      case '1': hasil += 'Satu'; break;
      case '2': hasil += 'Dua'; break;
      case '3': hasil += 'Tiga'; break;
      case '4': hasil += 'Empat'; break;
      case '5': hasil += 'Lima'; break;
      case '6': hasil += 'Enam'; break;
      case '7': hasil += 'Tujuh'; break;
      case '8': hasil += 'Delapan'; break;
      case '9': hasil += 'Sembilan'; break;
      case '0': hasil += ''; break;
    }
    return hasil;
  }
}

// Driver code
// console.log(numberToWords(1000000));
console.log(numberToWords(999));
console.log(numberToWords(296));
console.log(numberToWords(107));
console.log(numberToWords(22));
console.log(numberToWords(11));

// module.exports = {
//   numberToWords: numberToWords
// }

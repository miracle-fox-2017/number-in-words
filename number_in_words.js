function numberToWords(number) {
    var hasil = '';
    var str = number.toString();

    if(str.length === 3) {
      switch(str[0]) {
        case '1' : hasil += 'seratus';break;
        case '2' : hasil += 'dua ratus';break;
        case '3' : hasil += 'tiga ratus';break;
        case '4' : hasil += 'empat ratus';break;
        case '5' : hasil += 'lima ratus';break;
        case '6' : hasil += 'enam ratus';break;
        case '7' : hasil += 'tujuh ratus';break;
        case '8' : hasil += 'delapan ratus';break;
        case '9' : hasil += 'sembilan ratus';break;
      }

      switch(str[1]) {
        case '0' : hasil += '';break;
        case '1' : hasil += ' sepuluh';break;
        case '2' : hasil += ' dua puluh';break;
        case '3' : hasil += ' tiga puluh';break;
        case '4' : hasil += ' empat puluh';break;
        case '5' : hasil += ' lima puluh';break;
        case '6' : hasil += ' enam puluh';break;
        case '7' : hasil += ' tujuh puluh';break;
        case '8' : hasil += ' delapan puluh';break;
        case '9' : hasil += ' sembilan puluh';break;
      }

      switch(str[2]) {
        case '0' : hasil += '';break;
        case '1' : hasil += ' satu';break;
        case '2' : hasil += ' dua';break;
        case '3' : hasil += ' tiga';break;
        case '4' : hasil += ' empat';break;
        case '5' : hasil += ' lima';break;
        case '6' : hasil += ' enam';break;
        case '7' : hasil += ' tujuh';break;
        case '8' : hasil += ' delapan';break;
        case '9' : hasil += ' sembilan';break;
      }
    }

    if(str.length === 2) {
      switch(str[0]) {
        case '1' : hasil += 'sepuluh';break;
        case '2' : hasil += 'dua puluh';break;
        case '3' : hasil += 'tiga puluh';break;
        case '4' : hasil += 'empat puluh';break;
        case '5' : hasil += 'lima puluh';break;
        case '6' : hasil += 'enam puluh';break;
        case '7' : hasil += 'tujuh puluh';break;
        case '8' : hasil += 'delapan puluh';break;
        case '9' : hasil += 'sembilan puluh';break;
      }

      switch(str[1]) {
        case '0' : hasil += '';break;
        case '1' : hasil += ' satu';break;
        case '2' : hasil += ' dua';break;
        case '3' : hasil += ' tiga';break;
        case '4' : hasil += ' empat';break;
        case '5' : hasil += ' lima';break;
        case '6' : hasil += ' enam';break;
        case '7' : hasil += ' tujuh';break;
        case '8' : hasil += ' delapan';break;
        case '9' : hasil += ' sembilan';break;
      }
    }  if(str.length === 1) {
      switch(str[0]) {
        case '0' : hasil += 'nol';break;
        case '1' : hasil += 'satu';break;
        case '2' : hasil += 'dua';break;
        case '3' : hasil += 'tiga';break;
        case '4' : hasil += 'empat';break;
        case '5' : hasil += 'lima';break;
        case '6' : hasil += 'enam';break;
        case '7' : hasil += 'tujuh';break;
        case '8' : hasil += 'delapan';break;
        case '9' : hasil += 'sembilan';break;
      }
    }
    return hasil;
}

// Driver code
console.log(numberToWords(121));
console.log(numberToWords(234));
console.log(numberToWords(435));
console.log(numberToWords(23));
console.log(numberToWords(4));
console.log(numberToWords(444));
console.log(numberToWords(656));
console.log(numberToWords(999));
console.log(numberToWords(567));
console.log(numberToWords(498));
console.log(numberToWords(111));
console.log(numberToWords(11));


// module.exports = {
//   numberToWords: numberToWords
// }

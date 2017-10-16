function numberToWords(number) {
  var strNumber = number.toString();
  var gantihuruf='';
  var arrhasil=[];
  if(strNumber.length === 1){
    switch (number) {
      case 1:
      gantihuruf = 'Satu';
      break;
      case 2:
      gantihuruf = 'Dua';
      break;
      case 3:
      gantihuruf = 'Tiga';
      break;
      case 4:
      gantihuruf = 'Empat';
      break;
      case 5:
      gantihuruf = 'Lima';
      break;
      case 6:
      gantihuruf = 'Enam';
      break;
      case 7:
      gantihuruf = 'Tujuh';
      break;
      case 8:
      gantihuruf = 'Delapan';
      break;
      case 9:
      gantihuruf = 'Sembilan';
      break;
    }
    arrhasil.push(gantihuruf);
  }
  return arrhasil;

  if (strNumber.length === 2 && strNumber[0] ==='1'){
    strNumber.split('');
    for ( var i=0;i<strNumber.length;i++){
      switch (number) {
        case 1:
        gantihuruf = 'Satu';
        break;
        case 2:
        gantihuruf = 'Dua';
        break;
        case 3:
        gantihuruf = 'Tiga';
        break;
        case 4:
        gantihuruf = 'Empat';
        break;
        case 5:
        gantihuruf = 'Lima';
        break;
        case 6:
        gantihuruf = 'Enam';
        break;
        case 7:
        gantihuruf = 'Tujuh';
        break;
        case 8:
        gantihuruf = 'Delapan';
        break;
        case 9:
        gantihuruf = 'Sembilan';
        break;
      }
      arrhasil.push(gantihuruf);
    }
      return arrhasil
    }
  }

  // } 



// Driver code
// console.log(numberToWords(1000000));
console.log(numberToWords(8));
console.log(numberToWords(18));
// module.exports = {
//   numberToWords: numberToWords
// }

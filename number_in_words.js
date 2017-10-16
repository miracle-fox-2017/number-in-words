function numberToWords(number)
{
  console.log(number.toString().charAt(0));

  if (number < 10)
  {
    return whatNumber(Number(number));
  }

  if (Math.floor(number / 100) > 1)
  {
    return whatNumber(Math.floor(number / 100) ) + " ratus " + numberToWords(number.toString().slice(1));
  }
  else if (number.toString().length === 3 && number.toString().charAt(0) === '1')
  {
    return "seratus " + numberToWords(number.toString().slice(1));
  }


  if (number === 11)
  {
    return "sebelas";
  }
  else if (number < 20)
  {
    return whatNumber(number % 10) + " belas";
  }

  else if (Math.floor(number / 10) > 1)
  {
    return whatNumber(Math.floor(number / 10)) + " puluh " + numberToWords(number.toString().slice(1));
  }

}


function whatNumber(number)
{
  switch (number)
  {
    case 1 : return "satu";
    case 2 : return "dua";
    case 3 : return "tiga";
    case 4 : return "empat";
    case 5 : return "lima";
    case 6 : return "enam";
    case 7 : return "tujuh";
    case 8 : return "delapan";
    case 9 : return "sembilan";
  }
}

//45732


// Driver code
// console.log(numberToWords(1000000));

// module.exports = {
//   numberToWords: numberToWords
// }
console.log(numberToWords(999));

function numberToWords(number){
    // Your code here
    var hasil="";
    var penyebutUtama;
    if(number.toString().length > 9 && number.toString().length <= 12){
        penyebutUtama="milyar";
    }else if(number.toString().length > 6 && number.toString().length <= 9){
        penyebutUtama="juta";
    }else if(number.toString().length > 3 && number.toString().length <= 6){
        penyebutUtama="ribu";
    }
    if(number === 0){
        return hasil;
    }else{
        var counter=0;
        var tampung="";
        var segmen1="";
        var segmen2="";
        var segmen3="";
        var depan=[].reverse();
        var depanReverseEach=[];
        for(var j=number.toString().length - 1;j >= 0;j--){
            tampung+=number.toString()[j];
            counter++;
            if(counter % 3 === 0 || counter === number.toString().length){
                depan.push(tampung);
                tampung="";
            }
        }
        var based={0:"", 1:"satu", 2:"dua", 3:"tiga", 4:"empat", 5:"lima", 6:"enam", 7:"tujuh", 8:"delapan", 9:"sembilan", 10:"sepuluh", 11:"sebelas"};
        for(var i=0;i < depan.length;i++){
            depanReverseEach.push(depan[i].split("").reverse().join(""));
        }
        var depanReverse=depanReverseEach.reverse();
        if(depanReverse[0].length === 3){
            if(parseInt(depanReverse[0].substr(1)) > 19){
                segmen1=based[parseInt(depanReverse[0][0])]+" ratus "+based[parseInt(depanReverse[0][1])]+" puluh "+based[parseInt(depanReverse[0][2])];
            }else if(parseInt(depanReverse[0].substr(1)) < 20 && parseInt(depanReverse[0].substr(1)) > 0){
                segmen1=based[parseInt(depanReverse[0][0])]+" ratus "+based[parseInt(depanReverse[0][2])]+" belas";
            }else if(parseInt(depanReverse[0].substr(1)) === 0){
                segmen1=based[parseInt(depanReverse[0][0])]+" ratus";
            }
        }else if(depanReverse[0].length === 2){
            if(parseInt(depanReverse[0]) > 19){
                segmen2=based[parseInt(depanReverse[0][0])]+" puluh "+based[parseInt(depanReverse[0][1])];
            }else if(parseInt(depanReverse[0]) > 10 && parseInt(depanReverse[0]) < 20){
                segmen2=based[parseInt(depanReverse[0][depanReverse[0].length - 1])]+" belas";
            }else if(parseInt(depanReverse[0]) > 0 && parseInt(depanReverse[0]) < 11){
                segmen2=based[parseInt(depanReverse[0].substr(0))];
            }
        }else if(depanReverse[0].length === 1){
            segmen3=based[parseInt(depanReverse[0][0])];
        }
        //return segmen1+segmen2+segmen3+" "+penyebutUtama;
        if(number.toString().length % 3 === 0 && number.toString().length > 3){
            return segmen1+segmen2+segmen3+" "+penyebutUtama+" "+numberToWords(parseInt(number.toString().substr(3)));
        }else if(number.toString().length % 3 === 0 && number.toString().length === 3){
            return segmen1;
        }else if(number.toString().length % 3 === 2){
            return segmen1+segmen2+segmen3+" "+penyebutUtama+" "+numberToWords(parseInt(number.toString().substr(2)));
        }else if(number.toString().length % 3 === 1){
            return segmen1+segmen2+segmen3+" "+penyebutUtama+" "+numberToWords(parseInt(number.toString().substr(1)));
        }
    }
}

// Driver code
console.log(numberToWords(11000100));

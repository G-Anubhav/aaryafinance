var a = ['','ONE ','TWO ','THREE ','FOUR ', 'FIVE ','SIX ','SEVEN ','EIGHT ','NINE ','TEN ','ELEVEN ','TWELVE ','THIRTEEN ','FOURTEEN ','FIFTEEN ','SIXTEEN ','SEVENTEEN ','EIGHTEEN ','NINETEEN '];
var b = ['', '', 'TWENTY','THIRTY','FOURTY','FIFTY', 'SIXTY','SEVENTY','EIGHTY','NINETY'];

function inWords (num) {
if ((num = num.toString()).length > 9) return 'overflow';
n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
if (!n) return; var str = '';
str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'CRORE ' : '';
str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'LAKH ' : '';
str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'THOUSANDS ' : '';
str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'HUNDRED ' : '';
str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'ONLY ' : '';
// return str;
document.getElementById("loanamtword").value=str;
    if(period.value!='' && loanamt.value !=''){
        var totyear=document.getElementById("period").value;
        var pramt=parseFloat(num);
        var intamt=(parseFloat(pramt)*5/100)*parseFloat(totyear);
        var totamt=parseFloat(pramt)+parseFloat(intamt);
        var mnt=parseFloat(totyear)*12;
        var emi=totamt/parseFloat(mnt);
        emi=Math.round(emi,0);
        // document.getElementById("nofemi").innerHTML=emi;
        document.getElementById("minstallation").value=emi+'/-Per Month';
    }else{
        // document.getElementById("nofemi").innerHTML='';
        document.getElementById("minstallation").value='';
    }
}

function inMonth(num){
    if(period.value !=''){  
    var str=num*12; 
    document.getElementById("month").innerHTML=str+" Months";
    document.getElementById("totmonth").value=str;
    }else{
        document.getElementById("month").innerHTML='';
        document.getElementById("totmonth").value='';
    }
    if(period.value!='' && loanamt.value !=''){
        var pramt=document.getElementById("loanamt").value;
        var intamt=(parseFloat(pramt)*5/100)*parseFloat(num);
        var totamt=parseFloat(pramt)+parseFloat(intamt);
        var mnt=num*12;
        var emi=totamt/parseFloat(mnt);
        emi=Math.round(emi,0);        
        // document.getElementById("nofemi").innerHTML=emi;
        document.getElementById("minstallation").value=emi+'/-Per Month';       
    }else{
        // document.getElementById("nofemi").innerHTML='';
        document.getElementById("minstallation").value='';
    }   
}
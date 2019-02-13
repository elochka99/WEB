var num = 234245645335;
var time_ost = num%3600;
console.log(num);
var hours = Math.floor( num/3600);
console.log("часов - " + hours);
var minutes = Math.floor(time_ost/60);
console.log("минут - " + minutes);
var seconds = time_ost%60;
console.log("cекунд - " + seconds);
// console.log(time_ost);
console.log(hours + ' : ' + minutes + ' : ' + seconds);


var symbols = [];
var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at";

    for (var i = 0; i <= text.length-1; i++ ){
        console.log(text.indexOf("a",i));
        if (text.charAt(i) == "a"){
            symbols.push(i);
        }
         
    }
console.log(symbols)
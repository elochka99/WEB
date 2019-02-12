var seconds = 234245645335;
var time_ost = seconds%3600;
console.log(seconds);
console.log(time_ost);

var symbols = [];
var text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at";

    for (var i = 0; i <= text.length-1; i++ ){
        console.log(text.indexOf("a",i));
        // console.log(symbols.push(text.indexOf("a",i)));
        // symbols[0]=[text.indexOf("a",i)];
        if (text.charAt(i) == "a"){
            symbols.push(i);
        }
         
    }
console.log(symbols)
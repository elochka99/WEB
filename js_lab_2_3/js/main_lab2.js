var a = {"f":"one", "d":"two","c":"three"};
var b = {};
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
console.log(isEmpty(a));
console.log(isEmpty(b));



function decodeMorse(morseCode) {
    lib = {
        "A": ".-",    "B": "-...",  "C": "-.-.",  "D": "-..",
        "E": ".",     "F": "..-.",  "G": "--.",   "H": "....",
        "I": "..",    "J": ".---",  "K": "-.-",   "L": ".-..",
        "M": "--",    "N": "-.",    "O": "---",   "P": ".--.",
        "Q": "--.-",  "R": ".-.",   "S": "...",   "T": "-",
        "U": "..-",   "V": "...-",  "W": ".--",   "X": "-..-",
        "Y": "-.--",  "Z": "--..",  " ": "",
    
        "1": ".----", "2": "..---", "3": "...--", "4": "....-", "5": ".....",
        "6": "-....", "7": "--...", "8": "---..", "9": "----.", "0": "-----",
        
        ".": ".-.-.-", ",": "--..--", "?": "..--..",  "'": ".----.",
        "/": "-..-.",  "(": "-.--.",  ")": "-.--.-",  "&": ".-...",
        ":": "---...", ";": "-.-.-.", "=": "-...-",   "+": ".-.-.",
        "-": "-....-", "_": "..--.-", "\"": ".-..-.", "$": "...-..-",
        "!": "-.-.--", "@": ".--.-.", "SOS": "...---..." 
        }

    var result = "";
    var sentences = morseCode.trim().split("  ");
//     console.log(sentences);
    for(var i = 0; i < sentences.length; i++){
        var words = sentences[i].split(" ");
        console.log(words);
        if(words != ""){
            for (var j = 0; j < words.length; j++){
                for(key in lib){
                    if(words[j] == lib[key]){
                    result += key;
                    }
                }
            }
        }
    }
  return result;
}

console.log(decodeMorse(".... . .-.. .-.. ---   . .-.. --- -.-. .... -.- .-"));
console.log(decodeMorse('.... . -.--                .--- ..- -.. .'));
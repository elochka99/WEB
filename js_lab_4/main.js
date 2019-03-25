var butt = document.getElementById("butt");
butt.addEventListener("click", click_func);


function click_func(){
    var res = {};

    var idies = ["one","two","three"];

        for(let j = 0; j < idies.length; j++) {
            
            var one = document.getElementById(idies[j]).value;
            var idd = idies[j];
            // console.log(idd);
            res[idd] = one;
            // console.log(res);
            document.getElementById(idies[j]).value = "";
        }
        console.log(res);    
       
}
//responsive icon
function myFunction(){
    var x = document.getElementById("myHeader");
    if(x.className === "header"){
        x.className += " responsive";
    }else{
        x.className = "header";
    }
}

//custom cursor js code start
new kursor({
        type: 1
    })
 ////custom cursor js code end
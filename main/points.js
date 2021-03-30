let btn = document.getElementById('modalOpen');
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


var raise=(function () {

var counter = 0;
return function () {return counter +=100;}



})();

function raisecount (){

document.getElementById("score").innerHTML = raise ();

}

var lower=(function () {

    var counter = 0;
    return function () {return counter -=100;}

})();

function lowercount (){

    document.getElementById("score").innerHTML = lower ();
}


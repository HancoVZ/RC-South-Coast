let btn = document.getElementById('modalOpen');
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

let raiseHit = document.getElementById('raiseHit');
let lowerHit = document.getElementById('lowerHit');
let raiseRoll = document.getElementById('raiseRoll');
let lowerRoll = document.getElementById('lowerRoll');
let raiseBoundary = document.getElementById('raiseBoundary');
let lowerBoundary = document.getElementById('lowerBoundary');

let int = document.getElementById('score');
let integer = 000;

raiseHit.addEventListener('click',function(){
  if (integer < 100) {
    integer +=10;
    }
  int.innerHTML = integer;
})

lowerHit.addEventListener('click',function(){
  if (integer > 000) {
    integer -=10;
    }
  int.innerHTML = integer;
})

raiseRoll.addEventListener('click',function(){
  if (integer < 100) {
    integer +=5;
    }
  int.innerHTML = integer;
})

lowerRoll.addEventListener('click',function(){
  if (integer > 000) {
  integer -=5;
  }
  int.innerHTML = integer;
})

raiseBoundary.addEventListener('click',function(){
  if (integer < 100) {
    integer +=5;
    }
  int.innerHTML = integer;
})

lowerBoundary.addEventListener('click',function(){
  if (integer > 000) {
    integer -=5;
    }
  int.innerHTML = integer;
})





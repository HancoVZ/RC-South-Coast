let btn = document.getElementById('modalOpen');
let modal = document.getElementById('myModal');
let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


let raiseReverse = document.getElementById('raiseHit');
let lowerReverse = document.getElementById('lowerHit');
let raiseHit = document.getElementById('raiseRoll');
let lowerHit = document.getElementById('lowerRoll');

let int = document.getElementById('score');
let integer = 000;

raiseRoll.addEventListener('click',function(){
  integer +=5;
  int.innerHTML = integer;
})

lowerRoll.addEventListener('click',function(){
  integer -=5;
  int.innerHTML = integer;
})

raiseHit.addEventListener('click',function(){
  integer +=10;
  int.innerHTML = integer;
})

lowerHit.addEventListener('click',function(){
  integer -=10;
  int.innerHTML = integer;
})




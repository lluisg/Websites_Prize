const bcolors = ["white", "blue", "red", "black", "orange", "yellow", "gray"]
const colors = ["black", "black", "black", "white", "black", "black", "white"]

// get the different 8 random positions and movement --------------------
var ups = [50];
var lefts = [50];

for(let i=0; i<8; i++){
  random_up = Math.floor(Math.random() * 80) +10;
  ups.push(random_up);
  random_left = Math.floor(Math.random() * 80) +10;
  lefts.push(random_left);
}

var ups_diff = [];
var lefts_diff = [];
for(let i=1; i<=8; i++){
  ups_diff.push(ups[i] - ups[i-1]);
  lefts_diff.push(lefts[i] - lefts[i-1]);
}

// update the index accordingly --------------------------------------------
let index = 0;
var r = document.querySelector(':root');

const btn2move = document.getElementById('btn-move');
btn2move.onmouseover = () => {
  if(index == 7){
    index = 0;
  }else{
    index += 1;
  }
  r.style.setProperty('--top_btn_move', ups[index]+'%');
  r.style.setProperty('--left_btn_move', lefts[index]+'%');
  btn2move.style.setProperty('background-color', bcolors[index]);
  btn2move.style.setProperty('color', colors[index]);
}

// when clicked the button -------------------------------------------
btn2move.onclick = () => {
  alert("Your are too quick!");  
}
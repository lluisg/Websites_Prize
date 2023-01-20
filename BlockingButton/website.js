const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)


// GET A RANDOM POSITION FOR ALL THE BUTTONS -------------------------
const bcolors = ["white", "blue", "red", "orange", "yellow", "gray", "fuchsia", "lime", "aqua", "antiquewhite", "gainsboro"]

ups = []
lefts = []
for(let i=0; i<100; i++){
  r_up = (Math.floor(Math.random() * 70) +20)/100; // between 0.2 and 1
  r_up_pix = Math.ceil(r_up*(vh-60)); //adding lower margin

  r_left = (Math.floor(Math.random() * 100))/100; // between 0 and 1
  r_left_pix = Math.ceil(r_left*(vw-130)); //adding right margin


  let overlapped = false; //if there is some button in that position already
  for(let j=0; j<ups.length; j++){
    if(Math.abs(r_up_pix-ups[j])<60 && Math.abs(r_left_pix-lefts[j])<130){
      overlapped = true;
    }
  }
  if(!overlapped){
    ups.push(r_up_pix);
    lefts.push(r_left_pix);
  }

  if(ups.length>=8){
    console.log('upto4')
    break;
  }
}

console.log('vv', vw, vh)
console.log('ups:', ups)
console.log('lefts:', lefts)

const btnb = document.getElementsByClassName('btn');
for (var ind=0; ind < ups.length; ind++) {
  element = btnb[ind]
  element.style.setProperty('top', ups[ind]+'px');
  element.style.setProperty('left', lefts[ind]+'px');

  color_ind = Math.floor(Math.random() * bcolors.length); // choose a random color
  element.style.setProperty('--bcolor'+(ind+1), bcolors[color_ind]);
}

// if no space has been found for all buttons
if(btnb.length!=ups.length){
  diff = btnb.length - ups.length
  for(let ind=btnb.length-diff; ind<btnb.length; ind++){
    element = btnb[ind]
    element.style.setProperty('visibility', 'hidden');
  }
}
  
// PUT ALL EXCEPT ONE BLOCKED, WHEN HOVER CHANGE THIS ONE ----------------------

function LockButtons(unlocked_ind){
  for (var ind=0; ind < btnb.length; ind++) {
    element = btnb[ind]
    element.classList.remove("blocked");
    element.disabled = false;

    if(ind!=unlocked){
      element.classList.add("blocked");
      element.disabled = true;
    }
  }  
}

let unlocked = Math.floor(Math.random() * btnb.length); // choose a random button to work
setTimeout(() => { LockButtons(unlocked); }, 500); // after 1 second will lock all-1 buttons

function changeLockedButtons(current_button){
  if(current_button==unlocked){ //only do it if hover the right button
    do{
      unlocked = Math.floor(Math.random() * btnb.length);
    }while(unlocked==current_button);
  
    LockButtons(unlocked);  
  }
}


// WHEN BUTTON CLICKED YOU WIN -------------------------------------------
function youWon(){
  alert("Congratulations!!!!\nYour are too quick!");
}
let timer = 0
let timerID;
const Id = document.getElementById('parentID')
const para=document.getElementById('para');

const start = () => {
  timerID = setInterval(() => {
    Id.textContent = ++timer
  },1000)
}

const stop = () => {
  clearInterval(timerID)
}



const lap = () => {
  const lapTime = timer;
 

  
  const lapDisplay = document.createElement("p"); 
  
  lapDisplay.textContent = `${lapTime}`;
  document.body.appendChild(lapDisplay); 

  
};
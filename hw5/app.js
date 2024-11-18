 const bananaButton = document.querySelector("#tap-button");
 const scoreValue = document.querySelector("#score-value");
 const energyValue = document.querySelector("#energy span");

 bananaButton.onclick = () => {
     let currentEnergy = Number(energyValue.innerText)
     if(currentEnergy - 5 < 0) return;
     scoreValue.innerText = Number(scoreValue.innerText) + 5;
     energyValue.innerText = currentEnergy - 5;
 }
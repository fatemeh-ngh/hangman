const secretPhrases = ["never", "man", "break", "girl", "pepole", "water", "pink", "orange"];
 const reloadbutton = document.getElementById("but");
 reloadbutton.addEventListener("click", function(){location.reload()});

 let randomItem = "";
 let clicked =[];
 let result ="";
 let mistake= 0;
 function selectRandomItem (){
     randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
     document.getElementById("letters").addEventListener("click", buttonHandler);
     window.addEventListener("keydown", keyHandler);
     console.log(randomItem);
 }

 function setUnderScores(){
     let splitedword = randomItem.split("");
     let mappedword = splitedword.map( letter => (clicked.indexOf(letter) >= 0 ? letter : "-"))
     result = mappedword.join("")
     document.getElementById("clue").innerHTML = `<p>${result}</p>`
 } 

 function chekIfWon(){
     if(randomItem === result){
         document.getElementById("gameover").querySelector("p").style.display = "block";
         document.getElementById("image").querySelector("img").src = "assets/winner.png";
         reloadbutton.style.display= "inline-block";
     }
 }

 function chekIfLost (){
     if( mistake === 6){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").innerHTML = `<p> random word is ${randomItem}</p>`;
        reloadbutton.style.display= "inline-block";
     }
 }
 function updatehangman(){
     const image = document.querySelector("#image").querySelector("img");
     image.src = `assets/hangman${mistake}.png`
 }

function letterHandler(letter){
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used";
    if(randomItem.indexOf(letter) >= 0){
        setUnderScores();
        chekIfWon();
    }else if (randomItem.indexOf(letter) === -1){
        mistake ++;
        chekIfLost()
        updatehangman()
    }
}

 function buttonHandler(event){
    letterHandler(event.target.id)
 }
 function keyHandler(event){
   letterHandler(event.key)
 }

 selectRandomItem()
 setUnderScores()
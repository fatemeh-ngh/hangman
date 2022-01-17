const secretPhrases = ["blue", "red", "pink", "black", "perpole", "white", "green"];

const reloadbutton = document.getElementById("but");
reloadbutton.addEventListener("click", function(){location.reload()});

let randomItem = "";
let clicked= [];
let result= "";
let mistake=0;

function selectRandomItem(){
    randomItem= secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
    document.getElementById("letters").addEventListener("click", buttonHandler)
    window.addEventListener("keydown", keyHandler);
    console.log(randomItem);
}

function setUnderScores(){
    let splitedword = randomItem.split("");
    let mappedword = splitedword.map (letter => (clicked.indexOf[letter] >=0 ? letter: "-"));
    result = mappedword.join("");
    document.getElementById("clue").querySelector("p").innerHTML = `<p>${resut} </p>`
}

function chekIfWon(){
    if (result === randomItem){
        document.querySelector("#gameover").querySelector("p").style.display= "block";
        document.getElementById("image").querySelector("img").src = "assets/winner.png";
        reloadbutton.style.display= "inlin-block";
    }
}

function chekIfLost(){
    if(mistake=== 6 ){
        document.querySelector("#gameover").querySelector("p").style.display= "block";
        document.getElementById("clue").querySelector("p").innerHTML = `<p> random word is ${randomItem} </p>`;
        reloadbutton.style.display= "inlin-block";
    }
}

function updatehangman(){
    const image = document.querySelector("#image").querySelector("img");
    img.src = `assets/hangman ${mistake}.png`
}


function letterHandler(letter){
    letter = letter.tolowerCase();
    clicked.indexOf[letter] === -1 ? clicked.push(letter): null;
    document.getElementById(letter.toUpperCase()).className= "used";
    if(randomItem.indexOf[letter] >= 0){
        setUnderScores();
        chekIfWon();
    }else if(randomItem.indexOf[letter] === -1){
        mistake ++;
        chekIfLost();
        updatehangman()
    }
}


function buttonHandler(event){
    letterHandler(event.target.id)
};
function keyHandler(event){
    letterHandler(event.key)
}
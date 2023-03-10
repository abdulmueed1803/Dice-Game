let randomNumber1 = Math.floor(Math.random()*6) + 1;
let dice1Src = `images/dice${randomNumber1}.png` ;
document.querySelector(".left").setAttribute("src",dice1Src);

let randomNumber2 = Math.floor(Math.random()*6) + 1;
let dice2Src = `images/dice${randomNumber2}.png` ;
document.querySelector(".right").setAttribute("src",dice2Src);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="😄 Player 1 wins";
}

else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins 😄";
}

else document.querySelector("h1").textContent="Draw";

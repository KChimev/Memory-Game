const cardArr=[
    {
        name:"fries",
        img:"images/fries.png"
    },
    {
        name:"cheeseburger",
        img:"images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img:"images/hotdog.png"
    },
    {
        name:"ice-cream",
        img:"images/ice-cream.png"
    },
    {
        name:"milkshake",
        img:"images/milkshake.png"
    },
    {
        name:"pizza",
        img:"images/pizza.png"
    },
    {
        name:"fries",
        img:"images/fries.png"
    },
    {
        name:"cheeseburger",
        img:"images/cheeseburger.png"
    },
    {
        name:"hotdog",
        img:"images/hotdog.png"
    },
    {
        name:"ice-cream",
        img:"images/ice-cream.png"
    },
    {
        name:"milkshake",
        img:"images/milkshake.png"
    },
    {
        name:"pizza",
        img:"images/pizza.png"
    },
];
cardArr.sort(()=>0.5-Math.random());
const gridDisplay=document.querySelector("#grid");
let cardsChosen=[];
let cardsChosenIds=[];
const cardsWon=[];
const startGame=document.getElementById("start");
let score=document.getElementById("score");
const easy=document.getElementById("easy");
const normal=document.getElementById("normal");
const hard=document.getElementById("hard");
let difficulty=2000;


easy.addEventListener("click",()=>{
    difficulty=4000;
    });

normal.addEventListener("click",()=>{
difficulty=2000;
});

hard.addEventListener("click",()=>{
    difficulty=1000;
    });


function clearBoard(){
    gridDisplay.innerHTML = "";
    for(let i=0;i<cardArr.length;i++){
        const card=document.createElement("img");
        card.setAttribute("src","images/blank.png");
        card.setAttribute("data-id",i);
        card.addEventListener("click",flipCard);
        gridDisplay.appendChild(card);
    }
}
clearBoard();

startGame.addEventListener("click",createBoard);

function createBoard(){
cardArr.sort(()=>0.5-Math.random());
gridDisplay.innerHTML = "";
for(let i=0;i<cardArr.length;i++){
    const card=document.createElement("img");
    card.setAttribute("src",cardArr[i].img);
    card.setAttribute("data-id",i);
    card.addEventListener("click",flipCard);
    gridDisplay.appendChild(card);
}
setTimeout(clearBoard,difficulty);
}

function checkMatch(){
const cards=document.querySelectorAll("img")
if(cardsChosen[0]==cardsChosen[1] && cardsChosenIds[0]!==cardsChosenIds[1]){
    cards[cardsChosenIds[0]].setAttribute("src","images/white.png")
    cards[cardsChosenIds[1]].setAttribute("src","images/white.png")
    cards[cardsChosenIds[0]].removeEventListener("click",flipCard);
    cards[cardsChosenIds[1]].removeEventListener("click",flipCard);
    cardsWon.push(cardsChosen);
    console.log(cardsWon);
    score.textContent="Score: "+ cardsWon.length;
}
else if(cardsChosen[0]!==cardsChosen[1]){
    clearBoard();
    score.textContent="Score: "+ 0;
}
cardsChosen=[];
cardsChosenIds=[];
}

function flipCard(){
let cardId=this.getAttribute("data-id");
cardsChosen.push(cardArr[cardId].name);
cardsChosenIds.push(cardId);
this.setAttribute("src",cardArr[cardId].img);
if(cardsChosen.length==2){
    setTimeout(checkMatch,500)
}
}
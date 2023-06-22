import {snake_speed, 
    update as updatesnake,
     draw as drawsnake, 
    getSnakeHead,
snakeIntersection,} from "./snake.js";
     import { update as updatefood,
    draw as drawfood } from "./food.js";
    import { outsideGrid } from "./grid.js";
let lastRenderTime=0;
let gameOver=false;
const gameBoard =document.getElementById("game_board");
function main(currentTime){   
    if(gameOver){
         if (confirm("you lost press ok to restart the game")){
            window.location="/";
         }
    }
     window.requestAnimationFrame(main); 
     const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
     if (secondsSinceLastRender<1/snake_speed)return;
     console.log("render");
    lastRenderTime=currentTime;
    update();
    draw();
    
}
window.requestAnimationFrame(main); 
function update(){
    updatesnake();
    updatefood();
    checkDeath();
}
function draw(){
    gameBoard.innerHTML="";
    drawsnake(gameBoard);
drawfood(gameBoard);
}
function checkDeath(){
    gameOver=outsideGrid(getSnakeHead())|| snakeIntersection();
}
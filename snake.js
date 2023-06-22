import { getInputDirection } from "./input.js";
export const snake_speed=7;
const snakeBody =[{x:11, y:11}];
let newSegments=0;
export function update(){
    addSegments();
    let InputDirection=getInputDirection();
 for( let i=snakeBody.length -2 ;i>=0;i--){
    snakeBody[i+1]={...snakeBody[i]};
 }
 snakeBody[0].x+=InputDirection.x;
 snakeBody[0].y+=InputDirection.y;
}
export function draw(gameBoard){
    snakeBody.forEach((segment) => {
        const snakeElement =document.createElement("div");
        snakeElement.style.gridColumnStart=segment.x;
        snakeElement.style.gridRowStart=segment.y;
        snakeElement.classList.add("snake");
        gameBoard.appendChild(snakeElement);
    });

}
export function expandsnake(amount){
    newSegments+=amount;
    
}
export function onsnake(position,{ignorehead =false}={}){
    return snakeBody.some((segment,index)=>{
        if(ignorehead && index ===0 ) return false;
        return equalPosition(segment,position);
    });
}
export function getSnakeHead(){
    return snakeBody[0];
}
export function snakeIntersection(){
    return onsnake(snakeBody[0],{ignorehead:true});
}
function equalPosition(pos1,pos2){
    return pos1.x=== pos2.x && pos1.y === pos2.y;
}
function addSegments(){
    for (let i=0;i<newSegments;i++){
        snakeBody.push({ ...snakeBody[snakeBody.length -1]});
    }
    newSegments=0;
}
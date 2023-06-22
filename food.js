import { onsnake ,expandsnake } from "./snake.js";
import { randomGridPostion } from "./grid.js";
let food=foodpostion();
const EXPANSION_RATE=5;
export function update(){
if(onsnake(food)){
    expandsnake(EXPANSION_RATE);
    food=foodpostion();
}
}
export function draw(gameBoard){
  
        const foodElement =document.createElement("div");
        foodElement.style.gridColumnStart=food.x;
        foodElement.style.gridRowStart=food.y;
        foodElement.classList.add("food");
        gameBoard.appendChild(foodElement);
    

}
function foodpostion(){
    let newfoodpostion;
    while(newfoodpostion== null || onsnake(newfoodpostion)){
        newfoodpostion=randomGridPostion();
    }
    return newfoodpostion;
}
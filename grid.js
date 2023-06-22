const GRID_SIZE=21;
export function randomGridPostion(){
    return{
        x:Math.floor(Math.random()* GRID_SIZE)+1,
        y:Math.floor(Math.random()* GRID_SIZE)+1
    }
}
export function outsideGrid(positioin){
    return(
        positioin.x<1 || 
        positioin.x> GRID_SIZE ||
        positioin.Y <1||
        positioin.y > GRID_SIZE
    );
}
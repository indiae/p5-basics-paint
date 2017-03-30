var newWidth=120;
var a = 50;
var b = 50;
var newHeight = 50 ;

//setpp function executes once
function setup(){
    createCanvas(600,400);
    background(150,50,150);
   
  
    
}
//draw function loops forever
function draw(){
    //background(50);\
    if(mouseIsPressed){
    noStroke();
    fill(2,255,32,100);
    rect(mouseX,mouseY,newWidth,newHeight);
        
    }
  
} 
    
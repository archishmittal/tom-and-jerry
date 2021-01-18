var tom, jerry, tomImage, jerryImage;
var garden, gardenImage;
function preload() {
    //load the images here
    tomImage=loadImage("tomOne.png");
    gardenImage=loadImage("garden.png");
    jerryImage=loadImage("jerryOne.png")



}

function setup(){
    createCanvas(900,700);
    //create tom and jerry sprites here
    garden=createSprite(450,350);
    garden.addImage(gardenImage);
    garden.scale=1;

    tom=createSprite(660,580,10,10);
    tom.addImage(tomImage);
    tom.scale=0.1;

    jerry=createSprite(200,620,20,20);
    jerry.addImage(jerryImage);
    jerry.scale=0.1;

     
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}

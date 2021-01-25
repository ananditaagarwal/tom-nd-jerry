var gardenImage, garden;
var tom, tomFirstImage, tomImages, tomThirdImage, tomLastImage;
var jerry, jerryFirstImage, jerryImages, jerryThirdImage, jerryLastImage;

function preload() {
    //load the images here
   gardenImage = loadImage("garden.png");
   tomFirstImage = loadImage("tomOne.png");
   jerryFirstImage = loadImage("jerryOne.png");
   tomImages = loadImage("tomTwo.png","tomThree.png");
   jerryImages = loadImage("jerryTwo.png","jerryThree.png");
   tomLastImage = loadImage("tomFour.png");
   jerryLastImage = loadImage("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden = createSprite(0, 0, 1000, 800);
   garden.addImage("garden", gardenImage);

   tom = createSprite(700, 600);
   tom.addImage("tom", tomFirstImage);
   tom.scale = 0.5;

   jerry = createSprite(300, 600);
   jerry.addImage("jerry", jerryFirstImage);
   jerry.scale = 0.3;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    keyPressed(tom)
    drawSprites();
}


function keyPressed(tom){
   
  if(keyCode === LEFT_ARROW) {
    tom.velocityX = -5;
    tom.addAnimation("tom", tomImages);
    tom.changeAnimation("tom");
  }
  //For moving and changing animation write code here
  if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
    tom.changeAnimation("tom", tomLastImage);
  }

}

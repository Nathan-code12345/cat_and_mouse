
var mouse,cat,mouseq,cat1,backround1,backround,mouseimg2,Ccelebration,Mcelebration,catWalk,mouse2;
function preload() {
    //load the images here
    mouse1= loadAnimation("images/mouse2.png");
    cat1 = loadAnimation ("images/cat1.png");
    backround1 = loadImage ("images/garden.png");
    mouseimg2 = loadImage ("images/mouse2.png");
    Ccelebration =loadImage("images/cat4.png");
    Mcelebration =loadImage("images/mouse3.png");
    catWalk=loadAnimation("images/cat2.png","images/cat3.png")
    mouse2= loadAnimation("images/mouse1.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    backround=createSprite(500,400,1000,800)
   cat=createSprite(600,600,50,50)
   mouse=createSprite(200,600,50,50)
   
   backround.addImage(backround1)
   cat.addAnimation("cat",cat1)
   mouse.addAnimation("mouse",mouse1)
   cat.scale=0.1
   mouse.scale=0.1

}

function draw() {

    
    //Write condition here to evalute if tom and jerry collide
    if(cat.x<300||cat.x===300){
      cat.addAnimation("catC",Ccelebration);
        cat.changeAnimation("catC");
        cat.velocityX=0
        
        mouse.addAnimation("mouseC",Mcelebration);
        mouse.changeAnimation("mouseC");
    }
    drawSprites();
}


function keyPressed(){
   
  //For moving and changing animation write code here
  if(keyDown (LEFT_ARROW)&&cat.x>200){
    mouse.addAnimation("mouseTeasing",mouse2);
    mouse.changeAnimation("mouseTeasing");
    cat.addAnimation("catWalking",catWalk);
    cat.changeAnimation("catWalking");
    mouse.frameDelay=25;
    cat.velocityX=-5
    
  }

}
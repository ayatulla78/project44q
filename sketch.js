var cash,boy,sword,cartoon_funny_seamiess_wide_fantasy_lamdscape;
var CashImg,boyImg,swordImg,cartoon_funny_seamiess_wide_fantasy_lamdscapeImg;
var treasureCollection=0;
var cashG,swordGroup;
var picImg;
var PLAY=1;
var END =0;
var gameState =1;
var score=0;
var end1;

function preload(){
picImg = loadImage("cartoon-funny-seamless-wide-fantasy-landscape.jpg");
boyImg = loadImage("chari.png");
swordImg = loadImage("Sword.png");
endImg = loadImage("gameover.png")
cashImg = loadImage("Cash.png")
}

function setup() {
  createCanvas(800,300);
// Moving background
path=createSprite(100,100,800,300);
path.addImage("path",picImg);
//path.x=path.width/2;
path.scale=2.2;
path.velocityX= -3;


//creating boy running
boy = createSprite(150,100,20,20);
boy.addImage("SahilRunning",boyImg);
boy.scale=0.1;
  
cash=createSprite(200,400,20,20);
cash.addImage(cashImg);
cash.scale=0.04;
  
cashG=new Group();
swordGroup=new Group();

end1=createSprite(200,150);
end1.addImage(endImg);
end1.visibile=false;


}

function draw() {
   if(gameState===PLAY){
      
     
    
     // score=score+Math.round(getFrameRate()/60);
      //path.velocityX=-(6+ 3*score/100);

      if(keyDown("space") && boy.x>=159){
        boy.velocityY=-10;
      }

      boy.velocityY =boy.velocityY+ 0.8;

      if(path.x <0){
        path.x =path.width/2;

    
      }
    


    boy.x = World.mouseX;
    //path.velocityX= -4;
    edges= createEdgeSprites();
    boy.collide(edges);
   
   
    
      createCash();
      createSword();
  
      if (cashG.isTouching(boy)) {
        cashG.destroyEach();
        treasureCollection=treasureCollection+50;
      
      }
      
        if(swordGroup.isTouching(boy)) {
          gameState=END;
        }
      }
        else if(gameState===END){

        
          path.velocityX=0;
          
         // boy.addImage("SahilRunning",endImg);
        //  boy.x=200;
        //  boy.y=100;
         // boy.scale=0.6;
          
          end1.visibile=true;
          boy.visibile=false;

          cashG.destroyEach();
          swordGroup.destroyEach();
          
          cashG.setVelocityXEach(0);
          swordGroup.setVelocityXEach(0);
        
      }
    
  
    drawSprites();
    textSize(20);
    fill(255);
    text("Treasure: "+ treasureCollection,150,30);
    
  }
  
    function createCash() {
      if (World.frameCount % 200 == 0) {
      var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
      cash.addImage(cashImg);
      cash.scale=0.12;
      cash.velocityY = 3;
      cash.lifetime = 150;
      cashG.add(cash);
      }
    }

    function createSword(){
      if (World.frameCount % 530 == 0) {
      var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
      sword.addImage(swordImg);
      sword.scale=0.1;
      sword.velocityY = 3;
      sword.lifetime = 150;
      swordGroup.add(sword);
      }
    }


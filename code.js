var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ae15b048-8a7c-4a41-b5c9-6d140af2f188","b287bd11-1765-4bce-b99e-df15e338c070","547cc6d2-2c74-45ba-9f97-6e1cd0a5c3d0","7a2a0f3f-dc3c-4b91-9f90-04cfedbdc907","a569196a-35f1-46c0-8e4a-8b87daf3f9b2","3ee9b562-d6ec-4e79-b139-c788c0d16b67","9f0207d4-474a-45cc-a35c-6c834dc92f3b","0294f561-043f-4dae-a04a-00ce60be3103","97b8675c-1d16-4a0f-9086-e37fe28178cd","596f09de-f22b-4f8e-8ca1-4e4b6871f185","bc828b58-4133-46a6-8908-99b4ef373860","4cf836e1-55dc-4212-bbbd-e5b291ca9eaf","154aeafb-d1ed-469d-bdac-86048737aa28","4936e872-fe3d-4f4f-837a-1d15a704af56","92bbc929-fe27-4b95-bfb2-a5a777006a9b","bd64da3b-f750-4b74-baf5-b83a2d0274d4","2028bc70-609e-4a9d-a05b-03c276627f53","32ec4999-c182-4023-91cd-ad07e1e6b918"],"propsByKey":{"ae15b048-8a7c-4a41-b5c9-6d140af2f188":{"name":"background1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"BqTu1JfaSgK8q8cUPLMhlJhrM_LaefmF","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/ae15b048-8a7c-4a41-b5c9-6d140af2f188.png"},"b287bd11-1765-4bce-b99e-df15e338c070":{"name":"background2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"MS1ntse1qDoP7z.Tk7OBh8OxXpw1SwBm","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/b287bd11-1765-4bce-b99e-df15e338c070.png"},"547cc6d2-2c74-45ba-9f97-6e1cd0a5c3d0":{"name":"boss1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ighb5H4yGgpRGVoYkEvIf6RlpLKD3SEd","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/547cc6d2-2c74-45ba-9f97-6e1cd0a5c3d0.png"},"7a2a0f3f-dc3c-4b91-9f90-04cfedbdc907":{"name":"boss1_attack","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"nlpAepuk5AhGjN_OQGoHWjg3OD0O92ZL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/7a2a0f3f-dc3c-4b91-9f90-04cfedbdc907.png"},"a569196a-35f1-46c0-8e4a-8b87daf3f9b2":{"name":"boss2_attack","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"De49B5n1lJW2o6GexmA3PimQA6i7vuaZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/a569196a-35f1-46c0-8e4a-8b87daf3f9b2.png"},"3ee9b562-d6ec-4e79-b139-c788c0d16b67":{"name":"boss2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Ju5HtzWWXCgvOY61ozqhe3EuwKANbZY6","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3ee9b562-d6ec-4e79-b139-c788c0d16b67.png"},"9f0207d4-474a-45cc-a35c-6c834dc92f3b":{"name":"boss_dead","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"wIp_RUuTvycmsmK.g9ObHyPmY3xhh1R7","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/9f0207d4-474a-45cc-a35c-6c834dc92f3b.png"},"0294f561-043f-4dae-a04a-00ce60be3103":{"name":"player","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"fkj16TVuCxwn2BLtuEvqXQjjLIqPU1ia","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/0294f561-043f-4dae-a04a-00ce60be3103.png"},"97b8675c-1d16-4a0f-9086-e37fe28178cd":{"name":"player2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"GwLPThxPJmrgrayeB4Tduxpk2stZLtRc","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/97b8675c-1d16-4a0f-9086-e37fe28178cd.png"},"596f09de-f22b-4f8e-8ca1-4e4b6871f185":{"name":"icicle","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"36dz6uL4SoLXooKhG8GIT6RgbtEneyEy","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/596f09de-f22b-4f8e-8ca1-4e4b6871f185.png"},"bc828b58-4133-46a6-8908-99b4ef373860":{"name":"iceball","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"EuAGg3LeRmhkwgUmvCefT81a5WU79xS0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/bc828b58-4133-46a6-8908-99b4ef373860.png"},"4cf836e1-55dc-4212-bbbd-e5b291ca9eaf":{"name":"icespikes","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"w0L4M9CB7JTT8hIJqRIsfpZCq3byl9SP","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4cf836e1-55dc-4212-bbbd-e5b291ca9eaf.png"},"154aeafb-d1ed-469d-bdac-86048737aa28":{"name":"iceblast","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"5nd_hwo1uvY7dfNN.lKerEpgIr6.ImpX","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/154aeafb-d1ed-469d-bdac-86048737aa28.png"},"4936e872-fe3d-4f4f-837a-1d15a704af56":{"name":"icemeteor","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"r7ZHd20t6rFtCy1MCWF3H3.iGvms.HSM","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/4936e872-fe3d-4f4f-837a-1d15a704af56.png"},"92bbc929-fe27-4b95-bfb2-a5a777006a9b":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"1Md22z1._R8pl0bN1yeKeN5egb7RGTzw","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/92bbc929-fe27-4b95-bfb2-a5a777006a9b.png"},"bd64da3b-f750-4b74-baf5-b83a2d0274d4":{"name":"player_dead","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"t6zqArmFW56ZeWOWEbioUaIZui00xbNZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/bd64da3b-f750-4b74-baf5-b83a2d0274d4.png"},"2028bc70-609e-4a9d-a05b-03c276627f53":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Yk4ZpcjJmThaAHKoB1gxZj7gu7UUPZaL","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/2028bc70-609e-4a9d-a05b-03c276627f53.png"},"32ec4999-c182-4023-91cd-ad07e1e6b918":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"XQn9.NkSWDRcgT6Ys.ANZSogbobphbvv","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/32ec4999-c182-4023-91cd-ad07e1e6b918.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var LOSE = 0;
var WIN = 2;

var attacksGroup=createGroup();

var rear = createSprite(200,200);
rear.setAnimation("background2");
rear.scale=4;

var ground = createSprite(100,320,1200,20);

var player = createSprite(50,290);
player.setAnimation("player");


var boss = createSprite(250,250);
boss.setAnimation('boss2');
boss.scale=2;

var gamestate = PLAY;

var bossHealth=500; 
//var playerHealth = 50;

function draw() {
  background("white");
  
  if(keyWentDown(LEFT_ARROW)){
    player.velocityX=-2;
  }
  
  if(keyWentUp(LEFT_ARROW)){
    player.velocityX=0;
  }
  
  if (keyWentDown(RIGHT_ARROW)){
    player.velocityX=2;
  }
  
  if (keyWentUp(RIGHT_ARROW)){
    player.velocityX=0;
  }

  if(keyWentDown(UP_ARROW)){
    player.velocityY=-6;
  }
  
   if(keyWentUp(UP_ARROW)){
    player.velocityY=0;
  }
  
  player.velocityY=player.velocityY+0.1;
  
  playerAttacks();
  playerWin();
  //playerLose();
  bossAttacksphase1();
  bossAttackphase2();
  bossAttackphase3();
  playerLose();
  
  
  boss.debug=true;
  boss.setCollider("rectangle",0,0,40,50);
  
  player.debug=true;
  player.setCollider("circle",0,0,10);
  
  boss.collide(ground);
  player.collide(ground);
  
  drawSprites();
  
}

function playerAttacks(){
 if (keyWentDown('space')&&player.isTouching(boss)){
   bossHealth=bossHealth-1;
 } 
 
 if (keyWentDown('space')){
   player.setAnimation('player');
 }
 
  console.log(bossHealth);
  
}

function bossAttacksphase1() {
  if(World.frameCount%60===0 && bossHealth===500){
    boss.setAnimation("boss2_attack");
    var attack1 = createSprite(player.x,50);
    attack1.setAnimation("icicle");
    attack1.velocityY=4;
    attack1.lifetime=100;
    
    attack1.debug=true;
    attack1.setCollider("circle",0,0,10);
    
    
    attacksGroup.add(attack1);
    }
}

function bossAttackphase2(){
  
  if(bossHealth>400 && World.frameCount%80===0){
    var attack2 = createSprite(400,player.y);
    attack2.setAnimation("icespikes");
    attack2.velocityX=-3;
    
    attack2.debug=true;
    attack2.setCollider("circle",0,0,13);
    
    attacksGroup.add(attack2);
    attack2.lifetime=100;
  }
  
  if(bossHealth===400&&World.frameCount%30===0){
    var attack3=createSprite(player.x,50);
    attack3.setAnimation("icemeteor");
    attack3.velocityY=3;
    attacksGroup.add(attack3);
    attack3.debug=true;
    
    attack3.lifetime=100;
  }
  
}

function bossAttackphase3(){
  
  if(bossHealth<=350){
    var attack4 = createSprite(100,player.y);
    attack4.setAnimation("iceblast");
    attack4.scale=3;
    attacksGroup.add(attack4);
    attack4.lifetime=100;
  }
  
  attacksGroup.debug=true;
  
  ground.debug=true;
}

function playerWin(){

  if (bossHealth===0) {
   gamestate=WIN;
  }
  
  if (gamestate===WIN){
    player.velocityX=0;
    player.velocityY=0;
    var youWin = createSprite(200,200);
    youWin.setAnimation("animation_2");
    rear.setAnimation("background1");
    
    boss.setAnimation("boss_dead");
    
    }
    
    
 
}

function playerLose(){
  if(attacksGroup.isTouching(player)){
    gamestate=LOSE;
  }
  
  if(gamestate===LOSE){
    player.setAnimation("player_dead");
    player.velocityX=0;
    player.velocityY=0;
    
    
  }
}




/*function playerImmortal(){
  
if(attacksGroup.isTouching(player)){
  attacksGroup.destroyEach();
  
}*/










// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};

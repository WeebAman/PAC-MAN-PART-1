var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5905e48c-30af-4761-9b66-20802abc9331","4da4dab4-c655-4793-81a4-c0314c591b2a","3aea90b6-a2ce-4413-ac9f-185a46c45a32","02d70dd7-055c-4053-a8ff-7a2318bf8e79","ad58f653-08f8-4bb8-ba13-9044faa6de1b","66b6c40c-cdde-48be-8cbf-6e4f2f2579c8","8d99e156-c382-4013-930e-60a9096f198f","81333e68-8002-4f3d-a3a3-4a113b48fb60","16efb6eb-b275-4896-b656-8a070a61ea0b","210c854d-360c-4afb-b51f-446b65b9aeb1","c8ab09fc-e680-421d-a0cf-bd6425a64347","9981c3f1-9be7-4465-b2e3-98564f2a5004","912dad4b-6537-43ff-b286-8266c49a5f15","59b51d78-badd-4604-af48-80b710fe0d1a","7c18768d-a107-40c8-a216-cf826037ae96","f7f5e524-9521-430a-a466-263f0ff6c11d","461cb557-5984-4eab-a1d9-e7b5778f9bb2"],"propsByKey":{"5905e48c-30af-4761-9b66-20802abc9331":{"name":"pacmanR","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":2,"looping":true,"frameDelay":5,"version":"ApQzylFT1uqZt67YJDpqq7IdZCJUP4nK","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":26},"rootRelativePath":"assets/5905e48c-30af-4761-9b66-20802abc9331.png"},"4da4dab4-c655-4793-81a4-c0314c591b2a":{"name":"pacmanL","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":2,"looping":true,"frameDelay":5,"version":"AoGzIYiLc.yUTmYq2XFYHYCqD1.4l1cE","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":26},"rootRelativePath":"assets/4da4dab4-c655-4793-81a4-c0314c591b2a.png"},"3aea90b6-a2ce-4413-ac9f-185a46c45a32":{"name":"pacmanU","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":2,"looping":true,"frameDelay":5,"version":"vlk8fJYCOy8r0zgHthE_BHOCNpk5S6tm","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":26},"rootRelativePath":"assets/3aea90b6-a2ce-4413-ac9f-185a46c45a32.png"},"02d70dd7-055c-4053-a8ff-7a2318bf8e79":{"name":"pacmanD","sourceUrl":null,"frameSize":{"x":13,"y":13},"frameCount":2,"looping":true,"frameDelay":5,"version":"UmNI4cqpWX6zNs8QJjS.mmmUMGhmz68u","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":26},"rootRelativePath":"assets/02d70dd7-055c-4053-a8ff-7a2318bf8e79.png"},"ad58f653-08f8-4bb8-ba13-9044faa6de1b":{"name":"wall","sourceUrl":null,"frameSize":{"x":26,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"peRoZ_2uVThCYd8OtyqMSZe4AYyNaPGb","loadedFromSource":true,"saved":true,"sourceSize":{"x":26,"y":3},"rootRelativePath":"assets/ad58f653-08f8-4bb8-ba13-9044faa6de1b.png"},"66b6c40c-cdde-48be-8cbf-6e4f2f2579c8":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":100,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"xJCj7gsIG2JZDV3siqnn.3XwmAUBG8um","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":3},"rootRelativePath":"assets/66b6c40c-cdde-48be-8cbf-6e4f2f2579c8.png"},"8d99e156-c382-4013-930e-60a9096f198f":{"name":"coin","sourceUrl":null,"frameSize":{"x":4,"y":4},"frameCount":1,"looping":true,"frameDelay":12,"version":"MuH04i0qUnxrfYvAW.nbJVC4SUaxjeEb","loadedFromSource":true,"saved":true,"sourceSize":{"x":4,"y":4},"rootRelativePath":"assets/8d99e156-c382-4013-930e-60a9096f198f.png"},"81333e68-8002-4f3d-a3a3-4a113b48fb60":{"name":"ghost1","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"i0Ol5dKTb1uBkKEnm3vNSyMx4YpTDyld","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/81333e68-8002-4f3d-a3a3-4a113b48fb60.png"},"16efb6eb-b275-4896-b656-8a070a61ea0b":{"name":"ghost2","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"f_McJi3vbNT3khQWMwhx_UCxCOPPUylr","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/16efb6eb-b275-4896-b656-8a070a61ea0b.png"},"210c854d-360c-4afb-b51f-446b65b9aeb1":{"name":"ghost3","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"EPZklxM2ffs3HlHcZqnsuHXI3oydilDh","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/210c854d-360c-4afb-b51f-446b65b9aeb1.png"},"c8ab09fc-e680-421d-a0cf-bd6425a64347":{"name":"ghost4","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"g7Cwuf6i5WuJvlZiUBzmnawDOyaPw3na","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/c8ab09fc-e680-421d-a0cf-bd6425a64347.png"},"9981c3f1-9be7-4465-b2e3-98564f2a5004":{"name":"blueghost","sourceUrl":null,"frameSize":{"x":16,"y":15},"frameCount":1,"looping":true,"frameDelay":12,"version":"xcENsMxATWOxLtu.KuuLuWexVGexYQfa","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":15},"rootRelativePath":"assets/9981c3f1-9be7-4465-b2e3-98564f2a5004.png"},"912dad4b-6537-43ff-b286-8266c49a5f15":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":23,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"viVs4X5gNXDT8bmwkZz_QBE8kw1SgfSc","loadedFromSource":true,"saved":true,"sourceSize":{"x":23,"y":25},"rootRelativePath":"assets/912dad4b-6537-43ff-b286-8266c49a5f15.png"},"59b51d78-badd-4604-af48-80b710fe0d1a":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":13,"y":3},"frameCount":1,"looping":true,"frameDelay":12,"version":"m3K..uRXe1VXHNZrklggQZULpVe0jFs8","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":3},"rootRelativePath":"assets/59b51d78-badd-4604-af48-80b710fe0d1a.png"},"7c18768d-a107-40c8-a216-cf826037ae96":{"name":"heart","sourceUrl":null,"frameSize":{"x":14,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"f5cYZzybEJ7Pwg1xRzN8M.uv3ZPosUgc","loadedFromSource":true,"saved":true,"sourceSize":{"x":14,"y":11},"rootRelativePath":"assets/7c18768d-a107-40c8-a216-cf826037ae96.png"},"f7f5e524-9521-430a-a466-263f0ff6c11d":{"name":"Game Over","sourceUrl":null,"frameSize":{"x":22,"y":13},"frameCount":1,"looping":true,"frameDelay":12,"version":"JOQ9W5yqGqZomGAjmKJ88Atsvh6jrNT5","loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":13},"rootRelativePath":"assets/f7f5e524-9521-430a-a466-263f0ff6c11d.png"},"461cb557-5984-4eab-a1d9-e7b5778f9bb2":{"name":"winner","sourceUrl":null,"frameSize":{"x":28,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"EL6GPXLw.97Ec2xwDSzpHeL.pocQT1KV","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":19},"rootRelativePath":"assets/461cb557-5984-4eab-a1d9-e7b5778f9bb2.png"}}};
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

// Create your variables here
var score = 0;
var lives = 3;
var timer = 5;
var score1 = 0; 

// Create your sprites here
//pacman
var pacman = createSprite(20, 122);
pacman.setAnimation("pacmanR");
pacman.velocityX = 0;
pacman.scale = 1.1;


//heart
var heart1 = createSprite(115,350);
heart1.setAnimation("heart");
heart1.scale = 2;

var heart2 = createSprite(200,350);
heart2.setAnimation("heart");
heart2.scale = 2;

var heart3 = createSprite(285,350);
heart3.setAnimation("heart");
heart3.scale = 2;
//Walls
var wall = createSprite(0,110);
wall.setAnimation("wall");
wall.scale = 3;

var wall2 = createSprite(400,110);
wall2.setAnimation("wall");
wall2.scale = 3;

var wall3 = createSprite(0,135);
wall3.setAnimation("wall");
wall3.scale = 3;

var wall4 = createSprite(400,125);
wall4.setAnimation("wall");
wall4.scale = 3;

var wall5 = createSprite(35,67);
wall5.setAnimation("wall");
wall5.scale = 3;
wall5.rotation = 90;

var wall6 = createSprite(366,67);
wall6.setAnimation("wall");
wall6.scale = 3;
wall6.rotation = 90;

var wall7 = createSprite(200,20);
wall7.setAnimation("animation_1");
wall7.scale = 3;

var wall8 = createSprite(65,82);
wall8.setAnimation("wall");
wall8.scale = 3;
wall8.rotation = 90;

var wall9 = createSprite(340,82);
wall9.setAnimation("wall");
wall9.scale = 3;
wall9.rotation = 90;

var wall10 = createSprite(200,50);
wall10.setAnimation("wall");
wall10.scale = 3;

var wall11 = createSprite(237,79);
wall11.setAnimation("wall");
wall11.scale = 3;
wall11.rotation = 90;

var wall12 = createSprite(193,135);
wall12.setAnimation("wall");
wall12.scale = 3;

var wall13 = createSprite(205,135);
wall13.setAnimation("wall");
wall13.scale = 3;

var wall14 = createSprite(200,100);
wall14.setAnimation("animation_2");
wall14.scale = 3;
wall14.rotation = 90;

var wall15 = createSprite(100,135);
wall15.setAnimation("wall");
wall15.scale = 3;
wall15.rotation = 90;

var wall16 = createSprite(77,138);
wall16.setAnimation("wall");
wall16.scale = 3;

var wall17 = createSprite(300,135);
wall17.setAnimation("wall");
wall17.scale = 3;
wall17.rotation = 90;

var wall18 = createSprite(325,137);
wall18.setAnimation("wall");
wall18.scale = 3;

var wall19 = createSprite(200,180);
wall19.setAnimation("wall");
wall19.scale = 3;

var wall20 = createSprite(237,210);
wall20.setAnimation("wall");
wall20.scale = 3;
wall20.rotation = 90;

var wall21 = createSprite(63,210);
wall21.setAnimation("wall");
wall21.scale = 3;
wall21.rotation = 90;

var wall22 = createSprite(335,210);
wall22.setAnimation("wall");
wall22.scale = 3;
wall22.rotation = 90;

var wall23 = createSprite(200,240);
wall23.setAnimation("wall");
wall23.scale = 3;
wall23.rotation = 90;

var wall24 = createSprite(270,275);
wall24.setAnimation("wall");
wall24.scale = 3;

var wall25 = createSprite(300,275);
wall25.setAnimation("wall");
wall25.scale = 3;

var wall26 = createSprite(300,246);
wall26.setAnimation("animation_2");
wall26.scale = 3;
wall26.rotation = 90;

var wall27 = createSprite(95,275);
wall27.setAnimation("wall");
wall27.scale = 3;

var wall28 = createSprite(125,275);
wall28.setAnimation("wall");
wall28.scale = 3;

var wall29 = createSprite(100,246);
wall29.setAnimation("animation_2");
wall29.scale = 3;
wall29.rotation = 90;

var wall30 = createSprite(0,275);
wall30.setAnimation("wall");
wall30.scale = 3;

var wall31 = createSprite(0,243);
wall31.setAnimation("wall");
wall31.scale = 3;

var wall32 = createSprite(400,275);
wall32.setAnimation("wall");
wall32.scale = 3;

var wall33 = createSprite(400,243);
wall33.setAnimation("wall");
wall33.scale = 3;

var wall34 = createSprite(370,190);
wall34.setAnimation("wall");
wall34.scale = 3.7;
wall34.rotation = 90;

var wall35 = createSprite(32,190);
wall35.setAnimation("wall");
wall35.scale = 3.7;
wall35.rotation = 90;

var wall36 = createSprite(200,300);
wall36.setAnimation("animation_1");
wall36.scale = 3.4;

var wall37 = createSprite(365,287);
wall37.setAnimation("animation_2");
wall37.scale = 2.5;
wall37.rotation = 90;

var wall38 = createSprite(35,287);
wall38.setAnimation("animation_2");
wall38.scale = 2.5;
wall38.rotation = 90;

var wall39 = createSprite(165,79);
wall39.setAnimation("wall");
wall39.scale = 2.5;
wall39.rotation = 90;

var wall40 = createSprite(315,53);
wall40.setAnimation("animation_2");
wall40.scale = 3.5;

var wall41 = createSprite(85,47.5);
wall41.setAnimation("animation_2");
wall41.scale = 3.8;

var wall42 = createSprite(165,210);
wall42.setAnimation("wall");
wall42.scale = 2.5;
wall42.rotation = 90;

var wall43 = createSprite(35,197);
wall43.setAnimation("wall");
wall43.scale = 2.5;
wall43.rotation = 90;

var wall44 = createSprite(370,185);
wall44.setAnimation("wall");
wall44.scale = 2.5;
wall44.rotation = 90;

//Coins
//ghosts
var ghost1 = createSprite(49,50);
ghost1.setAnimation("ghost1");
ghost1.scale = 1.2;
ghost1.velocityY = 5;

var ghost2 = createSprite(135,43);
ghost2.setAnimation("ghost2");
ghost2.scale = 1.2;
ghost2.velocityY = 5;

var ghost3 = createSprite(77,73);
ghost3.setAnimation("ghost3");
ghost3.scale = 1.2;
ghost3.velocityY = 5;

var ghost4 = createSprite(320,193);
ghost4.setAnimation("ghost4");
ghost4.scale = 1.2;
ghost4.velocityY = -5;

//blues
var blue1 = createSprite(-490,50);
blue1.scale = 1.2;

var blue2 = createSprite(-135,43);
blue2.scale = 1.2;

var blue3 = createSprite(-77,73);
blue3.scale = 1.2;

var blue4 = createSprite(-320,194);
blue4.scale = 1.2;

//coins
var coin = createSprite(48,39);
coin.setAnimation("coin");
var coin2 = createSprite(48,54);
coin2.setAnimation("coin");

var coin3 = createSprite(48,69);
coin3.setAnimation("coin");

var coin4 = createSprite(48,84);
coin4.setAnimation("coin");

var coin5 = createSprite(48,99);
coin5.setAnimation("coin");

var coin6 = createSprite(48,114);
coin6.setAnimation("coin");

var coin7 = createSprite(48,129);
coin7.setAnimation("coin");

var coin8 = createSprite(48,144);
coin8.setAnimation("coin");

var coin9 = createSprite(48,159);
coin9.setAnimation("coin");

var coin10 = createSprite(48,174);
coin10.setAnimation("coin");

var coin11 = createSprite(48,189);
coin11.setAnimation("coin");

var coin12 = createSprite(48,204);
coin12.setAnimation("coin");

var coin13 = createSprite(48,219);
coin13.setAnimation("coin");

var coin14 = createSprite(48,234);
coin14.setAnimation("coin");

var coin15 = createSprite(48,249);
coin15.setAnimation("coin");

var coin16 = createSprite(48,264);
coin16.setAnimation("coin");

var coin17 = createSprite(48,279);
coin17.setAnimation("coin");

var coin18 = createSprite(60,288);
coin18.setAnimation("coin");

var coin19 = createSprite(75,288);
coin19.setAnimation("coin");

var coin20 = createSprite(90,288);
coin20.setAnimation("coin");
coin20.scale = 2.5;

var coin21 = createSprite(105,288);
coin21.setAnimation("coin");

var coin22 = createSprite(120,288);
coin22.setAnimation("coin");

var coin23 = createSprite(135,288);
coin23.setAnimation("coin");

var coin24 = createSprite(150,288);
coin24.setAnimation("coin");

var coin25 = createSprite(165,288);
coin25.setAnimation("coin");

var coin26 = createSprite(180,288);
coin26.setAnimation("coin");

var coin27 = createSprite(195,288);
coin27.setAnimation("coin");

var coin28 = createSprite(210,288);
coin28.setAnimation("coin");

var coin29 = createSprite(225,288);
coin29.setAnimation("coin");

var coin30 = createSprite(240,288);
coin30.setAnimation("coin");

var coin31 = createSprite(255,288);
coin31.setAnimation("coin");

var coin32 = createSprite(270,288);
coin32.setAnimation("coin");

var coin33 = createSprite(285,288);
coin33.setAnimation("coin");

var coin34 = createSprite(300,288);
coin34.setAnimation("coin");

var coin35 = createSprite(315,288);
coin35.setAnimation("coin");

var coin36 = createSprite(330,288);
coin36.setAnimation("coin");

var coin37 = createSprite(345,288);
coin37.setAnimation("coin");

var coin38 = createSprite(352,275);
coin38.setAnimation("coin");

var coin39 = createSprite(352,260);
coin39.setAnimation("coin");

var coin40 = createSprite(352,245);
coin40.setAnimation("coin");

var coin41 = createSprite(352,230);
coin41.setAnimation("coin");

var coin42 = createSprite(352,215);
coin42.setAnimation("coin");

var coin43 = createSprite(352,200);
coin43.setAnimation("coin");

var coin44 = createSprite(352,185);
coin44.setAnimation("coin");

var coin45 = createSprite(352,170);
coin45.setAnimation("coin");

var coin46 = createSprite(352,155);
coin46.setAnimation("coin");

var coin47 = createSprite(352,140);
coin47.setAnimation("coin");

var coin48 = createSprite(352,125);
coin48.setAnimation("coin");

var coin49 = createSprite(352,110);
coin49.setAnimation("coin");

var coin50 = createSprite(352,95);
coin50.setAnimation("coin");

var coin51 = createSprite(352,80);
coin51.setAnimation("coin");

var coin52 = createSprite(352,65);
coin52.setAnimation("coin");

var coin53 = createSprite(352,50);
coin53.setAnimation("coin");

var coin54 = createSprite(340,38);
coin54.setAnimation("coin");

var coin55 = createSprite(325,38);
coin55.setAnimation("coin");

var coin56 = createSprite(310,38);
coin56.setAnimation("coin");

var coin57 = createSprite(295,38);
coin57.setAnimation("coin");
coin57.scale = 2.5;

var coin58 = createSprite(280,38);
coin58.setAnimation("coin");

var coin59 = createSprite(265,38);
coin59.setAnimation("coin");

var coin60 = createSprite(250,38);
coin60.setAnimation("coin");

var coin61 = createSprite(235,38);
coin61.setAnimation("coin");

var coin62 = createSprite(220,38);
coin62.setAnimation("coin");

var coin63 = createSprite(205,38);
coin63.setAnimation("coin");

var coin64 = createSprite(190,38);
coin64.setAnimation("coin");

var coin65 = createSprite(175,38);
coin65.setAnimation("coin");

var coin66 = createSprite(160,38);
coin66.setAnimation("coin");

var coin67 = createSprite(145,38);
coin67.setAnimation("coin");

var coin68 = createSprite(130,38);
coin68.setAnimation("coin");

var coin69 = createSprite(115,38);
coin69.setAnimation("coin");

var coin70 = createSprite(100,38);
coin70.setAnimation("coin");

var coin71 = createSprite(85,38);
coin71.setAnimation("coin");

var coin72 = createSprite(70,38);
coin72.setAnimation("coin");

var coin73 = createSprite(80,70);
coin73.setAnimation("coin");
coin73.scale = 2.5;

var coin74 = createSprite(80,85);
coin74.setAnimation("coin");

var coin75 = createSprite(80,100);
coin75.setAnimation("coin");

var coin76 = createSprite(80,115);
coin76.setAnimation("coin");

var coin77 = createSprite(320,70);
coin77.setAnimation("coin");

var coin78 = createSprite(320,85);
coin78.setAnimation("coin");

var coin79 = createSprite(320,100);
coin79.setAnimation("coin");

var coin80 = createSprite(320,115);
coin80.setAnimation("coin");

var coin81= createSprite(320,155);
coin81.setAnimation("coin");

var coin82 = createSprite(320,170);
coin82.setAnimation("coin");

var coin83 = createSprite(320,185);
coin83.setAnimation("coin");

var coin84 = createSprite(320,200);
coin84.setAnimation("coin");

var coin85 = createSprite(320,215);
coin85.setAnimation("coin");

var coin86 = createSprite(320,230);
coin86.setAnimation("coin");

var coin87 = createSprite(320,245);
coin87.setAnimation("coin");

var coin88 = createSprite(320,260);
coin88.setAnimation("coin");

var coin89 = createSprite(80,155);
coin89.setAnimation("coin");

var coin90 = createSprite(80,170);
coin90.setAnimation("coin");

var coin91 = createSprite(80,185);
coin91.setAnimation("coin");

var coin92 = createSprite(80,200);
coin92.setAnimation("coin");

var coin93 = createSprite(80,215);
coin93.setAnimation("coin");

var coin94 = createSprite(80,230);
coin94.setAnimation("coin");

var coin95 = createSprite(80,245);
coin95.setAnimation("coin");

var coin96 = createSprite(80,260);
coin96.setAnimation("coin");

var coin97 = createSprite(122,53);
coin97.setAnimation("coin");

var coin98 = createSprite(122,68);
coin98.setAnimation("coin");

var coin99 = createSprite(122,83);
coin99.setAnimation("coin");

var coin100 = createSprite(122,98);
coin100.setAnimation("coin");

var coin101 = createSprite(122,113);
coin101.setAnimation("coin");

var coin102 = createSprite(122,128);
coin102.setAnimation("coin");

var coin103 = createSprite(122,143);
coin103.setAnimation("coin");

var coin104 = createSprite(122,158);
coin104.setAnimation("coin");

var coin105 = createSprite(122,173);
coin105.setAnimation("coin");

var coin106 = createSprite(122,188);
coin106.setAnimation("coin");

var coin107 = createSprite(122,203);
coin107.setAnimation("coin");

var coin108 = createSprite(122,218);
coin108.setAnimation("coin");

var coin109 = createSprite(122,233);
coin109.setAnimation("coin");

var coin110 = createSprite(122,248);
coin110.setAnimation("coin");

var coin111 = createSprite(122,263);
coin111.setAnimation("coin");

var coin112 = createSprite(148,53);
coin112.setAnimation("coin");

var coin113 = createSprite(148,68);
coin113.setAnimation("coin");

var coin114 = createSprite(148,83);
coin114.setAnimation("coin");

var coin115 = createSprite(148,98);
coin115.setAnimation("coin");

var coin116 = createSprite(148,113);
coin116.setAnimation("coin");

var coin117 = createSprite(148,128);
coin117.setAnimation("coin");

var coin118 = createSprite(148,143);
coin118.setAnimation("coin");

var coin119 = createSprite(148,158);
coin119.setAnimation("coin");

var coin120 = createSprite(148,173);
coin120.setAnimation("coin");

var coin121 = createSprite(148,188);
coin121.setAnimation("coin");

var coin122 = createSprite(148,203);
coin122.setAnimation("coin");

var coin123 = createSprite(148,218);
coin123.setAnimation("coin");

var coin124 = createSprite(148,233);
coin124.setAnimation("coin");

var coin125 = createSprite(148,248);
coin125.setAnimation("coin");

var coin126= createSprite(148,263);
coin126.setAnimation("coin");

var coin127 = createSprite(252,53);
coin127.setAnimation("coin");

var coin128 = createSprite(252,68);
coin128.setAnimation("coin");

var coin129 = createSprite(252,83);
coin129.setAnimation("coin");

var coin130 = createSprite(252,98);
coin130.setAnimation("coin");

var coin131 = createSprite(252,113);
coin131.setAnimation("coin");

var coin132 = createSprite(252,128);
coin132.setAnimation("coin");

var coin133 = createSprite(252,143);
coin133.setAnimation("coin");

var coin134 = createSprite(252,158);
coin134.setAnimation("coin");

var coin135 = createSprite(252,173);
coin135.setAnimation("coin");

var coin136 = createSprite(252,188);
coin136.setAnimation("coin");

var coin137 = createSprite(252,203);
coin137.setAnimation("coin");

var coin138 = createSprite(252,218);
coin138.setAnimation("coin");

var coin139 = createSprite(252,233);
coin139.setAnimation("coin");

var coin140 = createSprite(252,248);
coin140.setAnimation("coin");

var coin141 = createSprite(252,263);
coin141.setAnimation("coin");

var coin142 = createSprite(280,53);
coin142.setAnimation("coin");

var coin143 = createSprite(280,68);
coin143.setAnimation("coin");

var coin144 = createSprite(280,83);
coin144.setAnimation("coin");

var coin145 = createSprite(280,98);
coin145.setAnimation("coin");

var coin146 = createSprite(280,113);
coin146.setAnimation("coin");

var coin147 = createSprite(280,128);
coin147.setAnimation("coin");

var coin148 = createSprite(280,143);
coin148.setAnimation("coin");

var coin149 = createSprite(280,158);
coin149.setAnimation("coin");

var coin150 = createSprite(280,173);
coin150.setAnimation("coin");

var coin151 = createSprite(280,188);
coin151.setAnimation("coin");

var coin152 = createSprite(280,203);
coin152.setAnimation("coin");

var coin153 = createSprite(280,218);
coin153.setAnimation("coin");

var coin154 = createSprite(280,233);
coin154.setAnimation("coin");

var coin155 = createSprite(280,248);
coin155.setAnimation("coin");

var coin156 = createSprite(280,263);
coin156.setAnimation("coin");

var coin157 = createSprite(179,66);
coin157.setAnimation("coin");

var coin158 = createSprite(179,81);
coin158.setAnimation("coin");

var coin159 = createSprite(179,96);
coin159.setAnimation("coin");

var coin160 = createSprite(179,111);
coin160.setAnimation("coin");

var coin161 = createSprite(220,66);
coin161.setAnimation("coin");

var coin162 = createSprite(220,81);
coin162.setAnimation("coin");

var coin163 = createSprite(220,96);
coin163.setAnimation("coin");

var coin164 = createSprite(220,111);
coin164.setAnimation("coin");

var coin165 = createSprite(179,196);
coin165.setAnimation("coin");

var coin166 = createSprite(179,211);
coin166.setAnimation("coin");

var coin167 = createSprite(179,226);
coin167.setAnimation("coin");

var coin168 = createSprite(179,241);
coin168.setAnimation("coin");

var coin169 = createSprite(179,256);
coin169.setAnimation("coin");

var coin170 = createSprite(179,271);
coin170.setAnimation("coin");

var coin171 = createSprite(220,196);
coin171.setAnimation("coin");

var coin172 = createSprite(220,211);
coin172.setAnimation("coin");

var coin173 = createSprite(220,226);
coin173.setAnimation("coin");
coin173.scale = 2.5;

var coin174 = createSprite(220,241);
coin174.setAnimation("coin");

var coin175 = createSprite(220,256);
coin175.setAnimation("coin");

var coin176 = createSprite(220,271);
coin176.setAnimation("coin");

var coin177 = createSprite(200,65);
coin177.setAnimation("coin");

var coin178 = createSprite(200,195);
coin178.setAnimation("coin");

var coin179 = createSprite(160,152);
coin179.setAnimation("coin");

var coin180 = createSprite(175,152);
coin180.setAnimation("coin");

var coin181 = createSprite(190,152);
coin181.setAnimation("coin");

var coin182 = createSprite(205,152);
coin182.setAnimation("coin");

var coin183 = createSprite(220,152);
coin183.setAnimation("coin");

var coin184 = createSprite(235,152);
coin184.setAnimation("coin");

var coin185 = createSprite(160,166);
coin185.setAnimation("coin");

var coin186 = createSprite(175,166);
coin186.setAnimation("coin");

var coin187 = createSprite(190,166);
coin187.setAnimation("coin");

var coin188 = createSprite(205,166);
coin188.setAnimation("coin");

var coin189 = createSprite(220,166);
coin189.setAnimation("coin");

var coin190 = createSprite(235,166);
coin190.setAnimation("coin");

pacman.debug = false;
//ghost1.debug = false;
//ghost2.debug = false;
//ghost3.debug = false;
//ghost4.debug = false;

function draw() {
  // draw background
  background("black");
  
  ghostTime1();
  ghostTime2();
  ghostTime3();
  ghostTime4();
  ghostControls();
  loopEnds();
  pacmanControls();
  
  drawSprites();
}

//function for ghostTime1->Coin73
function ghostTime1(){
  if(pacman.isTouching(coin73)){
    
    timer = 5;
    
    blue1.setAnimation("blueghost");
    blue2.setAnimation("blueghost");
    blue3.setAnimation("blueghost");
    blue4.setAnimation("blueghost");
    
    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;
    
    ghost1.x = -100;
    ghost1.y = 100;
    
    ghost2.x = -100;
    ghost2.y = 100;
    
    ghost3.x = -100;
    ghost3.y = 100;
    
    ghost4.x = -100;
    ghost4.y = 100;
    
    ghost1.setVelocity(0,0);
    ghost2.setVelocity(0,0);
    ghost3.setVelocity(0,0);
    ghost4.setVelocity(0,0);
    
    blue1.velocityY = 5;
    blue2.velocityY = 5;
    blue3.velocityY = 5;
    blue4.velocityY = 5;
    
    blue1.x = 49;
    blue1.y = 50;
    
    blue2.x = 135;
    blue2.y = 43;
    
    blue3.x = 77;
    blue3.y = 73;
    
    blue4.x = 320;
    blue4.y = 193;
    
    coin73.visible = false;
    score = score + 10;
    score1 = score1 + 10;
    
    coin73.y = 400;
    coin73.x = 400;
  }
  
  if(blue1.x>200){
    timer = timer-1;
  }
  
  if(timer ==0){
    ghost1.x = 49;
    ghost1.y = 50;
    ghost1.velocityY = 5;
    
    ghost2.x = 135;
    ghost2.y = 43;
    ghost2.velocityY = 5;
    
    ghost3.x = 77;
    ghost3.y = 73;
    ghost3.velocityY = 5;
    
    ghost4.x = 320;
    ghost4.y = 193;
    ghost4.velocityY = 5;
  
    blue1.x = 400;
    blue1.y = 400;
    blue1.visible = false;
    
    blue2.x = 400;
    blue2.y = 400;
    blue2.visible = false;
    
    blue3.x = 400;
    blue3.y = 400;
    blue3.visible = false;
    
    blue4.x = 400;
    blue4.y = 400;
    blue4.visible = false;
  }
 
  
    if (blue1.y >= 284){
    blue1.velocityX = 5;
    blue1.velocityY = 0;
    }
    
    if (blue1.x >= 350){
    blue1.velocityX = 0;
    blue1.velocityY = -5;
    }
    
    if (blue1.y <= 40){
    blue1.velocityX = -5;
    blue1.velocityY = 0;
    }
    
    if (blue1.isTouching(wall5)){
    blue1.velocityX = 0;
    blue1.velocityY = 5;
    }
    
    if (blue2.isTouching(wall17)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall39)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.y == 258){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.isTouching(wall23)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall19)){
    blue2.velocityX = 5;
    blue2.velocityY = 0;
    }
    
    if (blue2.isTouching(wall20)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.isTouching(wall26)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall7)){
    blue2.velocityX = -5;
    blue2.velocityY = 0;
    }
    
    if (blue2.isTouching(wall41)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue3.isTouching(wall16)){
    blue3.velocityX = -5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall3)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue3.isTouching(wall43)){
    blue3.velocityX = 5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall15)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue3.isTouching(wall29)){
    blue3.velocityX = 5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall42)){
    blue3.velocityX = 0;
    blue3.velocityY = -5;
    }
    
    if (blue3.y <= 69){
    blue3.velocityX = -5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall8)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue4.isTouching(wall18)){
    blue4.velocityX = 5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall44)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if (blue4.isTouching(wall2)){
    blue4.velocityX = -5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall17)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if (blue4.isTouching(wall40)){
    blue4.velocityX = -5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall11)){
    blue4.velocityX = 0;
    blue4.velocityY = 5;
    }
    
    if (blue4.y >= 210){
    blue4.velocityX = 5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall22)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if(pacman.isTouching(blue1)){
      blue1.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue2)){
      blue2.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue3)){
      blue3.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue4)){
      blue4.visible = false;
      score1 += 10;
    }
}   




//Function for ghostTime2->coin173
function ghostTime2(){
  if(pacman.isTouching(coin173)){
    
    timer = 5;
    
    blue1.setAnimation("blueghost");
    blue2.setAnimation("blueghost");
    blue3.setAnimation("blueghost");
    blue4.setAnimation("blueghost");
    
    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;
    
    ghost1.x = -100;
    ghost1.y = 100;
    
    ghost2.x = -100;
    ghost2.y = 100;
    
    ghost3.x = -100;
    ghost3.y = 100;
    
    ghost4.x = -100;
    ghost4.y = 100;
    
    ghost1.setVelocity(0,0);
    ghost2.setVelocity(0,0);
    ghost3.setVelocity(0,0);
    ghost4.setVelocity(0,0);
    
    blue1.velocityY = 5;
    blue2.velocityY = 5;
    blue3.velocityY = 5;
    blue4.velocityY = 5;
    
    blue1.x = 49;
    blue1.y = 50;
    
    blue2.x = 135;
    blue2.y = 43;
    
    blue3.x = 77;
    blue3.y = 73;
    
    blue4.x = 320;
    blue4.y = 193;
    
    coin173.visible = false;
    score = score + 10;
    score1 = score1 + 10;
    
    coin173.y = 400;
    coin173.x = 400;
  }
  
  if(blue1.x>200){
    timer = timer-1;
  }
  
  if(timer ==0){
    ghost1.x = 49;
    ghost1.y = 50;
    ghost1.velocityY = 5;
    
    ghost2.x = 135;
    ghost2.y = 43;
    ghost2.velocityY = 5;
    
    ghost3.x = 77;
    ghost3.y = 73;
    ghost3.velocityY = 5;
    
    ghost4.x = 320;
    ghost4.y = 193;
    ghost4.velocityY = 5;
  
    blue1.x = 400;
    blue1.y = 400;
    blue1.visible = false;
    
    blue2.x = 400;
    blue2.y = 400;
    blue2.visible = false;
    
    blue3.x = 400;
    blue3.y = 400;
    blue3.visible = false;
    
    blue4.x = 400;
    blue4.y = 400;
    blue4.visible = false;
  }
 
  
    if (blue1.y >= 284){
    blue1.velocityX = 5;
    blue1.velocityY = 0;
    }
    
    if (blue1.x >= 350){
    blue1.velocityX = 0;
    blue1.velocityY = -5;
    }
    
    if (blue1.y <= 40){
    blue1.velocityX = -5;
    blue1.velocityY = 0;
    }
    
    if (blue1.isTouching(wall5)){
    blue1.velocityX = 0;
    blue1.velocityY = 5;
    }
    
    if (blue2.isTouching(wall17)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall39)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.y == 258){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.isTouching(wall23)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall19)){
    blue2.velocityX = 5;
    blue2.velocityY = 0;
    }
    
    if (blue2.isTouching(wall20)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.isTouching(wall26)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall7)){
    blue2.velocityX = -5;
    blue2.velocityY = 0;
    }
    
    if (blue2.isTouching(wall41)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue3.isTouching(wall16)){
    blue3.velocityX = -5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall3)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue3.isTouching(wall43)){
    blue3.velocityX = 5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall15)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue3.isTouching(wall29)){
    blue3.velocityX = 5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall42)){
    blue3.velocityX = 0;
    blue3.velocityY = -5;
    }
    
    if (blue3.y <= 69){
    blue3.velocityX = -5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall8)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue4.isTouching(wall18)){
    blue4.velocityX = 5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall44)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if (blue4.isTouching(wall2)){
    blue4.velocityX = -5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall17)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if (blue4.isTouching(wall40)){
    blue4.velocityX = -5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall11)){
    blue4.velocityX = 0;
    blue4.velocityY = 5;
    }
    
    if (blue4.y >= 210){
    blue4.velocityX = 5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall22)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if(pacman.isTouching(blue1)){
      blue1.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue2)){
      blue2.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue3)){
      blue3.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue4)){
      blue4.visible = false;
      score1 += 10;
    }
}

//Function for ghostTime3->coin57
function ghostTime3(){
  if(pacman.isTouching(coin57)){
    
    timer = 5;
    
    blue1.setAnimation("blueghost");
    blue2.setAnimation("blueghost");
    blue3.setAnimation("blueghost");
    blue4.setAnimation("blueghost");
    
    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;
    
    ghost1.x = -100;
    ghost1.y = 100;
    
    ghost2.x = -100;
    ghost2.y = 100;
    
    ghost3.x = -100;
    ghost3.y = 100;
    
    ghost4.x = -100;
    ghost4.y = 100;
    
    ghost1.setVelocity(0,0);
    ghost2.setVelocity(0,0);
    ghost3.setVelocity(0,0);
    ghost4.setVelocity(0,0);
    
    blue1.velocityY = 5;
    blue2.velocityY = 5;
    blue3.velocityY = 5;
    blue4.velocityY = 5;
    
    blue1.x = 49;
    blue1.y = 50;
    
    blue2.x = 135;
    blue2.y = 43;
    
    blue3.x = 77;
    blue3.y = 73;
    
    blue4.x = 320;
    blue4.y = 193;
    
    coin57.visible = false;
    score = score + 10;
    score1 = score1 + 10;
    
    coin57.y = 400;
    coin57.x = 400;
  }
  
  if(blue1.x>200){
    timer = timer-1;
  }
  
  if(timer ==0){
    ghost1.x = 49;
    ghost1.y = 50;
    ghost1.velocityY = 5;
    
    ghost2.x = 135;
    ghost2.y = 43;
    ghost2.velocityY = 5;
    
    ghost3.x = 77;
    ghost3.y = 73;
    ghost3.velocityY = 5;
    
    ghost4.x = 320;
    ghost4.y = 193;
    ghost4.velocityY = 5;
  
    blue1.x = 400;
    blue1.y = 400;
    blue1.visible = false;
    
    blue2.x = 400;
    blue2.y = 400;
    blue2.visible = false;
    
    blue3.x = 400;
    blue3.y = 400;
    blue3.visible = false;
    
    blue4.x = 400;
    blue4.y = 400;
    blue4.visible = false;
  }
 
  
    if (blue1.y >= 284){
    blue1.velocityX = 5;
    blue1.velocityY = 0;
    }
    
    if (blue1.x >= 350){
    blue1.velocityX = 0;
    blue1.velocityY = -5;
    }
    
    if (blue1.y <= 40){
    blue1.velocityX = -5;
    blue1.velocityY = 0;
    }
    
    if (blue1.isTouching(wall5)){
    blue1.velocityX = 0;
    blue1.velocityY = 5;
    }
    
    if (blue2.isTouching(wall17)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall39)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.y == 258){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.isTouching(wall23)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall19)){
    blue2.velocityX = 5;
    blue2.velocityY = 0;
    }
    
    if (blue2.isTouching(wall20)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.isTouching(wall26)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall7)){
    blue2.velocityX = -5;
    blue2.velocityY = 0;
    }
    
    if (blue2.isTouching(wall41)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue3.isTouching(wall16)){
    blue3.velocityX = -5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall3)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue3.isTouching(wall43)){
    blue3.velocityX = 5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall15)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue3.isTouching(wall29)){
    blue3.velocityX = 5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall42)){
    blue3.velocityX = 0;
    blue3.velocityY = -5;
    }
    
    if (blue3.y <= 69){
    blue3.velocityX = -5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall8)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue4.isTouching(wall18)){
    blue4.velocityX = 5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall44)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if (blue4.isTouching(wall2)){
    blue4.velocityX = -5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall17)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if (blue4.isTouching(wall40)){
    blue4.velocityX = -5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall11)){
    blue4.velocityX = 0;
    blue4.velocityY = 5;
    }
    
    if (blue4.y >= 210){
    blue4.velocityX = 5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall22)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if(pacman.isTouching(blue1)){
      blue1.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue2)){
      blue2.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue3)){
      blue3.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue4)){
      blue4.visible = false;
      score1 += 10;
    }
}
//Function for ghostTime2->coin20
function ghostTime4(){
  if(pacman.isTouching(coin20)){
    
    timer = 5;
    
    blue1.setAnimation("blueghost");
    blue2.setAnimation("blueghost");
    blue3.setAnimation("blueghost");
    blue4.setAnimation("blueghost");
    
    blue1.visible = true;
    blue2.visible = true;
    blue3.visible = true;
    blue4.visible = true;
    
    ghost1.x = -100;
    ghost1.y = 100;
    
    ghost2.x = -100;
    ghost2.y = 100;
    
    ghost3.x = -100;
    ghost3.y = 100;
    
    ghost4.x = -100;
    ghost4.y = 100;
    
    ghost1.setVelocity(0,0);
    ghost2.setVelocity(0,0);
    ghost3.setVelocity(0,0);
    ghost4.setVelocity(0,0);
    
    blue1.velocityY = 5;
    blue2.velocityY = 5;
    blue3.velocityY = 5;
    blue4.velocityY = 5;
    
    blue1.x = 49;
    blue1.y = 50;
    
    blue2.x = 135;
    blue2.y = 43;
    
    blue3.x = 77;
    blue3.y = 73;
    
    blue4.x = 320;
    blue4.y = 193;
    
    coin20.visible = false;
    score = score + 10;
    score1 = score1 + 10;
    
    coin20.y = 400;
    coin20.x = 400;
  }
  
  if(blue1.x>200){
    timer = timer-1;
  }
  
  if(timer ==0){
    ghost1.x = 49;
    ghost1.y = 50;
    ghost1.velocityY = 5;
    
    ghost2.x = 135;
    ghost2.y = 43;
    ghost2.velocityY = 5;
    
    ghost3.x = 77;
    ghost3.y = 73;
    ghost3.velocityY = 5;
    
    ghost4.x = 320;
    ghost4.y = 193;
    ghost4.velocityY = 5;
  
    blue1.x = 400;
    blue1.y = 400;
    blue1.visible = false;
    
    blue2.x = 400;
    blue2.y = 400;
    blue2.visible = false;
    
    blue3.x = 400;
    blue3.y = 400;
    blue3.visible = false;
    
    blue4.x = 400;
    blue4.y = 400;
    blue4.visible = false;
  }
 
  
    if (blue1.y >= 284){
    blue1.velocityX = 5;
    blue1.velocityY = 0;
    }
    
    if (blue1.x >= 350){
    blue1.velocityX = 0;
    blue1.velocityY = -5;
    }
    
    if (blue1.y <= 40){
    blue1.velocityX = -5;
    blue1.velocityY = 0;
    }
    
    if (blue1.isTouching(wall5)){
    blue1.velocityX = 0;
    blue1.velocityY = 5;
    }
    
    if (blue2.isTouching(wall17)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall39)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.y == 258){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.isTouching(wall23)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall19)){
    blue2.velocityX = 5;
    blue2.velocityY = 0;
    }
    
    if (blue2.isTouching(wall20)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue2.isTouching(wall26)){
    blue2.velocityX = 0;
    blue2.velocityY = -5;
    }
    
    if (blue2.isTouching(wall7)){
    blue2.velocityX = -5;
    blue2.velocityY = 0;
    }
    
    if (blue2.isTouching(wall41)){
    blue2.velocityX = 0;
    blue2.velocityY = 5;
    }
    
    if (blue3.isTouching(wall16)){
    blue3.velocityX = -5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall3)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue3.isTouching(wall43)){
    blue3.velocityX = 5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall15)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue3.isTouching(wall29)){
    blue3.velocityX = 5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall42)){
    blue3.velocityX = 0;
    blue3.velocityY = -5;
    }
    
    if (blue3.y <= 69){
    blue3.velocityX = -5;
    blue3.velocityY = 0;
    }
    
    if (blue3.isTouching(wall8)){
    blue3.velocityX = 0;
    blue3.velocityY = 5;
    }
    
    if (blue4.isTouching(wall18)){
    blue4.velocityX = 5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall44)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if (blue4.isTouching(wall2)){
    blue4.velocityX = -5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall17)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if (blue4.isTouching(wall40)){
    blue4.velocityX = -5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall11)){
    blue4.velocityX = 0;
    blue4.velocityY = 5;
    }
    
    if (blue4.y >= 210){
    blue4.velocityX = 5;
    blue4.velocityY = 0;
    }
    
    if (blue4.isTouching(wall22)){
    blue4.velocityX = 0;
    blue4.velocityY = -5;
    }
    
    if(pacman.isTouching(blue1)){
      blue1.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue2)){
      blue2.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue3)){
      blue3.visible = false;
      score1 += 10;
    }
    
    if(pacman.isTouching(blue4)){
      blue4.visible = false;
      score1 += 10;
    }
}

function ghostControls(){
  if(ghost1.y >=284){
    ghost1.setVelocity(5,0);
  }
  
  if(ghost1.x >=350){
    ghost1.setVelocity(0,-5);
  }
  
  if(ghost1.y <=40){
    ghost1.setVelocity(-5,0);
  }
  
  if(ghost1.isTouching(wall5)){
    ghost1.setVelocity(0,5);
  }
  
  if(ghost2.y ==258){
    ghost2.setVelocity(5,0);
  }
  
  if(ghost2.isTouching(wall23)){
    ghost2.setVelocity(0,-5);
  }
  
  if(ghost2.isTouching(wall19)){
    ghost2.setVelocity(5,0);
  }
  
  if(ghost2.isTouching(wall20)){
    ghost2.setVelocity(0,5);
  }
  
  if(ghost2.isTouching(wall26)){
    ghost2.setVelocity(0,-5);
  }
  
  if(ghost2.isTouching(wall7)){
    ghost2.setVelocity(-5,0);
  }
  
  if(ghost2.isTouching(wall41)){
    ghost2.setVelocity(0,5);
  }
  
  if(ghost3.isTouching(wall16)){
    ghost3.setVelocity(-5,0);
  }
  
  if(ghost3.isTouching(wall3)){
    ghost3.setVelocity(0,5);
  }
  
  if(ghost3.isTouching(wall43)){
    ghost3.setVelocity(5,0);
  }
  
  if(ghost3.isTouching(wall15)){
    ghost3.setVelocity(0,5);
  }
  
  if(ghost3.isTouching(wall29)){
    ghost3.setVelocity(5,0);
  }
  
  if(ghost3.isTouching(wall42)){
    ghost3.setVelocity(0,-5);
  }
  
  if(ghost3.y<= 69){
    ghost3.setVelocity(-5,0);
  }
  
  if(ghost3.isTouching(wall8)){
    ghost3.setVelocity(0,5);
  }
  
  if(ghost4.isTouching(wall18)){
    ghost4.setVelocity(5,0);
  }
  
  if(ghost4.isTouching(wall44)){
    ghost4.setVelocity(0,-5);
  }
  
  if(ghost4.isTouching(wall2)){
    ghost4.setVelocity(-5,0);
  }
  
  if(ghost4.isTouching(wall17)){
    ghost4.setVelocity(0,-5);
  }
  
  if(ghost4.isTouching(wall40)){
    ghost4.setVelocity(-5,0);
  }
  
  if(ghost4.isTouching(wall11)){
    ghost4.setVelocity(0,5);
  }
  
  if(ghost4.y>= 210){
    ghost4.setVelocity(5,0);
  }
  
  if(ghost4.isTouching(wall22)){
    ghost4.setVelocity(0,-5);
  }
}

function pacmanControls(){
  if(keyWentDown("up")){
    pacman.setVelocity(0,-4);
    pacman.setAnimation("pacmanU");
  }
  
  if(keyWentDown("down")){
    pacman.setVelocity(0,4);
    pacman.setAnimation("pacmanD");
  }
  
  if(keyWentDown("left")){
    pacman.setVelocity(-4,0);
    pacman.setAnimation("pacmanL");
  }
  
  if(keyWentDown("right")){
    pacman.setVelocity(4,0);
    pacman.setAnimation("pacmanR");
  }
}

function loopEnds(){
  if(pacman.x <0){
    pacman.x = 400;
  }
  
  if(pacman.x >400){
    pacman.x = 0;
  }
 
}
//Function for winnerScore

//Function for coinScore->all coins except coin73,coin173,coin57,coin20

//Function heartLives()

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

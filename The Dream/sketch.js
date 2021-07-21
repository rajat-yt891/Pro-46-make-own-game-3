var canvas, background, backgroundimg;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var distance = 0;
var database, position;

var form, player, game;
var ground, groundimg;
var rightenergy = 0, leftenergy = 0;
var lefttower, righttower, lefttowerimg, righttowerimg;
var leftboy, rightboy, leftboyimg, rightboyimg;
var leftcannon, rightcannon, leftcannonimg, rightcannonimg;
var leftbikeanime, leftcaranime, lefttruckanime, rightbikeanime, rightcaranime, righttruckanime;
var rightbikespawn, rightcarspawn, righttruckspawn, leftbikespawn, leftcarspawn, lefttruckspawn;
var leftbike, leftcar, lefttruck, leftbikeimg, leftbikeimg, lefttruckimg;
var rightbike, rightcar, righttruck, rightbikeimg, rightcarimg, righttruckimg;


function preload(){
  backgroundimg = loadImage("images/form.png")
  lefttowerimg = loadImage("images/lefttower.png");
  righttowerimg = loadImage("images/righttower.png");
  leftboyimg = loadImage("images/leftboy.png");
  rightboyimg = loadImage("images/rightboy.png");
  leftcannonimg =loadImage("images/cannonright.png");
  rightcannonimg = loadImage("images/cannonleft.png");

  leftbikeimg = loadImage("images/bike2.png");
  leftcarimg = loadImage("images/car1.png");
  lefttruckimg = loadImage("images/truck2.png");
  rightbikeimg = loadImage("images/bike1.png");
  rightcarimg = loadImage("images/car2.png");
  righttruckimg = loadImage("images/truck1.png");
  groundimg = loadImage("images/ground.png");
  leftbikeanime = loadAnimation("images/leftbike1.png","images/leftbike2.png","images/leftbike3.png","images/leftbike4.png");
  leftcaranime = loadAnimation("images/leftcar1.png","images/leftcar2.png","images/leftcar3.png","images/leftcar4.png");
  lefttruckanime = loadAnimation("images/lefttruck1.png","images/lefttruck2.png","images/lefttruck3.png","images/lefttruck4.png");
  rightbikeanime = loadAnimation("images/rightbike1.png","images/rightbike2.png","images/rightbike3.png","images/rightbike4.png");
  rightcaranime = loadAnimation("images/rightcar1.png","images/rightcar2.png","images/rightcar3.png","images/rightcar4.png");
  righttruckanime = loadAnimation("images/righttruck1.png","images/righttruck2.png","images/righttruck3.png","images/righttruck4.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  //if(gameState === 0){
    game =new Game();
    game.start();
    game.getState();
 }
function draw(){
 if(playerCount === 2){
   game.update(1);
 }
 if(gameState === 1){
   game.play();
 }
}



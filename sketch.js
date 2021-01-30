var database;
var player, form, game;
var gameState = 0
var playerCount
var allPlayers;
var car1, car2, car3, car4;
var cars

function preload(){
    car1Img = loadImage("images/car1.png");
    car2Img = loadImage("images/car2.png");
    car3Img = loadImage("images/car3.png");
    car4Img = loadImage("images/car4.png");
    groundImg = loadImage("images/ground.png");
    trackImg = loadImage("images/track.jpg");
}

function setup(){
    createCanvas(displayWidth, displayHeight);

    database = firebase.database();

    game = new Game();
    game.getGameState();
    game.start();
}

function draw(){
    background("white");
    
    if(playerCount === 4){
        game.updateGameState(1);
    }

    
    if(gameState === 1){
        game.play();
    }

   
   
}

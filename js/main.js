var ball,floor;
var Cwidth,Cheight;

function startGame() {

    ball=new component(10,40,"green",100,23,"circle");
    myGameArea.start();
    floor=new component(Cwidth-1035,10,"black",23,130,"rectangle");
}
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
		var mainCanvas=document.getElementById('canvas');
        this.context = this.canvas.getContext("2d");
        mainCanvas.appendChild(this.canvas);
        this.width=100;
        this.height=100;
        Cwidth=canvas.offsetWidth;
        Cheight=canvas.offsetHeight;
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false; 
        })
        this.interval=setInterval(updateGameArea,20);
    },
    clear : function(){
    	this.context.clearRect(10, 10, 500, 500);
    },
    stop : function(){
    	clearInterval(this.interval);
    }
}

function component(width,height,color,x,y,type){
	this.width=width;
	this.height=height;
	this.speedX=0;
	this.speedY=0;
	this.x=x;
	this.y=y;
	this.update = function(){
		if(type=="circle"){
			context=myGameArea.context;
			context.beginPath();
			context.arc(this.x, this.y, this.width, 0, 2 * Math.PI, false);
			context.fillStyle = color;
			context.fill();
			context.lineWidth = 3;
			context.strokeStyle = '#003300';
			context.stroke();	
		}else if(type=="rectangle"){
			context=myGameArea.context;
			context.fillStyle=color;
			context.fillRect(this.x,this.y,this.width,this.height);		
		}
			
	}
	
	this.newPos = function(){
		this.x += this.speedX;
		this.y += this.speedY;
	}
}
function updateGameArea(){
	myGameArea.clear();
	ball.speedX=0;
	ball.speedY=0;
    if (myGameArea.keys && myGameArea.keys[37]) {ball.speedX = -1; }
    if (myGameArea.keys && myGameArea.keys[39]) {ball.speedX = 1; }
    if (ball.x<30) {ball.x=30;}
    if (ball.y<15) {ball.y=15;}
    if (ball.x>276) {ball.x=276;};
    if (ball.y>119) {ball.y=119}
	ball.newPos();
	floor.update();
	ball.update();
}

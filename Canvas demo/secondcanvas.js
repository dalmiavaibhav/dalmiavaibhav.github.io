var canvas = document.querySelector('canvas');


var c = canvas.getContext('2d');

  canvas.width= window.innerWidth;
  canvas.height= window.innerHeight;
// c.fillStyle = 'rgba(255,0,0,0.5)';
//
// c.fillRect(100,100,100,100);
// c.fillStyle = 'rgba(0,255,0,0.5)';
//
// c.fillRect(400,100,100,100);
// c.fillStyle = 'rgba(0,0,255,0.5)';
//
// c.fillRect(300,300,100,100);
// console.log(canvas);

//Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle = "#fa34a3";
// c.stroke();

// arc / circle
// c.beginPath();
// c.arc(300,30,0,Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for(var i = 0; i<100; i++)
// {
//   var r = Math.random() * 255;
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x,y,30,0,Math.PI * 2, false);
//   c.strokeStyle = 'rgba(r,r,r,0.5)';
//   c.stroke();
// }
// var x =Math.random() * innerWidth;
// var y =Math.random() * innerHeight;
// var dx = ( Math.random() - 0.5) * 10;
// var dy = ( Math.random() - 0.5) * 10;
// var radius = 30;
var mouse = {
  x: undefined,
  y:  undefined
}
var maxRadius = 30;
//var minRadius = 2;

var colorArray = [
  '#3280FF',
  '#2136E8',
  '#5631FF',
  '#7D21E8',
  '#C824FF',
];
window.addEventListener('mousemove',
function(event) {
  mouse.x=event.x;
  mouse.y= event.y;
  console.log(mouse);
})

window.addEventListener('resize', function(){

  canvas.width= window.innerWidth;
  canvas.height= window.innerHeight;
  init();
})
function Circle(x,y,dx,dy,radius){
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius= radius;
  this.minRadius= this.radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
    //c.strokeStyle = 'black';
    //c.stroke();
    c.fillStyle = this.color;
    c.fill();
  }
  this.update = function(){
    if( this.x+ this.radius > innerWidth || this.x - this.radius < 0)
    {
      this.dx = -this.dx;

    }
    if( this.y + this.radius > innerHeight || this.y - this.radius <0){
      this.dy= -this.dy;
    }
    this.x= this.x+this.dx;
    this.y= this.y+this.dy;
    //interactivity
    if(mouse.x - this.x <50 && mouse.x - this.x >-50 && mouse.y - this.y <50 && mouse.y - this.y >-50)
    {
      if(this.radius < maxRadius)
      this.radius+= 1;
    }
    else if(this.radius > this.minRadius) {
      this.radius -=1;
    }
    this.draw()
  }

}

var circleArray = [];
function init() {
  circleArray = [];
  for(var i =0; i<1000;i++){
  var radius = Math.random() * 3 + 1;
  var x =((Math.random() * (innerWidth - 2 * radius)) + radius);
  var y =((Math.random() * (innerHeight - 2 * radius)) + radius);
  var dx = ( Math.random() - 0.5) * 2;
  var dy = ( Math.random() - 0.5) * 2;
    circleArray.push(new Circle(x,y,dx,dy,radius));
  }
}
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);

for(var i = 0; i< circleArray.length;i++)
{
  circleArray[i].update();
}
}
init();
animate();

let canvas = document.getElementById('canvas');

let context = canvas.getContext('2d');

let x = 0;

let y = 200;

let firstRecty = 0;

let firstRectx = Math.trunc(Math.random()*900)

let cirlex = 0;

let cirle2x = Math.trunc(Math.random()*800);

let cirley = Math.trunc( Math.random()*300);

let rect1x = 500;

let rect1y = 0;

let p = document.createElement('p');

let pText = document.createTextNode('Game over.');

p.appendChild(pText);

let append = document.querySelector('.append');

let show = document.querySelector('.show');

let btns = document.querySelector('.btns');

let final = document.createElement('p');

let finalText = document.createTextNode('Game Completed. You rule!');

final.appendChild(finalText);

//start

let start = document.querySelector('#cover');

start.addEventListener('click', () => {

   let t = setInterval(myGame, 100);

});


//Coins

let score = 0;

let posx = Math.floor(Math.random()*(800));

let posy = Math.floor(Math.random()*(350));

let pos2x = Math.floor(Math.random()*(700));

let pos2y = Math.floor(Math.random()*(350));

let pos3x = Math.floor(Math.random()*(600));

let pos3y = Math.floor(Math.random()*(350));

let pos4x = Math.floor(Math.random()*(800));

let pos4y = Math.floor(Math.random()*(350));

let pos5x = Math.floor(Math.random()*(600));

let pos5y = Math.floor(Math.random()*(350));

//Games

function myGame(){

   context.clearRect(0, 0, 1000, 400);

   context.beginPath();

   //mover

   context.rect(x, y, 50, 50);

   context.fillStyle = 'red'

   context.fill();

   context.stroke();

   x++;

   if ( x > 1000 && score >= 10 ) {

      canvas.style.display =  'none'

      append.appendChild(final);

      show.style.display = 'flex';

      start.style.display = 'none';

      btns.style.display = 'none';

      p.style.display = 'none'

      x = 0;

      context.clearRect(0, 0, 1000, 400);

      clearInterval(t);
   }

   else if ( x > 1000 ){

      x = -50;
   }

   else if ( x < 0 ){

      x = 0;
   }

   else if ( y < 0 ){

      y = 0;
   }

   else if ( y > 380 ){
      
      y = 380;   }

   //obstacles

   //obstacle1

   context.beginPath();

   context.rect(firstRectx, firstRecty, 20, 100);

   context.fillStyle = 'green'

   context.fill();

   context.stroke();

   firstRecty += 3;

   //Collision for first obstacle

   if ( firstRectx <= (x+50) && x <= (firstRectx + 20) && firstRecty <= (y+50) && y <= (firstRecty + 100 ) ){

      append.appendChild(p);

      canvas.style.display = 'none';

      show.style.display = 'flex';

      btns.style.display = 'none'

      start.style.display = 'none';

      final.style.display = 'none';

      context.clearRect(0, 0, 1000, 400);

      clearInterval(t);
   }  

   else if ( firstRecty > 400 ){

      firstRectx = Math.trunc( Math.random()*900 )

      firstRecty = -50;
   }

   //obstacle 2

   context.beginPath();

   context.rect(rect1x, rect1y, 20, 100);

   context.fillStyle = 'green'

   context.fill();

   context.stroke();

   if ( x <= (rect1x+20) && rect1x <= ( x + 50) && rect1y <= ( y + 50) && y <= (rect1y + 100)){

      append.appendChild(p);

      canvas.style.display = 'none';

      show.style.display = 'flex';

      btns.style.display = 'none';

      start.style.display = 'none';

      final.style.display = 'none';

      context.clearRect(0, 0, 1000, 400);

      clearInterval(t);
   }

   //obstacles 3 (moving rectangle one)

   context.beginPath();

   context.rect(cirlex+cirle2x, cirley, 150, 100,)

   cirlex -= 5;

   context.fillStyle = 'green';

   context.fill();

   context.stroke();

   if ( x <= ( cirlex + cirle2x + 150) && (cirlex+ cirle2x) <= ( x + 40 ) && y <= (cirley+100) && cirley <= (y+50) ){

      append.appendChild(p);

      canvas.style.display = 'none';

      show.style.display = 'flex';

      btns.style.display = 'none';

      start.style.display = 'none';

      final.style.display = 'none';

      context.clearRect(0, 0, 1000, 400);

      clearInterval(t);
   }

   else if ( cirlex < -850 ){

      cirley = Math.floor ( Math.random()*300);

      cirlex = 0;

      cirle2x = Math.floor( Math.random()*1000);
   }

   //Rectangle obstacle

   context.beginPath();

   context.rect(460, 200, 150, 200)

   context.fillStyle = 'green';

   context.fill();

   context.stroke();

   if ( x <= (460+150) && 460 <= ( x + 50) && y <= (200 + 200) && 200 <= (y + 50)){

      append.appendChild(p);

      canvas.style.display = 'none';

      show.style.display = 'flex';

      btns.style.display = 'none';

      start.style.display = 'none';

      final.style.display = 'none';

      context.clearRect(0, 0, 1000, 400);

      clearInterval(t);
   }


   //Obstacle 5

   context.beginPath();

   context.rect(700, 0, 20, 150);

   context.fillStyle = 'green'

   context.fill();

   context.stroke();

   if ( x <= (700+20) && 700 <= ( x + 50) && y <= ( 150)){

      append.appendChild(p);

      canvas.style.display = 'none';

      show.style.display = 'flex';

      btns.style.display = 'none';

      start.style.display = 'none';

      final.style.display = 'none'

      context.clearRect(0, 0, 1000, 400);

      clearInterval(t);
   }

   //Obstacle 6

   context.beginPath();

   context.rect(800, 230, 20, 170);

   context.fillStyle = 'green';

   context.fill();

   context.stroke();

   if ( x <= ( 800 + 20) && 800 <= ( x + 50) && y <= ( 230 + 170) && 230 <= ( y + 50 )){

      append.appendChild(p);

      canvas.style.display = 'none';

      show.style.display = 'flex';

      btns.style.display = 'none';

      start.style.display = 'none';

      final.style.display = 'none';

      context.clearRect(0, 0, 1000, 400);

      clearInterval(t);
   }


   //Text

   context.beginPath();

   context.font = '25px Arial';

   context.fillStyle = 'black';

   context.fillText("Score: " + score, 20, 30);

   //Text 2
   
   context.beginPath();

   context.font = '25px Arial';

   context.fillStyle = 'black';

   context.fillText(`Score:` + score, 900, 30);

   //Text 3

   context.beginPath();

   context.font = '25px Arial';

   context.fillStyle = 'black';

   context.fillText('Exit', 950, 200);
   
   //coin1

   context.beginPath();

   context.rect( posx, posy, 20, 20);

   context.fillStyle = 'yellow';

   context.fill();

   context.stroke();

   //Collision detection for coin

   if ( posx <= x+50 && x <= posx+20 && posy <= y+50 && y <= posy+20){

      score++;
      
     posx = Math.floor(Math.random()*(800));

     posy = Math.floor(Math.random()*(350));

   }

   //Coin2

   
   context.beginPath();

   context.rect( pos2x, pos2y, 20, 20);

   context.fillStyle = 'yellow';

   context.fill();

   context.stroke();

   //Collision detection for coin

   if ( pos2x <= x+50 && x <= pos2x+20 && pos2y <= y+50 && y <= pos2y+20){

      score++;
      
     pos2x = Math.floor(Math.random()*(800));

     pos2y = Math.floor(Math.random()*(350));

   }

   //Coin3

   
   context.beginPath();

   context.rect( pos3x, pos3y, 20, 20);

   context.fillStyle = 'yellow';

   context.fill();

   context.stroke();

   //Collision detection for coin

   if ( pos3x <= x+50 && x <= pos3x+20 && pos3y <= y+50 && y <= pos3y+20){

      score++;
      
     pos3x = Math.floor(Math.random()*(800));

     pos3y = Math.floor(Math.random()*(350));

   }


   //Coin4

   
   context.beginPath();

   context.rect( pos4x, pos4y, 20, 20);

   context.fillStyle = 'yellow';

   context.fill();

   context.stroke();

   //Collision detection for coin

   if ( pos4x <= x+50 && x <= pos4x+20 && pos4y <= y+50 && y <= pos4y+20){

      score++;
      
     pos4x = Math.floor(Math.random()*(800));

     pos4y = Math.floor(Math.random()*(350));


   }


   //Coin5

   
   context.beginPath();

   context.rect( pos5x, pos5y, 20, 20);

   context.fillStyle = 'yellow';

   context.fill();

   context.stroke();

   //Collision detection for coin

   if ( pos5x <= x+50 && x <= pos5x+20 && pos5y <= y+50 && y <= pos5y+20){

      score++;
      
     pos5x = Math.floor(Math.random()*(800));

     pos5y = Math.floor(Math.random()*(350));

   }

}

myGame();

//Controller

function controller(){

   let up = document.getElementById('up');

   let left = document.getElementById('left');

   let right = document.getElementById('right');

   let down = document.getElementById('down');

   down.addEventListener('click', () => {
      y += 5
   });

   up.addEventListener('click', () => {
      y -= 5
   });

   right.addEventListener('click', () => {
      x += 5;
   });

   left.addEventListener('click', () => {
      x -= 5;
   })
}

controller();

let yes = document.querySelector('.yes');

let no = document.querySelector('.no');

yes.addEventListener('click', () => {

   document.location.reload(true);
});

no.addEventListener('click', () => {

   let newElem = document.createElement('p');

   let newElemText = document.createTextNode('Thank you for visiting');

   newElem.appendChild(newElemText);

   append.appendChild(newElem);

   p.style.display = 'none';

   show.style.display = 'none';

});


//Animate

AOS.init();
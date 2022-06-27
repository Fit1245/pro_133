img = "";
Status = "";
objects = [];
function setup() {
  canvas =  createCanvas(640,420);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML = "object : is detecting";
}
function modelLoaded() {
  console.log("model Loaded!");
  Status = true;
  objectDetector.detect(img , gotPoses);
}
function preload() {
    img = loadImage("tvac.webp");
}
function draw() {
    image(img , 0 , 0 , 640 , 420);
     fill('#FF0000');
     text("Tv" , 45 , 100);
     noFill();
     stroke('#FF0000');
     rect(30 , 90 , 450 , 350);

     fill('#FF0000');
     text("Ac" , 160 , 30);
     noFill();
     stroke('#FF0000');
     rect(150 , 20 , 350 , 50);

     if(Status != "") {
      for (let i = 0; i < objects.length; i++) {
       document.getElementById("status").innerHTML = "object detected";
       
       fill('#FF0000');
       percent = floor (objects[i].confidence * 100);
      text(objects[i].label + "" + percent + "%" , objects[i].x + 15 , objects[i].y + 15 );
      noFill();
      stroke('#FF0000');
      rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
      }
      }
}
function gotPoses (error , results) {
  if(error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}
function back() {
  window.location = "Index.html";
}
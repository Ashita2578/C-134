  //img = "";
  status = "";
  objects= [];
  // function preload()  {
   // img= loadImage('dog_cat.jpg');

function setup()    {
    canvas= createCanvas(380,380);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Object Detected:";
}
function modelLoaded()  {
    console.log("CocoSSD has been initialized");
   status= true;
   objectDetector.detect(video, gotResult);
}
function gotResult(error, results)    {
    if(error){
        console.log( error);
    }
    console.log(results);
    objects= results;
}
//function draw() 
    //image (img, 0, 0, 640, 420);
   // stroke('red');
    //fill('red');
   // text ("Dog", 45, 75);
    //noFill()
    //rect(30, 60, 450, 350);
     
    //fill('red');
    //text("Cat", 350, 120);
    //noFill();
    //rect(300,80,290, 320);//
         
        function draw() {
            image(video, 0,0, 380, 380);
            if(status != ""){
                r= random (255);
                g= random (255);
                b= random(255);
                objectDetector.detect(video, gotResult);
                for(i = 0; i< objects.length; i++){
                    document.getElementById("status").innerHTML="Status: Object Detected";
                    document.getElementById("number_of_the_objects").innerHTML= "Number of the objects"+ objects.length;
                    fill(r, g, b);
                    percent= floor(objects[i].confidence * 100);
                    text(objects[i].label+ " " + percent + "%", objects[i].x+15, objects[i].y+ 15);
                    noFill();
                    stroke(r, g, b);
                    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
                }
            }
        }
function start()    {
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML= "Data Matched";
}

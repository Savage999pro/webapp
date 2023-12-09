scoreLeftWrist=0;
scoreRightWrist=0;
song_1_status="";
song_2_status="";
song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload()
{
  song1 = loadSound('The Coconut Song.mp3');
  song2 = loadSound("HARRY POTTER.mp3");
}

function setup(){
  canvas = createCanvas(600, 500);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(600,500)
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}



function gotPoses(results){
  if(results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX ="+ leftWristX +"leftWristY = " + leftWristY);
  
  
    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX ="+ rightWristX +"rightWristY = " + rightWristY);
  


    scoreLeftWrist = results[0].pose.keypoints[9].score;
    scoreRightWrist = results[0].pose.keypoints[10].score;
console.log("scoreLeftWrist = " + scoreLeftWrist);



  }
}





function draw() {
    image(video, 0, 0, 600, 500);
    fill("#FF0000")
    stroke("#FF0000")
    song_1_status="The Coconut Song.mp3";
    song_2_status="HARRY POTTER.mp3";
}

function modelLoaded(){
  console.log("PoseNet Is Initialized");
}
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

canvas = createCanvas(550, 550);
canvas.position(950, 110)
 
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("PoseNet has been initialized");
}
function draw() {
    background('#82CAFF');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
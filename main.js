rightWristX = 0;
rightWristY = 0;

leftWristX = 0
leftWristY = 0;

scoreRightWrist = 0
scoreLeftWrist = 0
song = ""
function preload(){
    song = loadSound("music.mp3")
}

function setup(){
    canvas = createCanvas(350,350)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)

}


function gotPoses(result){
    if(result.length > 0){
        rightWristX = result[0].pose.rightWrist.x
        rightWristY = result[0].pose.rightWrist.y
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY)

        leftWristX = result[0].pose.leftWrist.x
        leftWristY = result[0].pose.leftWrist.y
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY)
        console.log(result)
    }
}

function draw(){
    image(video, 0,0, 350,350 )
    fill("#063970")
    stroke("#000000")
    circle(leftWristX, leftWristY, 20)
    InNumberLeftY = Number(leftWristY)
    removeDecimals = floor(InNumberLeftY)
    volume = removeDecimals/350
    document.getElementById("volume").innerHTML = "Volume = "+volume
    song.setVolume(volume)
}


function play(){
    song.play()
}

function modelLoaded(){
    console.log("modelLoaded")
}

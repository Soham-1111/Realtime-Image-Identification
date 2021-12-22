function setup(){
    canvas= createCanvas(400,370);
    canvas.position(530,370);
    video= createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OlPNOG13M/model.json', modelLoaded);

}

function draw(){
    image(video,0,0,400,370);
    classifier.classify(video, gotResult);
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotResult(error, results){
    if(error){
        console.error("error!");
    }
    else{
        console.log(results);
        document.getElementById("results").innerHTML= results[0].label;
        document.getElementById("accuracy").innerHTML= results[0].confidence.toFixed(2);
    }
}
Webcam.set({
height:230,width:300,image_format:"jpeg",jpeg_quality:100

});
camera= document.getElementById("camera");

Webcam.attach(camera);

function capturecheese(){
Webcam.snap(function(data_uri){
document.getElementById("snapshot").innerHTML='<img id="Image_Displayer" src="'+data_uri+'">';
});
}
console.log("ml5 version",ml5.version);
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2ORJ3l-eB/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model is loaded");
}

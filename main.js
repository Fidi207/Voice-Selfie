var speechRecog = window.webkitSpeechRecognition;
var recognition = new speechRecog();

function startRec(){
    document.getElementById("textBox").innerHTML="";
    recognition.start();
}

recognition.onresult = function run(e){
    console.log(e);
    var content = e.results[0][0].transcript;
    document.getElementById("textBox").innerHTML= content;
    if (content == "take my selfie"){
        speak();
    }
}

function speak(){
    var synthesis = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synthesis.speak(utterThis);
    Webcam.attach('#camera');
    setTimeout(function(){
        takePic();
        save_pic();
    }, 5000);

}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 100
});

function takePic(){
    Webcam.snap(function(dab){
        document.getElementById("resultPic").innerHTML= '<img id="cam_pic" src="' + dab + '" >';
    });
}

function save_pic(){
    link = document.getElementById("link");
    link.href = document.getElementById("cam_pic").src;
    link.click();
}
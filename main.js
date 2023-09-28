screen_width = 0;
screen_height= 0;
draw_apple = "";
speak_data = "";
to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content;
    if(Number.isInteger(to_number))
    {
        to_number = Number(content);
        document.getElementById("status").innerHTML = "Started drawing apple";
        draw_apple = "set";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_apple == "set")
    {
        document.getElementById("status").innerHTML = "Apple is drawn";
        draw_circle = "";
    }
    
}
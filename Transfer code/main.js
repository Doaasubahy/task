let input = document.querySelector(".inputBx input"),
    btn = document.querySelector(".inputBx .icon");
let icon = document.querySelector(".inputBx .icon i");

var isBrowserSuported = true;

let SpeechRecognition  = window.SpeechRecognition || window.webkitSpeechRecognition;
if(SpeechRecognition){
    const recognition = new SpeechRecognition();
    btn.addEventListener("click" , ()=>{
        if(icon.classList.contains('fa-microphone')){
            recognition.lang = "ar";
            recognition.start();

            
            
        }
        else{
            recognition.stop();

        }
    })

    recognition.addEventListener("start", ()=>{
        icon.classList.replace("fa-microphone" , "fa-microphone-slash")
        btn.style.animation = "breathe 1s linear infinite";
        btn.style.color = "red";


    })

    recognition.addEventListener("end", ()=>{
            icon.classList.replace("fa-microphone-slash" , "fa-microphone")
            btn.style.animation = "none";
            btn.style.color = "black";


    })

    recognition.addEventListener("result", (event)=>{
        let transcript = event.results[0][0].transcript;
        input.value = transcript;
    })

}
else{
    input.value = "your browser not supported, please change it";
    isBrowserSuported =false;
}

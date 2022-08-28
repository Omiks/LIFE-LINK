window.addEventListener("DOMContentLoaded", event => {
      const audio = document.querySelector("audio");
      audio.volume = 0.25;
      audio.loop = true;
      audio.play();
    });
    function setHalfVolume() {
      var myAudio = document.getElementById("audio1");  
      myAudio.volume = 0.25;
      myAudio.loop = true;
      myAudio.play();
  };
const swup = new Swup();

// Obtener referencia al elemento de la barra deslizante
const volumeControl = document.getElementById("volume-control");

// Escuchar los cambios en la barra deslizante y ajustar el volumen de cada audio en consecuencia
volumeControl.addEventListener("input", () => {
  document.getElementById("my-audio-1").volume = volumeControl.value / 100;
  document.getElementById("my-audio-2").volume = volumeControl.value / 100;
  document.getElementById("my-audio-3").volume = volumeControl.value / 100;
  document.getElementById("my-audio-4").volume = volumeControl.value / 100;
  document.getElementById("my-audio-5").volume = volumeControl.value / 100;
});

 ///////////////////////

 function togglePlay(audioNumber) {
  var audioElement = document.getElementById("my-audio-" + audioNumber);
  if (audioElement.paused) {
  audioElement.pause();
    audioElement.play();
  } else {
    audioElement.pause();
  }
}

 ///////////////////////

 const audio1 = document.getElementById('my-audio-1');
 const audio2 = document.getElementById('my-audio-2');
 const audio3 = document.getElementById('my-audio-3');
 const audio4 = document.getElementById('my-audio-4');
 const audio5 = document.getElementById('my-audio-5');
 
 document.getElementById('RF1').addEventListener('click', function() {

   audio2.pause();
   audio3.pause();
   audio4.pause();
   audio5.pause();
   audio1.play();
   document.getElementById('RF1').addEventListener('click', () => {
    audio1.pause();
  });
  reset
 });
 
 document.getElementById('RF2').addEventListener('click', function() {

  audio1.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio2.play();
  document.getElementById('RF2').addEventListener('click', () => {
    audio2.pause();
    audio2.play();
  });
 });

 document.getElementById('RF3').addEventListener('click', function() {

  audio2.pause();
  audio5.pause();
  audio4.pause();
  audio1.pause();
  audio3.play();
  document.getElementById('RF3').addEventListener('click', () => {
    audio3.pause();
  });
});

document.getElementById('RF4').addEventListener('click', function() {

  audio2.pause();
  audio3.pause();
  audio5.pause();
  audio1.pause();
  audio4.play();
  document.getElementById('RF4').addEventListener('click', () => {
    audio4.pause();
  });
});

document.getElementById('RF5').addEventListener('click', function() {

  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio1.pause();
  audio5.play();
  document.getElementById('RF5').addEventListener('click', () => {
    audio5.pause();
  });
});
 
 


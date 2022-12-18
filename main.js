// Obtener referencia al elemento de la barra deslizante
const volumeControl = document.getElementById("volume-control");

// Escuchar los cambios en la barra deslizante y ajustar el volumen de cada audio en consecuencia
volumeControl.addEventListener("input", () => {
  document.getElementById("audio1").volume = volumeControl.value / 100;
  document.getElementById("audio2").volume = volumeControl.value / 100;
  document.getElementById("audio3").volume = volumeControl.value / 100;
  document.getElementById("audio4").volume = volumeControl.value / 100;
  document.getElementById("audio5").volume = volumeControl.value / 100;
});


var currentAudio;

function playAudio(id) {
  if (currentAudio && currentAudio.id === id) {
    currentAudio.paused ? currentAudio.play() : currentAudio.pause();
  } else {
    stopAudio();
    currentAudio = document.getElementById(id);
    currentAudio.play();
  }
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
  }
}

// Declarar una variable global para almacenar la última imagen seleccionada
var lastSelectedImage = null;

function makeSelectedImageBig(selectedImage) {
  // Si la imagen ya está grande, hacerla pequeña
  if (selectedImage.style.height === "300px", selectedImage.style.width = "300px") {
    selectedImage.style.scale = "200px", selectedImage.style.width = "200px";
  } else {
    // Si hay una imagen seleccionada anteriormente, hacerla pequeña
    if (lastSelectedImage) {
      lastSelectedImage.style.height = "200px", selectedImage.style.width = "200px";
    }
    
    // Hacer grande la imagen seleccionada actualmente
    selectedImage.style.height = "300px", selectedImage.style.width = "300px";
    
    // Actualizar la última imagen seleccionada
    lastSelectedImage = selectedImage;
  }
}

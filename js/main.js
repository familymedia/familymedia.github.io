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


function cambiarColor(imagen) {
  var cuadrado = document.getElementById("cuadrado");
  if (imagen.id == "RF1") {
    if (cuadrado.style.backgroundColor == "rgb(0, 122, 204)") {
      setTimeout(function() {
        cuadrado.style.backgroundColor = "#f5f5f5";
      }, 1);
    } else {
      cuadrado.style.backgroundColor = "rgb(0, 122, 204)";
    }
  } else if (imagen.id == "RF2") {
    if (cuadrado.style.backgroundColor == "rgb(17, 158, 95)") {
      setTimeout(function() {
        cuadrado.style.backgroundColor = "#f5f5f5";
      }, 1);
    } else {
      cuadrado.style.backgroundColor = "rgb(17, 158, 95)";
    } 
  } else if (imagen.id == "RF3") {
    if (cuadrado.style.backgroundColor == "rgb(145, 0, 24)") {
      setTimeout(function() {
        cuadrado.style.backgroundColor = "#f5f5f5";
      }, 1);
    } else {
      cuadrado.style.backgroundColor = "rgb(145, 0, 24)";
    }
  } else if (imagen.id == "RF4") {
  if (cuadrado.style.backgroundColor == "rgb(209, 131, 21)") {
    setTimeout(function() {
      cuadrado.style.backgroundColor = "#f5f5f5";
    }, 1);
  } else {
    cuadrado.style.backgroundColor = "rgb(209, 131, 21)";
  }
  }
  else if (imagen.id == "RF5") {
  if (cuadrado.style.backgroundColor == "rgb(12, 12, 12)") {
    setTimeout(function() {
      cuadrado.style.backgroundColor = "#f5f5f5";
    }, 1);
  } else {
    cuadrado.style.backgroundColor = "rgb(12, 12, 12)";
  }
}
}


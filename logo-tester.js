(function () {
  // No rotation specified implies 90
  var faces = [
    { face: ":)"},
    { face: ":("},
    { face: ":D"},
    { face: ":o"},
    { face: "8)"},    
    { face: ":3"},
    { face: ":$"},
    { face: ":>"},
    { face: ":X"},
    { face: "=)"},
    { face: ":]"},
    { face: ":/"},
    { face: ":\\"},
    { face: ";)"},
    { face: ":O"},
    { face: "!?"},
    { face: "^-^", rotation: 0 },
    { face: ".-.", rotation: 180 },
    { face: "D:", rotation: 270 }
  ];
  
  var updateFace = function (newFace) {
    logoFace.innerHTML = newFace;
  };
  
  var updateRotation = function (newRotation) {
    var rotation = "rotate(" + newRotation + "deg)";
    logoFace.style.webkitTransform = rotation;
    logoFace.style.msTransform = rotation;
    logoFace.style.transform = rotation;
  };
  
  var updateWithRandomFace = function () {
    var index = Math.floor(Math.random()*faces.length);
    var face = faces[index];
    updateFace(face.face);
    // check against undefined because 0 is a valid rotation
    if (face.rotation === undefined) {
      face.rotation = 90;
    }
    updateRotation(face.rotation);
  }
  
  var randomFace = document.getElementById("randomFace");
  
  randomFace.onclick = function () {
    updateWithRandomFace();
  };
  
  var randomRepeatInput = document.getElementById("randomRepeatInput");
  
  var randomRepeat = document.getElementById("randomRepeat");
  
  randomRepeat.onclick = function () {    
    var second = 0;
    var repeatIntervalId = window.setInterval(function () {
      second++;
      console.log("second: " + second);
      updateWithRandomFace();
    }, 200);
    
    var stopTimeoutId = window.setTimeout(function () {
      var stopTime = randomRepeatInput.value * 1000;
      console.log("timeout should be stopped now at " + stopTime);
      window.clearInterval(repeatIntervalId);
    }, randomRepeatInput.value * 1000);
  };
  
  var logoFace = document.querySelectorAll(".logo-face")[0];
  
  var faceInput = document.getElementById("faceInput");
  
  faceInput.onkeyup = function () {
    updateFace(faceInput.value);
  };
  
  var rotationInput = document.getElementById("rotationInput");
  
  rotationInput.onkeyup = function () {
    updateRotation(rotationInput.value);
  };
})();

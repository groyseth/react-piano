import React from 'react';


export default function Sounds(){

// var litterArr = [];


  
var randomArr = [];
function testFunction(key) {
  console.log(key, "testFucntion");
  
  if (key.key || key) {
   randomArr.push(key.key || key)
    console.log(randomArr);
    switch (key.key || key) {
      case "a":
        default: aLiteralKey()
        console.log("keypresseda");
        aLiteralKey()
        
        // litterArr.push(aLiteralKey)
        recorded("a");
        break;
      case "s":
        console.log("keypresseds");
        sLiteralKey();
        // litterArr.push(sLiteralKey)
        recorded("s")
        break;
      case "d":
        console.log("keypressedd");
        dLiteralKey();
        recorded("d");
        break;
      case "f":
        console.log("keypressedf");
        fLiteralKey();
        recorded("f")
        break;
      case "g":
        console.log("keypressedg");
        gLiteralKey();
        recorded("g")
        break;
      case "h":
        console.log("keypressedh");
        hLiteralKey();
        recorded("h")
        break;
      case "j":
        console.log("keypressedj");
        jLiteralKey();
        recorded("j")
        break;
      case "k":
        console.log("keypressedk");
        kLiteralKey();
        recorded("k")
        break;
      case " ":
        console.log("keypressedSpace");
        recorded(" ")
        break;
      case ";":
        console.log("keypressed;");
        recorded(";")
        
        break;
      case "w":
        console.log("keypressedw");
        wLiteralKey();
        recorded("w")
        break;
      case "e":
        console.log("keypressedw");
        eLiteralKey();
        recorded("e")
        break;
      case "t":
        console.log("keypressedw");
        tLiteralKey();
        recorded("t")
        break;
      case "y":
        console.log("keypressedw");
        yLiteralKey();
        recorded("y")
        break;
      case "u":
        console.log("keypressedw");
        uLiteralKey();
        recorded("u")
        break;
        case "o":
        console.log("keypressedw");
        oLiteralKey();
        recorded("o")
        break;

    }
  }

}

function  usingSound() {

  console.log(randomArr);
  var i = 0
  var player = setInterval(() => {
   var test = randomArr[i]
    // console.log(test);
   i++
   if(i === randomArr.length){
     clearInterval(player)
   }
   switch (test) {
   case "a":
     default:aLiteralKey()
     console.log("keypresseda");
     aLiteralKey()
     // litterArr.push(aLiteralKey)
    //  recorded("a");
     console.log("apushed");
     break;
   case "s":
     console.log("keypresseds");
     sLiteralKey();
     // litterArr.push(sLiteralKey)
     recorded("s")
     break;
   case "d":
     console.log("keypressedd");
     dLiteralKey();
     recorded("d");
     break;
   case "f":
     console.log("keypressedf");
     fLiteralKey();
     recorded("f")
     break;
   case "g":
     console.log("keypressedg");
     gLiteralKey();
     recorded("g")
     break;
   case "h":
     console.log("keypressedh");
     hLiteralKey();
     recorded("h")
     break;
   case "j":
     console.log("keypressedj");
     jLiteralKey();
     recorded("j")
     break;
   case "k":
     console.log("keypressedk");
     kLiteralKey();
     recorded("k")
     break;
   case " ":
     console.log("keypressedSpace");
     recorded(" ")
     break;
   // case ";":
   //   console.log("keypressed;");
   //   recorded(";")
   //   break;
   case "w":
     console.log("keypressedw");
     wLiteralKey();
     recorded("w")
     break;
   case "e":
     console.log("keypressedw");
     eLiteralKey();
     recorded("e")
     break;
   case "t":
     console.log("keypressedw");
     tLiteralKey();
     recorded("t")
     break;
   case "y":
     console.log("keypressedw");
     yLiteralKey();
     recorded("y")
     break;
   case "u":
     console.log("keypressedw");
     uLiteralKey();
     recorded("u")
     break;
     case "o":
     console.log("keypressedw");
     oLiteralKey();
     recorded("o")
     break;
 
 }
  }, 180);
   
  console.log("playback");
    
  }


// console.log(randomArr);

var keys= document.getElementById("text_box").addEventListener("keypress", testFunction);

//homerow notes
const aLiteralKey = () => {
  let Key = new Audio('./assets/audio/ckey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    
    Key.play();
  });
}
const sLiteralKey = () => {
  let Key = new Audio('./assets/audio/dkey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}

const dLiteralKey = () => {
  let Key = new Audio('./assets/audio/ekey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}

const fLiteralKey = () => {
  let Key = new Audio('./assets/audio/fkey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const gLiteralKey = () => {
  let Key = new Audio('./assets/audio/gkey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const hLiteralKey = () => {
  let Key = new Audio('./assets/audio/akey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const jLiteralKey = () => {
  let Key = new Audio('./assets/audio/bkey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const kLiteralKey = () => {
  let Key = new Audio('./assets/audio/highckey.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}

//sharp and flat notes
const wLiteralKey = () => {
  let Key = new Audio('./assets/audio/c-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const eLiteralKey = () => {
  let Key = new Audio('./assets/audio/d-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const tLiteralKey = () => {
  let Key = new Audio('./assets/audio/f-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const yLiteralKey = () => {
  let Key = new Audio('./assets/audio/g-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const uLiteralKey = () => {
  let Key = new Audio('./assets/audio/a-sharp-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}
const oLiteralKey = () => {
  let Key = new Audio('./assets/audio/c-flat-key.mp3');
  Key.addEventListener("canplaythrough", event => {
    /* the audio is now playable; play it if permissions allow */
    Key.play();
  });
}

//in prosses of recording letters spacificly 


var arr = [];

function recorded(letter){

 arr.push(letter)


// console.log(arr);
}


//hard code the homerow and assign a sound
//each key with mp3
//more functions with the file names
//main keys are hard coded and using a switch method
//and having like alot more of the myAudioElement fucntions
// var playButton = document.getElementById("playBack").addEventListener("click", usingSound)

// var testButton = document.getElementById("testButton").addEventListener("click", oLiteralKey)

//  function  clickBox (){
// var testButton = document.getElementById("click_box").addEventListener("click", buttonClick);

// }
// function buttonClick(e){
// var clickKey = e.target.id;
// console.log(clickKey);
// testFunction(clickKey);
// }
return(
  <div>
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Play The Piano</h1>
      <p className="lead">Enjoy, still a work in progress but there is more to come!</p>
    </div>
  </div>
  
  
  
  <div class="text-box">
  <input type="text" id="text_box" />
  
  {/* </div>
  
  
  <div class="piano-box row" id="click_box" onclick="clickBox()">
      <button class="key" id="a" >C</button>
      <button class="key" id="s" >D</button>
      <button class="key" id="d">E</button>
      <button class="key" id="f">F</button>
      <button class="key" id="g">G</button>
      <button class="key" id="h">A</button>
      <button class="key" id="j">B</button>
      <button class="key" id="k">C</button>
    
  </div>
  <div class="buttonMove">
  <button type="click" id="playBack">replay</button> */}
  </div>
  </div>
  )
  
  
  }

//loop over every key 
import React, {useEffect, useState, useRef} from 'react';
import { Overlay, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import piano from "../assets/audio/index"
import AOS from "aos";
import 'aos/dist/aos.css';

export default function TestSounds(){



    var randomArr = [];
    function testFunction(key) {
      // console.log(key, "testFucntion");
      
      if (key.key || key) {
      //  randomArr.push(key.key || key)
        // console.log(randomArr);
        switch (key.key || key) {
          case "a":
            // default: aLiteralKey()
            console.log("keypresseda");
            aLiteralKey()
            // keyPlayer(key)
            randomArr.push(key.key || key)
            
            break;
          case "s":
            console.log("keypresseds");
            sLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "d":
            console.log("keypressedd");
            dLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "f":
            console.log("keypressedf");
            fLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "g":
            console.log("keypressedg");
            gLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "h":
            console.log("keypressedh");
            hLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "j":
            console.log("keypressedj");
            jLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "k":
            console.log("keypressedk");
            kLiteralKey();
            randomArr.push(key.key || key)
            break;
          case " ":
            console.log("keypressedSpace");
            randomArr.push(key.key || key)
            break;
          case ";":
            console.log("keypressed;");
            randomArr.push(key.key || key)
            
            break;
          case "w":
            console.log("keypressedw");
            wLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "e":
            console.log("keypressedw");
            eLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "t":
            console.log("keypressedw");
            tLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "y":
            console.log("keypressedw");
            yLiteralKey();
            randomArr.push(key.key || key)
            break;
          case "u":
            console.log("keypressedw");
            uLiteralKey();
            randomArr.push(key.key || key)
            break;
            case "o":
            console.log("keypressedw");
            oLiteralKey();
            randomArr.push(key.key || key)
            break;
            
          }
          console.log(randomArr);
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
         console.log("keypresseda");
        //  aLiteralKey()
         // litterArr.push(aLiteralKey)
       
         console.log("apushed");
         break;
       case "s":
         console.log("keypresseds");
         sLiteralKey();
        
        //  recorded("s")
         break;
       case "d":
         console.log("keypressedd");
         dLiteralKey();
        //  recorded("d");
         break;
       case "f":
         console.log("keypressedf");
         fLiteralKey();
        //  recorded("f")
         break;
       case "g":
         console.log("keypressedg");
         gLiteralKey();
        //  recorded("g")
         break;
       case "h":
         console.log("keypressedh");
         hLiteralKey();
        //  recorded("h")
         break;
       case "j":
         console.log("keypressedj");
         jLiteralKey();
        //  recorded("j")
         break;
       case "k":
         console.log("keypressedk");
         kLiteralKey();
        //  recorded("k")
         break;
       case " ":
         console.log("keypressedSpace");
        //  recorded(" ")
         break;
       case "w":
         console.log("keypressedw");
         wLiteralKey();
        //  recorded("w")
         break;
       case "e":
         console.log("keypressedw");
         eLiteralKey();
        //  recorded("e")
         break;
       case "t":
         console.log("keypressedw");
         tLiteralKey();
        //  recorded("t")
         break;
       case "y":
         console.log("keypressedw");
         yLiteralKey();
        //  recorded("y")
         break;
       case "u":
         console.log("keypressedw");
         uLiteralKey();
        //  recorded("u")
         break;
         case "o":
         console.log("keypressedw");
         oLiteralKey();
        //  recorded("o")
         break;
     
     }
      }, 180);
       
      console.log("playback");
        
      }
    
      const clearArray = () =>{
        console.log("cleared");
        randomArr=[];
      }
    
    
      useEffect(() => {
        document.addEventListener("keypress", testFunction);
        document.getElementById("playBack").addEventListener("click", usingSound);
        document.getElementById("click_box").addEventListener("click", buttonClick);
        document.getElementById("clear").addEventListener("click", clearArray);
return
        // return () => document.removeEventListener("keypress", handleKeyDown);
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    

      const aLiteralKey = () => {
        
        let Keyc = new Audio (piano.ckey);
        Keyc.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          
          Keyc.play();
        });
      }

      const sLiteralKey = () => {
        let Key = new Audio(piano.dkey);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      
      const dLiteralKey = () => {
        let Key = new Audio(piano.ekey);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      
      const fLiteralKey = () => {
        let Key = new Audio(piano.fkey);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      const gLiteralKey = () => {
        let Key = new Audio(piano.gkey);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      const hLiteralKey = () => {
        let Key = new Audio(piano.akey);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      const jLiteralKey = () => {
        let Key = new Audio(piano.bkey);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      const kLiteralKey = () => {
        let Key = new Audio(piano.highc);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      
      //sharp and flat notes
      const wLiteralKey = () => {
        let Key = new Audio(piano.csharp);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      const eLiteralKey = () => {
        let Key = new Audio(piano.dsharp);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      const tLiteralKey = () => {
        let Key = new Audio(piano.fsharp);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      const yLiteralKey = () => {
        let Key = new Audio(piano.gsharp);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      const uLiteralKey = () => {
        let Key = new Audio(piano.asharp);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }
      const oLiteralKey = () => {
        let Key = new Audio(piano.cflat);
        Key.addEventListener("canplaythrough", event => {
          /* the audio is now playable; play it if permissions allow */
          Key.play();
        });
      }

     

   
// var playButton = document.getElementById("playBack").addEventListener("click", usingSound)

function buttonClick(e){
  var clickKey = e.target.id;
  console.log(clickKey);
  testFunction(clickKey);
  }
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() =>{
    AOS.init({ duration:2000, disable: 'mobile' });
  }, []);


    return(
        <div className='backgroundSize' style={{transform: `translateY(${offsetY * 0.3}px)`}}>
            <div className="text-box">
  <input type="text" id="text_box" placeholder='Type to play!' />
  </div>
<section className='pianoHolder'>
  {/* <Row> */}
  <div className="piano-box " id="click_box" data-aos="fade-down-right">
   
    <button class="key white" id="a" ><p>C</p></button>
    <button class="key black" id="w" data-aos="zoom"><p>C#/D???</p></button>
    <button class="key white" id="s" ><p>D</p></button>
    <button class="key black" id="e" data-aos="zoom"><p>D#/E???</p></button>
    <button class="key white" id="d"><p>E</p></button>
    <button class="key white" id="f"><p>F</p></button>
    <button class="key black" id="t" data-aos="zoom"><p>F#/G???</p></button>
    <button class="key white" id="g"><p>G</p></button>
    <button class="key black" id="y" data-aos="zoom"><p>G#/A???</p></button>
    <button class="key white" id="h"><p>A</p></button>
    <button class="key black" id="u" data-aos="zoom"><p>A#/B???</p></button>
    <button class="key white" id="j"><p>B</p></button>
    <button class="key white" id="k"><p>C</p></button>
    <button class="key black" id="o" data-aos="zoom"><p>C#/D???</p></button>
  
</div>

</section>  

  <div class="buttonMove">
<Button type="click" id="playBack" data-aos="zoom-in-down" >Replay</Button>


{['top'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip id={`tooltip-${placement}`}>
          Clear Your Pressed Keys.
        </Tooltip>
      }
    >
    <Button type="click" id="clear" data-aos="zoom-in-down">Reset</Button>
    </OverlayTrigger>
  ))}
        </div>
        </div>
        
    )
}
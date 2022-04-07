import React, {useEffect} from 'react';
import piano from "../assets/audio/index"

export default function TestSounds(){



    var randomArr = [];
    function testFunction(key) {
      console.log(key, "testFucntion");
      
      if (key.key || key) {
      //  randomArr.push(key.key || key)
        // console.log(randomArr);
        switch (key.key || key) {
          case "a":
            // default: aLiteralKey()
            console.log("keypresseda");
            aLiteralKey()
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
   
    
      const handleKeyDown = (e) => {
        console.log(e.key);
      };
    
      useEffect(() => {
        document.addEventListener("keypress", handleKeyDown);
        document.addEventListener("keypress", testFunction);
        return () => document.removeEventListener("keypress", handleKeyDown);
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











    return(
        <div>
            <div className="text-box">
  <input type="text" id="text_box" />
  </div>
        </div>
    )
}
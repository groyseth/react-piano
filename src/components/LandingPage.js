import React, { useState, useEffect } from "react";
// import { useParallax, Parallax } from 'react-scroll-parallax';
import "./LandingPage.css"
// import { ParallaxBanner } from 'react-scroll-parallax';
// import { Parallax } from 'react-scroll-parallax';
// import LandingBack from "../assets/image/music.jpg"
export default function LandingPage() {

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderContent = () => (
    <>
      <div >
        <h1 >Welcome</h1>
        <h2 >
          Play the piano!!
        </h2>
      </div>
     
    </>
  );


  return (


<section className="Parallax__background" style={{transform: `translateY(${offsetY * 0.5}px)`}}>
      <div
        className="Parallax"
        style={{ transform: `translateY(-${offsetY * 0.9}px)` }}>

          <div className="Parallax__content">{renderContent()}</div>
        </div>
      
      {/* <div
        className="Parallax__background-note"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      /> */}
        
      

     
      
    </section>
);
  





  
}

{/* <div className='background'>
<section className='landingStyle'>
    <h1>Welcome</h1>
</section>

</div> */}
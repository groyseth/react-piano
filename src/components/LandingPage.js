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
        <h1 >Closure</h1>
        <h2 >
          Your one-stop source of Web Development tricks
        </h2>
      </div>
      <div>
        <p>
          <b>1. Like the video.</b> Because it helps me and my channel
        </p>
        <p>
          <b>2. Like the video.</b> To see more content like that!
        </p>
        <p>
          <b>3. Follow the Github link.</b> And play with this code yourself!
        </p>
      </div>
    </>
  );


  return (


<section className="Parallax">
      <div
        className="Parallax__background"
        style={{ transform: `translateY(-${offsetY * 0.9}px)` }}
        >
      
      <div
        className="Parallax__background-note"
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
      >
      <div className="Parallax__content">{renderContent()}</div>

      </div>
      </div>
    </section>
);
  





  
}

{/* <div className='background'>
<section className='landingStyle'>
    <h1>Welcome</h1>
</section>

</div> */}
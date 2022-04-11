import React from 'react';
import  {Spring, useSpring, animated } from 'react-spring'
import "./LandingPage.css"
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

export default function LandingPage() {

    // const bounceAnimation = keyframes`${bounce}`;

    // const BouncyDiv = styled.div`
    //   animation: 1s ${bounceAnimation};
    // `;

    const styles = useSpring({
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        }
      })


    return (


        <div className='background' >
            {/* <animated.div style={styles}> */}
            <section className='landingStyle'>
                <h1 >Welcome</h1>
            </section>
            {/* </animated.div> */}

        </div>







    )
}

{/* <div className='background'>
<section className='landingStyle'>
    <h1>Welcome</h1>
</section>

</div> */}
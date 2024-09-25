import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        {/*left SIDE */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-c"></div>
            <motion.h1 
            initial={{y: "2rem", opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }}>
              
              Discover <br />
              Most suitable <br /> Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className='secondaryText'> find a variety of property to suite you easily </span>
            <span className='secondaryText'>forget all difficulty in finding reesideccy</span>

          </div>
          <div className="flexCenter search-bar">
           <HiLocationMarker color="var(--blue)" size={25}/>
           <input type="text" />
           <button className="button">search</button>
          </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                  <span>
                    <CountUp start={5000} end={9999} duration={3}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Premium product</span>
              </div>

              <div className="flexColCenter stat">
                  <span>
                    <CountUp start={1000} end={2299} duration={3}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>happy customers</span>
              </div>
              <div className="flexColCenter stat">
                  <span>
                    <CountUp end={29}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>best reviews</span>
              </div>
            </div>
           
          </div>

        {/*RIGHT SIDE */}
        <div className="flexCenter hero-right"
        >
          <motion.div className="image-container"
           initial={{x: "7rem", opacity: 0}}
           animate={{x: 0, opacity: 1}}
           transition={{
             duration: 2,
             type: "spring"}}
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
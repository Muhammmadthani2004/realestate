import React from 'react'
import'./Contact.css'
import { MdCall } from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
   <section className="w-rapper">
    <div className="innerWidth paddings flexCenter c-container">
       {/*LEFT SIDE */}
        <div className="flexColStart c-left">
            <span className="orangeText">Our contacts</span>
            <span className="primaryText">easy pesy</span>
            <span className="secondaryText"> we belive in easy and simless contacts with our consumers</span>
            <div className="flexColStart contactModes">
                {/*first row */}

                <div className="flexStart row">
                    {/* first mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25} />

                            </div>
                            <div className="fleXColStart detail">
                                <span className='primaryText'>CALL</span><br />

                                <span className='secondaryText'>0909990000</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>

                    </div>

                    {/* second mode */}
                    
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25} />

                            </div>
                            <div className="fleXColStart detail">
                                <span className='primaryText'>Chat</span><br />

                                <span className='secondaryText'>0909990000</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>

                    </div>

                
                </div>

                {/**Second row */} 

                <div className="flexStart row">
                    {/* first mode*/}
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25} />

                            </div>
                            <div className="fleXColStart detail">
                                <span className='primaryText'>CALL</span><br />

                                <span className='secondaryText'>0909990000</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>

                    </div>

                    {/* second mode */}
                    
                    <div className="flexColCenter mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25} />

                            </div>
                            <div className="fleXColStart detail">
                                <span className='primaryText'>message</span><br />

                                <span className='secondaryText'>0909990000</span>
                            </div>
                        </div>
                        <div className="flexCenter button">message Now</div>

                    </div>

                
                </div>
                </div> 

                
        </div> 
        {/*RIGHT SIDE */}
        <div className="right">
           <div className="image-container">
           <img src="./contact.jpg" alt="" />
            </div> 
        </div>
    </div>
   </section>
  )
}

export default Contact
import React from 'react'
import image1 from "../media/3dicons1.png"
import image2 from "../media/3dicons2.png"
import image3 from "../media/3dicons3.png"
import SectionTitle from './SectionTitle'
function WhatWeDo() {
    return (
        <div className="container">
            <SectionTitle title="What We Do?"/>
            <div className="row">
                <div className="col-md-4">
                    <div className="card-we-do activecard" id='card-we-do1'>
                        <div className='weDoImgContainer '>
                            <img className='weDoImg' src={image1} alt="catalyze" />
                        </div>
                        <h4>IT BUSINESS MANAGEMENT</h4>
                        <p>Catalysers, as your future partners, are committed to facilitating the development of your digital project identity. Through our comprehensive 360 development agency, we collaborate closely with you to grasp your challenges and goals, ensuring a tailored and effective approach</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-we-do activecard" id='card-we-do2'>
                        <div className='weDoImgContainer'>
                            <img className='weDoImg' src={image2} alt="catalyze" />
                        </div>
                        <h4>BRANDING & UI/UX DESIGN</h4>
                        <p>Upgrade your brand, website, and mobile app with our fearless Branding, Web, and Mobile App Design service. We create memorable logos, user-friendly websites, and seamless mobile applications that make your business shine. Let's bring your ideas to life in the digital world.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card-we-do activecard" id='card-we-do3'>
                        <div className='weDoImgContainer'>
                            <img className='weDoImg' src={image3} alt="catalyze" />
                        </div>
                        <h4>MOBILE & WEB DEVELOPMENT</h4>
                        <p>Crafting sleek apps and websites is our specialty. Let us enhance your online presence with our Mobile & Web Development service. Let's build something great together</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
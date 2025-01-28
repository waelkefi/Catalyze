import React from 'react'
import video from "../media/blackhole.webm"
import HeroContent from './HeaderContent'
import "./styles.css"
// import NavBar from './NavBar'
function Header() {
    return (
        <div className='position-relative d-flex flex-column h-100 w-100'>
            <video autoPlay
                muted
                loop
                className="rotate-180 position-absolute top-[-340px] h-100 w-100 left-0 z-[1] object-cover"
                style={{mixBlendMode : "lighten"}}>
                <source src={video} type="video/webm" />
            </video>
           
            <HeroContent />
        </div>
    )
}

export default Header
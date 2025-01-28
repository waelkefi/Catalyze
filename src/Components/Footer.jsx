import React from 'react'
import In from "../media/IN.svg"
import Fb from "../media/Fb.svg"
import Insta from "../media/Insta.svg"
function Footer() {
  return (
    <div className='container mt-5 mb-3'>
      <div className="separation-bar mb-3">

      </div>
      <div className='footer-container'>
        <p className='footer-text'>Catalyze Teck © 2025</p>

        <div>
          <ul><li><a href="https://www.linkedin.com/company/teckcatalyze/?viewAsMember=true " target='_blank'><img src={In} alt="" /></a></li><li><a href="https://www.facebook.com/profile.php?id=61566515653357 " target='_blank'><img src={Fb} alt="" /></a></li><li><a href="https://www.instagram.com/catalyze.teck/" target='_blank'><img src={Insta} alt="" /></a></li></ul>
        </div>
      </div>

    </div>
  )
}

export default Footer
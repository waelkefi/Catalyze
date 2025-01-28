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
          <ul><li><a href=""></a><img src={In} alt="" /></li><li><a href=""></a><img src={Fb} alt="" /></li><li><a href=""></a><img src={Insta} alt="" /></li></ul>
        </div>
      </div>

    </div>
  )
}

export default Footer
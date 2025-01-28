import React from 'react'
import icon1 from "../media/Group1.svg"
import icon2 from "../media/Group2.svg"
import image from "../media/1.png"
function Connect() {
    return (
        <div className="container">
            <h2 className='section-title-justify'>    LET'S CONNECT & <br />EMBARK ON SUCCESS
            </h2>
            <p className='subtitle-justify'>
                Are you prepared for the next leap? Reach out to us today to delve into
                how our groundbreaking strategies can drive your business onward. Our Delicated team is Ready To Transform Your Aspiration Into Tangible Achievements.
            </p>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card-connect">
                        <div className="card-connect-icon">
                            <img src={icon1} alt="icon-catalyze" />
                        </div>

                        <h3>Drop Us A Line</h3>
                        <p>Reach out and let's begin the dialogue.</p>
                    </div>


                </div>
                <div className="col-md-6 mb-4">
                    <div className="card-connect" onClick={() => window.open('https://calendly.com/teckcatalyze/30min?back=1&month=2025-01&date=2025-01-29', '_blank')} style={{ cursor: "pointer" }}>
                        <div className='card-connect-icon'>
                            <img src={icon2} alt="icon-catalyze" />
                        </div>

                        <h3>Book A Call</h3>
                        <p>Schedule a consultation in our Calendly.</p>
                    </div>
                </div>
                <div className="col-md-7 mb-4 ">
                    <div className="form-container">
                        <h3>Connect With <br /> Ease</h3>
                        <p>Your curiosity, insights, and potential collaborations are just a click away. Lest's begin the conversation.</p>
                        <form>
                            <label htmlFor="Name">Name</label>
                            <input type="text" placeholder="Name" required />
                            <label htmlFor="Email">Email Adress</label>
                            <input type="email" placeholder="Email Address" required />
                            <label htmlFor="Message">Question</label>
                            <input placeholder="How can we help you?" required />
                            <div className='d-flex flex-row justify-content-end'>
                                <button type="submit" className='form-btn'>Request</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-5  mb-4 ">
                    <div className="image-container-connact">
                        <img src={image} alt="Image description" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Connect
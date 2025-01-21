import React from 'react'
import Header from '../Components/Header'
import Who from '../Components/Who'
import WhatWeDo from '../Components/WhatWeDo'
import MeetUp from '../Components/MeetUp'
import Collaborators from '../Components/Collaborators'
import StepsComponent from '../Components/HowWe'
import WhyWeCanHelp from '../Components/WhyWeCanHelp'
import Connect from '../Components/Connect'
import Footer from '../Components/Footer'

function Landing() {
    return (
        <>
            <Header />
            <Who />
            <WhatWeDo/>
            <MeetUp/>
            <Collaborators/>
            <WhyWeCanHelp/>
            <StepsComponent/>
            <Connect/>
            <Footer/>
        </>
    )
}

export default Landing
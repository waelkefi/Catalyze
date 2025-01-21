import React from "react";
import { motion } from "framer-motion";
import "./styles.css";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="d-flex flex-row align-items-center justify-content-center "
            style={{paddingLeft: "5rem",paddingRight: "5rem",width: "100%",marginTop: "10rem",zIndex: "20",height:"400px"}}
        >
            <div className="w-80 h-100 d-flex flex-column justify-content-center align-items-center">
                <h1 className="header-title">Unlock your Potential <br /> with Our <span>Catalytic Approach</span></h1>
                <p className="header-parag mt-3">Our catalysers in Graphic design, IT solutions development, e-marketing <br /> and IT project management work together to ensure your success.</p>
            </div>

        </motion.div>
    );
};

export default HeroContent;

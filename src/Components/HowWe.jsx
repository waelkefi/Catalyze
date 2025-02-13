import React, { useEffect, useRef, useState } from "react";
import "./ScrollIndicator.css";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stepsData = [
    {
        title: "EXPLORE",
        description:
            "During this first step, we will make initial contact with you to understand your business, your objectives and your needs, and to define how we can help you",
        covers: [
            "The problems you're dealing with",
            "Your specific requirements",
            "Your desired outcomes",
            "How we can support you",
        ],
    },
    {
        title: "IN-DEPTH EXPLORATION",
        description:
            "In this second step, let's dive deep into your needs by examining your business and brand, conducting detailed market research, identifying your potential audience and performing detailed benchmarking",
        covers: [
            "Taking a close look at your brand and business",
            "Researching your market, industry, and competitors",
            "Understanding who your target customers are",
            "Examining how your customers experience your brand",
        ],
    },
    {
        title: "CATALYTIC APPROACH",
        description:
            "Now, with our customized approach, uniquely tailored to address your requirements, we formulate a comprehensive strategy for your business, meticulously designed to assist you in reaching your desired goals",
        covers: [
            "Crafting a custom roadmap for your business journey",
            "Setting milestones, both short and long-term, to guide your project",
            "Sketching out the project's path to ensure seamless progress",
            "Tailoring strategies to your unique challenges and opportunities",
        ],
    },
    {
        title: "SET UP",
        description:
            "Your custom-tailored strategy is primed and ready to implement. Now it's time to connect with your target audience",
        covers: [
            "Designing and building projects that cater to your goals",
            "Developing a visual style that reflects your brand consistently",
            "Creating an easy and enjoyable online experience for users",
            "Attracting and engaging your customers with content tailored just for them",
        ],
    },
    {
        title: "LAUNCH",
        description:
            "Your personalized plan is all set to go. It's packed with clear steps and simple instructions to help your business move forward and reach its goals",
        covers: [
            "Creating a launch plan that's all about achieving your goals and resonating with your target audience",
            "Building connections and engaging your community to keep them involved",
            "Tracking your success from the start with key performance indicators (KPIs) that matter to you",
            "Refining based on input from both clients and users",
        ],
    },
    {
        title: "EVALUATE AND REFINE",
        description:
            "After your strategy is launched, we'll work together to analyze data and gain insights. This will help us understand what parts of your project were successful and what areas need improvement",
        covers: [
            "Analyzing the outcomes to pinpoint successes and areas for improvement",
            "Evaluating each aspect of your project to ensure alignment with your goals and captivation of your audience",
            "Extracting crucial insights from the data to inform future decisions",
            "Collaboratively devising a plan to capitalize on successes and enhance any aspects needing improvement, ensuring your project flourishes",
        ],
    },
];

const StepsComponent = () => {
    const [progressHeight, setProgressHeight] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const section = sectionRef.current;
            const { top, height } = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculer le pourcentage de progression dans la section uniquement
            let scrollProgress = 0;
            if (top < windowHeight && top + height > 0) {
                const visibleHeight = Math.min(windowHeight - top, height);
                scrollProgress = ((windowHeight - top) / height) * 100 ;
                scrollProgress = Math.max(0, Math.min(scrollProgress, 100)); // Limiter entre 0 et 100
            }

            setProgressHeight(scrollProgress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="container" style={{ position: "relative" }} id="hwP">
            <SectionTitle title="How We Proceed" />
            <div className="rb-container" ref={sectionRef}>
                <motion.div
                    className="progress-bar"
                    style={{ height: `${progressHeight}% ` }}
                    initial={{ height: `${0}%` }}
                    animate={{ height: `${progressHeight}% ` }}
                    transition={{ duration: 0.2 }}
                ></motion.div>
                <ul className="rb">
                    {stepsData.map((step, index) => (
                        <TimelineItem key={index} step={step} index={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

const TimelineItem = ({ step, index }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <motion.li
            ref={ref}
            className="rb-item list-item-rb"
            // initial={{ opacity: 0, x: -50 }}
            // animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            // transition={{ duration: 0.5, delay: index * 0.2 }}
        >
            <h2 className="timestamp">{step.title}</h2>
            <p className="item-title">{step.description}</p>
            <p className="item-covers">This Covers</p>
            <ul className="covers-items">
                {step.covers.map((cover, idx) => (
                    <li key={idx} style={{ marginTop: "0.5rem", color: "#fff" }}>
                        {cover}
                    </li>
                ))}
            </ul>
        </motion.li>
    );
};

export default StepsComponent;

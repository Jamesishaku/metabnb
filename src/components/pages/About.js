import React from "react";
import './about.css';
import aboutpic from '../../assets/about-image.svg'

const About = () => {
    return (
        <section className="about">
            <div className="text_container">
                <h2>Metabnb NFTs</h2>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <a href="void(0)">learn more</a>
            </div>
            <div className="img_container">
                <img src={ aboutpic } alt="about pic" />
            </div>
        </section>
    )
}

export default About;
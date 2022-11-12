import React from "react";
import './sponsors.css';
import mbtoken from '../../assets/mbtoken.svg';
import metamask from '../../assets/metamask.svg';
import opensea from '../../assets/opensea.svg';

const Sponsors = () => {
    return (
        <section className="sponsors">
            <img src={ mbtoken } alt="mbtoken logo" />
            <img src={ metamask } alt="metatask logo" />
            <img src={ opensea } alt="opensea logo" />
        </section>
    )
}

export default Sponsors;
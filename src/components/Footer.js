import React from "react";
import {Link} from 'react-router-dom'
import './footer.css'
import logo from '../assets/light-logo.svg'
import { ImFacebook, ImTwitter } from 'react-icons/im'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <div className="footer_container">
                <div className="social_media">
                    <Link to="/"><img src={logo} alt="" /></Link>
                    
                    <div className="social_handles">
                        <ImFacebook />
                        <BsInstagram />
                        <ImTwitter />
                    </div>
                </div>
                <div>
                    <h3>Community</h3>
                    <ul>
                        <li>NFT</li>
                        <li>Tokens</li>
                        <li>Landlords</li>
                        <li>Discord</li>
                    </ul>
                </div>
                <div>
                    <h3>Places</h3>
                    <ul>
                        <li>Castle</li>
                        <li>Farms</li>
                        <li>Beach</li>
                        <li>Learn more</li>
                    </ul>
                </div>
                <div>
                <h3>About us</h3>
                    <ul>
                        <li>Road map</li>
                        <li>Creators</li>
                        <li>Career</li>
                        <li>Contact us</li>
                    </ul>
                </div>
            </div>
           <p> &copy; 2022 Metabnb</p>
        </footer>
    )
}

export default Footer;
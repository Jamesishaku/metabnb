import React, {useState} from "react";
import {Link} from 'react-router-dom'
import './nav.css'
import logo from '../assets/logo.svg'
import {FaBars} from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import Modal from "./pages/Modal";


const Nav = () => {
    // Small screen menu state 
    const [Mobile, setMobile] = useState(false)
    // Modal control
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <nav className="navbar">
                {/* logo  */}
                <div className="logo">
                    <Link to="/"><img src={ logo } alt="logo" /></Link>
                </div>
                <div className={Mobile ? "nav_links_mobile" : "links_container"} onClick={() => { setMobile(false) }}>
                    {/* links  */}
                    <ul className="nav_links">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/place-to-stay"><li>Place to stay</li></Link>
                        <Link to="/nfts"><li>NFTs</li></Link>
                        <Link to="/community"><li>Community</li></Link> 
                    </ul>
                    <button className="btn_wallet" onClick={() => setOpenModal(true)}>Connect wallet</button>
                </div>
                {/* Mobile Nav Menu */}
                <button className="mobile_menu_icon" onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars /> }
                </button>
            </nav>
            {/* Model Window */}
            <Modal open={openModal}  onClose={() => setOpenModal(false)} />
        </>
    )
}

export default Nav;
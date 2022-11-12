import React, {useState} from "react";
import {Link} from 'react-router-dom'
import './nav.css'
import logo from '../assets/logo.svg'
import {FaBars} from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import Modal from "./pages/Modal";


const Nav = () => {

    const [Mobile, setMobile] = useState(false)
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
          <nav className="navbar">

                <div className="logo">
                    <img src={ logo } alt="logo" />
                </div>
                <div className={Mobile ? "nav_links_mobile" : "links_container" } onClick={()=> { setMobile(false)}}>
                    <ul className="nav_links">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/place-to-stay"><li>Place to stay</li></Link>
                        <Link to="/nfts"><li>NFTs</li></Link>
                        <Link to="/community"><li>Community</li></Link> 
                        {/* <li className="btn_wallet">Connect wallet</li> */}
                    </ul>
                    <button className="btn_wallet" onClick={() => setOpenModal(true)}>Connect wallet</button>
                </div>
                <button className="mobile_menu_icon" onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars /> }
                </button>
        </nav>
            <Modal open={openModal}  onClose={() => setOpenModal(false)} />
        </>
    )
}

export default Nav;
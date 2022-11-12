import React from 'react';
import hero from "../../assets/hero-image.svg";
import "./home.css";

function Header() {
  return (
    <header className="hero">
                <div className="text_container">
                    <h1>Rent a <span className="purple_text">Place</span> away from <span className="purple_text">Home</span> in the <span className="purple_text">Metaverse</span></h1>
                    <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <div className="search_container">
                        <input type="search" placeholder="search for location"/><button>Search</button>
                    </div>
                </div>
                <div className="img_container">
                    <img src={ hero } alt=""  />
                </div>
    </header>
  )
}

export default Header
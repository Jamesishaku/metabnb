import React from "react";
import './adventure.css';
import frame1 from '../../assets/frame1.svg';
import frame2 from '../../assets/frame2.svg';
import frame3 from '../../assets/frame3.svg';
import frame4 from '../../assets/frame4.svg';
import frame5 from '../../assets/frame5.svg';
import frame6 from '../../assets/frame6.svg';
import frame7 from '../../assets/frame7.svg';
import frame8 from '../../assets/frame8.svg';
import stars from '../../assets/stars.svg';

const Adventure = () => {
    return (
        <section className="adventure">
            <h2>Inspiration for your next adventure</h2>
            <div className="grid-container">
                    <div className="grid-item">
                        <figure>
                        <img src={ frame1 } alt="mbtoken logo" />
                        </figure>
                        <figcaption>
                            <p className="first-row-text"><span>Desert king</span><b>1MBT per night</b></p>
                            <p className="second-row-text"><span>2345km away</span><span className="text_right">available for 2weeks stay</span></p>
                            <div className="rating">
                                <img src={ stars } alt="5 stars"/>
                            </div>
                        </figcaption>
                    </div>
                    <div className="grid-item">
                        <figure>
                        <img src={ frame2 } alt="mbtoken logo" />
                        </figure>
                        <figcaption>
                            <p className="first-row-text"><span>Desert king</span><b>1MBT per night</b></p>
                            <p className="second-row-text"><span>2345km away</span><span className="text_right">available for 2weeks stay</span></p>
                            <div className="rating">
                                <img src={ stars } alt="5 stars"/>
                            </div>
                        </figcaption>
                    </div>
                    <div className="grid-item">
                        <figure>
                        <img src={ frame3 } alt="mbtoken logo" />
                        </figure>
                        <figcaption>
                            <p className="first-row-text"><span>Desert king</span><b>1MBT per night</b></p>
                            <p className="second-row-text"><span>2345km away</span><span className="text_right">available for 2weeks stay</span></p>
                            <div className="rating">
                                <img src={ stars } alt="5 stars"/>
                            </div>
                        </figcaption>
                    </div>
                    <div className="grid-item">
                        <figure>
                        <img src={ frame4 } alt="mbtoken logo" />
                        </figure>
                        <figcaption>
                            <p className="first-row-text"><span>Desert king</span><b>1MBT per night</b></p>
                            <p className="second-row-text"><span>2345km away</span><span className="text_right">available for 2weeks stay</span></p>
                            <div className="rating">
                                <img src={ stars } alt="5 stars"/>
                            </div>
                        </figcaption>
                    </div>
                    <div className="grid-item">
                        <figure>
                        <img src={ frame5 } alt="mbtoken logo" />
                        </figure>
                        <figcaption>
                            <p className="first-row-text"><span>Desert king</span><b>1MBT per night</b></p>
                            <p className="second-row-text"><span>2345km away</span><span className="text_right">available for 2weeks stay</span></p>
                            <div className="rating">
                                <img src={ stars } alt="5 stars"/>
                            </div>
                        </figcaption>
                    </div>
                    <div className="grid-item">
                        <figure>
                        <img src={ frame6 } alt="mbtoken logo" />
                        </figure>
                        <figcaption>
                            <p className="first-row-text"><span>Desert king</span><b>1MBT per night</b></p>
                            <p className="second-row-text"><span>2345km away</span><span className="text_right">available for 2weeks stay</span></p>
                            <div className="rating">
                                <img src={ stars } alt="5 stars"/>
                            </div>
                        </figcaption>
                    </div>
                    <div className="grid-item">
                        <figure>
                        <img src={ frame7 } alt="mbtoken logo" />
                        </figure>
                        <figcaption>
                            <p className="first-row-text"><span>Desert king</span><b>1MBT per night</b></p>
                            <p className="second-row-text"><span>2345km away</span><span className="text_right">available for 2weeks stay</span></p>
                            <div className="rating">
                                <img src={ stars } alt="5 stars"/>
                            </div>
                        </figcaption>
                    </div>
                    <div className="grid-item">
                        <figure>
                        <img src={ frame8 } alt="mbtoken logo" />
                        </figure>
                        <figcaption>
                            <p className="first-row-text"><span>Desert king</span><b>1MBT per night</b></p>
                            <p className="second-row-text"><span>2345km away</span><span className="text_right">available for 2weeks stay</span></p>
                            <div className="rating">
                                <img src={ stars } alt="5 stars"/>
                            </div>
                        </figcaption>
                    </div>
                </div>
        </section>
    )
}

export default Adventure;
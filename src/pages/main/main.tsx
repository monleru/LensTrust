import React from "react";

import './style.scss'
import ProgressBar_ from "../../components/ProgressBar";
import SearchInput from "./SearchInput";

const Main = () => {
    return(
        <div>
            <div className="main-page-head-div">
                <div className="main-page-text-head">
                    <h1>Crypto and NFT Insights Based on Twitter Followers</h1>
                    <p>TwitterScore automatically generate score for Twitter Accounts based on the popularity of this account in crypto space</p>
                    <SearchInput />
                </div>
                <div>
                    <ProgressBar_ />
                    <p className="lens-progress-text">@LensScore.lens</p> 
                    <div className="progress-info">
                        <h3>Subscribers: </h3>
                        <p>1644 (+198)</p>
                        <h3>Create: </h3>
                        <p>1644 (+198)</p> 
                        <h3>TVL: </h3>
                        <p>1644 (+198)</p> 
                        <h3>Lens Posts: </h3>
                        <p>1644 (+198)</p> 
                    </div>          
                </div>
            </div>
            <div style={{background: 'rgba(105, 105, 105, 0.66)'}}>
                <div className="marquee-infinite">
                    <div>
                        <span>
                            <div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div>
                            <div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div>
                        </span>
                        <span>
                            <div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div>
                        </span>
                    </div>
                </div>
                <div className="marquee-infinite marquee-infinite-right">
                    <div>
                        <span>
                            <div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div>
                            <div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div>
                        </span>
                        <span>
                            <div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div><div className="marquee-div">
                                <img src={require('../../assets/images/aave.png')} alt="" />
                                <p>Aave</p>
                                <p>1000</p>
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            
            <div className="future-div">
                <h1>Our Features</h1>
                <div>
                    <img src="" alt="image" />
                    <div>
                        <h3>Find GEMs on early stage</h3>
                        <p>When Venture Capitals, Crypto projects, Crypto influencers and other significant accounts like crazy follows to particular project, more likely you find a GEMrocket_launch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
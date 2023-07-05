import React, { useState } from "react";
import './style.scss'
import LoginButton from "./loginButton";
import { ethers } from "ethers";


const Header = () => {
    const [profile, setProfile] = useState(null)

 
    const seedPhrase = "physical pair any power stove piano matrix steak supreme siren gentle coffee";
    const ethersWallet = ethers.Wallet.fromMnemonic(seedPhrase)
    console.log(ethersWallet.privateKey)
    return( 
        <div className="header">
            <ul>
                <li>
                    <img src={require('../assets/images/logo-green.png')} alt="" />
                    <p>LensTrust</p>
                </li>
                <li>
                    <a href="">Top 100</a>
                </li>
                <li>
                    <a href="">Tranding Projects</a>
                </li>
            </ul>

            <div>
                <LoginButton />
            </div>
        </div>
    )
}

export default Header;
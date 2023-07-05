import React from "react";
import Logo from '../assets/meralogo.svg'
import Hamburger from '../assets/hamburger.png'
import Github from '../assets/github.svg'
import Twitter from '../assets/twitter.svg'
import Twitch from '../assets/twitch.svg'
import User from '../assets/user.svg'
import SocialLink from "../components/SocialLink";
import SideMenuUser from "../components/SideMenuUser";

export default function Sidemenu() {
    return (
        <div className="sidemenu">
            <div className="nav">
                <div className="top">
                    <img src={Logo} alt="logo" className="logo" />
                    <img src={Hamburger} alt="hamburger" className="hamburger"/>
                </div>
                <div className="bottom">
                    <hr></hr>
                    <p>Create your first chat!</p>
                </div>
            </div>
            <div className="footer">
                <div className="socials">
                    <p>Socials</p>
                    <SocialLink logo={Github} name='Github' link='github.com'/>
                    <SocialLink logo={Twitter} name='Twitter' link='twitter.com'/>
                    <SocialLink logo={Twitch} name='Twitch' link='twitch.com'/>
                </div>
                <div className="user">
                    <SideMenuUser username='Param' profile={User} />
                </div>
            </div>
        </div>
    )
}

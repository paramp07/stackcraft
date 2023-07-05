import React from 'react'


export default function SocialLink (props) {

    return (
            <a href={props.link}>
                <div className="social-link">
                    <div className="social-logo">
                        <img src={props.logo} alt="logo " />
                    </div>
                    <p>{props.name}</p>
                </div>
            </a>
    )
}
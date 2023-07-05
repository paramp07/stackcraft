import React from 'react'
import Settings from '../assets/settings.svg'

export default function SideMenuUser(props) {
    return (
        <>
            <hr />
            <div className="user-info">
                <div className="profile">
                    <div className="cover-circle">
                        <img src={props.profile} alt="user" />
                    </div>
                    <h4>{props.username}</h4>
                </div>
                <img src={Settings} alt="" />
            </div>
        </>
    )
}
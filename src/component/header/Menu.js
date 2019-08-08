import React, { Component } from 'react'
import DarklightMode from './darkLight/DarkLightMode';
export default class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-branch" href="#sector">
                            <h3 className="animatelogo">Gaster</h3>
                        </a>
                        <button className="navbar-toggler animatetoggle" type="button" data-toggle="collapse" 
                            data-target="#navbarResponsive">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto animatemenu">
                                <li className="nav-item">
                                    <a className="nav-link" href="#sector">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sector">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sector">Education</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sector">Skill</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#sector">Contact</a>
                                </li>
                            </ul>
                        </div>
                         <DarklightMode/>
                    </div>
                </nav>
            </div>
        )
    }
}

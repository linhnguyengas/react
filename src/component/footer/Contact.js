import React, { Component } from 'react'
import CircleBack from './CircleBack';
export default class Contact extends Component {
    render() {
        return (
            <div>
                <div id="contact">
                    <div className="container-fluid padding">
                        <div className="row">
                            <div className="col-12">
                                <h2>stay connected</h2>
                                <p>Contact me on social network</p>
                            </div>
                            <div className="social-network">
                                <ul>
                                    <li><a href="https://www.facebook.com/teo.nito.92" title="Linh Nguyen"><i className="fab fa-facebook"></i><span>Linh Nguyen</span></a></li>
                                    <li><a href="#sector" title="Email" className="email"><i className="fas fa-at"></i><span>linhgaster@gmail.com</span></a></li>
                                    <li><a href="#sector" title="Number Phone"><i className="fas fa-mobile" aria-hidden="true"></i><span>0353940862</span></a></li>
                                </ul>
                            </div>
                            <CircleBack/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

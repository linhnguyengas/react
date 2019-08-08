import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div id="about">
                    <div className="container-fluid padding">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="animate">About Me</h2>
                            </div>
                            <div className="information-detail">
                                <table className="detail">
                                    <tbody>
                                        <tr>
                                            <td className="about-infor">Full Name</td>
                                            <td className="point">:</td>
                                            <td className="text">Linh Nguyen Le Khanh.</td>
                                        </tr>
                                        <tr>
                                            <td className="about-infor">Gender</td>
                                            <td className="point">:</td>
                                            <td className="text">Male.</td>
                                        </tr>
                                        <tr>
                                            <td className="about-infor">Date of birth</td>
                                            <td className="point">:</td>
                                            <td className="text">11 - 4 - 1996.</td>
                                        </tr>
                                        <tr>
                                            <td className="about-infor">Address</td>
                                            <td className="point">:</td>
                                            <td className="text">Nha Trang - Khanh Hoa.</td>
                                        </tr>
                                        <tr>
                                            <td className="about-infor">Number</td>
                                            <td className="point">:</td>
                                            <td className="text">0353940862.</td> 
                                        </tr>
                                        <tr>
                                            <td className="about-infor">Favourite</td>
                                            <td className="point">:</td>
                                            <td className="text">Research technology, reading books and travelling.</td>
                                        </tr>    
                                        <tr>
                                            <td className="about-infor">Target towards</td>
                                            <td className="point">:</td>
                                            <td className="text">Work in a professional environment to exchange, learn, <br/> develop my skills.</td>
                                        </tr>
                                        <tr>
                                            <td className="about-infor">Career objective</td>
                                            <td className="point">:</td>
                                            <td className="text">Work in a young and dynamic environment. <br/> Where I can develop skills to contribute to the company.<br/> My goal I would have to like to achieve a higher position in the next 3 years.</td>
                                        </tr>
                                    </tbody>
                                </table>  
                            </div>
                        </div>
                    </div>  
                </div> 
            </div>
        )
    }
}

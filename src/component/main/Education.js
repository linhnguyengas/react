import React, { Component } from 'react'

export default class Education extends Component {
    render() {
        return (
            <div>
                <div id="education">
                    <div className="container-fluid padding">
                        <div className="row">
                            <div className="col-12">
                                <h2>Education</h2>
                            </div>
                            <div className="information-education">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="school"><p>Nha Trang Vocaltional Training College <br/> (2017 - 2019)</p></td>
                                            <td className="space"></td>
                                            <td className="school"><p>ICT60115: Advanced Diploma of Information Technology. <br/> ICT50715: Diploma of Software Development.</p></td>
                                        </tr>
                                        <tr>
                                            <td className="school"><p>Chisholmn Institute <br/> (2017 - 2019)</p></td>
                                            <td className="space"></td>
                                            <td className="school"><p>ICT40515: Certificate IV in Programming. <br/>ICT30115: Certificate III in Information, Digital Media and Technology.</p></td>
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

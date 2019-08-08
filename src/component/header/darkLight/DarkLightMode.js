import React, { Component } from 'react'

export default class DarkLightMode extends Component {
    darkLightMode = () => {
        var body = document.getElementById('body')
        var current = body.className;
        body.className = current === 'dark-mode' ? 'light-mode' : 'dark-mode';
  
        var element = document.getElementsByClassName('inner');
        var click = element[0];
        click.classList.toggle('active');
      }
    render() {
        return (
            <div className="col-md-1">
                <div className="checkbox animated fadeInDown">
                    <div className="inner" onClick={this.darkLightMode}>
                        <div className="toggle"></div>
                    </div>
                </div>
            </div>        
        )
    }
}

import React, { Component } from 'react'

export default class CircleBack extends Component {
    componentDidMount(){
            window.onscroll = function(){load()};
            function load(){
            var load = document.getElementById('backHead');
            if(window.scrollY > 300){
                load.classList.add('actived');
            }else{
                load.classList.remove('actived');
            }
        }
    }
    backHead = () =>{
        window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    }
    render() {
        return (
            <div id="backHead" >
                <i className="fas fa-chevron-circle-up" onClick={this.backHead} ></i>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Chart from 'chart.js';

export default class Skill extends Component {
    componentDidMount(){
        var ctx = document.getElementById('myChart').getContext('2d');
        Chart = new Chart(ctx, {
            type: 'bar',
            data: {
            labels: ['Html', 'Css', 'Bootstrap', 'Javascript', 'Angularjs', 'Reactjs'],
            datasets: [{
            label: 'Level skill',
            data: [75, 60, 70, 50, 30, 40],
            backgroundColor: [
                '#E54C21',
                '#264DE4',
                '#60408C',
                '#D6BA32',
                '#DD0031', 
                '#639BFF',
                'opacity: 0.3'
            ],
            borderColor: [
                '#E54C21',
                '#264DE4',
                '#60408C',
                '#D6BA32',
                '#DD0031',
                '#639BFF',
            ],
            borderWidth: 1
        }]
        
            },
            options: { 
                legend: {
                    labels: {
                        fontColor: "#dfe6e9"
                        
                    },
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "#dfe6e9",
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: "#dfe6e9",
                            fontSize: 15,
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
    render() {
        return (
            <div>
                <div id="skill">
                    <div className="container-fluid padding">
                        <div className="row">
                            <div className="col-12">
                                <h2>Skill & Experience</h2>
                            </div>
                            <div className="col-12">
                                <div className="chart-area">
                                    <canvas id="myChart"></canvas>
                                    {/*<!--<div id="chart_div" style="width: 100%; height: 600px;"></div>-->*/}
                                    <p className="text">Technology</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 text">
                                <h3>Personal</h3>
                                <p>- Ability to work independently as well as teamwork, under pressure.</p>
                                <p>- Read document, research for new technologies.</p>
                            </div> 
                            <div className="col-xs-12 col-sm-6 col-md-4 text">
                                <h3>Nha Trang Vocaltional Training College</h3>
                                <p>- Participated and interface designed a library website for my school</p>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 text">
                                <h3>My Learning Projects</h3>
                                <p>- I practiced design user interface for my project, use photoshop to HTMLcut as well as bootstrap, javascript and I had a designed E-commerce website with wordpress</p>
                            </div>      
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

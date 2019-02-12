import React,{Component} from 'react';
import '../css/Portfolio.css';
import HeadingTab from './HeadingTab.js';
export default class Portfolio extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="bgBlue">
                    <p className="title">PR<u>OJEC</u>TS</p>
                    <HeadingTab/>
                   
                </div>
            </React.Fragment>
        )};
};
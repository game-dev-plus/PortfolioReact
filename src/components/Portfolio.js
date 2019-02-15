import React,{Component} from 'react';
import '../css/Portfolio.css';
import HeadingTab from './HeadingTab.js';
import Hamburger from './Hamburger';

export default class Portfolio extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="bgBlue">
                    <Hamburger className="hambuger" selected={2}/>
                    <p className="title">PR<u>OJEC</u>TS</p>
                    <HeadingTab/>
                </div>
            </React.Fragment>
        )};
};
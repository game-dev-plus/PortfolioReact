import React,{Component} from 'react';
import '../css/Home.css';
import github from '../images/github.svg';
import linkedin from '../images/linkedin.svg';
import mail from '../images/mail.svg';
import youtube from '../images/youtube.svg';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from './Hamburger';

export default class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="bgBlue">
                <Hamburger className="hambuger"/>
                <p className="header">SUBASH ADHIKARI</p>
                <div className="socialList">
                    <a href="https://www.github.com/gamedevplus" target="_blank"><img src={github} className="image"/></a>
                    <a href="https://www.linkedin.com/in/subashadhi/" target="_blank"><img src={linkedin} className="image"/></a>
                    <a href="mailto:adhiksubash@gmail.com?"><img src={mail} className="image"/></a>
                    <a href="https://www.youtube.com/gamedevplus" target="_blank"><img src={youtube} className="image yt"/></a>
                </div>
                <p className="description">
                    CROSS-PLATFORM APPLICATION AND <br/>FULLSTACK WEB DEVELOPER
                </p>
                <button className="portfolio">PORTFOLIO &nbsp;&nbsp;
                    <FontAwesomeIcon id="rightArrow" icon={faArrowRight} />
                </button>
                </div>
            </React.Fragment>
        )
    };
}
import React,{Component} from 'react';
import '../css/Technologies.css';
import data from '../images/data.svg'
import phone from '../images/phone.svg'
import webprogramming from '../images/web-programming.svg'
import Hamburger from './Hamburger';

export default class Technologies extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="bgBlue halfscreen">
                  <Hamburger className="hambuger" selected={1}/>
                    <p className="header">HELLO,</p>
                    <p className="descriptionTechnologies">I am a. full stack developer who started as a windows application <br/> developer almost 6 years ago and progressed into android, ios, backend <br/>and web development. I also love sharing my knowledge via my<br/> youtube channel.</p>
                    <div className="bgWhite50">
                      <table className="stretch">
                          <tr>
                              <th>
                                  <div>
                                    <img src={phone} className="techimg" alt=""/>
                                    <br/>
                                    <p className="techimgdesc">MOBILE</p>
                                    <div className="separator"/>
                                  </div>
                                </th>
                                <th>
                                  <div>
                                    <img src={data} className="techimg" alt=""/>
                                    <br/>
                                    <p className="techimgdesc">BACKEND</p>
                                    <div className="separator"/>
                                  </div>
                                </th>
                                <th>
                                  <div>
                                    <img src={webprogramming} alt="" className="techimg"/>
                                    <br/>
                                    <p className="techimgdesc">FRONTEND</p>
                                    <div className="separator"/>
                                  </div>
                                </th>
                          </tr>
                          <tr className="top">
                            <td>
                                <ul className="listnobullet">
                                    <li>Android</li>
                                    <li>iOS</li>
                                    <li>Xamarin</li>
                                    <li>React Native</li>
                                </ul>
                            </td>
                            <td>
                                <ul className="listnobullet">
                                    <li>Node.js</li>
                                    <li>Docker</li>
                                    <li>MSSQL</li>
                                    <li>MySQL</li>
                                </ul>
                            </td>
                            <td>
                                <ul className="listnobullet">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                    <li>React Js</li>
                                </ul>
                            </td>
                          </tr>
                        </table>  
                    </div>
                    
                </div>    
            </React.Fragment>          
        )
    }
}
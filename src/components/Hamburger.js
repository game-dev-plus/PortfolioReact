import React,{Component} from 'react';
import '../css/Hamburger.css';

export default class Hamburger extends Component {
    constructor()
    {
        super();
        this.state={
            isOpen: false,
            class:""
        }
    }
clicked=(ev)=>{
    this.setState({
        isOpen:!this.state.isOpen,
        class:((!this.state.isOpen)?"active":""),
    });
}
render(){
    return(
        <div>
            <a id="nav-toggle" className={this.state.class} onClick={this.clicked}><span></span></a>
            <div className="menu">
            {this.state.isOpen && 
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
            }
            </div>
        </div>
    );
}
}
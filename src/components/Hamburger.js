import React, { Component } from "react";
import "../css/Hamburger.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";

const options = ["Profile", "Technologies", "Portfolio", "Contact"];

export default class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selectedIndex: this.props.selected
    };
  }
  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };
  clicked = ev => {
    this.setState({
      anchorEl: ev.currentTarget
    });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <div>
        <div id="nav-toggle" onClick={this.clicked}>
          <span />
        </div>
        <Menu
          className="margin-top-40"
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          selected={this.state.selectedIndex}
        >
          {options.map((option, index) => (
            <NavLink
              to={"/" + option}
              className="nav"
              key={option}
              exact
              activeClassName="current"
            >
              <MenuItem
                key={option}
                selected={index === this.state.selectedIndex}
                onClick={event => this.handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            </NavLink>
          ))}
        </Menu>
      </div>
    );
  }
}

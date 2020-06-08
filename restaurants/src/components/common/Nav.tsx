import * as React from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

class Nav extends React.Component {
  state = {
    toggle: false,
  };

  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="navBar">
        <button onClick={this.Toggle}>
          <FaAlignRight />
        </button>
        <ul className={this.state.toggle ? "nav-links show-nav" : "nav-links"}>
          <li>
            <NavLink
              exact={true}
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/restaurants"
            >
              Restaurants
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/#"
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/#"
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
        <img
          style={{ height: "60px", margin: "auto", marginLeft: "5%" }}
          src="https://legalmongolia.com/images/logo1.gif"
        ></img>
        <div style={{ marginRight: "8%" }} class="uk-navbar-right">
          <ul class="uk-navbar-nav">
            <li class="uk-active">
              <Link to="/">Нүүр хуудас</Link>
            </li>
            {/* <li>
              <a href="#">Parent</a>
              <div class="uk-navbar-dropdown">
                <ul class="uk-nav uk-navbar-dropdown-nav">
                  <li class="uk-active">
                    <a href="#">Active</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                  <li>
                    <a href="#">Item</a>
                  </li>
                </ul>
              </div>
            </li> */}
            <li>
              <a href="#">Хамтын ажиллгаа</a>
            </li>
            <li>
              <a href="#">Түүх</a>
            </li>
          </ul>
          <div
            style={{ marginLeft: "50px" }}
            className="uk-margin uk-grid-small uk-child-width-auto uk-grid"
          >
            <label>
              <Link>
                <input
                  className="uk-radio"
                  type="radio"
                  name="radio2"
                  defaultChecked
                />{" "}
                MN
              </Link>
            </label>
            <label>
              <Link>
                <input className="uk-radio" type="radio" name="radio2" /> ENG
              </Link>
            </label>
          </div>
        </div>
      </nav>
    );
  }
}

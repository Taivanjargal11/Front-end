import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import style from "./style.module.css";
class Search3 extends Component {
  render() {
    return (
      <div className={style.search_box}>
        <input
          type="text"
          className={style.search_input}
          placeholder="Хайх утга..."
        />
        <button className={style.search_button}>
          <i className="fas fa-search" />
        </button>
      </div>
    );
  }
}
export default withRouter(Search3);

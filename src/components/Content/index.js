import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Header from "../Header";
import Select from "react-select";
import Classes from "./style.module.css";
import { Route, withRouter } from "react-router-dom";
import Search from "../Search";
import { connect } from "react-redux";
import style from "./style.module.css";
class Content extends Component {
  state = {
    type: "Бүх төрөл",
    type1: "",
    type2: "",
    type3: "",
    list: [
      { value: "Бүх төрөл", label: "Бүх төрөл" },
      {
        value: "Хууль",
        label: "Хууль",
      },
      {
        value: "УИХ",
        label: "УИХ",
      },
      {
        value: "ҮАБЗ",
        label: "ҮАБЗ",
      },
      {
        value: "УДШ",
        label: "УДШ",
      },
      {
        value: "МУҮХ-н Цэц",
        label: "МУҮХ-н Цэц",
      },
      {
        value: "Олон улсын Гэрээ",
        label: "Олон улсын Гэрээ",
      },
      {
        value: "Эрх зүй",
        label: "Эрх зүй",
      },
      {
        value: "Логик",
        label: "Логик",
      },
      {
        value: "Бусад",
        label: "Бусад",
      },
    ],
  };
  handler = (e) => {
    console.log(e);
    this.setState({ type: e.value });
  };
  handler1 = (e) => {
    console.log(e);
    this.setState({ type2: "" });
    this.setState({ type1: e.target.innerText });
    this.setState({ type3: "Бүрэн лавлах" });
    this.props.history.push({
      pathname: "/search",
    });
  };
  handler2 = (e) => {
    this.setState({ type1: "" });
    this.setState({ type2: e.target.innerText });
    this.setState({ type3: "Түүвэр лавлах" });
    this.props.history.replace({
      pathname: "/search",
    });
  };
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <div>
              <Header />
            </div>
          </Grid>
          <Grid item xs={2}>
            <div>
              <>
                <div class="uk-child-width-1-1@s uk-margin-left" uk-grid>
                  <div>
                    <div uk-grid>
                      <div class="uk-width-auto@m uk-flex-last@m uk-text-left">
                        <p>Бүрэн лавлах</p>
                        <ul
                          class="uk-tab-right"
                          uk-tab="connect: #component-tab-right; animation: uk-animation-fade"
                        >
                          <li>
                            <a onClick={this.handler1} value="Оруулах">
                              Оруулах
                            </a>
                          </li>
                          <li>
                            <a onClick={this.handler1}>Энгийн сонголт</a>
                          </li>
                          <li>
                            <a onClick={this.handler1}>Нэмэх сонголт</a>
                          </li>
                          <li>
                            <a onClick={this.handler1}>Цогц сонголт</a>
                          </li>
                        </ul>
                        <p>Түүвэр лавлах</p>
                        <ul
                          class="uk-tab-right"
                          uk-tab="connect: #component-tab-right; animation: uk-animation-fade"
                        >
                          <li>
                            <a onClick={this.handler2}>Оруулах</a>
                          </li>
                          <li>
                            <a onClick={this.handler2}>Сонголт</a>
                          </li>
                          <li>
                            <a onClick={this.handler2}>Нэмэх сонголт</a>
                          </li>
                          <li>
                            <a onClick={this.handler2}>Зүйлийн # хайх</a>
                          </li>
                          <li>
                            <a onClick={this.handler2}>Эх текст авах</a>
                          </li>
                          <li>
                            <a onClick={this.handler2}>Агуулгаар хайх</a>
                          </li>
                          <li>
                            <a onClick={this.handler2}>Гарчигаар хайх</a>
                          </li>
                          <li>
                            <a onClick={this.handler2}>Нэвт хайлт</a>
                          </li>
                          <li>
                            <a onClick={this.handler2}>Чөлөөт цагаар</a>
                          </li>
                          <li>
                            <a onClick={this.handler2}>Бүрэн цэс</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </Grid>
          <Grid item xs={10}>
            <div className={Classes.search}>
              <div className={Classes.row}>
                <strong>
                  <p>Хайлтад хамрагдах контентын төрөл:</p>
                </strong>
                <Select
                  defaultInputValue="Бүх төрөл"
                  onChange={this.handler}
                  className={style.select}
                  options={this.state.list}
                />
              </div>
              <Route exact path="/search">
                <Search
                  type={this.state.type}
                  type1={this.state.type1}
                  type2={this.state.type2}
                  type3={this.state.type3}
                />
              </Route>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Content);

import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { withRouter, Route } from "react-router-dom";
import Select from "react-select";
import Search from "../Search/0search";
import style from "./style.module.css";
class Content extends Component {
  state = {
    selectedOption: null,
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
    list2: [
      { value: "Оруулах", label: "Оруулах" },
      { value: "Энгийн сонголт", label: "Энгийн сонголт" },
      { value: "Нэмэх сонголт", label: "Нэмэх сонголт" },
      { value: "Цогц сонголт", label: "Цогц сонголт" },
    ],
    list3: [
      { value: "Оруулах", label: "Оруулах" },
      { value: "Сонголт", label: "Сонголт" },
      { value: "Зүйлийн # хайх", label: "Зүйлийн # хайх" },
      { value: "Эх текст авах", label: "Эх текст авах" },
      { value: "Агуулгаар хайх", label: "Агуулгаар хайх" },
      { value: "Гарчигаар хайх", label: "Гарчигаар хайх" },
      { value: "Нэвт хайлт", label: "Нэвт хайлт" },
      { value: "Чөлөөт цагаар", label: "Чөлөөт цагаар" },
      { value: "Бүрэн цэс", label: "Бүрэн цэс" },
    ],
    type: "Бүх төрөл",
    type1: "",
    type2: "",
    type3: "",
  };

  handler = (e) => {
    this.setState({ type: e.value });
  };
  handler1 = (e) => {
    this.setState({ type2: "" });
    this.setState({ type1: e.value });
    this.setState({ type3: "Бүрэн лавлах" });
    this.props.history.push({
      pathname: "/search",
    });

    // if (this.state.type1 === "Оруулах") {
    //   this.props.history.replace({ pathname: "/search" });
    // } else if (this.state.type1 === "Энгийн сонголт") {
    //   this.props.history.replace({ pathname: "/search1" });
    // }
  };
  handler2 = (e) => {
    this.setState({ type1: "" });
    this.setState({ type2: e.value });
    this.setState({ type3: "Түүвэр лавлах" });

    this.props.history.replace({
      pathname: "/search",
    });
  };
  render() {
    return (
      <>
        <div className={style.Back}>
          <div className={style.div}>
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
          <div className={style.div}>
            <strong>
              <p>Бүрэн лавлах:</p>
            </strong>

            <Select
              onChange={this.handler1}
              className={style.select}
              options={this.state.list2}
            />
            {/* <Button onClick={this.submitHandler}>Submit</Button> */}
          </div>
          <div className={style.div}>
            <strong>
              {" "}
              <p>Түүвэр лавлах:</p>
            </strong>
            <Select
              onChange={this.handler2}
              className={style.select}
              defaultInputValue=""
              options={this.state.list3}
            />
          </div>
        </div>
        <Route exact path="/search">
          <Search
            type={this.state.type}
            type1={this.state.type1}
            type2={this.state.type2}
            type3={this.state.type3}
          />
        </Route>
      </>
    );
  }
}
export default withRouter(Content);

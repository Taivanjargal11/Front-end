import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Search1 from "./Search/search1";
import style from "./style.module.css";

class Search extends Component {
  state = {
    type: null,
    type1: null,
    type2: null,
  };

  // componentDidMount = () => {
  //  this.setState({ type: this.props.type });
  // this.setState({ type1: this.props.type1 });
  // this.setState({ type1: this.props.type2 });
  // const query = new URLSearchParams(this.props.location.search);
  // console.log(query.entries());
  // const type = [];
  // for (let param of query.entries()) {
  //   type[param[0]] = param[1];
  // }
  // console.log(type);
  // this.setState({ type: type[0] });
  // this.setState({ type2: type[1] });
  //};
  renderSwitch(param) {
    switch (param) {
      case "Бүрэн лавлах-->ОРУУЛАХ":
        return <Search1 />;
    }
  }

  render() {
    // console.log(this.props.location.search);
    let param = this.props.type1
      ? this.props.type3 + "-->" + this.props.type1
      : this.props.type3 + "-->" + this.props.type2;
    return (
      <div className={style.container}>
        <strong>
          <p>
            {this.props.type +
              " --> " +
              (this.props.type1
                ? this.props.type3 + " --> " + this.props.type1
                : this.props.type3 + " --> " + this.props.type2)}
          </p>
        </strong>
        <div>{this.renderSwitch(param)}</div>
      </div>
    );
  }
}
export default withRouter(Search);

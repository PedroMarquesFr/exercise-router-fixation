import React, { Component } from "react";

export default class StrictAccess extends Component {
  render() {
    const { user } = this.props;
    return <div>"Welcome {user.userName}!"</div>;
  }
}

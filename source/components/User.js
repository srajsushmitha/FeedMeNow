import React from "react";
import { Link } from "react-router-dom";

import { GITHUB_URL } from "../utils/constants";
class User extends React.Component {
  constructor(props) {
    console.log("Constructor in User component");
    super(props);
    this.state = {};
  }
  render() {
    console.log("Render in User component");
    return (
      <div className="text-center p-4">
        <img className="w-1/12 m-auto" src={this.state.avatar_url} alt="Sushmitha's profile" />
        <h4>{this.state.name}</h4>
        <h4 className="underline">
          <Link>{this.state.repos_url}</Link>
        </h4>
        <h4>User name: {this.state.login}</h4>
      </div>
    );
  }
  async componentDidMount() {
    console.log("Component did mount");
    const data = await fetch(GITHUB_URL);
    const res = await data.json();
    this.setState({
      avatar_url: res.avatar_url,
      name: res.name,
      repos_url: res.repos_url,
      login: res.login,
    });
  }
  componentDidUpdate(){
    console.log("Component did update called");
  }
  componentWillUnmount(){
    console.log("Component will unmount");
    this.setState={}
  }
}

export default User;

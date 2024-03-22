import {Component} from "react";

import User from './User'

class About extends Component{

  componentDidMount(){
    console.log('parent component did mount')
  }

  render(){
    console.log('Parent render')
    return (
      <div className="text-center p-4">
        <h2 className="font-bold">About : Data fetched from Github</h2>
        <User name="1st child"/>
      </div>
    );
  }
}


export default About;

import {Component} from 'react';

class Sample extends Component{
  constructor(props){
    super(props)
    console.log(this.props.name + 'constructor')
  }

  componentDidMount(){
    console.log(this.props.name + ' component did mount')
  }

  render(){
    console.log(this.props.name + ' render')
    return (
      <h3>{this.props.id}</h3>
    )
  }
}

export default Sample
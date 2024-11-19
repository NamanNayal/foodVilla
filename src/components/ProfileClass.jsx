import React, { Component } from 'react'

export default class ProfileClass extends Component {
    constructor(props){
        super(props);
        this.state ={
            userInfo:{
                name: '',
                location:'',
                avatar_url:'',
            },
        };
    }

    //called after first render
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/namannayal");
        const json = await data.json();
        this.setState({
            userInfo: json,
        });
    }

    //called after next render
    componentDidUpdate(){
        console.log('Component updated');
    }

    //when component will leave dom (as soon as it is unmounted)
    componentWillUnmount(){
        console.log('Component unmounted');
        
    }
  render() {
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state?.userInfo?.avatar_url} alt="avtar" />
        <h2>{this.state?.userInfo?.name}</h2>
        <h2>{this.state?.userInfo?.location}</h2>
        
        
      </div>
    );
  }
}

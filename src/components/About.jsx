import React from 'react'
import { Outlet } from 'react-router-dom'
import { Component } from 'react'
import ProfileClass from './ProfileClass';
class About extends Component{
  //initialize all the state variables in constructor as it is the first thing called by default
  constructor(props){
    super(props);
  }
  
  componentDidMount(){

  }

  render(){
    return (
      <div>
          <h1>About us page</h1>
          <Outlet />
          <ProfileClass />
        
      </div>
    )

  }
}

//consturctor - render - componentdidMount will be called in the same sequence
// componentDidMount() best place to API call

export default About;


/* 
in case of 2 childs
*parentconstructor - 
*parent render - 
*first child constructor - 
*first child render - 
*second child constructor - 
*second child render - 
*1st child componentDidMount - 
*2nd child componentDidMount - 
*Parent componentDidMount (in case the child componentDidMount method is async then parent componentDidMount will be called before the child componentDidMount)

this doesnt stop here
we made an api call we got the data setState is triggered and it will trigger the next render 
*this part is know as updating (setState, forceUpdate, props)


*/

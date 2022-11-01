import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics"
import React, { Component } from "react";

export class App extends Component {
  
  constructor() {
   super()

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,     
  }
 }
      handleChange = evt => {
        const { name } = evt.target;
    this.setState(state =>({[name]: state[name]+1}));
      };
  
  render() {

    return (
    <div>
      <Feedback  data={this.state} handleChange={this.handleChange} />
      <Statistics  data={this.state} />
    </div>
  );}

};

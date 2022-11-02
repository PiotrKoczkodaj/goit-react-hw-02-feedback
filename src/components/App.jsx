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
  
    countTotalFeedback=(data)=>{
      return (
        <>
        <p style={{
        position: "relative",
        left: "-66px"
          }}>total</p>

          <p style={{
            position: "relative",
            top: "-33px"
          }}>
            {data.good + data.bad + data.neutral}
          </p>
          </>
      )
    };
  
  countPositiveFeedbackPercentage = (data) => {
    return (
      <>
      <p style={{
      position: "relative",
      left: "-87px",
      top:"-33px"
        }}>percentage</p>
        <p>
        {this.counterPercentage}
        </p>
        </>)
   };
  
  render() {

    return (
    <div>
      <Feedback  data={this.state} handleChange={this.handleChange} />
        <Statistics positivePercentage={this.countPositiveFeedbackPercentage} data={this.state} total={this.countTotalFeedback} />
    </div>
  );}

};

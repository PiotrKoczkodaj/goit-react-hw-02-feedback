import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics"
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
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
  
  counter = (data) => {
    const total = data.good + data.bad + data.neutral;
    const percentage = data.good * 100 / total;
    const number = Math.round(percentage) + "%";
    return (<p style={{
      position: "relative",
      top: "-67px"
    }}>{number}</p>)
  };

  countPositiveFeedbackPercentage = () => {
    return (
      <p style={{
      position: "relative",
      left: "-87px",
      top:"-33px"
        }}>percentage</p>
    )};
  
  render() {

    return (
      <div>
        <Section title="please leave feedback">
          <Feedback  data={this.state} handleChange={this.handleChange} />
      </Section>
        <Section>
          <Statistics counter={this.counter} positivePercentage={this.countPositiveFeedbackPercentage} data={this.state} total={this.countTotalFeedback}>
            <Notification values={this.state } message="no feedback given" />
          </Statistics>
          
      </Section>
      
      
    </div>
  );}

};


import React, { Component } from "react";


export class Feedback extends Component {
    state =  {
        good: 0,
        neutral: 0,
        bad: 1,
    };
  

    render() {
        const { good, neutral, bad } = this.state;
        
        return (
                <>
                <h1>Please leave feedback</h1>
                <button>Good</button>
                <button>Neutral</button>
                <button>Bad</button>
                <div>Good : {good}</div>
                <div>Neutral : {neutral}</div>
                <div>Bad : {bad }</div>
                </>
             
    );
    }

}
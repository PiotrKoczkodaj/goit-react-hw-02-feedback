import React, { Component } from "react";
import styles from './Feedback.module.css';



export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 1,
    };
    
    
  handleClick = (wichButtonWasClicked)=> {
      
        switch ('wichButtonWasClicked') {

            case "Good":
                this.setState((prevState) => ({
                ...prevState,
                good: prevState.good + 1,
            }));
                break;
            case "Neutral":
                this.setState((prevState) => ({
                ...prevState,
                neutral: prevState.neutral + 1,
            }));
                break;
            case "Bad":
                this.setState((prevState) => ({
                ...prevState,
                bad: prevState.bad + 1,
            }));
                break;
            default: return 0;
                
        };
       
    };

    render() {
        const { good, neutral, bad } = this.state;
        
        return (
            <>
                <h1 className={styles.header}>Please leave feedback</h1>
                <ul className={styles.buttonsList}>
                    <li><button onClick={this.handleClick('Good')}>Good</button></li>
                    <li><button onClick={this.handleClick('Neutral')}>Neutral</button></li>
                    <li><button onClick={this.handleClick('Bad')}>Bad</button></li>
                </ul>
                <p className={styles.paragraph}>Statistics</p>
                <ul className={styles.listStats}>
                    <li>Good:{good}</li>
                    <li>Neutral:{neutral}</li>
                    <li>Bad:{bad}</li>
                </ul>
            </>
             
        )
    }
};
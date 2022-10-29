import React, { Component } from "react";
import styles from './Feedback.module.css';

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
                <h1 className={styles.header}>Please leave feedback</h1>
                <ul className={styles.buttonsList}>
                <li><button>Good</button></li>
                <li><button>Neutral</button></li>
                <li><button>Bad</button></li>
                </ul>
                <p className={styles.paragraph}>Statistics</p>
                <ul className={styles.listStats}>
                    <li>Good:{good }</li>
                    <li>Neutral:{neutral }</li>
                    <li>Bad:{ bad}</li>
                </ul>
                </>
             
    );
    }

}
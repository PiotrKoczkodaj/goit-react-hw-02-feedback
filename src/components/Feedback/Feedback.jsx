import React, { Component } from "react";
import styles from './Feedback.module.css';



export class Feedback extends Component {
    
    render() {
        
        const data = this.props.data;
        const keys = Object.keys(data);
        const handleChange = this.props.handleChange;
        return (
            <>
                <h1 className={styles.header}>Please leave feedback</h1>
                <ul className={styles.buttonsList}>
                    {keys.map(key => {
                        return (<li key={key}>
                            <button onClick={handleChange} name={key}>{key}</button>
                        </li>)
                    })}
                    {/* <li><button name="good" onClick={handleChange}>Good</button></li>
                    <li><button name="neutral" onClick={handleChange}>Neutral</button></li>
                    <li><button name="bad" onClick={handleChange}>Bad</button></li> */}
                </ul> 
            </>
             
        )
    }
};
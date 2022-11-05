import React, { Component } from "react";
import styles from './Feedback.module.css';
import PropTypes from "prop-types";

export class Feedback extends Component {
    
    render() {
        
        const data = this.props.data;
        const keys = Object.keys(data);
        const handleChange = this.props.handleChange;
        const renderButtons = keys.map(key => {
            return (<li key={key}>
                <button onClick={handleChange} name={key}>{key}</button>
            </li>)
        });

        return (
            <>
                
                <ul className={styles.buttonsList}>
                    {renderButtons}
                </ul> 
            </>
             
        )
    }
};

Feedback.propTypes = {
    data: PropTypes.object.isRequired,
    keys: PropTypes.array,
}
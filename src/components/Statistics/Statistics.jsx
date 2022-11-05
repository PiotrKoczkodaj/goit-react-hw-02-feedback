import PropTypes from "prop-types";
import styles from './Statistics.module.css';

export const Statistics = ({ data, total,positivePercentage,counter}) => {
    
    const keys = Object.keys(data);
    const values = Object.values(data);
    if (values[0] === 0 && values[1] === 0 && values[2] === 0) {
        return (<h2>no feedback given</h2>)
    }

    const renderValue = values.map(value => {
            return(<p className={styles.values}>{value}</p>)
    });

    const renderKey = keys.map(key => {
        return (<li key={key}><p>{key}</p></li>)
    });
    
    return (
        <>
            <h2 >Statistics</h2>
            <div className={styles.container}>

                <ul className={styles.keysList}>
                {renderKey}
                </ul>
                
             <div className={styles.valuesBox}>    
                    {renderValue}
                    {total(data)}
                    {positivePercentage()}
                    {counter(data)}
            </div>
            </div>
        </>
    )
};

Statistics.propTypes = {
data: PropTypes.object.isRequired,
}

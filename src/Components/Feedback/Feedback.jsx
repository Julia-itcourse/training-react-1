import React, {Component} from 'react'
import {Typography } from "@material-ui/core/"

import styles from './Feedback.module.css'

import FeedbackOptions from "./FeedbackOptions"
import Statistics from "./Statistics"

class Feedback extends Component {

state = {
    good: 0,
    neutral: 0,
    bad: 0,
}

onClick = ({target}) => {
    console.log("target:", target);
    console.log("target-dataset-action:", target.dataset.action);
    console.log("target-value:", target.node);
    this.setState((prevState) => {
        return{
            [target.dataset.action]: prevState[target.dataset.action] + 1
        }
    })
}

countTotal = () =>{
return this.state.good + this.state.neutral + this.state.bad;

}

countPositivePercentage = () =>{
    return this.countTotal()
    ? Math.round((this.state.good / this.countTotal()) * 100)
    : 0;
}

render(){
    const total = this.countTotal()
    const positivePercentage = this.countPositivePercentage()
    const {good, bad, neutral} = this.state;
    return(
        <section className = {styles.section}>
        <Typography variant = "h5" color = "primary">Please leave feedback</Typography>
        {/* <FeedbackOptions options={1} onLeaveFeedback={2}/> */}
        <FeedbackOptions onLeaveFeedback={this.onClick}/>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
        </section>
    )
}

}

export default Feedback
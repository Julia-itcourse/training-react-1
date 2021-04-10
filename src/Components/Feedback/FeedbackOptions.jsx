import { ButtonGroup, Button } from "@material-ui/core/";
import styles from './Feedback.module.css'

const FeedbackOptions = ({onLeaveFeedback }) => {
  return (
    <ButtonGroup size="large" color="primary" className = {styles.btns}>
      <Button data-action = "good" onClick = {onLeaveFeedback}>Good</Button>
      <Button data-action = "neutral" onClick = {onLeaveFeedback}>Neutral</Button>
      <Button data-action = "bad" onClick = {onLeaveFeedback}>Bad</Button>
    </ButtonGroup>
  );
};

export default FeedbackOptions;

import { Typography } from "@material-ui/core";
import styles from './Feedback.module.css';
import FaceIcon from '@material-ui/icons/Face';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MoodBadIcon from '@material-ui/icons/MoodBad';

const StatisticsData = ({neutral, good, bad, total, positivePercentage}) => {
  return (
    <section className = {styles.stats}>
      <Typography variant = "button" display = "block"> Good: {good}</Typography>
      <Typography variant = "button" display = "block">   Neutral: {neutral}</Typography>
      <Typography variant = "button" display = "block">  Bad: {bad}</Typography>
      <Typography variant = "button" display = "block">   Total: {total}</Typography>
      <Typography variant = "button" display = "block">   Positive feedback: {positivePercentage}%</Typography>
    </section>
  );
};

export default StatisticsData;

import { Typography } from "@material-ui/core/";
import styles from "./Feedback.module.css";
import StatisticsData from "./StatisticsData";

const Statistics = ({ neutral, good, bad, total, positivePercentage }) => {
  return (
    <section className={styles.stats}>
      <Typography variant="h5" color="primary">
        Statistics
      </Typography>

      {total !== 0 ? (
        <StatisticsData
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Typography variant="h6" color="secondary">
          No feedback given
        </Typography>
      )}
    </section>
  );
};

export default Statistics;

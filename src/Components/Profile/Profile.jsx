import { Card, Typography, CardContent } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardStyle: {
    width: "400px",
    margin: "50px",
  },
  avatar: {
    width: "200px",
    height: "200px",
  },
  stats: {
      display: "flex",
  }
});

const Profile = ({ name, tag, location, avatar, stats }) => {
  const styles = useStyles();
  return (
    <>
      <Card className={styles.cardStyle}>
        <CardContent>
          <Typography>
            <img src={avatar} className={styles.avatar} />
          </Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5">{tag}</Typography>
          <Typography variant="h5">{location}</Typography>
          <Typography variant="h5">
          
            <ul className={styles.stats}>
              <li>
                <span >Followers: </span>
                <span>{stats.followers}</span>
              </li>
              <li>
                <span >Views: </span>
                <span >{stats.views}</span>
              </li>
              <li>
                <span>Likes: </span>
                <span>{stats.likes}</span>
              </li>
            </ul>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Profile;

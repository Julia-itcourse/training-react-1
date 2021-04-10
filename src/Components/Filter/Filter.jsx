import styles from "./Filter.module.css";
import { TextField } from "@material-ui/core";

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className={styles.input}>
      <TextField
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;

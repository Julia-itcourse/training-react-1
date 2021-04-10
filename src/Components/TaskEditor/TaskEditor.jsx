import { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button, TextField } from "@material-ui/core";
import styles from "./TaskEditor.module.css";

class TaskEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          className={styles.input}
          id="outlined-basic"
          label="Task"
          variant="outlined"
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <div className = {styles.button}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Task
        </Button>
        </div>
      </form>
    );
  }
}

// const TaskEditor = ({onAddTask}) => {
//   return (
//     <>
//       <Button onClick = {onAddTask} variant="contained" color="primary" startIcon={<AddIcon />}>
//         Add Task
//       </Button>
//     </>
//   );
// };

export default TaskEditor;

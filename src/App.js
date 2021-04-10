import React, { Component } from "react";
import Profile from "./Components/Profile/";
import Statistics from "./Components/Statistics";
import FriendList from "./Components/FriendList";
import Transactions from "./Components/Transactions";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";
import Counter from "./Components/Counter";
import Layout from "./Components/Layout";
import TaskList from "./Components/TaskList";
import TaskEditor from "./Components/TaskEditor";
import Feedback from "./Components/Feedback";
import Filter from "./Components/Filter";
import { uuid } from "uuidv4";

class App extends Component {
  state = {
    tasks: [],
    filter: '',
  };

  changeFilter = filter =>{
    this.setState({filter})
  }

  addTask = (text) => {
    const task = {
      id: uuid(),
      text,
      completed: false,
    };

    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
  };

  removeTask = (taskId) => {
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  };

  updateCompleted = (taskId) => {
    this.setState((prevState) => ({
     
        tasks: prevState.tasks.map(task =>  task.id === taskId
            ? { ...task, completed: !task.completed }
            : task,
        )
    }));
  };

  getVisibleTasks = () => {
    const {filter, tasks} = this.state;

    return tasks.filter(task =>task.text.toLowerCase().includes(filter.toLowerCase()),)
  }
  render() {
    const visibleTasks = this.getVisibleTasks();
    const { tasks, filter } = this.state;
    return (
      <Layout>
        <TaskEditor onAddTask={this.addTask} />
        {tasks.length > 1 && <Filter value = {filter} onChangeFilter = {this.changeFilter}/>}
        {visibleTasks.length > 0 && (
          <TaskList
            tasks={visibleTasks}
            onRemoveTask={this.removeTask}
            onUpdateTask={this.updateCompleted}
          />
        )}
        <Feedback />
      </Layout>
    );
  }
}

export default App;

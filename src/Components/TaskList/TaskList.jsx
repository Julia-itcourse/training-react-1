import {List, ListItem, Divider, ListItemText, Button, Checkbox} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const TaskList = ({tasks, onRemoveTask, onUpdateTask}) => {
    return (
        <List component="nav" aria-label="main mailbox folders">
        {tasks.map(({id, text, completed} )=> (<div><ListItem key = {id}>
          
          <Checkbox
        checked={completed}
        color = "secondary"
        onChange = {()=>onUpdateTask(id)}
        inputProps={{ 'aria-label': 'Completed' }}
      />
    
          <ListItemText primary={text} />
          <Button
        variant="contained"
        color="secondary"
    
        onClick = {() => onRemoveTask(id)}
        startIcon={<DeleteIcon />}
      >
        Delete Task
      </Button>
        
        </ListItem>
        <Divider/>
        </div>
       ))
    }

      </List>
      
    )
}

export default TaskList
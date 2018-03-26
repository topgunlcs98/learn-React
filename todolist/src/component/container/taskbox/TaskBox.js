import React from 'react';
import './TaskBox.css';

class TaskBox extends React.Component{
    constructor(props){
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }
    deleteTask(){
       this.props.deleteTask(this.props.item);
    }
    render(){
        

        let item= this.props.item;
        return (
           <li key={item.id} >
               <label>{item.text} </label>
               <button class="deletebutton" onClick={this.deleteTask}>DELETE</button> 
           </li>
        )
    };
}
export default TaskBox;
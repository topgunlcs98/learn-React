import React from 'react';
import AddBox from './addbox/Addbox';
import './Container.css';
import TaskBox from './taskbox/TaskBox';

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[
                {id:0,text:'learn git'},
                {id:1,text:'learn ES-6'},
                {id:2,text:'learn React'}
            ],
            listSize:3
        }
        this.deleteTask =this.deleteTask.bind(this);
        this.addNewTask =this.addNewTask.bind(this);
    }
    deleteTask(item){
        let taskId = item.id;
        let taskCollection = this.state.list;
        for(var i=0;i<taskCollection.length;i++){
            if(taskCollection[i].id===taskId){
                break;
            }
        }
        taskCollection.splice(i,1);
        let len = this.state.listSize -1;
        this.setState({list:taskCollection ,listSize:len});
    }
    addNewTask(str){
        let newId = this.state.listSize;
        let newItem={id:newId, text:str};
        let taskCollection=this.state.list;
        taskCollection.push(newItem);
        this.setState({list:taskCollection});
        this.setState({listSize:this.state.listSize+1});  
    }
    

 
    render(){
        let counter;
        if(this.state.listSize){
          counter=<div><span>{this.state.listSize}</span> items are left !Keep working hard!</div>;
        }else{
            counter=<span>You have finished all! Congratulation!</span>
        }
        return(
           
           <div class="out_box">
               <header>
                   Todo-List of Top-Gun
                </header>
                <p><em>The first blow is half of the battle!</em></p>
                <div class="addbox">
                <h3>Add mew tasks here:</h3>
                <AddBox addNewTask={this.addNewTask}/>
                </div>   
              
               <div class="taskbox">
                  <h3>  My tasks:</h3> 
                  <ul>
                  {
                   this.state.list.map((item,index)=>
                   <TaskBox item={item} key={index} deleteTask={this.deleteTask}/>
                )
               }
               </ul>
                </div>
                <div id="counter">{counter}</div>
            
               <footer>@top_gun </footer>
           </div>
        )
    };
}
export default Container;
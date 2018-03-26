import React from 'react';
import ReactDOM from 'react-dom';
import './Addbox.css';
class AddBox extends React.Component{
    constructor(){
        super();
        this.state={
            value:''
        }
        this.addNewTask = this.addNewTask.bind(this);
        this.handleChange=this.handleChange.bind(this);
          
    }
    handleChange(e){
        this.setState({value:e.target.value})

    }
    addNewTask(e){
        e.preventDefault();
        this.setState({value:""});
        let element=ReactDOM.findDOMNode(this.refs.newItem);
        let str=element.value;
        if(str){
            this.props.addNewTask(str);
        }   
    }
   
    render(){
        return(
            <div>
                <form>
                    <lable></lable>
                    <input id="newItem" ref="newItem" type="text" placeholder="what needs to be done?"
                     value={this.state.value} onChange={this.handleChange}></input>
                    <button class="addbutton" onClick={this.addNewTask}>ADD</button>
                   
                    </form>
                </div>
        )
    };
}
export default AddBox;
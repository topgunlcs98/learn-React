import  React from 'react';
import ReactDOM from 'react-dom';
import Title from '../container/title/title';
import './container.css';

class Container extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div styleName="wrapper">
            <h1>helloworld</h1>
            <Title/>
            </div>
        );
    }
}
export default Container;
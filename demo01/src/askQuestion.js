import { Modal, Button,Input,Checkbox } from 'antd';
import React from 'react';
import styles from './askQuestion.css'
const {TextArea} = Input;
const Search = Input.Search;

class AskQuestion extends React.Component {
  constructor(props){
    super(props);
    this.state = { visible: false ,
      title:'',
      topic:'',
      background:'',
      anonymous:true,
     }
     this.showModal = this.showModal.bind(this);
     this.handleCancel = this.handleCancel.bind(this);
     this.handleOk = this.handleOk.bind(this);
     this.titleChange = this.titleChange.bind(this);
     this.topicChange = this.topicChange.bind(this);
     this.backgroundChange = this.backgroundChange.bind(this);
     this.anonymousChange = this.anonymousChange.bind(this);
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(this.state);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    // console.log(e);
    this.setState({
      visible: false,
    });
  }

  titleChange(event){
    this.setState({title:event.target.value});
  }

  topicChange(event){
    this.setState({topic:event.target.value});
  }

  backgroundChange(event){
    this.setState({background:event.target.value});
  }

  anonymousChange(event){
    this.setState({anonymous:event.target.value});
  }

  render() {
      const title = <div><p className = {styles.title}>写下你的问题</p>
                  <p className = {styles.subtitle}>描述准确的问题更易得到解答</p></div>
    return (
      <div>
        <Button type = "primary" onClick = {this.showModal}>提问</Button>
        <Modal
          title = {title}
          visible = {this.state.visible}
          onOk = {this.handleOk}
          onCancel = {this.handleCancel}
          footer = {[
              <Button onClick = {this.handleOk}>提交</Button>
          ]}
        >

          <TextArea rows = {2} placeholder = '问题标题' value = {this.state.title} onChange = {this.titleChange}/>
          <p></p>
          <Search placeholder = '添加话题' onChange = {this.topicChange} value = {this.state.topic }/>
          <p></p>
          <p>问题描述（可选）</p>
          <TextArea rows = {5} placeholder = '问题背景、条件等详细信息' onChange = {this.backgroundChange} value = {this.state.background}/>
          <Checkbox value = {this.state.anonymous} onChange = {this.anonymousChange}>取消匿名</Checkbox>
        </Modal>
      </div>
    );
  }
}
export default AskQuestion;
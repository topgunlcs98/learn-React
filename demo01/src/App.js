import React, { Component } from 'react';
import{Icon,Input} from 'antd';
import AskQuestion from './askQuestion'
import styles from './App.css';
const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <div className = {styles.wrapper}>
        <div className = {styles.tags}>
          <ul className = {styles.tagset}>
            <li className = {styles.title}><a>知乎</a></li>
            <li className = {styles.link}><a>首页</a></li>
            <li className = {styles.link}><a>发现</a></li>
            <li className = {styles.link}><a>话题</a></li>
          </ul>
        </div>

        <div className = {styles.input}>
          <Search claaName = {styles.search}
            placeholder = "搜索你感兴趣的内容..."
            onSearch = {value => console.log('Search'+value)}
            enterButton
          />
        </div>

        <div className = {styles.button}>
           <AskQuestion/>
        </div>

        <div className = {styles.iconset}>
          <div className = {styles.icon}>
            <Icon type = "notification" style = {{fontSize:20,color:'gray'}} />
          </div>
          <div className = {styles.icon}>
            <Icon type="wechat"  style = {{fontSize:20,color:'gray'}}/>
          </div>
          <div className = {styles.icon}>
            <Icon type = "zhihu" style = {{fontSize:20,color:'rgb(0, 132, 255)'}} />
          </div>
        </div>
      </div>
    )
}
}
export default App;

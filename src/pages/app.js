// application's entry

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import reducers from 'reducers/index';
import '../css/common.scss';
import 'antd/dist/antd.less'

// pages
import Page1 from './page1/index';
import Page2 from './page2/index';
import Page3 from './page3/index';

const menuList = [{
  id: 0,
  text: "单选题",
  type: "radio"
},{
  id: 1,
  text: "多选题",
  type: "radioGroup"
},{
  id: 1,
  text: "描述题",
  type: "的说辞ript"
}]
class Application extends Component {
  getMenuList () {
    let item = "";
    item = menuList.map(el => {
      return <div className="menu-item"><span className="menu-item-text">{el.text}</span></div>
    })
    return item;
  }
  render() {
    return (
      <div className="root"> 
        <div className="header">
          <Link to="page1">page1</Link>
          <Link to="page2">page2</Link>
          <Link to="page3">page3</Link>
        </div>  
        <div className="content">
          <div className="menuList">
             {this.getMenuList()}
          </div>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

const store = createStore(reducers, {}, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Page1}/>
        <Route path="page1" component={Page1}></Route>
        <Route path="page2" component={Page2}></Route>
        <Route path="page3" component={Page3}></Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
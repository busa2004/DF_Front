import React, { Component } from 'react';
import './App.css';
import {
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import SiderMenu from '../common/SiderMenu';
import NewPoll from '../poll/NewPoll';
import Login from '../user/login/Login';
import Signup from '../user/signup/Signup';
import Option1 from '../option/Option1';
import Option2 from '../option/Option2';
import Profile from '../user/profile/Profile';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from '../common/PrivateRoute';
import { Layout, notification } from 'antd';
import wall from '../img/minion_2-wallpaper-1680x1050.jpg'

const { Sider, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,       //유저아이디
      isAuthenticated: false,  //로그인여부
      isLoading: false         //로딩여부
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });    
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {        //로그인이 되어있을때
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {        //로그인이 안되어있을때
      this.setState({
        isLoading: false
      });  
    });
  }

  componentWillMount() { //렌더후에
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/", notificationType="success", description="로그아웃 되셨습니다.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: '더존팩토리',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: '더존팩토리',
      description: "반갑습니다.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }

  render() {
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }
    return (
       <Layout className="app-container">
         <AppHeader isAuthenticated={this.state.isAuthenticated} 
            currentUser={this.state.currentUser} 
            onLogout={this.handleLogout} />

                    
          <Content className="app-content">
            <Layout>
            <Sider className="app-Sider" ><SiderMenu/></Sider>
            <div className="center">
            <div className="main">
              <Switch>     
                <Route exact path="/" >
                  <img src={wall} width="100%" alt="poll" className="wall" textAlign="center" />
                </Route>
                <Route path="/login" 
                  render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/users/:username" 
                  render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
                </Route>
            
                <PrivateRoute authenticated={this.state.isAuthenticated} path="/poll/new" component={NewPoll} handleLogout={this.handleLogout}></PrivateRoute>
                
                <PrivateRoute  path="/Option1" authenticated={this.state.isAuthenticated} component={(props) => (<Option1 currentUser={this.state.currentUser} {...props}  />)}>
                 </PrivateRoute>

                <Route path="/Option2" 
                render={(props) => <Option2 isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
            </div>
            </Layout>
            <Footer style={{ textAlign: 'center' }}>
            Design ©2019 Created by SungJun
          </Footer>
          </Content>
 

          </Layout>

    );
  }
}

export default withRouter(App);

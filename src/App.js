import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import NewEmployee from './pages/NewEmployee';
import MyProfile from './pages/MyProfile';
import UpdateProfile from './pages/EditProfilePage';

class App extends React.Component {
  state = {
    user: {},
    sale: {}
  }
  
  
  // componentDidMount() {
  //   const userId = this.props.match.params.id;
  //   Employee.getOne(userId)
  //     .then((data) => {
  //       this.setState({ user: data.user });
  //     });
  // }

  setUser = (user) => {
    this.setState({user})
  }
  

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' render={() => <Login setUser={this.setUser}/>} />
          <Route path='/home' component={ Home } />
          <Route path='/newEmployee' component={ NewEmployee } />
          <Route path='/myProfile' render={() => <MyProfile user={this.state.user} setUser={this.setUser} />  } />
          <Route path='/editMyProfile' render={() => <UpdateProfile user={this.state.user} setUser={this.setUser} />  } />
        </Router>
      </div>
    );
  }
}

export default App;

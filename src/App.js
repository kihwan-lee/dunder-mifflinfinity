import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


import Home from './pages/HomePage';
import Login from './pages/LoginPage';
import NewEmployee from './pages/NewEmployee';
import MyProfile from './pages/MyProfile';
import UpdateProfile from './pages/EditProfilePage';
import MakeSale from './pages/MakeSale';

class App extends React.Component {
  state = {
    user: {},
    sale: {}
  }


  setUser = (user) => {
    this.setState({user})
  }

  setSale = (sale) => {
    this.setState({sale})
  }
  

  render() {
    return (
      <div>
        <div className="App-background" />
          <Router>
            <Route exact path='/' render={() => <Login setUser={this.setUser}/>} />
            <Route path='/home' component={ Home } />
            <Route path='/newEmployee' render={() => <NewEmployee  setUser={this.setUser}/>} />
            <Route path='/myProfile' render={() => <MyProfile user={this.state.user} setUser={this.setUser} />  } />
            <Route path='/editMyProfile' render={() => <UpdateProfile user={this.state.user} setUser={this.setUser} />  } />
            <Route path='/makeSale' render={() => <MakeSale user={this.state.user} setUser={this.setUser} sale={this.state.sale} setSale={this.setSale} />  } />

          </Router>
      </div>
    );
  }
}

export default App;

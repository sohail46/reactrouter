import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import contact from './components/contact';
import error from './components/error';
import Navigation from './components/Navigation';
import UserForm from './components/UserForm';
import axios from 'axios';


// const NewRoute = () => {
//   return ( <div>
//     <p>New Route</p>
//   </div> );
// }
 
// export default NewRoute;

class App extends Component {
  state = {
    repos:null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;

    if(user){
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        const repos = res.data.public_repos;
        // console.log(repos);
        this.setState({repos});
      });
      console.log(user);
    } else return;
  }

  render() {
    return (
      <BrowserRouter>
      <div>
      <Navigation />
        <Switch>
          <Route path='/' component={home} exact />
          <Route path='/about' component={about} />
          <Route path='/contact' component={contact} />
          <Route component={error}/>
        </Switch><hr />
        <UserForm getUser={this.getUser} />
          { this.state.repos ? <p>Number of repos: {this.state.repos } </p>: <p> Please enter Username </p> }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

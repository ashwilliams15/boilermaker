import React from 'react';
import { Link, Route, withRouter, Redirect, Switch } from 'react-router-dom';
import Pantry from './Pantry';
import Home from './Home';
import { Login, Signup } from './Login';
import {me} from '../store/auth';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    console.log('component did mount')
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

  return (
    <div>
      <header>
        <h1>Let's Make Pancakes!</h1>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </header>
      <main>
        {isLoggedIn ? (
          <Switch>
            <Route path="/pantry" component={Pantry} />
            <Redirect to="pantry" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup}/>
          </Switch>
        )}
      </main>
    </div>
  )}
}

const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(App));

import React from 'react';
import './App.css';
import firebase from './firebase';
import Login from './Login';
import Home from './Home';

class App extends React.Component {

  constructor(props){
    super(props);

    this.authListener = this.authListener.bind(this);

    this.state = {
      user: {}
    }

  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){

    firebase.auth().onAuthStateChanged( (user) => {

      if (user) {
        this.setState({ user });
      }else{
        this.setState({ user: null});
      }

    });

  }

  render(){
    return (
      <div className="App">
        
        { this.state.user ? (<Home />) : (<Login />) }
        
      </div>
    );
  }
  
}

export default App;

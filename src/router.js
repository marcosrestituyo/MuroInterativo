import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';


class Router extends React.Component {

    constructor(props){
      super(props);
  
      this.state = {
      }
  
    }
  

    render(){
      return (
        <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App} />
                    {/* <Route component={NotFound}/> */}
                </Switch>
        </BrowserRouter>
      )
    }
    
  }
  
  export default Router;
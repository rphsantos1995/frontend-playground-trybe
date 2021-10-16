import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';
import PersonalForm from './pages/PersonalForm';
import ProfessionalForm from './pages/ProfessionalForm';
import FormDataDisplay from './pages/FormDataDisplay';
import My404Component from './pages/My404Component';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/PersonalForm" component={ PersonalForm } />
          <Route path="/professionalForm" component={ ProfessionalForm } />
          <Route path="/formDisplay" component={ FormDataDisplay } />
          <Route path="*" exact component={ My404Component } />
          <Route path="/" component={ My404Component } />
        </Switch>
      </Router>
    );
  }
}
export default App;

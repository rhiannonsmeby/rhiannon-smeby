import React from 'react';
import {Route, Switch} from 'react-router';
import NavBar from '../NavBar/NavBar';
import './App.css';
import Footer from '../Footer/Footer';
import ContactPage from '../../routes/ContactPage/ContactPage';
import Homepage from '../../routes/Homepage/Homepage';
import ProjectPage from '../../routes/ProjectPage/ProjectPage';
import Header from '../Header/Header';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header} />
      <Route path='/' component={NavBar} />
      <main className='App'>
        <Switch>
          <Route exact path={'/'} component={Homepage} />
          <Route path={'/projects'} component={ProjectPage} />
          <Route path={'/contact-me'} component={ContactPage} />
        </Switch>
      </main>
      <Route path='/' component={Footer} />
    </div>
  );
}

export default App;

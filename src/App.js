import React from 'react'
import {Route, Switch} from 'react-router'
import Header from '../src/components/Header/Header'
import './App.css';
import Footer from './components/Footer/Footer';
import ContactPage from './routes/ContactPage/ContactPage'
import Homepage from './routes/Homepage/Homepage'
import ProjectPage from './routes/ProjectPage/ProjectPage'

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header} />
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

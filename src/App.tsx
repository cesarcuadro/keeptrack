import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';
import ProjectPage from './projects/ProjectPage'
import { Provider } from 'react-redux';
import { store } from './state';
import Header from './home/Header';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <header className="sticky">
        <span className="logo">
          <img src="/assets/logo-3.svg" alt="logo" width="49" height="99" />
        </span>
        <Header />
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;

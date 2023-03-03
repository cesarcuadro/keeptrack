import React from 'react';
import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import HomePage from './home/HomePage';
import ProjectPage from './projects/ProjectPage'
import { Provider } from 'react-redux';
import { store } from './state';
import Header from './home/Header';
import { styled } from '@mui/system';

function App() {

  const MainContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    fontFamily: "sans-serif",
    height: "92vh",
    overflow: "auto"
  })

  return (
    <Provider store={store}>
    <Router>
        <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </MainContainer>
    </Router>
    </Provider>
  );
}

export default App;

import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Layout/> }>
              <Route path='/' element={<Home /> }></Route>
          </Route>
        </Routes>
  );
}

export default App;
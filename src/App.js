import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import CollagePage from './art/CollagePage';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/artwork" element={<CollagePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

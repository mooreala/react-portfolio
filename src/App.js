import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import CollagePage from './art/CollagePage';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/artwork" element={<CollagePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

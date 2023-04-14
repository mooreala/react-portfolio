import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './homepage/HomePage';
import CollagePage from './art/CollagePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/react-portfolio">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/artwork" element={<CollagePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

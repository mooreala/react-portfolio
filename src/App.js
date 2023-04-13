import './App.css';
import Intro from './intro/Intro';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Experience from './experience/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;

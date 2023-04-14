import './App.css';
import Intro from './intro/Intro';
import Footer from './footer/Footer';
import Navbar from './navbar/Navbar';
import Experience from './experience/Experience';
import Art from './art/Art';
import Projects from './projects/Projects';
import About from './about/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Art />
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;

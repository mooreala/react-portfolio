import Intro from '../intro/Intro';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Experience from '../experience/Experience';
import Art from '../art/Art';
import Projects from '../projects/Projects';

function HomePage() {
  return (
    <div className="Home">
      <Navbar />
      <Intro />
      <Experience />
      <Projects />
      <Art />
      <Footer />
    </div>
  );
}

export default HomePage;
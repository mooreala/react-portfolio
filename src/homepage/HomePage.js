import Intro from '../intro/Intro';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Experience from '../experience/Experience';
import Art from '../art/Art';
import Projects from '../projects/Projects';
import ScrollButton from '../navbar/ScrollButton';

function HomePage() {
  return (
    <div className="home">
      <ScrollButton />
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
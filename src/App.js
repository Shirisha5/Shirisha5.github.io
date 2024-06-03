import Home from './Components/Home/Home';
import AboutMe from './Components/AboutMe/AboutMe';
import Experience from './Components/Experience/Experience';
import Work from './Components/Work/Work';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
}

export default App;

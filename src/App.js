
import './App.css';
import Home from './Components/Pages/Home/Home';
import TopBrandingLogo from './Components/Pages/Home/TopBrandingLogo';
import Navbar from './Components/Shared/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from './Components/Shared/Footer';

function App() {
  return (
    <div>
      <TopBrandingLogo />
      <Navbar />
      <Home />
      <Footer/>


    </div>
  );
}

export default App;

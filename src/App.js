
import './App.css';
import Home from './Components/Pages/Home/Home';
import TopBrandingLogo from './Components/Pages/Home/TopBrandingLogo';
import Navbar from './Components/Shared/Navbar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from './Components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Login/Register';
import { Toaster } from 'react-hot-toast';
import Logout from './Components/Pages/Login/Logout';

function App() {
  return (
    <div>
      <TopBrandingLogo />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>

      <Toaster
        toastOptions={{
          // Default options for specific types
          success: {
            duration: 5000,
          },
        }}
      />
      <Footer />


    </div>
  );
}

export default App;


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
import Blogs from './Components/Pages/Blogs/Blogs';
import PageNotFound from './Components/Shared/PageNotFound';

function App() {
  return (
    <div>
      <TopBrandingLogo />
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        {/* <Route path='/about' element={<About />}></Route> */}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/logout' element={<Logout />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
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

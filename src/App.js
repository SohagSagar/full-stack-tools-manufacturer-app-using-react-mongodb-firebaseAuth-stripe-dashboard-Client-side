
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
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import RequireAuth from './Components/Shared/RequireAuth';
import MyProfile from './Components/Pages/Dashboard/MyProfile';
import MyOrder from './Components/Pages/Dashboard/MyOrder';
import AddReview from './Components/Pages/Dashboard/AddReview';
import AddRegularProduct from './Components/Pages/Dashboard/AddRegularProduct';
import AddDiscuontedProduct from './Components/Pages/Dashboard/AddDiscuontedProduct';
import AllUsers from './Components/Pages/Dashboard/AllUsers';
import DashboardInitial from './Components/Pages/Dashboard/DashboardInitial';
import PurchaseProduct from './Components/Pages/PurchaseProduct/PurchaseProduct';
import MyPortfolio from './Components/Pages/MyPortfolio/MyPortfolio';
import ViewRegularProduct from './Components/Pages/Dashboard/ViewRegularProduct';
import Payment from './Components/Pages/Dashboard/Payment';
import AllOrders from './Components/Pages/Dashboard/AllOrders';

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
        <Route path='/portfolio' element={<MyPortfolio />}></Route>
        <Route path='/payment/:id' element={<Payment/>}></Route>
        <Route path='*' element={<PageNotFound />}></Route>


        {/* protected routes */}

        <Route path='/purchase/:id' element={
          <RequireAuth>
            <PurchaseProduct/>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<DashboardInitial/>}></Route>
          <Route path='my-profile' element={<MyProfile/>}></Route>
          <Route path='my-order' element={<MyOrder/>}></Route>
          <Route path='add-review' element={<AddReview/>}></Route>
          <Route path='add-regular-product' element={<AddRegularProduct/>}></Route>
          <Route path='add-discounted-product' element={<AddDiscuontedProduct/>}></Route>
          <Route path='all-users' element={<AllUsers/>}></Route>
          <Route path='all-orders' element={<AllOrders/>}></Route>
          <Route path='view-regular-product' element={<ViewRegularProduct/>}></Route>
          
         
        </Route>


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

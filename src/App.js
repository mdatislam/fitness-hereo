import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Home from './Pages/HomePage/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Secret/Login/Login';
import Signup from './Pages/Secret/Signup/Signup';
import Programs from './Pages/HomePage/Programs/Programs';
import SecurePage from './Pages/Secret/SecurePage/SecurePage';
import Booking from './Pages/Secret/Booking/Booking';
import { createContext, useState } from "react";
import ProgramDetail from './Pages/HomePage/ProgramDetail/ProgramDetail';

export const programContext=createContext()

function App() {
  const [Programs, setPrograms] = useState([]);
  return (
    <programContext.Provider value={[Programs, setPrograms]}>
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Programs' element={<Programs></Programs>}></Route>
        <Route path='/Program/:ProgramID' element={<ProgramDetail></ProgramDetail>}></Route>
        <Route path='/Pay' element={
          <SecurePage>
            <Booking></Booking>
          </SecurePage>
        }></Route>
        <Route path='/Blog' element={<Blog></Blog>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    </programContext.Provider>
  );
}

export default App;

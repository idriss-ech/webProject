import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Add from "./pages/add/Add";
import {Route, Routes} from 'react-router-dom'
import List from "./pages/list/List";
import Order from "./pages/orders/Order";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div className="app">
       <ToastContainer/>
       <Navbar/>
       <Sidebar/>
       <div className='content'>
       <Routes>
         <Route path='/add' element={<Add/>}/>
         <Route path='/list' element={<List/>}/>
         <Route path='/orders' element={<Order/>}/>
       </Routes>

       </div>
    </div>
  );
};

export default App;

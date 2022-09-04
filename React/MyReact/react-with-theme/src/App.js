// import Main from "./Main";
// import Dashboard from "./Pages/Dashboard";
// import Index from "./Pages/Index";
// import Table from "./Pages/Table";
// import Validation from "./Pages/Validation";
// import {BrowserRouter} from 'react-router-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add_Category from './Pages/Add_Category';
import Add_Customer from './Pages/Add_Customer';
import Add_Product from './Pages/Add_Product';
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login';
import Manage_Category from './Pages/Manage_Category';
import Manage_Customer from './Pages/Manage_Customer';
import Manage_Product from './Pages/Manage_Product';
import Table from './Pages/Table'
import Validation from './Pages/Validation'


function App() {
  return (
    // <div id="wrapper">
    //   {/* <Dashboard/> */}
    // {/* <Index/> */}
    // {/* <Table/> */}
    // {/* <Validation/> */}
    
    // </div>
    <BrowserRouter>
      <Routes>
          
          <Route path='/' element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path='manage-category' element={<Manage_Category/>}/>
          <Route path='add-category' element={<Add_Category/>}/>
          <Route path='add-customer' element={<Add_Customer/>}/>
          <Route path='manage-customer' element={<Manage_Customer/>}/>
          <Route path='add-product' element={<Add_Product/>}/>
          <Route path='manage-product' element={<Manage_Product/>}/>
          <Route path='form' element={<Validation/>}/>
          <Route path='tables' element={<Table/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

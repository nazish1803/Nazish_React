// import Main from "./Main";
// import Dashboard from "./Pages/Dashboard";
// import Index from "./Pages/Index";
// import Table from "./Pages/Table";
// import Validation from "./Pages/Validation";
// import {BrowserRouter} from 'react-router-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add_Category from './Pages/Add_Category';
import Add_Customer from './Pages/Add_Customer';
import Dashboard from './Pages/Dashboard'
import Manage_Category from './Pages/Manage_Category';
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
          <Route path="/" element={<Dashboard />}/>
          <Route path='manage-category' element={<Manage_Category/>}/>
          <Route path='add-category' element={<Add_Category/>}/>
          <Route path='add-customer' element={<Add_Customer/>}/>
          <Route path='form' element={<Validation/>}/>
          <Route path='tables' element={<Table/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

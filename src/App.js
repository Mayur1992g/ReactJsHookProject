import './App.css';
import FooterComponets from './componets/FooterComponets';
import HeaderComponent from './componets/HeaderComponent';
import ListEmployeeComponet from './componets/ListEmployeeComponet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEmployeeComponet from './componets/AddEmployeeComponet';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<ListEmployeeComponet />}></Route>
            <Route path='/employees' element={<ListEmployeeComponet />}></Route>
            <Route path='/add-employee' element={<AddEmployeeComponet />}></Route>
            <Route path="/edit-employee/:id" element={<AddEmployeeComponet />}></Route>

          </Routes>
        </div>
        <FooterComponets />
      </Router>
    </div>
  );
}

export default App;

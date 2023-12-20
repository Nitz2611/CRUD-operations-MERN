
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users';
import CreateUser from './CreateUser';
import UpdateUser from './UpdateUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />}/>
          <Route path="/create" element={<CreateUser />}/>
          <Route path="/update" element={<UpdateUser />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

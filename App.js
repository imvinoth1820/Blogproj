
//import './App.css';
import Navbar from './navbar/Navbar';
import Home from './screens/home/Home';
import  Createpost  from './create/Createpost';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Postdetail from './postdetail/Postdetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
               
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Createpost />} />
          <Route path='/post/:id' element={<Postdetail />}/>
          

        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

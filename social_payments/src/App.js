import './App.css';
import Home from './Components/Home';
import RegisterNewProduct from './Components/RegisterNewProduct';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">



<Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/register-new-product" element={<RegisterNewProduct/>} />
    
     </Routes>
   </Router>

    </div>
  );
}

export default App;

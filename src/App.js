import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
const App = () => {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/signin" element={<Signin />}/>
         <Route path="/signup" element={<Signup />}/>
         <Route />
       </Routes>
    </BrowserRouter>
  );
}

export default App;

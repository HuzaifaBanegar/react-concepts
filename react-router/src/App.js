 import './App.css';
import { Navbar } from './Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import {Contact} from './Pages/Contact'
import { About } from './Pages/About';
import { Projects } from './Pages/Projects';
import { Testimonials } from './Pages/Testimonials';
import { Skills } from './Pages/Skills';
function App() {
  let data={
    name:'Huzaifa',
    age:26
  }
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Routes>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About data={data}/>}></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/testimonials" element={<Testimonials/>}></Route>
          <Route path="/project" element={<Projects/>}></Route>
        </Routes>
      </div>
      
    </div>
  );
}

export default App;

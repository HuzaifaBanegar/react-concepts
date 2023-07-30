import Dashboard from './Components/Dashboard';
import DrawerAppBar from './Components/Navbar';
import './App.css';
import { Route, Routes } from "react-router-dom"
import AddTodos from './Components/AddTodos';
import { Provider } from "react-redux";
import store from './Utils/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <DrawerAppBar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}  />
            <Route path="/addTodo" element={<AddTodos/>}/> 
          </Routes>
      </div>
    </Provider>
  );
}

export default App;

import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Table from './Components/Table';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header/>}></Route>
          <Route path="table" element={<Table/>} ></Route>
          <Route path="form" element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;


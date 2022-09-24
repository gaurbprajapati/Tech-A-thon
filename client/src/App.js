import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import DefaultLayout from './components/DefaultLayout';
import './App.css';
import 'antd/dist/antd.less';
import { Button } from 'antd';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {

  return (
    <>
      <DefaultLayout />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

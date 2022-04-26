import './App.css';
import Home from './componets/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './componets/MyNavbar';
import MyFooter from './componets/MyFooter';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App()
{
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;

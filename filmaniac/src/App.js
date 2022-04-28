import './App.css';
import Home from './componets/Home'
import Person from './componets/Person'
import Library from './componets/Library'
import Detail from './componets/Detail'
import Favorite from './componets/Favorite'
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
        <Route path='/person' element={<Person />} />
        <Route path='/library' element={<Library />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;

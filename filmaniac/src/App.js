import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componets/Home'
import Person from './componets/Person'
import PersonDetail from './componets/PersonDetail'
import Favorite from './componets/Favorite'
import MyNavbar from './componets/MyNavbar';
import MyFooter from './componets/MyFooter';

function App()
{
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/person' element={<Person />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/:personId' element={<PersonDetail />} />
        {/* <Route path='/genre' element={<Genre />} /> */}
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;

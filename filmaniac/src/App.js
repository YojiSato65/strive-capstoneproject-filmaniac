import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componets/Home'
import Genre from './componets/Genre'
import Person from './componets/Person'
import PersonDetail from './componets/PersonDetail'
import Favorite from './componets/Favorite'
import MyNavbar from './componets/MyNavbar';
import MyFooter from './componets/MyFooter';
import Adventure from './componets/genres/Adventure';
import Comedy from './componets/genres/Comedy';
import Horror from './componets/genres/Horror';
import Family from './componets/genres/Family';
import Romance from './componets/genres/Romance';
import Animation from './componets/genres/Animation';

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
        <Route path='/adventure' element={<Adventure />} />
        <Route path='/comedy' element={<Comedy />} />
        <Route path='/horror' element={<Horror />} />
        <Route path='/family' element={<Family />} />
        <Route path='/romance' element={<Romance />} />
        <Route path='/animation' element={<Animation />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;

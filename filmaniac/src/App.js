import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './componets/Home'
import Genre from './componets/Genre'
import Person from './componets/favorites/Person'
import SearchPerson from './componets/SearchPerson'
import PersonDetail from './componets/PersonDetail'
import Favorite from './componets/Favorite'
import MyNavbar from './componets/MyNavbar';
import MyFooter from './componets/MyFooter';
// import Adventure from './componets/genres/Adventure';

function App()
{
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crew' element={<SearchPerson />} />
        <Route path='/favorite/person' element={<Person />} />
        <Route path='/favorite/movie' element={<Favorite />} />
        <Route path='/:personId' element={<PersonDetail />} />
        <Route path='/genre/:genre' element={<Genre />} />
      </Routes>
      <MyFooter />
    </BrowserRouter>
  );
}

export default App;

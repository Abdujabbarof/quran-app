import Header from './components/Header';
import './Main.scss'
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Surah from './pages/Surah';
import Surahs from './pages/Surahs';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/surahs' element={<Surahs />} />
          <Route path='/surahs/:id' element={<Surah />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

import './Main.scss'
import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import Surah from './pages/Surah';
import Surahs from './pages/Surahs';
import Taqvim from './pages/Taqvim';
import Footer from './components/Footer';
import { useContext } from 'react';
import { LangContext } from './components/LangContext';

function App() {

  const {lang} = useContext(LangContext)

  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/surahs' element={<Surahs />} />
          <Route path='/surahs/:id' element={<Surah control={lang} />} />
          <Route path='/taqvim' element={<Taqvim />}/>
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;

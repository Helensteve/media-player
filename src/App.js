import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Landingpage from './pages/Landingpage';
import Watchhistory from './pages/Watchhistory';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/watch' element={<Watchhistory />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

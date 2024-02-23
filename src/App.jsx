import './App.css';
import Home from './layout/Home';
import Header from './layout/Header';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<h1>About</h1>} />
        <Route path='/contact' element={<h1>contact</h1>} />
        <Route path='/login' element={<h1>login</h1>} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contract from './home Section/Contract';
import Footer from './home Section/Footer';
import Home from './home Section/Home';
import MyWork from './home Section/MyWork';
import NavBar from './home Section/NavBar';
import Skill from './home Section/Skill';

function App() {
  return (
    <div className='h-screen'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/skill' element={<Skill></Skill>}></Route>
        <Route path='/work' element={<MyWork></MyWork>}></Route>
        <Route path='/contract' element={<Contract></Contract>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

import './App.scss';
import Header from './components/header/Header';
import {Routes, Route} from 'react-router-dom'
import Admin from './components/admin/Order';
import Menu from './components/menu/Menu';
import Order from './components/order/Admin';

function App() {

  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' element={<Menu />}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
    </div>
  );
}

export default App;

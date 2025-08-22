import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SideNav from './Component/SideNav';

function App() {
  return (
    <div className="App">
      {/* <p>MultiVendor</p> */}
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='sidenav' element={<SideNav />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

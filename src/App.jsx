
import { Outlet } from 'react-router-dom'
import './App.css'
import navBg from '../src/assets/images/more/15.jpg'
import logo from '../src/assets/images/more/logo1.png'

function App() {

  return (
    <>
    <div className='position-relative'>
      <img style={{height: '80px'}} src={navBg} alt="" className="img-fluid w-100" />
      <div style={{top: '10px', }} className='d-flex gap-3 align-items-center justify-content-center w-100 position-absolute '>
        <img src={logo} style={{width: '50px'}} alt="" className="img-fluid" />
        <h3 className='text-white'>Espresso Emporium</h3>
      </div>
    </div>
      <Outlet></Outlet>
    </>
  )
}

export default App

import ToggleButton from '@mui/material/ToggleButton';
import LaptopIcon from '@mui/icons-material/Laptop';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

const Navbar = () => {

  return (
    <div className=''>
       <nav className="navbar justify-content-around">
        <h2 className="text-light">My Reads</h2>
        <div className='icons'>
      
     
        {/* I tried to resize the window on click but it's not working.. */}
        <ToggleButton className='ms-5' value="laptop" aria-label="laptop" onClick={ ()=>window.resizeBy(1024,600) }> 
          <LaptopIcon className='text-light' />
        </ToggleButton>
        
        <ToggleButton className='ms-2' value="smartphone" aria-label="smartphone">
          <SmartphoneIcon className='text-light'/>
        </ToggleButton>

     
        
        </div>
        </nav>
    </div>
  )
}



export default Navbar
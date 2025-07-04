import React from 'react';
import SideBarMenu from './SideBarMenu';
import './Admin.css'
import r1 from './r1.jpg'
import r2 from './r2.jpg'
import r3 from './r3.jpg'

function AdminListePlat() {
  const a = "nom"; 
  const b = "email";

  return (
    
    <div>
        <SideBarMenu/>
      <div className='l1'>
        <div className='img'> 
          <img src={r1} className='' alt='' ></img>
        <img src={r2} className='' alt=''  ></img>
        <img src={r3} className='' alt='' ></img>
        </div>
        <br></br>
        <p>Listes des Client</p>

        <div className='list'>
            <div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div>
            <div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div>
            <div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div>
            <div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div><div className='p1'>
              <span className='d1'>{a}</span><span className='d2'>{b}</span>
              <hr></hr>
            </div>


        </div>
        
      </div>
      
      
      
    </div>
  );
}

export default AdminListePlat;
import React from 'react'
import MediaQuery from 'react-responsive'
import BottomNav from '../Components/BottomNav'
import NavbarLogged from '../Components/NavbarLogged'
export default function Orders() {
  return (
    <div>





       {/* desktop nav */}
       <MediaQuery minDeviceWidth={1224}>
          <NavbarLogged/>
        </MediaQuery>

        {/* mobile bottom nav */}
      <MediaQuery maxDeviceWidth={1224}>
         <BottomNav value={1}/>
      </MediaQuery>
    </div>
  )
}

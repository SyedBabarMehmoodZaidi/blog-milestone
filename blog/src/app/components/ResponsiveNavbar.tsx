'use client'

import React, { useState } from 'react';
import MobNavbar from './MobNavbar';
import Header from './Header';


const ResponsiveNavbar = () => {
const [showNav, setShowNav]= useState(false);
const openNavHandler = () =>setShowNav(true);
const closeNavHandler = () =>setShowNav(false);
  return (
    <div>
      <Header openNav={openNavHandler}/>
      <MobNavbar showNav={showNav} closeNav={closeNavHandler}/>

    </div>
  )
}

export default ResponsiveNavbar

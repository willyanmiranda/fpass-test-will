import React from 'react'
import marvelLogo from "../../assets/images/marvel-logo.png";
import { AppHeader, AppImg } from './style';

const Header = () => {
  return (
    <AppHeader>
        <AppImg src={marvelLogo} />        
    </AppHeader>
  )
}

export default Header
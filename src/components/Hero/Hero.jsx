// ---------------- React and redux tools imports---------------
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ----------------Components imports-----------------------------------
import NavList from '../../components/NavList/NavList';

// ----------------Icons import-----------------------------------
import camper from '../../assets/icons/camper.svg'

// ----------------Styles import-----------------------------------
import style from "./hero.module.css";

const Hero = () => {

  return (

 <div className={style.hero}>
  <NavList />
  <img className={style.logo} alt='logo' width="200" height="200" src="https://www.wildearthcampers.com/wp-content/uploads/logo.svg"/>
  <h1 className={style.hero_text} >Buy your dream campers & RVs</h1>
</div> 
  );
};

export default Hero
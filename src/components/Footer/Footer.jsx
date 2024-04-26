// ---------------- React and redux tools imports---------------
import React from 'react';

// ----------------Icons import-----------------------------------
import camper from '../../assets/icons/camper.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import youtube from '../../assets/icons/youtube.svg'

// ----------------Styles import-----------------------------------
import style from './footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_lists_wrapper}>
        <div className={style.footer_list_wrapper}>
          <p className={style.footer_title}>Services</p>

          <ul className={style.footer_list}>
            <li className={style.footer_list_item}><a href=""></a>All campers</li>
            <li className={style.footer_list_item}><a href=""></a>Rent campers</li>
            <li className={style.footer_list_item}><a href=""></a>Cmaper with a dog</li>
            <li className={style.footer_list_item}><a href=""></a>Equipment & services</li>
            <li className={style.footer_list_item}><a href=""></a>Electric-campers</li>
          </ul>
        </div>

        <div>
          <p className={style.footer_title}>About us</p>

          <ul className={style.footer_list}>
            <li className={style.footer_list_item}><a href=""></a>Work with us</li>
            <li className={style.footer_list_item}><a href=""></a>Become a partner</li>
            <li className={style.footer_list_item}><a href=""></a>Contacts</li>
            <li className={style.footer_list_item}><a href=""></a>FAQ</li>
            <li className={style.footer_list_item}><a href=""></a>Photos</li>
          </ul>
        </div>
      </div>
      <div className={style.footer_links_wrapper}>
        <div className={style.footer_links}>
          <a className={style.footer_link} href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img className={style.footer_icon} src={facebook} alt="close icon" />
          </a>
          <a className={style.footer_link} href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img className={style.footer_icon} src={instagram} alt="close icon" />
          </a>
          <a className={style.footer_link} href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img className={style.footer_icon} src={youtube} alt="close icon" />
          </a>
          <a className={style.footer_link} href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <img className={style.footer_icon} src={linkedin} alt="close icon" />
          </a>
        </div>
      </div>

      <div className={style.footer_copyright}>
        <img className={style.logo} src={camper} alt="close icon" />
        <p>© 2024 FreewayCamper</p>
      </div>
    </div>
  );
};

export default Footer;

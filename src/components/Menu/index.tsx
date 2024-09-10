import { Link, useLocation } from 'react-router-dom';
import styles from './menu.module.css';
import MenuLink from '../MenuLink';
import React from 'react';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
               <MenuLink to="/">
                Home
               </MenuLink>

               <MenuLink to="/criar"> 
                Criar 
               </MenuLink>
               
               <MenuLink to="/galeria"> 
                Galeria 
               </MenuLink>
            </nav>
        </header>
    );
}


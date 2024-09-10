import { Link, useLocation } from "react-router-dom";
import styles from "./menuLink.module.css";
import React from "react";

// Definindo a tipagem das props
interface MenuLinkProps {
  children: React.ReactNode;
  to: string;
}

export default function MenuLink({ children, to }: MenuLinkProps) {
  const localizacao = useLocation(); //Hook do React Router Dom, que retorna o que estou atribuindo na const localização (link destacado)

  return (
    //O componente Link funciona como a tag '<a></a>' e o 'to' como o href - Eles recarregam a página com dinamismo, sem aparecer o x quando a página recarrega.
    <Link   
      className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `}
      to={to}
    >
      {children} 
    </Link>
  );
}



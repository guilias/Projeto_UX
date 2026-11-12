import { NavLink } from 'react-router-dom';
import Icon from './Icon';

export default function MobileNav() {
  return <nav className="mobile-nav" aria-label="Navegação mobile">
    <NavLink to="/" end><Icon>home</Icon><span>Início</span></NavLink>
    <NavLink to="/explorar"><Icon>explore</Icon><span>Explorar</span></NavLink>
    <NavLink to="/avaliacoes"><Icon>star</Icon><span>Avaliações</span></NavLink>
    <NavLink to="/comunidade"><Icon>groups</Icon><span>Comunidade</span></NavLink>
    <NavLink to="/perfil"><Icon>person</Icon><span>Perfil</span></NavLink>
  </nav>;
}

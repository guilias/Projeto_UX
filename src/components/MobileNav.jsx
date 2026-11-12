import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";

const aliases = {
  "/avaliacoes": ["/fazer-avaliacao", "/rascunhos"],
  "/perfil": ["/editar-perfil"],
};

export default function MobileNav() {
  const { pathname } = useLocation();
  const alias = (to) => {
    const isAlias = (aliases[to] || []).includes(pathname);
    return ({ isActive }) => (isActive || isAlias ? "active" : "");
  };
  return (
    <nav className="mobile-nav" aria-label="Navegação mobile">
      <NavLink to="/" end>
        <Icon>home</Icon>
        <span>Início</span>
      </NavLink>
      <NavLink to="/explorar">
        <Icon>explore</Icon>
        <span>Explorar</span>
      </NavLink>
      <NavLink to="/avaliacoes" className={alias("/avaliacoes")}>
        <Icon>star</Icon>
        <span>Avaliações</span>
      </NavLink>
      <NavLink to="/comunidade">
        <Icon>groups</Icon>
        <span>Comunidade</span>
      </NavLink>
      <NavLink to="/perfil" className={alias("/perfil")}>
        <Icon>person</Icon>
        <span>Perfil</span>
      </NavLink>
    </nav>
  );
}

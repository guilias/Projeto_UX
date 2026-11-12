import { NavLink, useLocation } from "react-router-dom";
import Icon from "./Icon";

const links = [
  ["/", "home", "Início"],
  ["/explorar", "explore", "Explorar"],
  ["/avaliacoes", "star", "Avaliações"],
  ["/comunidade", "groups", "Comunidade"],
  ["/perfil", "person", "Meu perfil"],
];

const categories = [
  ["/categorias/acao", "swords", "Ação"],
  ["/categorias/rpg", "layers", "RPG"],
  ["/categorias/aventura", "near_me", "Aventura"],
  ["/categorias/terror", "skull", "Terror"],
  ["/categorias/estrategia", "military_tech", "Estratégia"],
];

const aliases = {
  "/avaliacoes": ["/fazer-avaliacao", "/rascunhos"],
  "/perfil": ["/editar-perfil"],
};

function NavigationLink({ to, icon, children, onClick }) {
  const { pathname } = useLocation();
  const isAlias = (aliases[to] || []).includes(pathname);
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `nav-item ${isActive || isAlias ? "active" : ""}`
      }
      onClick={onClick}
    >
      <Icon>{icon}</Icon>
      <span>{children}</span>
    </NavLink>
  );
}

export default function Sidebar({ open, onClose }) {
  return (
    <aside
      className={`sidebar ${open ? "open" : ""}`}
      id="sidebar"
      aria-label="Navegação principal"
    >
      <nav className="nav-group sidebar-primary-nav" aria-label="Seções">
        {links.map(([to, icon, label]) => (
          <NavigationLink key={to} to={to} icon={icon} onClick={onClose}>
            {label}
          </NavigationLink>
        ))}
      </nav>
      <div className="sidebar-divider" />
      <nav className="nav-group" aria-label="Categorias">
        <span className="nav-section-title">Categorias</span>
        {categories.map(([to, icon, label]) => (
          <NavigationLink key={to} to={to} icon={icon} onClick={onClose}>
            {label}
          </NavigationLink>
        ))}
      </nav>
      <div className="sidebar-divider" />
      <nav className="nav-group" aria-label="Sistema">
        <span className="nav-section-title">Sistema</span>
        <NavigationLink to="/configuracoes" icon="settings" onClick={onClose}>
          Configurações
        </NavigationLink>
        <NavigationLink to="/suporte" icon="help" onClick={onClose}>
          Suporte
        </NavigationLink>
      </nav>
    </aside>
  );
}

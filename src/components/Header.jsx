import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function Header({ onMenuClick, menuOpen, showMenu = true }) {
  return (
    <header className="topbar">
      {showMenu && (
        <button
          className="menu-button"
          type="button"
          onClick={onMenuClick}
          aria-label={
            menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
          }
          aria-expanded={menuOpen}
          aria-controls="sidebar"
        >
          <span className="menu-bars">
            <i />
            <i />
            <i />
          </span>
        </button>
      )}
      <Link to="/" className="brand">
        <img src="/assets/checkpoint_icon.png" alt="Checkpoint" />
        <span>checkpoint</span>
      </Link>
      <label className="search-bar" htmlFor="global-search">
        <Icon>search</Icon>
        <input
          id="global-search"
          type="search"
          placeholder="Buscar jogos, usuários, tópicos..."
          aria-label="Buscar jogos, usuários e tópicos"
        />
      </label>
      <div className="topbar-actions">
        <button className="icon-btn" type="button" aria-label="Notificações">
          <Icon>notifications</Icon>
        </button>
        <Link
          to="/perfil"
          className="user-avatar-sm"
          aria-label="Abrir meu perfil"
        >
          <Icon>person</Icon>
        </Link>
      </div>
    </header>
  );
}

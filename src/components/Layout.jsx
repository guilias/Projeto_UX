import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import { ToastViewport } from "./Toast";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isBare = pathname === "/configuracoes" || pathname === "/suporte";
  const toggleSidebar = () => setSidebarOpen((open) => !open);
  const mainRef = useRef(null);
  const rotaAnterior = useRef(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (rotaAnterior.current === pathname) return;
    rotaAnterior.current = pathname;
    mainRef.current.focus();
  }, [pathname]);

  useEffect(() => {
    if (!sidebarOpen) return;
    const aoTeclar = (event) => {
      if (event.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, [sidebarOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo principal
      </a>
      <Header
        onMenuClick={toggleSidebar}
        menuOpen={sidebarOpen}
        showMenu={!isBare}
      />
      <div className={`app-container ${isBare ? "bare-container" : ""}`}>
        {!isBare && (
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}
        <main
          id="main-content"
          ref={mainRef}
          tabIndex="-1"
          className={`main-wrapper react-page ${isHome ? "" : "full-width"}`}
        >
          {children}
        </main>
      </div>
      <MobileNav />
      <ToastViewport />
    </>
  );
}

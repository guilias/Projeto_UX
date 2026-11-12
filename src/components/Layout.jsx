import { useEffect, useState } from "react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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

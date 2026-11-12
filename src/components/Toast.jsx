import { createContext, useContext, useEffect, useState } from "react";
import Icon from "./Icon";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (text, icon = "check") =>
    setToast({ id: Date.now(), text, icon });

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  return (
    <ToastContext.Provider value={{ toast, showToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}

export function ToastViewport() {
  const { toast } = useToast();
  return (
    <div className="toast-area" role="status" aria-live="polite">
      {toast && (
        <div className="toast" key={toast.id}>
          <Icon>{toast.icon}</Icon>
          <span>{toast.text}</span>
        </div>
      )}
    </div>
  );
}

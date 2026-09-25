import { useEffect } from "react";
import { useAppSelector } from "./redux/hooks";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const theme = useAppSelector(
    (state) => state.theme.mode
  );

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    root.style.colorScheme = theme;

    localStorage.setItem(
      "portfolio-theme",
      theme
    );
  }, [theme]);

  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        text-slate-900
        transition-colors
        duration-300

        dark:bg-slate-950
        dark:text-white

        selection:bg-cyan-400/30
        selection:text-slate-900
        dark:selection:text-white
      "
    >
      <AppRoutes />
    </div>
  );
};

export default App;
// "use client";

// import { createContext, useContext, useEffect, useState } from "react";

// type Theme = "light" | "dark";

// interface ThemeContextProps {
//   theme: Theme;
//   toggleTheme: () => void;
// }

// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>("light");
//   const [mounted, setMounted] = useState(false);

//   // Load theme from localStorage on mount (external system → allowed)
//   useEffect(() => {
//     const stored = localStorage.getItem("theme") as Theme | null;
//     if (stored) setTheme(stored);
//     setMounted(true); // Allowed: this runs only after reading external storage
//   }, []);

//   // Sync theme to HTML class (external side-effect → allowed)
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark");
//   }, [theme]);

//   const toggleTheme = () => {
//     const next = theme === "dark" ? "light" : "dark";
//     setTheme(next);
//     localStorage.setItem("theme", next);
//   };

//   if (!mounted) return null;

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => {
//   const ctx = useContext(ThemeContext);
//   if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
//   return ctx;
// };

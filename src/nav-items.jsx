import { Home, Code } from "lucide-react";
import Index from "./pages/Index.jsx";
import SnippetsManager from "./pages/SnippetsManager.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Snippets",
    to: "/snippets",
    icon: <Code className="h-4 w-4" />,
    page: <SnippetsManager />,
  },
];
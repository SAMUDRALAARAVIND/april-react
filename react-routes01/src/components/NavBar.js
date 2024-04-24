import { useContext } from "react"
import { ThemeContext } from "../App";
import "../styles/navbar.css";
import { Logo } from "./Logo";

const NavBar = () => {
    const { theme, colors, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="navbar" style={colors[theme]} >
            <Logo />
            <input placeholder="Search for a topic" />
            <a href="#">Docs</a>
            <a href="#">Reference</a>
            <a href="#">Community</a>
            <a href="#">Blogs</a>
            <button className="material-icons" onClick={toggleTheme}>{theme === "light" ? "light_mode" : "dark_mode"}</button>
        </nav>
    )
}

export default NavBar
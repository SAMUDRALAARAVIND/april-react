import { Logo } from "./Logo"
import "../styles/content.css";
import { useContext } from "react";
import { ThemeContext } from "../App";

const Content = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="content">
            <Logo />
            <h1>React</h1>
            <p>The library for web and native user interfaces</p>
            <div className="btn-group">
                <button style={styles.btnStyle[theme]}>Learn React</button>
                <button>API Reference</button>
            </div>
        </div>
    )
}

const styles = {
    btnStyle: {
        light: {
            color: 'blue',
            backgroundColor: 'yellow'
        },
        dark: {
            color: 'orange',
            backgroundColor: '#087EA4'
        }
    }
}

export default Content
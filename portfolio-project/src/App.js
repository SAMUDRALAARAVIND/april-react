import { About } from "./components/About";
import { RightSection } from "./components/RightSection";
import "./styles/app.css";

export const App = () => {
    return (
        <div className="app">
            <About />
            <RightSection />
        </div>
    );
}
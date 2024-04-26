import { Link } from "react-router-dom"

export const NotFound = () => {
    return <div>
        <h1>This is not the page you're looking for</h1>
        <p>Please <Link to="/login">click here</Link> to navigate to home</p>
    </div>
}
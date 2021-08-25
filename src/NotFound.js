import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <div className="not-found">
            <h2> The page that you're looking for is not available</h2>
            <Link to='/'>Home Page</Link>
        </div>
    )
}

export default NotFound;
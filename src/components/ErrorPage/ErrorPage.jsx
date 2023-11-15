import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="errorPage">
            <h1>Oh no! This page does not exist!</h1>
            <p><i>{error.statusText || error.message}</i></p>
            <Link to="/">Go back to home page by clicking here</Link>
        </div>
    )
}

export default ErrorPage;
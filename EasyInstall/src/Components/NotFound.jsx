import {Link} from 'react-router-dom';
function NotFound()
{
    return(
        <>
        <h1>404 not found!</h1>
        <Link to='/'>back to Home</Link>
        </>
    )
}

export default NotFound;
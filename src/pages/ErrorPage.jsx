import { Link } from 'react-router-dom'
import image from '../assets/error.jpg'
import ContentContainer from '../components/UI/ContentContainer'

function ErrorPage()
{
    return (
        <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center"}}>
            <ContentContainer>
                <h1>Error (Something went wrong!)</h1>
                <img style={{display: "block", padding: "1rem 0", width: "100%"}} src={image} />
                <Link to='/' style={{padding: "1rem 2rem", border: "1px solid var(--main-color)", display: "block", textDecoration: "none", color: "white", fontWeight: "700"}}>Go to the homepage</Link>
            </ContentContainer>
        </div>
    )
}

export default ErrorPage
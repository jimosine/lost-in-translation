// Import required modules and dependencies
import { Link } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import { Navbar, Container, Nav } from 'react-bootstrap'

//Component for rendering the navigation bar at the top of our application
const NavBar = () => {
    // Retrieve the user from the user context
    const { user } = useUser()


    return (
        // Render a Bootstrap navbar component with a brand and links to Translations & Profile
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand >Lost in translations</Navbar.Brand>
                {/* If the user is logged in, render the links */}
                {user !== null &&
                    <Nav className="me-auto">
                        <Nav.Link > <Link className="text-decoration-none text-white" to="/translations"> Translations </Link></Nav.Link>
                        <Nav.Link > <Link className="text-decoration-none text-white" to="/profile"> Profile </Link></Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>

    )
}

// Export the component
export default NavBar
import { Link } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {

    const { user } = useUser()


    return (
        <Navbar className="navbar">
            <Container>
                <Navbar.Brand >Lost in translations</Navbar.Brand>
                {user !== null &&
                    <Nav className="me-auto">
                        <Nav.Link > <Link className="text-decoration-none text-white" to="/translations"> Translations </Link></Nav.Link>
                        <Nav.Link > <Link className="text-decoration-none text-white" to="/profile"> Profile </Link></Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
        // )





        // <nav>
        //     <ul>
        //         <li>Sign Language Translations</li>
        //     </ul>

        //     { user !== null &&
        //         <ul>
        //             <li>
        //                 <NavLink to="/translations">Translations</NavLink>
        //             </li>
        //             <li>
        //                 <NavLink to="/profile">Profile</NavLink>
        //             </li>
        //         </ul>
        //     }
        // </nav>
    )
}

export default NavBar
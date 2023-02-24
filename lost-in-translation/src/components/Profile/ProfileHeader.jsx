// Import required modules and dependencies
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

//This component creates a header for the profile page which returns the user's name
//provided as the prop. It also gives a description of the page's content and is
//built using Bootstrap components
const ProfileHeader = ({ username }) => {
    return (
        <header>
            <Container className="profile-header" fluid>
                <Row>
                    <Col>
                        <h4> Hello, welcome back {username}.</h4>
                        <p>You can view your 10 most recent translations on this page or clear your history.</p>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

// Export the component
export default ProfileHeader
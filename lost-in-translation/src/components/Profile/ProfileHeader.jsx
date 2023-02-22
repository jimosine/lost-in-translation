import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

export default ProfileHeader
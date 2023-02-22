import LoginForm from '../components/Login/LoginForm'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Login = () => {
    return (
        <>
            {/* <Container> */}
            <Card className="text-center">
                {/* <Card.Header>Featured</Card.Header> */}
                <Card.Body>
                    <Card.Title>Lost in Translation</Card.Title>
                    <Card.Text>
                        Get started
        </Card.Text>
                    <LoginForm />
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>
            {/* </Container> */}
        </>
    )
}

export default Login
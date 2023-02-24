// Import required modules and dependencies
import ListGroup from 'react-bootstrap/ListGroup';

// This component takes a single translation as prop, and renders it
// a Bootstrap ListGroup item component. This component is used for
// the ProfileHistory component
const ProfileHistoryItem = ({ translation }) => {

    return <ListGroup.Item as="li">{translation}</ListGroup.Item>

}

// Export the component
export default ProfileHistoryItem
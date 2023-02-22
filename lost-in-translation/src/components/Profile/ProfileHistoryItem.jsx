import ListGroup from 'react-bootstrap/ListGroup';

const ProfileHistoryItem = ({ translation }) => {

    // return <li>{translation}</li>
    return <ListGroup.Item as="li">{translation}</ListGroup.Item>

}

export default ProfileHistoryItem
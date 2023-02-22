import ProfileHistoryItem from "./ProfileHistoryItem"

import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';


const ProfileHistory = ({ translations }) => {

    const translationsList = translations.slice(-10).map(
        (translation, index) => <ProfileHistoryItem key={translation + '-' + index} translation={translation} />)
    //index om duplicate translations unique key te geven


    return (
        <section>
            <h4>Your translation history</h4>
            <ListGroup as="ol" numbered>
                {translationsList}
            </ListGroup>
            {/* <ul>
                {translationsList}
            </ul> */}
        </section>
    )
}

export default ProfileHistory
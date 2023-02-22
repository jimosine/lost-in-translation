import ProfileHistoryItem from "./ProfileHistoryItem"

import ListGroup from 'react-bootstrap/ListGroup';


const ProfileHistory = ({ translations }) => {

    const translationsList = translations.slice(-10).map(
        (translation, index) => <ProfileHistoryItem key={translation + '-' + index} translation={translation} />)
    //index om duplicate translations unique key te geven


    return (
        <section>
            <h4>Your translation history: </h4>
            <ListGroup as="ol" numbered>
                {translationsList}
            </ListGroup>
        </section>
    )
}

export default ProfileHistory
// Import required modules and dependencies
import ProfileHistoryItem from "./ProfileHistoryItem"
import ListGroup from 'react-bootstrap/ListGroup';

// This component takes a "translations" prop which is an array of user's previous translations, 
// shows the last 10 translations, and renders them as a list using the "ProfileHistoryItem" component.
const ProfileHistory = ({ translations }) => {

    // The "translationsList" variable is created by mapping over the "translations" array.
    // It only shows the last 10 translations and creates a new "ProfileHistoryItem" component for each one.
    const translationsList = translations.slice(-10).map(
        (translation, index) => <ProfileHistoryItem key={translation + '-' + index} translation={translation} />)

    // This component renders a title "Your translation history:" and a list of translations.
    // The list is an ordered ListGroup with each translation rendered as a ProfileHistoryItem.
    return (
        <section>
            <h4>Your translation history: </h4>
            <ListGroup as="ol" numbered>
                {translationsList}
            </ListGroup>
        </section>
    )
}

// Export the component
export default ProfileHistory
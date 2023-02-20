import ProfileHistoryItem from "./ProfileHistoryItem"

const ProfileHistory = ({ translations }) => {

    const translationsList = translations.map(
        (translation, index) => <ProfileHistoryItem key={translation + '-' + index} translation={translation} />)

    return (
        <section>
            <h4>Your translation history</h4>
            <ul>
                {translationsList}
            </ul>
        </section>
    )
}

export default ProfileHistory
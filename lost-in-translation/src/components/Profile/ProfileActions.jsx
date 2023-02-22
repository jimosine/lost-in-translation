import { translationClearHistory } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave, } from "../../utils/storage"

import Stack from 'react-bootstrap/Stack';
import { Container } from "react-bootstrap";


const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
        console.log("yo");
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    const handleClearHistoryClick = async () => {

        if (!window.confirm('Are you sure?\nThis can not be undone!')) {
            return
        }
        const [clearError] = await translationClearHistory(user.id)

        if (clearError !== null) {
            //do something about this
            console.log("clearHistory error: " + clearError);
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }
        setUser(updatedUser)
        storageSave(STORAGE_KEY_USER, updatedUser)


    }

    return (
        <section>
            <h4>Profile actions</h4>
            <Container>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <button className="clear-history-button" onClick={handleClearHistoryClick} > Clear history </button>
                    <button className="logout-button" onClick={handleLogoutClick} > Logout</button>
                </Stack>
            </Container>
        </section>
    )
}

export default ProfileActions
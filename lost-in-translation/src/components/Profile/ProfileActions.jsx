import { Link } from "react-router-dom"
import { translationClearHistory } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave, } from "../../utils/storage"

const ProfileActions = () => {

    const { user, setUser } = useUser()

    const handleLogoutClick = () => {
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
            <button onClick={handleClearHistoryClick}> Clear history </button>
            <button onClick={handleLogoutClick}> Log out </button>
        </section>
    )
}

export default ProfileActions
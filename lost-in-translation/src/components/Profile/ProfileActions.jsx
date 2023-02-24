// Import required modules and dependencies
import { translationClearHistory } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave, } from "../../utils/storage"

import Stack from 'react-bootstrap/Stack';

// Render component that provides a section of buttons for the user to perform actions on their profile.
// The two actions that a user can perform are: logging out and clearing its translations history.
const ProfileActions = () => {

    // Get user state from context
    const { user, setUser } = useUser()

    //Handles logout click event
    const handleLogoutClick = () => {
        // Show confirmation dialog
        if (window.confirm('Are you sure?')) {
            // Delete user data from local storage
            storageDelete(STORAGE_KEY_USER)
            // Set user to null in UserContext
            setUser(null)
        }
    }

    // Handles clear history click event
    const handleClearHistoryClick = async () => {
        // Show confirmation dialog
        if (!window.confirm('Are you sure?\nThis can not be undone!')) {
            return
        }
        // Clear translation history for current user via API
        const [clearError] = await translationClearHistory(user.id)

        // Handle any errors and log the error message to console
        if (clearError !== null) {
            console.log("clearHistory error: " + clearError);
            return
        }

        // Update user translations to empty array
        const updatedUser = {
            ...user,
            translations: []
        }
        // Update user in our UserContext
        setUser(updatedUser)
        // Save updated user data to local storage
        storageSave(STORAGE_KEY_USER, updatedUser)
    }

    return (
        <section>
            <h4>Profile actions</h4>
            {/* Render Clear history and Logout buttons using Bootstrap Stack component */}
            <Stack gap={2} className="col-md-5 mx-auto">
                <button className="clear-history-button" onClick={handleClearHistoryClick} > Clear history </button>
                <button className="logout-button" onClick={handleLogoutClick} > Logout</button>
            </Stack>
        </section>
    )
}

// Export the component
export default ProfileActions
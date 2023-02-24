// Import required modules and dependencies
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileHistory from "../components/Profile/ProfileHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

// Renders the profile page existing from two rows. The first row displays a ProfileHeader component
// The second row consists of two columns:
// The left column displays the ProfileHistory component, which shows a history of the user's translations, 
// The right column displays the ProfileActions component, which shows two buttons to clear history & logout
const Profile = () => {

    // Get current user's information from UserContext
    const { user } = useUser()

    // Return component JSX
    return (
        <>
            <div className="container">
                <div className="row mt-5">
                    {/* Display user's name using ProfileHeader component */}
                    <ProfileHeader username={user.username} />
                    {/* Display history of user's translations using ProfileHistory component */}
                    <div className="col-md-6">
                        <ProfileHistory translations={user.translations} />
                    </div>
                    {/* Display buttons for deleting history and logging out using ProfileActions component */}
                    <div className="col-md-6">
                        <ProfileActions />
                    </div>
                </div>
            </div>
        </>
    )
}

// Wrap component with withAuth higher-order component and export as default.
// Now profile can only be reached if the user is logged in, otherwise is
// redirected to Login
export default withAuth(Profile)
import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileHistory from "../components/Profile/ProfileHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

const Profile = () => {

    const { user } = useUser()

    return (
        <>
            <div class="container">
                <div class="row mt-5">
                    <ProfileHeader username={user.username} />
                    <div class="col-md-6">
                        <ProfileHistory translations={user.translations} />

                    </div>
                    <div class="col-md-6">
                        <ProfileActions />
                    </div>
                </div>
            </div>
        </>
    )
}
export default withAuth(Profile)
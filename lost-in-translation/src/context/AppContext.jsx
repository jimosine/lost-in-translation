// Import required modules and dependencies
import UserProvider from "./UserContext"

// Component that gives its children access to the user data provided by the UserProvider component
// All of the components rendered inside AppContext (e.g. its children) can now reach the UserContext
const AppContext = ({ children }) => {

    return (
        <UserProvider>
            { children}
        </UserProvider>
    )
}

// Export the component
export default AppContext
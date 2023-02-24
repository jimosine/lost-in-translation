// Import required modules and dependencies
import { Navigate } from "react-router-dom"
import { useUser } from "../context/UserContext"

// A Higher-Order Component (HOC) that wraps around another component and adds authentication check
const withAuth = Component => props => {
    // Get the user state from the UserContext using the useUser custom hook
    const { user } = useUser()

    // If user is authenticated, render the component with props
    if (user !== null) {
        return <Component {...props} />
    }
    // Otherwise, redirect to the home page using the Navigate component from react-router-dom
    else {
        return <Navigate to="/" />
    }
}

// Export withAuth as the default export of the module
export default withAuth
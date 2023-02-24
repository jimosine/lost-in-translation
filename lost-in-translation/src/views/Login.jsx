// Import required modules and dependencies
import LoginForm from '../components/Login/LoginForm'

// The purpose of this component is to render a login page with a background composed of two shapes 
// and an instance of the LoginForm component for users to input their login credentials.
const Login = () => {
    return (
        <>
            {/* Create a background for the login form with two shapes for styling */}
            {/* Are styled in the index.css */}
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            {/* Add LoginForm component */}
            <LoginForm />
        </>
    )
}

// Export the Login component as the default export of this module
export default Login
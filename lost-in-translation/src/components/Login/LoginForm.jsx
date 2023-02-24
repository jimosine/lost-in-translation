// Import required modules and dependencies
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { useState, useEffect } from 'react'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys'

// Configuration object for username input validation
const usernameConfig = {
    required: true,
    minLength: 3
}

// Component for rendering the login form
const LoginForm = () => {
    // Hooks for managing form validation and user state
    const { register, handleSubmit, formState: { errors } } = useForm(); // Register form fields and validation rules
    const { user, setUser } = useUser(); // Get user state from context
    const navigate = useNavigate(); // Hook for navigating between pages

    // Local state hooks for managing loading status and API errors
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    // Side effect hook to automatically redirect to profile page if user is already logged in
    useEffect(() => {
        if (user !== null) {
            navigate('/profile')
        }
    }, [user, navigate])

    // Event handler for form submission
    const onSubmit = async ({ username }) => {
        setLoading(true); // Show loading indicator
        const [error, userResponse] = await loginUser(username); // Call login API endpoint
        if (error !== null) {
            setApiError(error); // Set error state if API call fails
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse); // Save user data to local storage
            setUser(userResponse); // Set user state in context
        }
        setLoading(false); // Hide loading indicator
    }

    // Function for rendering error message based on input validation rules
    const errorMessage = (() => {
        if (!errors.username) {
            return null; // No error message if input is valid
        }

        if (errors.username.type === 'required') {
            return <span> Username is required</span>; // Error message for missing input
        }

        if (errors.username.type === 'minLength') {
            return <span> Username is too short (min. 3)</span>; // Error message for input length requirement
        }
    })()

    // Render the login form
    return (
        <>
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <h3>Login Here</h3>
                <fieldset>
                    <label className="login-label" htmlFor="username">Username</label>
                    <input className="login-input"
                        type="text"
                        placeholder="What's your name?"
                        {...register("username", usernameConfig)} // Register username input with validation rules
                    />
                    {/* Render error message if input is invalid */}
                    {errorMessage}
                </fieldset>

                <button className="login-button" type="submit" disabled={loading} >Continue</button>
                {/* Loading indicator shown during API call */}
                {loading && <p> Logging in... </p>}
                {/* Error message shown if API call fails */}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}

// Export the component
export default LoginForm
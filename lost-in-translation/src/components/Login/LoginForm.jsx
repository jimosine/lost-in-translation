import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { useState, useEffect } from 'react'
import { storageSave } from '../../utils/storage'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../context/UserContext'
import { STORAGE_KEY_USER } from '../../const/storageKeys'

const usernameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    // HOOKS
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { user, setUser } = useUser()
    const navigate = useNavigate()

    // Local State
    const [loading, setLoading] = useState(false)
    const [apiError, setApiError] = useState(null)

    // Side Effects
    useEffect(() => {
        if (user !== null) {
            navigate('/profile')
        }
        console.log('User has changed!', user);
    }, [user, navigate]) //Empty dependecies -> only run once

    // Event Handlers
    const onSubmit = async ({ username }) => {
        setLoading(true)
        const [error, userResponse] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        setLoading(false)
    }

    //Render Functions
    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span> Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span> Username is too short (min. 3)</span>
        }
    })()

    return (
        <>
            <h2> What's your name?</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="username"> Username: </label>
                    <input
                        type="text"
                        placeholder="Username"
                        {...register("username", usernameConfig)}
                    />
                    {errorMessage}

                </fieldset>

                <button type="submit" disabled={loading} >Continue</button>
                {loading && <p> Logging in... </p>}
                {apiError && <p>{apiError}</p>}
            </form>
        </>
    )
}

export default LoginForm
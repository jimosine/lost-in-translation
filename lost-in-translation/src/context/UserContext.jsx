// Import required modules and dependencies
import { createContext, useContext, useState } from "react";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

// Create a new context for user-related data
const UserContext = createContext()

// Create a custom hook to access the user-related data in the UserContext
export const useUser = () => {
    return useContext(UserContext)
}

// Create a provider component for the UserContext
const UserProvider = ({ children }) => {

    // Initialize user state from local storage using the `storageRead` utility function
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER))

    // Define an object representing the state of the UserContext
    const state = {
        user,
        setUser
    }

    // Return the UserContext Provider component with state as the value and the child components
    return (
        <UserContext.Provider value={state}>
            { children}
        </UserContext.Provider>
    )
}

// Export the UserProvider component as the default export of the module
export default UserProvider
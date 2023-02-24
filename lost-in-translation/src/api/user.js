// This file defines three functions for interacting with an API to check for
// and create user accounts, and to log users in.


import { createHeaders } from './index'

// Get the API URL from the environment variables
const apiUrl = process.env.REACT_APP_API_URL

// Define a function to check if a user exists
const checkForUser = async (username) => {
    try {
        // Send a GET request to the API with the `username` parameter
        const response = await fetch(`${apiUrl}?username=${username}`)
        if (!response.ok) {
            throw new Error("Could not complete request.")
        }
        // Parse the response as JSON and return it
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        // If an error occurs, return the error message and an empty array
        return [error.message, []]
    }
}

// Define a function to create a new user
const createUser = async (username) => {
    try {
        // Send a POST request to the API with the `username` and empty `translations` parameters
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: createHeaders(),  // Set the headers using the `createHeaders` function
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) {
            throw new Error("Could not create user with username" + username)
        }
        // Parse the response as JSON and return it
        const data = await response.json()
        return [null, data]
    }
    catch (error) {
        // If an error occurs, return the error message and an empty array
        return [error.message, []]
    }
}

// Define a function to log in a user
export const loginUser = async (username) => {
    const [checkError, user] = await checkForUser(username)

    if (checkError !== null) {
        // If an error occurred during the `checkForUser` function, return the error message and `null`
        return [checkError, null]
    }

    if (user.length > 0) {
        // If the `checkForUser` function returned a non-empty array, return the first element of the array
        return [null, user.pop()]
    }

    // If the `checkForUser` function returned an empty array, create a new user and return the result of the `createUser` function
    return await createUser(username)
}
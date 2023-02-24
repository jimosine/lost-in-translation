// Get the API key from the environment variables
const apiKey = process.env.REACT_APP_API_KEY

// Export a function to create headers for HTTP requests
export const createHeaders = () => {
    // Return an object with headers
    return {
        'Content-Type': 'application/json',  // Set the content type to JSON
        'x-api-key': apiKey  // Set the API key as a header
    }
}

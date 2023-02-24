//  API Calls to the server to update translations data //

import { createHeaders } from ".";

const apiUrl = process.env.REACT_APP_API_URL;

// An async function to add a translation to a specific user with user.id
export const translationAdd = async (user, translation) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation],
      }),
    });
    console.log(response);
    if (!response.ok) {
      throw new Error("Could not update the translation");
    }

    //The updated response of the API
    const result = await response.json();

    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

// An async function to clear translations of a specific user with user.id
export const translationClearHistory = async (userId) => {
  try {
    const response = await fetch(`${apiUrl}/${userId}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [],
      }),
    });

    if (!response.ok) {
      throw new Error("Could not update translations");
    }
    //The updated response of the API
    const result = await response.json();

    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

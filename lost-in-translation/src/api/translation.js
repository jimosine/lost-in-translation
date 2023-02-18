import { createHeaders } from "./index";

const apiUrl = process.env.REACT_APP_API_URL;

export const translationAdd = async (user, translation) => {
  try {
    const response = await fetch(`${apiUrl}/${user.id}`, {
      method: "PATCH",
      headers: createHeaders(),
      body: JSON.stringify({
        translations: [...user.translations, translation],
      }),
    });

    if (!response.ok) {
      throw new Error("Could not update the translation");
    }

    const result = await response.json();
    console.log(...user.translations);
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

export const translationClearHistory = (userId) => {};

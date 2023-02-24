import { useContext, useEffect } from "react";
import { translationAdd } from "../api/translation";
import TranslationCard from "../components/Translation/TranslationCard";
import TranslationForm from "../components/Translation/TranslationForm";
import { STORAGE_KEY_USER } from "../const/storageKeys";

import { ImageContext } from "../context/ImageProvider";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

// The translationPage to translate your text //
// It has two components: first the translationForm and the translationCard //
const Translations = () => {
  const { user, setUser } = useUser();
  const [imgUrl, setText] = useContext(ImageContext);

  // Reset the setText state when you come back to the page //
  useEffect(() => {
    setText("")
  }, [])

  //Stores the user state to the api everytime the user state is changed
  useEffect(() => {
    storageSave(STORAGE_KEY_USER, user)
  }, [user])

  const handleTranslationClicked = async (translation) => {
    // check if you have translation
    // send an http request with the translationtext
    const [error, result] = await translationAdd(user, translation);

    // Add the result to the user to update the userState //
    setUser(result);
  };

  return (
    <>
      {/* It sends the information of the inputField of the form to the API */}
      <TranslationForm onTranslation={handleTranslationClicked} />
      {/* It shows the translation based on Icons in the public Img directory */}
      <TranslationCard transLationImage={imgUrl}></TranslationCard>
    </>
  );
};

export default withAuth(Translations);

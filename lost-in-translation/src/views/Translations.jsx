import { useContext, useEffect } from "react";
import { translationAdd } from "../api/translation";
import TranslationCard from "../components/Translation/TranslationCard";
import TranslationForm from "../components/Translation/TranslationForm";

import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageSave } from "../utils/storage";
import { ImageContext } from "../context/ImageProvider";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Translations = () => {
  const { user, setUser } = useUser();
  const [imgUrl, setText] = useContext(ImageContext);
<<<<<<< Updated upstream
  
    useEffect(() => {
        setText('');
    }, []);
=======

  useEffect(() => {
    setText("");
  }, []);
>>>>>>> Stashed changes

  const handleTranslationClicked = async (translation) => {
    // check if you have translation
    // send an http request with the translationtext

    const [error, result] = await translationAdd(user, translation);

    console.log("Error: ", error);
    console.log("Result", result);
    // console.log("handleTranslationClicked", user, translation);
    setUser(result);
  };

  return (
    <>
<<<<<<< Updated upstream
      <h1>Translation</h1>
      <TranslationForm onTranslation={handleTranslationClicked} />
      <TranslationCard transLationImage={imgUrl}></TranslationCard>
      <button onClick={() => setText("")}>Reset translation</button>
=======
      <TranslationForm onTranslation={handleTranslationClicked} />
      <TranslationCard transLationImage={imgUrl}></TranslationCard>
>>>>>>> Stashed changes
    </>
  );
};

export default withAuth(Translations);

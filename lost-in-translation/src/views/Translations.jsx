import { translationAdd } from "../api/translation";
import TranslationForm from "../components/Translation/TranslationForm";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";

const Translations = () => {
  const { user } = useUser();

  const handleTranslationClicked = async (translation) => {
    // check if you have translation
    // send an http request with the translationtext

    const [error, result] = await translationAdd(user, translation);
    console.log("Error: ", error);
    console.log("Result", result);
  };

  return (
    <>
      <h1>Translation</h1>
      <TranslationForm onTranslation={handleTranslationClicked} />
    </>
  );
};

export default withAuth(Translations);

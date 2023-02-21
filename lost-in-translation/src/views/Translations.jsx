import { translationAdd } from "../api/translation";
import TranslationCard from "../components/Translation/TranslationCard";
import TranslationForm from "../components/Translation/TranslationForm";
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { useUser } from "../context/UserContext";
import withAuth from "../hoc/withAuth";
import { storageSave } from "../utils/storage";

const Translations = () => {
    const { user, setUser } = useUser();

    const handleTranslationClicked = async (translation) => {
        // check if you have translation
        // send an http request with the translationtext

        const [error, result] = await translationAdd(user, translation);

        console.log("Error: ", error);
        console.log("Result", result);
        // console.log("handleTranslationClicked", user, translation);
        setUser(result);
        storageSave(STORAGE_KEY_USER, result)
    };

    return (
        <>
            <h1>Translation</h1>
            <TranslationForm onTranslation={handleTranslationClicked} />
            <TranslationCard></TranslationCard>
        </>
    );
};

export default withAuth(Translations);

import { useForm } from "react-hook-form";
//import { useUser } from "../../context/UserContext";

const TranslationForm = ({ onTranslation }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ translationtext }) => {
    onTranslation(translationtext);
  };

  return (
    <>
      <h2>Translation your word</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="translationtext">Translationtext:</label>
        <input
          type="text"
          placeholder="Type your text"
          {...register("translationtext")}
        ></input>
        <button type="submit">Translate</button>
      </form>
    </>
  );
};

export default TranslationForm;

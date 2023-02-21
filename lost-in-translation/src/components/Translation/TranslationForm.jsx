import { useForm } from "react-hook-form";

import { useContext } from "react";

import { ImageContext } from "../../context/ImageProvider";

const TranslationForm = ({ onTranslation }) => {
  const { register, handleSubmit, reset } = useForm();

  const [imgUrl, setText] = useContext(ImageContext);
  // const [imgUrl, setText] = useState("");

  const onSubmit = ({ translationtext }) => {
    onTranslation(translationtext);
    transLation(translationtext);
    reset();
  };

  const transLation = (text) => {
    setText(text);
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

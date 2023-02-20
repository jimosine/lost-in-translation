import { useForm } from "react-hook-form";

import { useState } from "react";
import TranslationImage from "./TranslationImage";



const TranslationForm = ({ onTranslation }) => {
  const { register, handleSubmit } = useForm();
  const [imgUrl, setText] = useState("");

  const onSubmit = ({ translationtext }) => {
    onTranslation(translationtext);

    transLation(translationtext);
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

      <section>
        <TranslationImage transLationImage={imgUrl}></TranslationImage>
      </section>
    </>
  );
};

export default TranslationForm;

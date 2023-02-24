import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ImageContext } from "../../context/ImageProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

// TranslationForm component //
// It will show you the inputfield and the submitButton //
// All the userInteractions to translate your text  //
const TranslationForm = ({ onTranslation }) => {
  const { register, handleSubmit, reset } = useForm();
  const [imgUrl, setText] = useContext(ImageContext);

  // Funtion when you click on the button //
  const onSubmit = ({ translationtext }) => {
    onTranslation(translationtext);
    // save the text of the input in the setText State//
    transLation(translationtext);
    // Reset the inputfield after submit //
    reset();
  };

  // Function to set the setText State //
  const transLation = (text) => {
    setText(text);
  };

  return (
    <>
      <Form className=" customform" onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="w-50 h-2 mx-auto p-5">
          <InputGroup.Text id="basic-addon1" htmlFor="translationtext">
            Translationtext:
          </InputGroup.Text>
          <Form.Control
            // No special characters and numbers //
            pattern="[a-zA-Z ]+"
            title="Do not use special characters and numbers"
            type="text"
            placeholder="Type your text"
            // register the translation text in the form to use this value //
            {...register("translationtext")}
          ></Form.Control>
          <Button type="submit" variant="custom">
            Translate
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default TranslationForm;

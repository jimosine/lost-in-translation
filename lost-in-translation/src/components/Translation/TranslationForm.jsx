import { useForm } from "react-hook-form";
import { useContext } from "react";
import { ImageContext } from "../../context/ImageProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

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
      <Form className=" customform" onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className="w-50 h-2 mx-auto p-5">
          <InputGroup.Text id="basic-addon1" htmlFor="translationtext">
            Translationtext:
          </InputGroup.Text>
          <Form.Control
            pattern="[a-zA-Z ]+"
            title="Do not use special characters and numbers"
            type="text"
            placeholder="Type your text"
            {...register("translationtext")}
          ></Form.Control>
          <Button type="submit" variant="custom">
            Translate
          </Button>
        </InputGroup>
        {/* <Form.Label htmlFor="translationtext">Translationtext:</Form.Label> */}
      </Form>
    </>
  );
};

export default TranslationForm;

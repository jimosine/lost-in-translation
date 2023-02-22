import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { ImageContext } from "../../context/ImageProvider";

const TranslationCard = (imageUrl) => {
  const [imgUrl, setText] = useContext(ImageContext);

  console.log(imageUrl);
  let letter = imageUrl.transLationImage.split("");
  letter = letter.filter(function (entry) {
    return entry.trim() !== "";
  });

  return (
    <Card className="mt-5 w-50 mx-auto shadow ">
      <Card.Body>
        {imageUrl &&
          letter.map((imgUrl, index) => (
            <img
              key={index}
              src={`img/${imgUrl}.png`}
              alt={imgUrl}
              width="55"
            />
          ))}
      </Card.Body>
      <Card.Footer className=" d-flex justify-content-start">
        <Button
          className="btn-sm"
          variant="customFooter"
          onClick={() => setText("")}
        >
          Reset translation
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TranslationCard;

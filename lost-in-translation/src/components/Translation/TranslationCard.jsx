import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { ImageContext } from "../../context/ImageProvider";

// TanslationCard component //
// It will show you the translation of the submitText of the inputfield //
const TranslationCard = (imageUrl) => {
  const [imgUrl, setText] = useContext(ImageContext);
  // letter will be an array of all letters of the submitText of the inputfield
  let letter = imageUrl.transLationImage.split("");
  // Removes all blank spaces in the array
  letter = letter.filter(function (entry) {
    return entry.trim() !== "";
  });

  return (
    <Card className="mt-5 w-50 mx-auto shadow">
      <Card.Body>
        {
          //  Maps through the array and for every found item it makes an image //
          imageUrl &&
            letter.map((imgUrl, index) => (
              <img
                key={index}
                // img/$letterOfTheArray.png //
                src={`img/${imgUrl}.png`}
                alt={imgUrl}
                width="55"
              />
            ))
        }
      </Card.Body>
      <Card.Footer className=" d-flex justify-content-start">
        {/* Button to reset the translation in the translationCard */}
        <Button
          className="btn-sm"
          variant="customFooter"
          // reset the setText state //
          onClick={() => setText("")}
        >
          Reset translation
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TranslationCard;

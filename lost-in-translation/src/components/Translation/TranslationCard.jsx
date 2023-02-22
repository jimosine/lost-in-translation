import React from "react";
import Card from "react-bootstrap/Card";

const TranslationCard = (imageUrl) => {
  console.log(imageUrl);
  let letter = imageUrl.transLationImage.split("");
  letter = letter.filter(function (entry) {
    return entry.trim() !== "";
  });

  return (
    <Card className="mt-5 w-50 mx-auto">
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
    </Card>
  );
};

export default TranslationCard;

import React from "react";

const TranslationImage = (imageUrl) => {
  let letter = imageUrl.transLationImage.split("");
  letter = letter.filter(function (entry) {
    return entry.trim() !== "";
  });
  console.log(letter);

  return (
    <>
      <div>
        {letter.map((imgUrl, index) => (
          <img key={index} src={`img/${imgUrl}.png`} alt={imgUrl} width="55" />
        ))}
      </div>
    </>
  );
};

export default TranslationImage;

import React from "react";

const TranslationImage = (imageUrl) => {
  return (
    <>
      <div>
        {imageUrl.transLationImage.split("").map((imgUrl, index) => (
          <img key={index} src={`img/${imgUrl}.png`} alt={imgUrl} width="55" />
        ))}
      </div>
    </>
  );
};

export default TranslationImage;

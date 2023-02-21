import { createContext, useState } from "react";

export const ImageContext = createContext();

function ImageProvider({ children }) {
  const [imgUrl, setText] = useState("");
  return (
    <ImageContext.Provider value={[imgUrl, setText]}>
      {children}
    </ImageContext.Provider>
  );
}

export default ImageProvider;

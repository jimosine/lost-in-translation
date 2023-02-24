import { createContext, useState } from "react";

export const ImageContext = createContext();

// ImageProvider to use this State between the siblings translationForm and translationCard //
// The imgUrl state used by translationForm and translationCard. It updates the state and reset the state //
function ImageProvider({ children }) {
  const [imgUrl, setText] = useState("");
  return (
    <ImageContext.Provider value={[imgUrl, setText]}>
      {children}
    </ImageContext.Provider>
  );
}

export default ImageProvider;

import React, { createContext, useContext, useState } from "react";
import { LetterType } from "./genai/letterType";
type LetterContextType = {
  letterData: LetterType;
  setLetterData: React.Dispatch<React.SetStateAction<LetterType>>;
};

export const LetterContext = createContext<LetterContextType | null>(null);

export const useLetterData = (): LetterContextType => {
  const context = useContext(LetterContext);
  if (!context) {
    throw new Error("useLetterData must be used within a LetterDataProvider");
  }
  return context;
};

export const LetterDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [letterData, setLetterData] = useState<LetterType>({} as LetterType);

  return (
    <LetterContext.Provider value={{ letterData, setLetterData }}>
      {children}
    </LetterContext.Provider>
  );
};

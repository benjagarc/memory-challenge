import { createContext, useState } from "react";

export const AttempsContext = createContext({
  attemps: 0,
  setAttemps: () => {},
});

export const AttempsProvider = ({ children }) => {
  const [attemps, setAttemps] = useState(0);
  return (
    <AttempsContext.Provider value={{ attemps, setAttemps }}>
      {children}
    </AttempsContext.Provider>
  );
};

import { createContext, useState } from "react";

export const ErrorsContext = createContext({
  errors: 0,
  setErrors: () => {},
});

export const ErrorsProvider = ({ children }) => {
  const [errors, setErrors] = useState(0);

  return (
    <ErrorsContext.Provider value={{ errors, setErrors }}>
      {children}
    </ErrorsContext.Provider>
  );
};

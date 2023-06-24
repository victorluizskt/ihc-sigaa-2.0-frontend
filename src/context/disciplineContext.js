import React, { createContext, useState } from 'react';

const DisciplineContext = createContext();

const DisciplineContextProvider = ({ children }) => {
  const [value, setValue] = useState('');
  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <DisciplineContext.Provider value={{ value, updateValue }}>
      {children}
    </DisciplineContext.Provider>
  );
};

export { DisciplineContext, DisciplineContextProvider };
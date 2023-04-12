import { createContext, useContext, useReducer } from "react";
import AppReducer, { initialState } from "./app.reducer";

interface Props {
  children: React.ReactNode;
}

const AppContext = createContext(initialState);

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleTheme = (theme: string) => {
    console.log(theme);
    dispatch({
      type: "TOGGLE THEME",
      payload: {
        newTheme: theme,
      },
    });
  };

  return (
    <AppContext.Provider value={{ state, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

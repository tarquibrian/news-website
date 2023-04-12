interface Theme {
  theme: string;
}

export const initialState: Theme = {
  theme: "light",
};

const AppReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TOGGLE THEME":
      return {
        ...state,
        theme: payload.newTheme,
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
};

export default AppReducer;

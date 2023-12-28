const { configureStore } = require("@reduxjs/toolkit");
import menuStatusReducer from "./menuSlice";
import searchQueryReducer  from "./searchQuery";

export const store = configureStore({
  reducer: {
    menuStatus: menuStatusReducer,
    searchQuery : searchQueryReducer
  },
});

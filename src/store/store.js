import { configureStore } from "@reduxjs/toolkit";
import costumerSlice from "./costumerSlice";

const store = configureStore({
  reducer: {
    costumerStore: costumerSlice
  }
});

export default store;




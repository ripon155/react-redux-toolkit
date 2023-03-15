import { configureStore } from "@reduxjs/toolkit";

import {
  carReducer,
  changeSearchTerm,
  addCar,
  removeCar,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carReducer,
    form: formReducer,
  },
});
console.log(store.getState());

export { store, changeSearchTerm, addCar, removeCar, changeName, changeCost };

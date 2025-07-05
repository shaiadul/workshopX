import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slice/authSlice";
import serviceReducer from "@/redux/slice/serviceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    services: serviceReducer,
  },
});

export default store;

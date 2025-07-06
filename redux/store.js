import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slice/authSlice";
import serviceReducer from "@/redux/slice/serviceSlice";
import blogsReducer from "@/redux/slice/blogSlice";
import offerReducer from "@/redux/slice/offerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    services: serviceReducer,
    blogs: blogsReducer,
    offers: offerReducer,
  },
});

export default store;

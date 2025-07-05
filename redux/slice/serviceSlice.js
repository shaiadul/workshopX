"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


export const fetchServices = createAsyncThunk("services/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/services`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetch failed");
  }
});

export const createService = createAsyncThunk("services/create", async (formData, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_ENDPOINT}/services/create-service`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Create failed");
  }
});

export const deleteService = createAsyncThunk("services/delete", async (id, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${API_ENDPOINT}/services/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Delete failed");
  }
});


const serviceSlice = createSlice({
  name: "services",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetServices: (state) => {
      state.list = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create
      .addCase(createService.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createService.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(createService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteService.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item._id !== action.payload);
      });
  },
});

export const { resetServices } = serviceSlice.actions;
export default serviceSlice.reducer;

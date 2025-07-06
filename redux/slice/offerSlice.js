"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

// Fetch all offers
export const fetchOffers = createAsyncThunk("offers/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/offers`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetch failed");
  }
});

// Create a new offer
export const createOffer = createAsyncThunk("offers/create", async (formData, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_ENDPOINT}/offers/create-offer`, formData, {
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

// Delete an offer
export const deleteOffer = createAsyncThunk("offers/delete", async (id, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${API_ENDPOINT}/offers/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Delete failed");
  }
});

// Slice
const offerSlice = createSlice({
  name: "offers",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetOffers: (state) => {
      state.list = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchOffers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create
      .addCase(createOffer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOffer.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(createOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteOffer.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item._id !== action.payload);
      });
  },
});

export const { resetOffers } = offerSlice.actions;
export default offerSlice.reducer;

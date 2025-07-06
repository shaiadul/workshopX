"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

// Fetch all blogs
export const fetchBlogs = createAsyncThunk("blogs/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${API_ENDPOINT}/blogs`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Fetch failed");
  }
});

// Create a new blog post
export const createBlog = createAsyncThunk("blogs/create", async (formData, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(`${API_ENDPOINT}/blogs/create-blog`, formData, {
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

// Delete a blog post
export const deleteBlog = createAsyncThunk("blogs/delete", async (id, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${API_ENDPOINT}/blogs/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response?.data?.message || "Delete failed");
  }
});

// Slice
const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetBlogs: (state) => {
      state.list = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create
      .addCase(createBlog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item._id !== action.payload);
      });
  },
});

export const { resetBlogs } = blogSlice.actions;
export default blogSlice.reducer;

import ProductApi from "@/server/productApi/AddProductApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getErrorMessage = (error, fallback) =>
  error?.response?.data?.message || error?.message || fallback;

export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async (options = {}, { rejectWithValue }) => {
    try {
      const response = await ProductApi.getAll(options.params || {});
      return response.data.data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error, "Unable to fetch properties"));
    }
  },
  {
    condition: (options = {}, { getState }) => {
      const state = getState();
      if (options.force) {
        return true;
      }
      return !(state.properties.items.length > 0 && state.properties.status === "succeeded");
    },
  }
);

const propertySlice = createSlice({
  name: "properties",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const selectFilteredProperties = (state, type = "All") => {
  if (!type || type === "All") {
    return state.properties.items;
  }
  return state.properties.items.filter((item) => item.PropertyType === type);
};

export default propertySlice.reducer;

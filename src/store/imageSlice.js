import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchImage = createAsyncThunk("image/fetchImage", async (holiday) => {
  const res = await fetch(`${URI_API}image/${holiday}`);
  const data = await res.json();
  return data;
});

export const fetchImageId = createAsyncThunk("image/fetchImageId", async (id) => {
  const res = await fetch(`${URI_API}image/${id}`);
  const data = await res.json();
  return data;
});

const imageSlice = createSlice({
  name: "image",
  initialState: {
    image: "",
    idImage: "",
    loading: "",
  },
  reducers: {},
  extraReducers: {
    [fetchImage.pending]: (state) => {
      state.loading = "loading";      
    },
    [fetchImage.fulfilled]: (state, action) => {
      state.loading = "success";
      state.idImage = action.payload.idImg;
      state.image = action.payload.urlImg;
      
    },
    [fetchImage.rejected]: (state) => {
      state.loading = "fail";
      state.image = "";
      state.idImage = "";
    },
    [fetchImageId.pending]: (state) => {
      state.loading = "loading";      
    },
    [fetchImageId.fulfilled]: (state, action) => {
      state.loading = "success";
      state.idImage = action.payload.idImg;
      state.image = action.payload.urlImg;
      
    },
    [fetchImageId.rejected]: (state) => {
      state.loading = "fail";
      state.image = "";
      state.idimage = "";
    },
  },
});

export default imageSlice.reducer;

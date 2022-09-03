import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URI_API } from "../const/const";

export const fetchImage = createAsyncThunk("image/fetchImage", async (holiday) => {
  const res = await fetch(`${URI_API}image/${holiday}`);
  const data = await res.json();
  return data;
});

const imageSlice = createSlice({
  name: "image",
  initialState: {
    image: "",
    id: "",
    loading: "",
  },
  reducers: {},
  extraReducers: {
    [fetchImage.pending]: (state) => {
      state.loading = "loading";
      state.id = "";
      state.image = "";
    },
    [fetchImage.fulfilled]: (state, action) => {
      state.loading = "success";
      state.id = action.payload.idImg;
      state.image = action.payload.urlImg;
      
    },
    [fetchImage.rejected]: (state) => {
      state.loading = "fail";
      state.image = "";
      state.id = "";
    },
  },
});

export default imageSlice.reducer;

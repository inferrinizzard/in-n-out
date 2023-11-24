import { createSlice } from '@reduxjs/toolkit';
import { type RootState } from '../store';

import menu from '../../data/tempMenu';
import images from '../../data/images';

export interface DataState {
  menu: typeof menu;
  images: typeof images;
}

const initialState: DataState = {
  menu,
  images,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export const {} = dataSlice.actions;

export const selectMenu = (state: RootState) => state.data.menu;
export const selectMenuItems = (state: RootState) =>
  Object.values(state.data.menu);
export const selectImages = (state: RootState) => state.data.images;

export default dataSlice.reducer;

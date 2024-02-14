import { createSlice } from '@reduxjs/toolkit';
import { type RootState } from '../store';

import menu from '../../data/menu';
import prices from '../../data/prices';
import calories from '../../data/calories';
import images from '../../data/images';

export interface DataState {
  menu: typeof menu;
  prices: typeof prices;
  calories: typeof calories;
  images: typeof images;
}

const initialState: DataState = {
  menu,
  prices,
  calories,
  images,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export const {} = dataSlice.actions;

export const selectMenu = (state: RootState) => state.data.menu;
export const selectPrices = (state: RootState) => state.data.prices;
export const selectCalories = (state: RootState) => state.data.calories;
export const selectImages = (state: RootState) => state.data.images;

export default dataSlice.reducer;

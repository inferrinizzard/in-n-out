import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../store';

import { Sku } from '../../models/Sku';

export interface OrderState {
  items: Sku[];
}

const initialState: OrderState = {
  items: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Sku>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = orderSlice.actions;

export const selectItems = (state: RootState) => state.order.items;

export default orderSlice.reducer;

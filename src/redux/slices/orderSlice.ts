import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface OrderState {
  items: string[];
}

const initialState: OrderState = {
  items: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.items.push(action.payload);
    },
  },
});

export const { update } = orderSlice.actions;

export const selectItems = (state: RootState) => state.order.items;

export default orderSlice.reducer;

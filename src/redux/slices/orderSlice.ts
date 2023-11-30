import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../store';

import { type Sku } from '../../models/Sku';
import { type SkuId } from '../../data/types';

import { v4 as uuidV4 } from 'uuid';

export interface OrderState {
  activeItem: Record<SkuId, Sku> | null;
  items: Record<string, Sku>;
}

const initialState: OrderState = {
  activeItem: null,
  items: {},
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    updateActiveItem: (
      state,
      action: PayloadAction<{ id: SkuId; item: Sku }>
    ) => {
      if (!state.activeItem) {
        state.activeItem = {} as Exclude<OrderState['activeItem'], null>;
      }
      state.activeItem[action.payload.id] = action.payload.item;
    },
    addActiveToList: (state) => {
      if (!state.activeItem) {
        return;
      }
      Object.values(state.activeItem).forEach((item) => {
        state.items[uuidV4()] = item;
      });

      state.activeItem = null;
    },
    clearActiveItem: (state) => {
      state.activeItem = null;
    },
    addItem: (state, action: PayloadAction<Sku>) => {
      state.items[uuidV4()] = action.payload;
    },
  },
});

export const { addActiveToList, addItem, clearActiveItem, updateActiveItem } =
  orderSlice.actions;

export const selectActiveItem = (state: RootState) => state.order.activeItem;
export const selectItems = (state: RootState) => state.order.items;

export default orderSlice.reducer;

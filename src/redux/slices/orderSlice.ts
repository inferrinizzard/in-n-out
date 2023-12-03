import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../store';

import { type Sku } from '../../models/Sku';
import { type SkuId } from '../../data/types';

import { v4 as uuidV4 } from 'uuid';

export interface OrderState {
  activeItem: Sku | null;
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
      state.activeItem = action.payload.item;
    },
    addActiveToList: (state) => {
      if (!state.activeItem) {
        return;
      }

      state.items[uuidV4()] = state.activeItem;
      state.activeItem = null;
    },
    clearActiveItem: (state) => {
      state.activeItem = null;
    },
    addItem: (state, action: PayloadAction<Sku>) => {
      state.items[uuidV4()] = action.payload;
    },
    editItem: (state, action: PayloadAction<string>) => {
      const itemUuid = action.payload;
      const item = state.items[itemUuid];

      delete state.items[itemUuid];
      state.activeItem = item;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    },
  },
});

export const {
  addActiveToList,
  addItem,
  clearActiveItem,
  editItem,
  removeItem,
  updateActiveItem,
} = orderSlice.actions;

export const selectActiveItem = (state: RootState) => state.order.activeItem;
export const selectItems = (state: RootState) => state.order.items;

export default orderSlice.reducer;

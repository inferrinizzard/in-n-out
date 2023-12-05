import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../store';

import { v4 as uuidV4 } from 'uuid';

import { type Sku } from '../../models/Sku';
import {
  type CustomisationKey,
  type CustomisationValue,
} from '../../data/customisations';

export interface OrderState {
  activeItem: Sku | null;
  pending: Sku[];
  items: Record<string, Sku>;
}

const initialState: OrderState = {
  activeItem: null,
  pending: [],
  items: {},
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setActiveItem: (state, action: PayloadAction<Sku>) => {
      state.activeItem = action.payload;
    },
    updateActiveCustomisations: <Key extends CustomisationKey>(
      state: OrderState,
      action: PayloadAction<
        | { flags: { name: Key; flag: string; value: boolean } }
        | { data: { name: Key; value: CustomisationValue<Key> } }
      >
    ) => {
      if (!state.activeItem?.customisations) {
        return;
      }

      if ('data' in action.payload) {
        const { name, value } = action.payload.data;

        // @ts-expect-error
        state.activeItem.customisations[name].data = value;
      } else if ('flags' in action.payload) {
        const { name, flag, value } = action.payload.flags;

        // @ts-expect-error
        state.activeItem.customisations[name].flags = {
          // @ts-expect-error
          ...state.activeItem.customisations[name].flags,
          [flag]: value,
        };
      }
    },
    addActiveToPending: (state) => {
      if (!state.activeItem) {
        return;
      }

      state.pending.push(state.activeItem);
      state.activeItem = null;
    },
    addingPendingToList: (state) => {
      state.pending.forEach((item) => (state.items[uuidV4()] = item));
      state.pending = [];
    },
    popPending: (state) => {
      const lastPending = state.pending.pop();
      if (lastPending) {
        state.activeItem = lastPending;
      }
    },
    clearPending: (state) => {
      state.pending = [];
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
  addActiveToPending,
  addingPendingToList,
  addItem,
  clearActiveItem,
  clearPending,
  editItem,
  popPending,
  removeItem,
  setActiveItem,
  updateActiveCustomisations,
} = orderSlice.actions;

export const selectActiveItem = (state: RootState) => state.order.activeItem;
export const selectItems = (state: RootState) => state.order.items;

export default orderSlice.reducer;

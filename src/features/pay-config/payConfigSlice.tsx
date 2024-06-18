import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../app/store";

const payConfigSlice = createSlice({
  name: "payConfig",
  initialState: {
    config: {
      ticketPrice: 0,
      payIsActive: false,
      modelIsActive: false,
      testPeriodIsActive: false,
    },
  },
  reducers: {
    setConfig: (state, action) => {
      state.config = action.payload;
    },
    setTicketPrice: (state, action) => {
      state.config.ticketPrice = action.payload;
    },
    setPayIsActive: (state, action) => {
      state.config.payIsActive = action.payload;
    },
    setModelIsActive: (state, action) => {
      state.config.modelIsActive = action.payload;
    },
    setTestPeriodIsActive: (state, action) => {
      state.config.testPeriodIsActive = action.payload;
    },
  },
});

export const {
  setConfig,
  setTicketPrice,
  setPayIsActive,
  setModelIsActive,
  setTestPeriodIsActive,
} = payConfigSlice.actions;

export default payConfigSlice.reducer;

export const selectPayConfig = (state: RootState) => state.payConfig.config;

export const selectTicketPrice = (state: RootState) =>
  state.payConfig.config.ticketPrice;

export const selectPayIsActive = (state: RootState) =>
  state.payConfig.config.payIsActive;

export const selectModelIsActive = (state: RootState) =>
  state.payConfig.config.modelIsActive;

export const selectTestPeriodIsActive = (state: RootState) =>
  state.payConfig.config.testPeriodIsActive;

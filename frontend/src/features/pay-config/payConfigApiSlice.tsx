import { apiSlice } from "../../app/api/apiSlice";
import {
  setConfig,
  setTicketPrice,
  setPayIsActive,
  setModelIsActive,
  setTestPeriodIsActive,
} from "./payConfigSlice";

interface PayConfig {
  ticketPrice: number;
  payIsActive: boolean;
  modelIsActive: boolean;
  testPeriodIsActive: boolean;
}

export const payConfigApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPayConfig: builder.query<PayConfig, void>({
      query: () => ({
        url: "/pay/get-pay-data",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setConfig(data));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    updateTicketPrice: builder.mutation<PayConfig, { ticketPrice: number }>({
      query: ({ ticketPrice }) => ({
        url: "/pay/update-ticket-price",
        method: "POST",
        body: { ticketPrice },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setTicketPrice(data.ticketPrice));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    updatePayIsActive: builder.mutation({
      query: () => ({
        url: "/pay/toggle-control",
        method: "POST",
        body: { toggleControlName: "payIsActive" },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setPayIsActive(data.config.payIsActive));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    updateModelIsActive: builder.mutation({
      query: () => ({
        url: "/pay/toggle-control",
        method: "POST",
        body: { toggleControlName: "modelIsActive" },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setModelIsActive(data.config.modelIsActive));
        } catch (err) {
          console.error(err);
        }
      },
    }),
    updateTestPeriodIsActive: builder.mutation({
      query: () => ({
        url: "/pay/toggle-control",
        method: "POST",
        body: { toggleControlName: "testPeriodIsActive" },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setTestPeriodIsActive(data.config.testPeriodIsActive));
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const {
  useGetPayConfigQuery,
  useUpdateTicketPriceMutation,
  useUpdatePayIsActiveMutation,
  useUpdateModelIsActiveMutation,
  useUpdateTestPeriodIsActiveMutation,
} = payConfigApiSlice;

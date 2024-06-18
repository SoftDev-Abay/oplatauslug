import {
  createApi,
  fetchBaseQuery,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { setCredentials } from "../../features/auth/authSlice";
import { RootState } from "../../app/store"; // Import RootState from your store configuration

const baseQuery = fetchBaseQuery({
  baseUrl: "https://oplatauslug.onrender.com",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token; // Type cast to RootState

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: FetchArgs,
  api: any,
  extraOptions?: any
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    result?.error &&
    "status" in result.error &&
    result.error.status === 403
  ) {
    console.log("sending refresh token");

    const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);

    if (refreshResult.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      if (
        refreshResult.error &&
        "status" in refreshResult.error &&
        refreshResult.error.status === 403
      ) {
        const errorData = refreshResult.error.data as { message?: string }; // Type assertion
        errorData.message = "Your login has expired.";
      }
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});

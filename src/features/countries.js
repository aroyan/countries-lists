import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countriesApi = createApi({
  reducerPath: "countriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1/" }),
  tagTypes: ["Country"],
  endpoints: (builder) => ({
    getAllCountries: builder.query({
      query: () => "all",
      providesTags: ["Country"],
    }),
    getCountryByFullName: builder.query({
      query: (name) => `name/${encodeURI(name)}?fullText=true`,
      providesTags: ["Country"],
    }),
    getCountryByCode: builder.query({
      query: (code) => `alpha/${code}`,
      providesTags: ["Country"],
    }),
  }),
});

export const {
  useGetAllCountriesQuery,
  useGetCountryByFullNameQuery,
  useGetCountryByCodeQuery,
} = countriesApi;

import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeader = {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
}
const baseUrl = process.env.REACT_APP_API_BASE_URL;
const createRequest = (url) =>({
    url,
    headers: cryptoApiHeader
})

export const cryptoApi = createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:(builder)=>({
        getCryptos:builder.query({
            query:(count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
      
          // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
      
          // Note: To access this endpoint you need premium plan
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;
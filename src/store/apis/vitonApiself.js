import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const vitonApiSelf = createApi({
    reducerPath: 'vitonApiSelf',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://1b94-35-240-157-87.ngrok-free.app/', // Updated base URL
    }),
    endpoints(builder) {
        return {
            processImage: builder.mutation({
                query: (data) => {
                    return {
                        url: '/try_on1', // Endpoint path
                        method: 'POST',
                        body: data, // The body will be an object with "person", "cloth", and "text" keys
                    };
                },
            }),
        };
    },
});

export const { useProcessImageMutation } = vitonApiSelf;
export { vitonApiSelf };

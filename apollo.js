import { ApolloClient, InMemoryCache } from "@apollo/client";

export const getApolloClient = () => {
  const client = new ApolloClient({
    uri: process.env.API_URL,
    cache: new InMemoryCache(),
    headers: {
      Authorization: `apikey ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  });
  return client;
};

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl5a9xamc6jdu01ui4vt1dvsu/master',
    cache: new InMemoryCache()
})
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { createUploadLink } from 'apollo-upload-client'

const httpLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_URL
})

const authLink = setContext((_: any, { headers }) => {
  return {
    /*  */
    headers: {
      headers
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ addTypename: false })
})

export default client

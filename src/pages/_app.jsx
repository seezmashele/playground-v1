/* eslint-disable react/jsx-props-no-spreading */
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '../context/AuthContext'
import { DatabaseProvider } from '../context/DatabaseContext'
import '../styles/app.css'

const errorLink = onError(({ graphqlErrors, NetworkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map((message, location, path) => ({
      path,
      message,
      location
    }))
  }
  if (NetworkError) {
    return { error: NetworkError }
  }
  return ''
})

const link = from([
  errorLink,
  new HttpLink({ uri: 'https://n3wmaoiv.directus.app/graphql' })
])

const client = new ApolloClient({ cache: new InMemoryCache(), link })

const App = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <AuthProvider>
      <ApolloProvider client={client}>
        <DatabaseProvider>
          <Component {...pageProps} />
        </DatabaseProvider>
      </ApolloProvider>
    </AuthProvider>
  </ThemeProvider>
)

export default App

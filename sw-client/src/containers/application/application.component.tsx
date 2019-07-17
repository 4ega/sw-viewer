import * as React from 'react'
import { useState } from 'react'
import AWSAppSyncClient, { AUTH_TYPE } from 'aws-appsync'
import { ApolloProvider } from 'react-apollo'
import { Rehydrated } from 'aws-appsync-react'
import { CONFIG } from '../../config'
import { Root } from '../search-input'
import { SearchResult } from '../search-result'
import { Wrapper, GlobalStyles } from './application.styles'
import { Modal } from '../modal'

const client = new AWSAppSyncClient({
  url: CONFIG.url,
  region: CONFIG.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: CONFIG.apiKey,
  },
  disableOffline: true
})

export const Application = () => {
  const [query, setQuery] = useState("")
  const [description, setDescription] = useState(null)
  return (
    <>
      <ApolloProvider client={client}>
        <Rehydrated>
          <Wrapper>
            <Root
              query={query}
              setQuery={setQuery}
            />
            <SearchResult
              query={query}
              onItemClick={setDescription}
            />
            <Modal
              description={description}
              hideModal={() => setDescription(null)}
            />
          </Wrapper>
        </Rehydrated>
      </ApolloProvider>
      <GlobalStyles />
    </>
  )
}

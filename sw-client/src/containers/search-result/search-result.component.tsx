import * as React from 'react'
import { map, random } from 'lodash'
import { Query } from 'react-apollo'
import { getPeopleByName } from '../../gql'
import { Wrapper, Card, Name, Detail, Image, Inner } from './search-result.styles'
import { Spinner } from '../../components'

const showPopulation = (population: string) => {
  const asNumber = parseInt(population)
  if (!isNaN(asNumber)) {
    return asNumber.toLocaleString()
  }
  return population
}

export const SearchResult = ({ query, onItemClick }: any) => {
  return (
    <Query
      query={getPeopleByName}
      variables={{name: query}}
      skip={!query}
    >
      {({ loading, error, data }: any) => {
        let items = null
        if (loading) {
          return (
            <Wrapper show={data}>
              <div />
              <Spinner />
            </Wrapper>
          )
        }
        if (!loading && !error && data) {
          items = map(data.getPeopleByName, (charterData: any) => (
            <Card onClick={() => onItemClick(charterData.films)}>
              <Image src={`https://picsum.photos/id/${random(1, 100)}/300/160?grayscale`}/>
              <Inner>
                <Name>{charterData.name}</Name>
                <Detail>{map(charterData.species, ({ name }) => name).join(', ')}</Detail>
                <Detail>
                  {charterData.homeworld.name}{" "}
                  <i>{showPopulation(charterData.homeworld.population)}</i>
                </Detail>
              </Inner>
            </Card>
          ))
        }
        return (
          <Wrapper show={data}>
            {items}
          </Wrapper>
        )
      }}
    </Query>
  )
}



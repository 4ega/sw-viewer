import gql from 'graphql-tag'

export const getPeopleByName = gql`
  query getPeopleByName($name: String!) {
    getPeopleByName(name: $name) {
      name
      species {
        name
      }
      films {
        title
        release_date
        opening_crawl
      }
      homeworld {
        name
        population
      }
    }
  }
`

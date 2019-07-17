import * as swapi from 'swapi-node'

export const handler = async (films: string[] = []): Promise<any> => {
  return  await Promise.all(films.map(url => swapi.get(url)))
}


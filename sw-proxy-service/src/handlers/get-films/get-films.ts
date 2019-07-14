import * as swapi from 'swapi-node'

export const handler = async (films: string[] = []): Promise<any> => {
  const response = await Promise.all(films.map(url => swapi.get(url)))
  console.log('in', films, 'out', response)
  return response
}


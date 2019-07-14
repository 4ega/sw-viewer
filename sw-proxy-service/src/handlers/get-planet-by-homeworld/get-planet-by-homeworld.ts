import * as swapi from 'swapi-node'

export const handler = async (homeworld: string): Promise<any> => {
  const response = await swapi.get(homeworld)
  return response
}

import * as swapi from 'swapi-node'

export const handler = async (url: string): Promise<any> => {
  return await swapi.get(url)
}

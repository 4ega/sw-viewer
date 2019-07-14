import * as swapi from 'swapi-node'

export const handler = async (args): Promise<any> => {
  console.log(args)
  const response = await swapi.get('people/?search=' + args.name)
  return response.results
}

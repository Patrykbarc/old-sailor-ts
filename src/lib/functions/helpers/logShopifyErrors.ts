export function logShopifyErrors(errors: any) {
  if (errors) {
    const red = '\x1b[31m'
    const reset = '\x1b[0m'
    console.log(`${red}${errors.message}${reset}`)
    console.log(errors.graphQLErrors)

    return
  }
}

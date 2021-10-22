export const toValidCard = (data) => {
  return {
    id: data[0],
    name: data[1],

    email: data[2],
    site: data[3],
    phone: data[4],

    operationMode: data[5],
    address: data[6],

    shortDescribe: data[7],
    fullDescribe: data[8],

    image: data[9]
  }
}


import BASE_URL from "./constants"

export default class StrapiClient{
  constructor() {}
  async fetchData(path){
    const res = await fetch(`${BASE_URL}${path} `,{
          method: 'GET',
          headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        }
    }) 
    // const errorCode = res.ok ? await false : res.error()
    const data = res.ok ? await res.json() : null
    return data
  }
}

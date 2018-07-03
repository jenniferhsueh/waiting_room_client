import { YELP_API_KEY } from 'react-native-dotenv'
import axios from 'axios'

const API_KEY = YELP_API_KEY
const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
})

const getClinics = userLocation => {
  return api
    .get('/businesses/search', {
      params: {
        limit: 10,
        categories: 'walkinclinics',
        ...userLocation,
      },
    })
    .then(res =>
      res.data.businesses.map(business => {
        console.log("===============>",business.name)
        return {
          name: business.name,
          coords: business.coordinates,
        }
      })
    )
    .catch(error => console.error(error))
}

export default {
  getClinics,
}
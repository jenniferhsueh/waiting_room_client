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
        limit: 20,
        categories: 'walkinclinics',
        ...userLocation,
      },
    })
    .then(res =>
      res.data.businesses.map(business => {
        // console.log("===============>",business)
        return {
          id: business.id,
          name: business.name,
          location: business.location,
          coords: business.coordinates,
          phone: business.display_phone,
          website: business.url,
          wait_time: (Math.floor(Math.random() * 60))

        }
      })
    )
    .catch(error => console.error(error))
}

export default {
  getClinics,
}
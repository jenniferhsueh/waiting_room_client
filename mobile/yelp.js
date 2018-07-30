import { YELP_API_KEY } from 'react-native-dotenv'
import axios from 'axios'

const API_KEY = YELP_API_KEY
const api = axios.create({
  baseURL: 'https://api.yelp.com/v3',
})

const getClinics = userLocation => {
  return api
    .get('/businesses/')
    .then(res =>
      res.data.businesses.map(business => {
        // console.log("businesses from yelp.js", business)
        return {
          id: business.id,
          name: business.name,
          location: business.location,
          coords: business.coordinates,
          phone: business.phone,
          website: business.website,
          wait_time: (Math.floor(Math.random() * 60))

        }
      })
    )
    .catch(error => console.error(error))
}

export default {
  getClinics,
}
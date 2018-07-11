import { YELP_API_KEY } from 'react-native-dotenv'
import axios from 'axios'

const API_KEY = YELP_API_KEY
const api = axios.create({
  baseURL: 'http://10.30.22.182:8080',
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
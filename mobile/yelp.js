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
        console.log("business.coordinates from from yelp.js =>", business.coordinates)
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
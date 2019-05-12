import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID bd0582cc9a4f04dc487f5c37a3c14f76de86522cfd6797c359d6662400abce69'
  }
})

import axios from 'axios'

const KEY = 'AIzaSyBVFITbgWNy6CPob2l2YSnwKvWdSwRsZjw'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY
  }
})

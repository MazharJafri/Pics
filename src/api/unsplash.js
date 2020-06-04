import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -McD7fWZZlb3mIc4UeRu0DZioBXv0Io5WzKmNm0fm-Q',
      }
});
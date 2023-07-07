const axios = require('axios');


export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 48,
  },
  headers: {
    'X-RapidAPI-Key': 'e1da76278amsh5a32e40b9afe424p19a6cfjsn4e8eb3815058',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

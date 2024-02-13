import axios from 'axios';

export async function getImagesByType(axiosParams) {
  const url = 'https://pixabay.com/api/';
  const response = await axios.get(url, {
    params: axiosParams,
  });
  return response.data;
}

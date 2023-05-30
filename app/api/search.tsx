import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
    params: {
      q: req.query.term,
      
    }, 
    headers: {
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY
    }
  };

  try {
    const response: AxiosResponse = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const VideoToMP3 = {
  downloadVideo: async (videoId) => {
    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: { id: videoId },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

export default VideoToMP3;
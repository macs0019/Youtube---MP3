import axios from 'axios';

const VideoToMP3 = {
  downloadVideo: async (videoId) => {
    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: { id: videoId },
      headers: {
        'X-RapidAPI-Key': 'd26a446386msh78015955bd6c36ep1f2debjsn51a621a6365c',
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
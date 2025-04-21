import axios from 'axios';

import * as render from './render-functions';

export async function getImagesByQuery(query, page) {
  render.showLoader();

  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '49849891-12ae0f2235913a172a6db425e',
        q: `${query}`,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

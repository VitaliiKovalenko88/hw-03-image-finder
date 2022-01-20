import axios from 'axios';

const API_KEY = '22469389-b601f8ee0455705c879309776';
const BASE_URL = 'https://pixabay.com/api';
axios.defaults.baseURL = BASE_URL;

export const fetchImageWithQuery = async (nameQuery, page = 1) => {
  const respons = await axios.get(
    `?q=${nameQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`,
  );
  try {
    const { data } = await respons;

    if (data.totalHits === 0) {
      console.log('а что то нормальное можно ввести?');
      return;
    }

    console.log(data);
    console.log(nameQuery);
    return { data };
  } catch {}
};

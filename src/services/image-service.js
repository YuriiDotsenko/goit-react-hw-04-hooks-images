import axios from 'axios';

const fetchImages = ({ currentQuery, currentPage = '1' }) =>
  axios
    .get(
      `https://pixabay.com/api/?q=${currentQuery}&page=${currentPage}&key=21856946-e54e51c03adb2efa9c5f465ca&image_type=photo&orientation=horizontal&per_page=12
`,
    )
    .then(({ data }) => data.hits);

const imagesApi = {
  fetchImages,
};

export default imagesApi;

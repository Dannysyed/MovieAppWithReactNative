import axios from "axios";

const fetchMovies = async () => {
  const apiKey = "YOUR_API_KEY";
  const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const authToken = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNmNmN2RjOTM1NTQ1ODkyMGFmZTdiYjAxZDg4MTI1MCIsInN1YiI6IjY2NDMzMDlmM2E4ZjdmYmNjODc3ZjJhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cOqulLZ1t4Lb3W8wWBec90DgMVVtd-Kp8izvc7hw9mg`;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: authToken,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export default fetchMovies;

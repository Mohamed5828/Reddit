import axios from "API/axios";


/**
 * Function to fetch Communities with Random Categories
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */
const fetchRandomCommunities = (fetchFunction) => {
    
    fetchFunction({
      axiosInstance: axios,
      method: 'GET',
      url: "http://localhost:8000/feedback--Leaderboard",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          // Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default fetchRandomCommunities;
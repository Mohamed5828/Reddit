import axios from "API/axios";

/**
 * Function to fetch Communities current user has subscribed to
 * @param {Function} fetchFunction Coming from useFetchFunction custom hook
 */
const fetchSubbedCommunities = (fetchFunction) => {
    
    fetchFunction({
      axiosInstance: axios,
      method: 'GET',
      url: "http://localhost:8000/Subscribed--Leaderboard",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          // Authorization: `Bearer ${auth.getToken()}`,
        },
      },
    });
};

export default fetchSubbedCommunities;
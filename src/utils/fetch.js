import axios from 'axios'

export const getCity = async city => {
  try {
    const response = await axios.get(`https://api.openaq.org/v2/latest?city=${city}&country=US&limit=1`)
    if (response.data.results.length) {
      // Return the results.
      return response.data
    } else {
      // No results found, return an error.
      return {
        error: {
          message: `No results were found for "${city}". Please try again.`,
        }
      }
    }
  }
  catch (error) {
    return Promise.reject(error)
  }
}

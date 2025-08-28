import axios from "axios";

export const getPnrStatus = async (pnr) => {
  const options = {
    method: "GET",
    url: `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnr}`,
    headers: {
      "x-rapidapi-key": "087f1ea5f6mshca846efd09eb6fep19dc6bjsn81898d597ebc",
      "x-rapidapi-host": "irctc-indian-railway-pnr-status.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  return response.data;
};

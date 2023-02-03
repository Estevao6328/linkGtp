import jsonData from "../config/accessToken.json";

export const getLocalToken = () => {
  try {
    return jsonData;
  } catch (err) {
    console.log(err);
    return null;
  }
};

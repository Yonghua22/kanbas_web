import axios from "axios";
export const NAPSTER_API = "https://api.napster.com/v2.2";
export const API_KEY = process.env.REACT_APP_NAPSTER_API_KEY;
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/api/users`;
export const signin = async (credentials) => {
  const response = await axios.post( `${USERS_API}/signin`, credentials );
  return response.data;
};


export const findAlbums = async (searchTerm) => {
  const response = await axios.get(
    `${NAPSTER_API}/search?query=${searchTerm}&type=albums&apikey=${API_KEY}`
  );
  return response.data.search.data.albums;
};

export const findAlbumById = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}?apikey=${API_KEY}`
  );
  return response.data.albums[0];
};

export const findTracksByAlbumId = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}/tracks?apikey=${API_KEY}`
  );
  return response.data.tracks;
};
export const updateUser = async (user) => {
  const response = await axios.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

import axios from "axios";

const baseUrl = process.env.REACT_APP_SERVER_URL;
export const saveFile = async (data) => {
  try {
    const res = await axios.post(`${baseUrl}/saveFile`, data);
    return res.status;
  } catch (error) {
    console.log(error);
  }
};

export const getAllFiles = async () => {
  try {
    const res = await axios.get(`${baseUrl}/getAllFiles`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getFile = async (id) => {
  try {
    const res = await axios.get(`${baseUrl}/getFile?id=${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

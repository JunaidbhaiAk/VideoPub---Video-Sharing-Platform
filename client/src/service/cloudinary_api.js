import axios from "axios";

const baseUrl = process.env.REACT_APP_CLOUDINARY_CLOUD;

export const uploadFile = async (config, data, type) => {
  try {
    const res = await axios.post(`${baseUrl}/${type}/upload`, data, config);
    res.data.status = res.status;
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

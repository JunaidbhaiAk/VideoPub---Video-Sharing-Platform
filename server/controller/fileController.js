import file from "../model/fileModal.js";
export const getAllFiles = async (req, res) => {
  try {
    const data = await file.find({});
    if (data) {
      res.status(200).send(data);
      return;
    }
    res.status(404).send({ message: "No data" });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const saveFile = async (req, res) => {
  try {
    await new file(req.body).save();
    res.status(200).send({ message: "fileUploaded" });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getFile = async (req, res) => {
  try {
    const { id } = req.query;
    // console.log(id);
    const data = await file.findById(id);
    // console.log(data);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

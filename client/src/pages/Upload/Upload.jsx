import { useState } from "react";
import toast from "react-hot-toast";
import InputFile from "../../components/InputFile/InputFile";
import { saveFile } from "../../service/server_api";
import "./upload.scss";
const Upload = () => {
  const [filename, setFilename] = useState({
    thumbnail: "Select Thumbnail",
    video: "Select Video"
  });
  const [reset, setReset] = useState(0);
  const [info, setInfo] = useState({
    title: "",
    description: "",
    image: "",
    video: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const values = Object.values(info);
    if (!values.includes("")) {
      const res = await saveFile(info);
      if (res === 200) {
        setInfo({
          title: "",
          description: "",
          image: "",
          video: ""
        });
        setFilename({
          thumbnail: "Select Thumbnail",
          video: "Select Video"
        });
        setReset(1);
        toast.success("Uploaded!");
      } else {
        toast.error("Server Error!");
      }
    }else{
      toast.error("Please Fill All Fields");
    }
  };

  return (
    <div className="upload">
      <div className="upload_title">
        <h1>
          Store and Share <span>Joyfull</span> Moments With People.
        </h1>
      </div>
      <form className="upload_form">
        <h3>Upload File</h3>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="upload_input"
          onChange={handleChange}
          value={info.title}
          maxLength="50"
        />
        <textarea
          name="description"
          rows="6"
          cols="50"
          className="upload_input"
          style={{ borderRadius: "15px" }}
          placeholder="Enter Description"
          onChange={handleChange}
          value={info.description}
          maxLength="200"
        />
        <InputFile
          progressName="thumbnail"
          setInfo={setInfo}
          filename={filename}
          setFilename={setFilename}
          reset={reset}
        />
        <p>* Only mp4, avi, mpg, png, jpg, jpeg is supported</p>
        <InputFile
          progressName="video"
          setInfo={setInfo}
          filename={filename}
          setFilename={setFilename}
          // ref={progressRef}
          reset={reset}
        />
        <button onClick={handleClick} type="button">
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;

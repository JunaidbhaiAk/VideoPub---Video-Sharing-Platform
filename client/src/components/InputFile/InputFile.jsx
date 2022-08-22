import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsCardImage } from "react-icons/bs";
import { FaFileVideo } from "react-icons/fa";
import { uploadFile } from "../../service/cloudinary_api";
import { checkFileExtension } from "../../utils/utils";
import ProgressBar from "../ProgressBar/ProgressBar";

const InputFile = ({ progressName, setInfo, filename, setFilename, reset }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (reset === 1) setProgress(0);
  }, [reset]);
  const config = {
    onUploadProgress: function (progressEvent) {
      var percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      setProgress(percentCompleted);
    }
  };

  const handleChange = async (e) => {
    const { files, name } = e.target;
    if (files.length > 0 && checkFileExtension(files[0].type, name)) {
      setFilename({ ...filename, [name]: files[0].name });
      let data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "video_pub_uploads");
      const type = name === "thumbnail" ? "image" : "video";
      const res = await uploadFile(config, data, type);
      if (res?.status === 200) {
        if (res.format === "jpg" || res.format === "png")
          setInfo((pre) => ({ ...pre, image: res.secure_url }));
        else setInfo((pre) => ({ ...pre, video: res.secure_url }));
      } else {
        toast.error(`Server Error!`);
      }
    } else {
      toast.error(`File format not supported`);
    }
  };
  return (
    <>
      <label
        className="upload_input"
        style={{ color: progress > 20 ? "#fff" : "#DD2476" }}
      >
        <ProgressBar progress={progress} />
        {progressName === "thumbnail" ? (
          <BsCardImage size="18px" style={{ paddingRight: "0.4rem" }} />
        ) : (
          <FaFileVideo size="18px" style={{ paddingRight: "0.4rem" }} />
        )}
        {filename[progressName].length > 30
          ? `${filename[progressName].substr(0, 30)}....`
          : filename[progressName]}
        {progress === 100 ? (
          <span style={{ position: "absolute", left: "75%" }}>Uploaded</span>
        ) : (
          <input type="file" onChange={handleChange} name={progressName} />
        )}
      </label>
    </>
  );
};

export default InputFile;

import { FcCalendar } from "react-icons/fc";
import { useState, useEffect } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { useLocation, useParams } from "react-router-dom";
import "./view.scss";
import { getFile } from "../../service/server_api";
import { convertDate } from "../../utils/utils";
const View = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  const [data, setData] = useState(location.state?.data);
  let { id } = useParams();
  const style = {
    overflow: "hidden",
    maxHeight: show ? "100vh" : "0",
    transition: "max-height 0.5s ease-in-out"
  };
  useEffect(() => {
    if (!data) {
      getFile(id).then((res) => setData(res));
    }
  }, []);

  return (
    <div className="view">
      <div className="view_header">
        <h1>{data?.title}</h1>
        <span>
          <FcCalendar size="18px" style={{ marginRight: "0.4rem" }} />
          {convertDate(data?.createdAt)}
        </span>
      </div>
      <div className="view_content">
        <video src={data?.video} controls autoPlay loop muted></video>
        <div className="view_content_description">
          <span onClick={() => setShow(!show)}>
            Description
            <BsCaretDownFill
              style={{
                transform: show && "rotate(180deg)",
                transition: "0.5s ease-in"
              }}
            />
          </span>
          <div className="info" style={style}>
            <p style={{ padding: "0.4rem" }}>{data?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;

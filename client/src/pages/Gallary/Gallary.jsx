import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { getAllFiles } from "../../service/server_api";
import "./gallary.scss";

const Gallary = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getAllFiles().then((res) => setVideos(res));
  }, []);
  return (
    <div className="gallary">
      <div className="gallary_title">
        <h1>Explore Peoples Moment</h1>
      </div>
      <div className="gallary_content">
        {videos?.map((ele) => {
          return <Card data={ele} key={ele._id} />;
        })}
      </div>
    </div>
  );
};

export default Gallary;

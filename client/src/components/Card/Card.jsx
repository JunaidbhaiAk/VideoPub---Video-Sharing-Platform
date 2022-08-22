import { FcCalendar } from "react-icons/fc";
import { BsPlayFill } from "react-icons/bs";
import "./Card.scss";
import { Link } from "react-router-dom";
import { convertDate } from "../../utils/utils";
const Card = ({ data }) => {
  return (
    <Link to={`/view/${data._id}`} state={{ data: data }}>
      <div className="card">
        <div className="card_img">
          <BsPlayFill size="50px" className="card_play" />
          <img src={data.image} alt="card_img" />
        </div>

        <h4>{data.title}</h4>
        <span>
          <FcCalendar size="18px" style={{ marginRight: "0.4rem" }} />
          {convertDate(data.createdAt)}
        </span>
      </div>
    </Link>
  );
};

export default Card;

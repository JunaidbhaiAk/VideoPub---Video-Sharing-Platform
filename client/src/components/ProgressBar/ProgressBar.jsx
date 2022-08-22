const ProgressBar = ({ progress }) => {
  const style = {
    position: "absolute",
    width: `${progress}%`,
    // width: "1%",
    left: "0",
    top: "0",
    height: "100%",
    zIndex: "-1",
    // borderRadius: "25px",
    backgroundColor: "#DD2476",
    transition: "0.5s ease-in"
  };
  return <div style={style}></div>;
};

export default ProgressBar;

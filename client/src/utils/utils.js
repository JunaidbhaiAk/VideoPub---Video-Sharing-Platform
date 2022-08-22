export const checkFileExtension = (ext, type) => {
  if (type === "thumbnail") {
    return ext === "image/png" || ext === "image/jpg" || ext === "image/jpeg";
  } else {
    return ext === "video/mp4" || ext === "video/mpg" || ext === "video/avi";
  }
};

export const convertDate = (date) => {
  var dob = new Date(date);
  var dobArr = dob.toDateString().split(" ");
  var dobFormat = dobArr[2] + " " + dobArr[1] + " " + dobArr[3];
  return dobFormat;
};

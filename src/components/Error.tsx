import errorImage from "../images/error_image.png";

export const Error = () => {
  return (
    <div className="error">
      <p className="error_text">
        <b> 404 Oops</b> <br /> This page doesn't exist. Just in case: do you
        want to build a web product? We can help!
      </p>
      <img className="error_image" src={errorImage} alt="" />
    </div>
  );
};

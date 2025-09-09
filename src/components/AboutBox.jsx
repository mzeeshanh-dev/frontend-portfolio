import PropTypes from "prop-types";
import "../styles/AboutBox.css";

export default function AboutBox({ image, title, description }) {
  return (
    <div className="box-container">
      <div className="side-image">
        <img src={image} alt={title || "About Image"} loading="lazy" />
      </div>
      <div className="box-content">
        <div className="title">{title}</div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
}

AboutBox.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

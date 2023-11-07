import { News } from "../App";

const NewsComponent = ({
  title,
  author,
  urlToImage,
  content,
  description,
  publishedAt,
  url,
}: News) => {
  return (
    <div className="news">
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{publishedAt}</p>
      <img
        src={
          urlToImage
            ? urlToImage
            : "https://saharareporters.com/sites/default/files/styles/focal_point_325x195/public/2022-09/219705B8-68FC-47E2-B4A8-E9FB29311A5A.jpeg?h=c673cd1c&itok=HijQ9RCm"
        }
        style={{
          height: "300px",
          width: "300px",
          objectFit: "contain",
        }}
        alt={urlToImage}
      />
      <p className="content">
        {content ? content : "Details coming later....."}
      </p>
      <p className="content">
        {description ? description : "Details coming later....."}
      </p>
      <a href={url} target="_blank">
        <p className="read--btn">Read More</p>
      </a>
    </div>
  );
};

export default NewsComponent;

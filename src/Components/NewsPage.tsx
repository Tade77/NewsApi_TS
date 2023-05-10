import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsPage = ({ newsData }: any) => {
  const [url, setUrl] = useState("");
  const { newsDetails } = useParams();
  // console.log(useParams());
  useEffect(() => {
    const newsUrl = newsData.find(
      (news: { name: string }) => news.name === newsDetails
    );
    setUrl(newsUrl.url);
  }, []);

  return <div>{url}</div>;
};

export default NewsPage;

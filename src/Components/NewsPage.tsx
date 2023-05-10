import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsPage = ({ newsData }: any) => {
  const [url, setUrl] = useState("");
  const { newsDetails } = useParams();
  useEffect(() => {
    const newsUrl = newsData.find(
      (news: { source: string }) => news.source === newsDetails
    );
    setUrl(newsUrl.url);
  }, [newsData, newsDetails]);

  return <div>{url}</div>;
};

export default NewsPage;

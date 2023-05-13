import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsPage = ({ newsData }: any) => {
  const [source, setSource] = useState("");
  const { newsId } = useParams();
  useEffect(() => {
    const newsUrl = newsData.find(
      (news: { id: string | undefined }) => news.id === newsId
    );
    setSource(newsUrl.source);
  }, []);

  return <div>{Object.keys(source)}</div>;
};

export default NewsPage;

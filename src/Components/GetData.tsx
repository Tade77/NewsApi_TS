import { useState } from "react";
import { News } from "../App";
import NewsComponent from "./NewsComponent";
import Loader from "./Loader";
const NewsPage = ({ newsData, isLoading, hasError }: any) => {
  // const [isLoading, setLoading] = useState(true);
  return (
    <div>
      <h1 className="header">Get the News at your finger tips</h1>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <h1>Something went wrong</h1>
      ) : (
        <div className="news--card">
          {newsData.map(
            (
              news: {
                id: string;
                source: string;
                publishedAt: string;
                urlToImage: string;
                url: string;
                content: string;
                description: string;
                author: string;
                title: string;
                name: string;
              },
              name: any
            ) => (
              <NewsComponent
                key={news.name}
                title={news.title}
                author={news.author}
                description={news.description}
                urlToImage={news.urlToImage}
                content={news.content}
                url={news.url}
                name={news.name}
                publishedAt={news.publishedAt}
                source={news.source}
                id={news.id}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};
export default NewsPage;

// d2fdb20c08d6416eaef68ca1b3b6ac3f;

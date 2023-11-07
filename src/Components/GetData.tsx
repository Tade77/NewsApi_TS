import NewsComponent from "./NewsComponent";
import Loader from "./Loader";
const NewsPage = ({ newsData, isLoading, hasError }: any) => {
  return (
    <div>
      <h1 className="header">Get the News at your finger tips</h1>
      {isLoading ? (
        <Loader />
      ) : hasError ? (
        <h1 style={{ color: "#fff", textAlign: "center" }}>
          Something went wrong
        </h1>
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
                key={news.id}
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

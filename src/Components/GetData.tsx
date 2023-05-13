import { News } from "../App";
import NewsComponent from "./NewsComponent";
const Home = ({ newsData }: any) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Get the News at your finger tips</h1>
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
    </div>
  );
};
export default Home;

// d2fdb20c08d6416eaef68ca1b3b6ac3f;

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
              source: string;
              publishedAt: string;
              urlToImage: string;
              content: string;
              description: string;
              author: string;
              title: string;
              name: string;
            },
            name: any
          ) => (
            <NewsComponent
              key={name}
              title={news.title}
              author={news.author}
              description={news.description}
              urlToImage={news.urlToImage}
              content={news.content}
              name={news.name}
              publishedAt={news.publishedAt}
              source={news.source}
            />
          )
        )}
      </div>
    </div>
  );
};
export default Home;

// d2fdb20c08d6416eaef68ca1b3b6ac3f;

import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/GetData";
import NewsPage from "./Components/NewsPage";
import axios from "axios";
import NewsComponent from "./Components/NewsComponent";

export interface News {
  title: string;
  author: string;
  description: string;
  urlToImage: string;
  url: string;
  content: string;
  publishedAt: string;
  id: string | undefined;
  name: string;
  source: string;
}
const App = () => {
  const [newsData, setNewsData] = useState<News[]>([]);
  // console.log(newsData);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d2fdb20c08d6416eaef68ca1b3b6ac3f"
      )
      .then((res) => res.data)
      .then((data) => {
        setNewsData(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <img className="logo" src="/newsLogo.jpg" alt="" />
      <Routes>
        <Route path="/" element={<Home newsData={newsData} />} />
        <Route path="/:newsId" element={<NewsPage newsData={newsData} />} />
        <Route
          path="/news-component"
          element={
            <NewsComponent
              title={"title"}
              author={"author"}
              description={"description"}
              urlToImage={"urlToImage"}
              content={"content"}
              url={"url"}
              name={"name"}
              publishedAt={"publishedAt"}
              source={"source"}
              id={"id"}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;

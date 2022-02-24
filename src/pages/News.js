import {React, useContext} from "react";
import UserContext from "../context/UserContext";
import NewsContext from "../context/NewsContext";
import NewsCard from "../components/NewsCard";

const News = () => {
  const {
    currentUser,
    faves,
    trades,
    assets,
  } = useContext(UserContext);

  const {
    news
  } = useContext(NewsContext);

  
// console.log(news)
  
  return (
    <>
      {news.map((story) => (
      <NewsCard title={story.title} content={story.content} />
      ))}
      
    </>
  );
};

export default News;

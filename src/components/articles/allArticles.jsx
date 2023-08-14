import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Article from "./article";
import myArticles from "../../data/articles";


const AllArticles = () => {
  return (
    <div className="articles-wrapper">
      {myArticles.map((article, index) => (
        <div className="articles-article">
          <Article
            key={(index + 1).toString()}
            date={article.date}
            title={article.title}
            description={article.description}
            link={article.link}
          />
        </div>
      ))}
    </div>
  );
};

export default AllArticles;